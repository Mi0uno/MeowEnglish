# MeowEnglish

**一个把单词、句子翻译和键盘输入练习合在一起的英语学习工具。**

MeowEnglish 借鉴了 qwerty-learner 的即时输入反馈体验，也吸收了 earthworm 通过中文提示练英文表达的训练思路。它不是单纯背单词，而是让学习者看到中文意思后，用键盘完整输入英文答案，逐字获得正确/错误反馈。

![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=flat-square)
![Express](https://img.shields.io/badge/Express-5.2-222?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-0f80cc?style=flat-square)

## 功能特性

- 单词、句子、混合三种练习模式。
- 中文提示输入英文答案，支持逐字正确/错误状态反馈。
- 内置学习资料选择：日常基础、四级、六级、考研、雅思等。
- 错题本模式，自动收集做错过的单词和句子。
- 登录、注册和 Cookie 会话。
- SQLite 持久化用户、学习进度、练习记录、资源和上传历史。
- 后台学习统计：用户、课程、题目、练习次数、平均正确率、趋势图和课程活跃度。
- 学习资料导入、编辑、删除和公开设置。
- 资源商店：用户公开资源后，其他用户可以下载到自己的学习资料中。
- 快捷键：`Ctrl + Enter` 显示答案。

## 技术栈

| 模块 | 技术 |
| --- | --- |
| 前端 | React 18、TypeScript、Vite、lucide-react |
| 后端 | Express 5、TypeScript、tsx |
| 数据库 | SQLite、better-sqlite3 |
| 校验 | zod |
| 样式 | 原生 CSS、响应式布局 |

## 快速开始

### 前置要求

| 工具 | 建议版本 | 检查命令 |
| --- | --- | --- |
| Node.js | 18+ | `node -v` |
| npm | 9+ | `npm -v` |

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

默认访问地址：

- 前端：`http://localhost:5173`
- 后端：`http://localhost:5174`
- 健康检查：`http://localhost:5174/api/health`

### 构建生产版本

```bash
npm run build
```

## 登录与权限

首次注册的用户会自动成为 `admin`，后续注册用户默认是 `student`。

登录后点击右上角用户名，可以进入后台或退出登录。管理员可以看到学习统计和全局导入历史；普通用户也可以管理自己的资源和访问资源商店。

## 数据库

项目默认使用 SQLite，数据库文件会自动创建在：

```text
data/meowenglish.sqlite
```

可以通过环境变量修改数据库位置：

```bash
DB_PATH=./data/custom.sqlite npm run dev
```

后端端口也可以通过环境变量调整：

```bash
API_PORT=5180 npm run dev
```

## 学习资料格式

后台支持导入 JSON 格式的单词书/句子书。`items` 中每一项可以是 `word` 或 `sentence`。

```json
{
  "title": "我的单词书",
  "subtitle": "后台导入的自定义资源",
  "filename": "my-book.json",
  "isPublic": false,
  "items": [
    {
      "kind": "word",
      "promptZh": "坚持的；持续的",
      "answerEn": "persistent",
      "phonetic": "/per'sistent/",
      "note": "形容词，常见于 persistent practice。",
      "tags": ["custom", "word"]
    },
    {
      "kind": "sentence",
      "promptZh": "持续的练习会让翻译变得自然。",
      "answerEn": "Persistent practice makes translation feel natural.",
      "tags": ["custom", "sentence"]
    }
  ]
}
```

字段说明：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 学习资料名称 |
| `subtitle` | 否 | 学习资料简介 |
| `filename` | 否 | 上传来源文件名 |
| `isPublic` | 否 | 是否公开到资源商店 |
| `items[].kind` | 否 | `word` 或 `sentence`，默认 `word` |
| `items[].promptZh` | 是 | 中文提示 |
| `items[].answerEn` | 是 | 英文答案 |
| `items[].phonetic` | 否 | 音标 |
| `items[].note` | 否 | 备注 |
| `items[].tags` | 否 | 标签数组 |

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 同时启动前端和后端开发服务 |
| `npm run dev:web` | 只启动 Vite 前端 |
| `npm run dev:api` | 只启动 Express API |
| `npm run api` | 启动后端服务 |
| `npm run build` | TypeScript 检查并构建前端产物 |
| `npm run preview` | 预览构建产物 |

## 项目结构

```text
MeowEnglish/
├─ src/
│  ├─ App.tsx              # 主界面、练习流程、后台弹窗
│  ├─ api.ts               # 前端 API 客户端
│  ├─ data/courses.ts      # 内置学习资料
│  ├─ styles.css           # 页面样式与响应式布局
│  └─ types.ts             # 前端领域类型
├─ server/
│  ├─ index.ts             # Express 路由
│  ├─ db.ts                # SQLite schema、查询和种子数据
│  ├─ auth.ts              # 认证、会话和权限中间件
│  ├─ schemas.ts           # zod 请求校验
│  └─ types.ts             # 数据库类型
├─ data/                   # SQLite 数据目录
├─ index.html
├─ package.json
└─ vite.config.ts
```

## API 概览

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| `GET` | `/api/health` | 服务健康检查 |
| `GET` | `/api/auth/me` | 获取当前登录用户 |
| `POST` | `/api/auth/register` | 注册 |
| `POST` | `/api/auth/login` | 登录 |
| `POST` | `/api/auth/logout` | 退出登录 |
| `GET` | `/api/courses` | 获取可见学习资料 |
| `POST` | `/api/progress` | 保存学习进度 |
| `POST` | `/api/attempts` | 保存练习记录 |
| `GET` | `/api/wrong-book` | 获取错题本 |
| `GET` | `/api/resources` | 获取我的资源 |
| `POST` | `/api/resources/import` | 导入资源 |
| `PUT` | `/api/resources/:courseId` | 编辑资源 |
| `DELETE` | `/api/resources/:courseId` | 删除资源 |
| `GET` | `/api/resources/store` | 获取资源商店 |
| `POST` | `/api/resources/:courseId/download` | 下载公开资源 |
| `GET` | `/api/admin/stats` | 管理员统计 |
| `GET` | `/api/admin/imports` | 管理员导入历史 |

## 开发说明

- 内置资源会在数据库初始化时写入 `courses` 和 `practice_items`。
- 未登录时练习记录会保存在浏览器本地；登录后会同步保存到后端。
- 系统内置资源不可编辑或删除；用户导入/下载的资源可以管理。
- 公开资源不会自动进入其他用户列表，需要对方在资源商店中下载。

## 致谢

本项目的产品方向受到以下开源项目启发：

- [cuixiaorui/earthworm](https://github.com/cuixiaorui/earthworm)
- [RealKai42/qwerty-learner](https://github.com/RealKai42/qwerty-learner)

实现上请注意各项目许可证边界，不直接复制上游代码和词库数据。
