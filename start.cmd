@echo off
setlocal enabledelayedexpansion
set "LOG=%~dp0log.log"
set "ROOT=%~dp0"

:: Run the worker script, capture all output to log.log
call "%ROOT%_runner.cmd" > "%LOG%" 2>&1
set "EXITCODE=%errorlevel%"

:: Show the log
echo.
echo ========================================
echo   Log output (also saved to log.log):
echo ========================================
type "%LOG%"

echo.
if %EXITCODE% neq 0 (
    echo [FAILED] Script exited with code %EXITCODE%. See log.log for details.
) else (
    echo [DONE] Check log.log for full output.
)
pause
exit /b %EXITCODE%
