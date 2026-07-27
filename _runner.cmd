@echo off
setlocal enabledelayedexpansion

echo(
echo ========================================
echo   OpenWorker Source Launcher
echo   %date% %time%
echo ========================================
echo(

:: ---------- config ----------
set "WORK_DIR=F:\openworker-workspace"
set "SERVER_PORT=8765"
:: ---------------------------

:: ---------- check prerequisites ----------
echo [1/5] Checking environment...

where python >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python not found. Install Python 3.10+
    exit /b 1
)
python --version
echo   Python OK

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Install Node 20+
    exit /b 1
)
node --version
echo   Node OK

where rustc >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Rust not found. Install from https://rustup.rs
    exit /b 1
)
rustc --version
echo   Rust OK

:: ---------- python venv ----------
echo(
echo [2/5] Setting up Python venv...

if not exist ".venv\Scripts\python.exe" (
    echo   Creating .venv ...
    python -m venv .venv
    if !errorlevel! neq 0 (
        echo [ERROR] Failed to create venv
        exit /b 1
    )
    echo   Installing Python packages ^(may take a few minutes^)...
    .venv\Scripts\python.exe -m pip install --quiet --upgrade pip
    .venv\Scripts\pip install -e ".[messaging,dev]"
    if !errorlevel! neq 0 (
        echo [ERROR] pip install failed
        exit /b 1
    )
    echo   Python env ready
) else (
    echo   .venv already exists, skipping
)

:: ---------- work dir ----------
echo(
echo [3/5] Preparing work directory...
if not exist "%WORK_DIR%" mkdir "%WORK_DIR%"
echo   Work dir: %WORK_DIR%

:: ---------- npm install ----------
echo(
echo [4/5] Checking frontend dependencies...
if not exist "surfaces\gui\node_modules" (
    echo   Running npm install ^(may take a few minutes^)...
    pushd surfaces\gui
    call npm install
    popd
    if !errorlevel! neq 0 (
        echo [ERROR] npm install failed
        exit /b 1
    )
    echo   Frontend deps ready
) else (
    echo   node_modules exists, skipping
)

:: ---------- launch ----------
echo(
echo [5/5] Launching...

:: Start server in a new cmd window
start "OpenWorker-Server" cmd /k "cd /d "%cd%" && title OpenWorker Server && ".venv\Scripts\openworker-server.exe" --cwd "%WORK_DIR%" --port %SERVER_PORT% 2>&1"

:: Wait for server to be ready
echo   Waiting for server ^(port %SERVER_PORT%^)...
set /a COUNT=0
:waitloop
ping -n 2 127.0.0.1 >nul
set /a COUNT+=1

:: Check server health (try curl, fallback to powershell)
curl -s -o nul http://localhost:%SERVER_PORT%/health 2>nul
if !errorlevel! equ 0 goto ready
powershell -Command "try { (Invoke-WebRequest -Uri http://localhost:%SERVER_PORT%/health -TimeoutSec 2).StatusCode } catch { exit 1 }" >nul 2>&1
if !errorlevel! equ 0 goto ready

if !COUNT! geq 30 goto timeout
goto waitloop

:timeout
echo   [WARN] Server health check timed out after 30 attempts, launching UI anyway...

:ready
echo   Server ready at http://localhost:%SERVER_PORT%

:: Start Vite dev server
echo   Starting UI at http://localhost:1420 ...
pushd "%~dp0surfaces\gui"
start "" http://localhost:1420
call npm run dev
popd

echo(
echo OpenWorker exited.
exit /b 0
