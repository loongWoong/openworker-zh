# OpenWorker

**[openworker.com](https://openworker.com)** · [下载](#下载) · [Issues](https://github.com/andrewyng/openworker/issues)

> **Beta** - OpenWorker 处于公开测试阶段：功能完整可用，自动更新，我们正在积极打磨粗糙之处。欢迎提交 [Issues](https://github.com/andrewyng/openworker/issues)。

**帮你完成日常工作的 AI。** OpenWorker 是一个开源的 AI 同事，常驻你的桌面，交付的是**完成的工作**而不仅仅是聊天：一份打磨好的文档、一条带数据的 Slack 回复、更新好的日历、清理完毕的收件箱。

它运行在你的本机上，不锁定任何模型：自带 OpenAI、Anthropic、Google 或开源模型的 API Key，或者通过 Ollama 完全本地运行。你的数据只通过你选择的模型和集成离开本机。

[![OpenWorker 工作原理](docs/assets/how-it-works.png)](https://openworker.com)

## 下载

[**⬇ macOS (Apple Silicon)**](https://download.openworker.com/mac)
<sub>macOS 12+ · 已签名且公证 · 自动更新</sub>

[**⬇ Windows 10/11 (x64)**](https://download.openworker.com/windows)
<sub>构建包尚未代码签名，SmartScreen 会弹出警告；签名正在进行中</sub>

打开应用，添加模型密钥（或指向 Ollama），然后要一份实际的成果。

## 工作原理

1. 告诉 OpenWorker 你想要的结果——"准备一份客户简报""理清我的日历""起草一份报告""看看发布在 Jira 和 GitHub 上的进展如何"。
2. 它将任务拆解为步骤，跨越你的桌面、文件和已连接的应用协同工作。
3. 任何重要操作之前——发送消息、修改日历、运行命令——它都会先询问你，由你批准或调整方向。
4. 你得到的是最终交付物，而不是待办清单。

内部架构:

```text
┌────────────────────────────────────────────────┐
│              OpenWorker 桌面应用               │  原生外壳 + GUI
├────────────────────────────────────────────────┤
│           本地代理服务器 (Python)              │  引擎 · 工具 · 连接器 — 基于 aisuite
├───────────────┬────────────────┬───────────────┤
│   你的文件     │    你的工具     │   你的模型    │  一切用你的密钥、
│   和终端       │  25+ 连接器    │   任意提供商   │  在你的机器上运行
└───────────────┴────────────────┴───────────────┘
```

## 能做什么

- **产出真实的交付物** - 文档、电子表格、报告和网页以文件形式落地，可直接打开和分享。
- **在 Slack 中工作** - 在频道中 @OpenWorker；会话在你的桌面上打开，工作使用你的工具完成，结果以线程回复的形式返回。
- **使用你的日常工具** - 25+ 集成，包括 GitHub、Slack、Jira、Notion、Linear、HubSpot、Outlook、monday.com、Gmail 和 Google 日历，外加你的**终端和本地文件**。任何可通过 [MCP](https://modelcontextprotocol.io/) 访问的工具也能接入，支持逐工具控制。
- **按计划运行** - 自动化重复工作：早间简报、周报、频道持续监控。运行结果在应用中以完整记录形式呈现。
- **行动前先询问** - 写入、发送和 Shell 命令需要审批。无人值守运行将请求放入收件箱等待处理，而非自行执行。

## 自带模型

模型的选择权在你手中：挑选一个提供商，粘贴你的密钥，随时切换。开箱即用支持：

**OpenAI · Anthropic · Google Gemini · Inkling (Thinking Machines) · GLM (智谱) · DeepSeek · Kimi (月之暗面) · Qwen (通义千问) · MiniMax · Mistral · Grok (xAI)** —— 此外还有通过 **Together** 和 **Fireworks** 使用开源模型，以及通过 **Ollama** 完全本地运行。

精选模型列表标记了我们已验证可用于工具调用的模型。添加任意模型字符串也可使用，但风险自负。

## 隐私

OpenWorker 是本地优先的。一切都在你的机器上：代理循环、对话记录、连接器令牌和模型密钥——都在应用的本地安全存储中。唯一的云端组件是一个为连接器代理 OAuth 握手的小型服务。你始终可以不登录使用应用——通过手动创建的凭据/API 密钥使用连接器。

## 从源码运行

前置条件：Python 3.10+、Node 20+，以及（桌面外壳需要）通过 [rustup](https://rustup.rs/) 安装的 Rust 工具链。

```shell
git clone https://github.com/andrewyng/openworker
cd openworker

# 1. 一次性初始化 - 在 .venv 创建 Python 虚拟环境
#    （在 Windows 上，请从 Git Bash 或 WSL 运行）
bash packaging/setup_dev_env.sh

# 2. 启动本地代理服务器
.venv/bin/openworker-server --cwd ~/some/project --port 8765
#    （Windows: .venv\Scripts\openworker-server.exe）

# 3. 在第二个终端中启动 UI
cd surfaces/gui
npm install
npm run dev        # 浏览器 UI，运行在 Vite 开发端口上
```

如需运行完整的桌面应用而非浏览器 UI，将第 3 步替换为 `npm run tauri dev`（在 `surfaces/gui/` 下）——Tauri 外壳会启动窗口并自行管理服务器。

测试：`.venv/bin/pytest`（服务端），在 `surfaces/gui` 中执行 `npm test` 和 `npm run e2e`（GUI 单元测试 + 封闭端到端测试）。桌面安装包通过 `packaging/build_dmg.sh` / `packaging/build_windows.ps1` 构建。

## 仓库结构

| 目录 | 内容 |
|---|---|
| `coworker/` | Python 后端——代理引擎、模型提供商、连接器、MCP 客户端、记忆、自动化 |
| `surfaces/gui/` | 桌面应用——React UI + 管理服务器的 Tauri 外壳 |
| `stt/` | 语音转文字边车（Rust），用于语音输入 |
| `packaging/` | 安装构建（macOS DMG、Windows）、自动更新清单、开发引导 |
| `docs/` | 设计规范和决策记录 |
| `tests/` | 后端测试套件 |

## 基于 aisuite 构建

OpenWorker 的引擎构建在 [**aisuite**](https://github.com/andrewyng/aisuite) 之上——一个轻量级 Python 库，提供跨 LLM 提供商的统一聊天补全 API，以及带工具、工具包和 MCP 支持的代理层。如果你想构建自己的代理框架而非使用我们的，可以从那里开始；本仓库是 aisuite 能承载什么的实际参考。

OpenWorker 最初在 aisuite 仓库内开发，后来迁移到自己的仓库；感谢 aisuite 贡献者们构建的基础。

## 贡献

欢迎提交贡献和 Bug 报告——在 [Issues](https://github.com/andrewyng/openworker/issues) 中提出或发起 Pull Request。应用会自动更新，因此修复能快速触达安装。
对于任何 PR，请附上截图展示修复前后的问题与效果。我们即将开放可供贡献的功能。
请注意，我们正根据内部列表和目标积极开发，因此我们可能不会批准那些添加已在开发中的功能或偏离我们愿景的 PR。

## 许可

MIT - 详见 [LICENSE](LICENSE)。
