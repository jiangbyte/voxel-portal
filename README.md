# Voxel Portal

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Supported-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Ant Design](https://img.shields.io/badge/UI-Ant%20Design-0170FE?logo=antdesign&logoColor=white)
![License](https://img.shields.io/badge/License-Apache_2.0-blue)
![Version](https://img.shields.io/badge/version-1.0.0--beta-orange)

**Voxel Portal** 是门户 Web 前端：基于 React 19 与 Ant Design，对接 **PORTAL** 账号体系（`/api/v1/portal/*`）。开发期通过环境变量切换 API 代理，即可对接 Java / Go / Python 任一门户后端。

## 目录

- [功能特性](#功能特性)
- [界面预览](#界面预览)
- [技术栈](#技术栈)
- [工程结构](#工程结构)
- [快速开始](#快速开始)
- [默认账号](#默认账号)
- [License](#license)

## 功能特性

API 前缀统一为 `/api/v1/portal/*`：

| 模块 | 说明 |
| --- | --- |
| 认证与会话 | 登录 / 注册 / 找回与重置密码；Cookie 会话（可关，仅 Header）；可配置三方登录 |
| 门户首页 | Banner 轮播、欢迎卡片、最新公告摘要与快捷入口 |
| 公告中心 | 公告列表（置顶、分页）、公告详情 |
| 意见反馈 | 在线提交反馈、查看处理进度 |
| 个人资料 | 公开资料、头像上传、昵称与个性签名 |
| 实名认证 | 分步填写与证件上传、认证结果展示 |
| 消息与日志 | 我的消息、我的登录日志 |
| 访问与安全 | 密码、手机号、邮箱、三方账号绑定 |
| 账号管理 | 账号注销（冷静期说明与确认） |
| 站点信息 | 页脚版权与备案（支持本地兜底文案） |

## 界面预览

### 门户首页

<table>
  <tr>
    <td><img src="docs/images/home.png" alt="门户首页" /></td>
  </tr>
  <tr>
    <td align="center">门户首页</td>
  </tr>
</table>

### 公告中心

<table>
  <tr>
    <td width="50%"><img src="docs/images/announcements.png" alt="公告列表" /></td>
    <td width="50%"><img src="docs/images/announcement-detail.png" alt="公告详情" /></td>
  </tr>
  <tr>
    <td align="center">公告列表</td>
    <td align="center">公告详情</td>
  </tr>
</table>

### 个人中心

<table>
  <tr>
    <td width="50%"><img src="docs/images/profile-basic.png" alt="公开资料" /></td>
    <td width="50%"><img src="docs/images/profile-identity.png" alt="实名认证" /></td>
  </tr>
  <tr>
    <td align="center">公开资料</td>
    <td align="center">实名认证</td>
  </tr>
  <tr>
    <td width="50%"><img src="docs/images/profile-login-log.png" alt="我的登录日志" /></td>
    <td width="50%"><img src="docs/images/profile-cancel.png" alt="账号注销" /></td>
  </tr>
  <tr>
    <td align="center">我的登录日志</td>
    <td align="center">账号注销</td>
  </tr>
</table>

## 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | React 19 · Vite · TypeScript |
| UI | Ant Design 6 · UnoCSS · Iconify |
| 状态与路由 | Zustand · React Router |
| 网络 | axios（Cookie 会话，开发期走 Vite 代理） |
| 其他 | ESLint · Prettier |

主题 token：[`src/theme/tokens.ts`](src/theme/tokens.ts)。

## 工程结构

```text
voxel-portal/
├── docs/images/
├── nginx/
└── src/
    ├── api/
    ├── components/
    ├── layouts/
    ├── pages/       # auth / home / announcements / feedback / usercenter
    ├── router/
    ├── stores/
    ├── theme/
    └── utils/
```

## 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 本地运行

建议先启动门户后端（默认 `8001`；也可代理到 `8101` / `8201`）：

```bash
pnpm install
pnpm dev
```

开发地址：http://127.0.0.1:5174

环境变量见 [`.env.example`](.env.example)：

| 变量 | 说明 | 默认 |
| --- | --- | --- |
| `VITE_APP_TITLE` | 站点标题 | `Voxel` |
| `VITE_PORT` | 开发端口 | `5174` |
| `VITE_HOME_PATH` | 登录后首页 | `/` |
| `VITE_API_URL` | API 基址；留空走同源 `/api` | 空 |
| `VITE_API_PROXY_TARGET` | Vite 代理目标 | `http://127.0.0.1:8001` |

对接 FastAPI / Gin 门户时，将代理目标改为 `8101` / `8201`。

### 常用命令

```bash
pnpm dev          # 本地开发
pnpm build        # 类型检查 + 构建
pnpm preview
pnpm lint && pnpm format
```

### Docker

```bash
docker build -t voxel-portal .
docker run -d \
  -e BACKEND_URL="http://host.docker.internal:8001" \
  -p 8082:80 \
  voxel-portal
```

容器内 nginx 监听 **80**。

## 默认账号

| 端 | 地址 | 账号 | 密码 |
| --- | --- | --- | --- |
| Portal | http://127.0.0.1:5174 | `user` | `123456` |

以对接后端库内种子为准。仅供本地演示。

## License

本项目基于 [Apache License 2.0](LICENSE) 开源。完整条款见 [LICENSE](LICENSE)。
