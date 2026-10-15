# Copyable Prompts

Replace bracketed values before use. Each prompt is intended to be pasted directly into a coding agent.

## Product

### Product positioning

```text
请帮我做一个产品定位分析。我想做一款【排班/日程/记账】类 App，目标用户是【护士、保安、工厂倒班工人】。
请按以下结构输出，不要写空话，结论要可执行：
1. 一句话定位
2. 3 个最痛的问题
3. 核心价值主张
4. 与现有竞品的 3 个差异点
5. 首版必须做 / 首版明确不做
6. 如果目标是个人开发者独立上架，最大的 3 个风险
```

### Competitive research

```text
我要做【排班日历 App】。请帮我做竞品调研，分别列出 iOS、Android、鸿蒙三个平台上最接近的产品。
对每个竞品：产品名、目标用户、核心功能、付费方式、主要优点、主要缺点、截图或界面风格印象。
最后给我一张表格，总结“我们可以在哪里做得明显更好”。
重点关注：审美、无广告、离线可用、桌面组件/万能卡片、提醒能力。
```

### PRD

```text
请基于以下信息写一份 PRD，语言简洁、决策明确，适合交给 AI 作为后续开发的唯一需求基准。
产品：【APP_NAME，倒班排班日历】
用户：【护士、保安、工厂倒班工人】
核心功能：【循环排班、手动改班、自定义班次、月历、工时统计、节假日标注、桌面卡片、提醒、深浅皮肤、备份恢复】
平台：【HarmonyOS NEXT 原生 ArkTS/ArkUI，无服务端】
商业模式：【v1 免费完整可用，Pro 一次性买断】
请包含：定位、用户与痛点、价值主张、设计原则、P0/P1/P2 功能、页面结构、数据模型、非功能需求、里程碑、开放问题。
请明确写出“不做服务端、节假日不参与排班判断、免费版不阉割”这类边界决策。
```

### Pro plan

```text
我的 App【APP_NAME】免费版已经功能完整，希望增加一次性买断的 Pro。
请输出 Pro 方案，包含：免费/Pro 边界、Pro 功能、明确不做、定价、应用内购买路径、卸载重装恢复买断权益、解锁机制。
要求：不要把“好不好用”锁进 Pro，只卖省时间和算钱的能力；工具类用户对订阅抵触，优先一次性买断。
```

### AGENTS.md

```text
请为我的项目写一份 AGENTS.md，作为 AI 和开发者共同遵守的协作规则。
项目：【APP_NAME，HarmonyOS NEXT 原生 App】
真实工程目录：【YOUR_PROJECT_DIR\PROJECT_NAME】
技术栈：【ArkTS / ArkUI，Stage 模型，无第三方依赖】
请包含：项目定位、目录约定、技术栈、核心原则、命名规范、开发注意事项、新会话接手前必读文件和必跑命令。
```

## Environment

### Build/install script

```text
请为 HarmonyOS NEXT 工程写一个 PowerShell 脚本，名字叫 build-install.ps1。
要求：
1. 参数：-Device 默认 127.0.0.1:5555，-SkipBuild，-NoStart
2. 自动设置 DEVECO_SDK_HOME、JAVA_HOME、PATH
3. 用 hvigorw.js 编译 entry 模块主包
4. 判断 BUILD FAILED 或产物不存在时打印错误并退出码 1
5. 用 hdc 安装 -r
6. 安装成功后 aa start 启动
7. 所有关键步骤打印“ok”
工程路径 YOUR_PROJECT_DIR\PROJECT_NAME，bundle YOUR_BUNDLE_ID，DevEco 路径 C:\Program Files\Huawei\DevEco Studio。
```

### Test runner

```text
请为 HarmonyOS 的 Hypium 测试写一个 PowerShell 一键脚本 run-tests.ps1。
要求：
1. 编译 entry@ohosTest 的测试 HAP
2. 安装到 -Device 指定的设备
3. 用 aa test -b YOUR_BUNDLE_ID -m entry_test -s unittest OpenHarmonyTestRunner -s timeout 120000 运行
4. 从输出解析 OHOS_REPORT_RESULT 里的 Tests run / Failure / Error / Pass
5. 有失败时打印失败用例，并返回退出码 1；全部通过返回 0
6. 支持 -Class 只跑某一组用例
```

### devecocli evaluation

```text
我在 DevEco Studio 之外用命令行开发 HarmonyOS NEXT。
请说明 devecocli 和直接调用 hvigorw.js 的区别，并给出使用建议。
已知：本机 DevEco Studio 26.0.0，Node 24。
我想知道：适合的 build/run/log/device list/docs search 场景、仍应保留 hvigor 的场景、安装注意事项、是否有截图命令。
```

## Design

### Design system

```text
请为【APP_NAME】生成一份设计系统说明，HarmonyOS NEXT ArkUI 用。
要求：浅色/深色两套颜色 token，圆角/间距/字号/字重 token，组件规范，功能色只用绿 #10B981、琥珀 #F59E0B、靛蓝 #6366F1、石板 #94A3B8。
设计原则：米白画布 + 纯白卡片 + 纯黑焦点卡，大圆角，大留白，审美替代。
输出成 Markdown，字段可直接映射到 resources/base/element/color.json 和 resources/dark/element/color.json。
```

### Motion spec

```text
请为我的 App 写一份《动效与交互规范》，要求可执行、可验收。
核心原则：空间连续、克制、反馈优先。
请给出时长 token、曲线 token、按元素类型用法表、禁止事项、验收方式、项目当前落地进度记录位。
```

### Icon system

```text
我要为 HarmonyOS App【APP_NAME】准备图标。
请输出：分层图标尺寸和圆角要求、商店图标尺寸清单、Python/Pillow 合成脚本、PowerShell 资源复制方案。
图标主题：日历 + 三色班次条，风格简洁，不要拟物。
```

## Core development

### Scheduling core

```text
我要在 HarmonyOS NEXT 的 ArkTS 工程里实现排班内核，代码放在 entry/src/main/ets/core/shift/ShiftModel.ets。
数据模型：ShiftType、CycleSeg(起始日+循环序列+范围)、Override。
规则：规则按起始日升序，同一天起始只保留后写的一条；某天归属“起始日期不晚于它的最后一条规则”，再套范围；起点之前/范围之外留白；手动覆盖永远优先。
要求：提供 segIndexAt / segKindAt / resolvedKind / spanDaysOf，逻辑放 core 不依赖 UI，同时写 Hypium 单测覆盖边界和迁移。
```

### Persistence

```text
请为APP_NAME实现 ConfigStore.ets，负责本地持久化和 UI 镜像同步。
要求：数据存 preferences；所有“要记住”的值都要 load/save 成对；PersistentStorage 键读写前先 persistProp；启动时用磁盘补镜像，绝不反向写盘；保存时刷新桌面卡片。
同时处理：types、segments、overrides、holidayMarks、dark、reminderOn。
```

### Tabs skeleton

```text
请基于APP_NAME的设计系统实现四个 tab 的页面骨架：日历 / 班次 / 统计 / 我的。
要求：Stage 模型，Main.ets 使用 Tabs；先只做布局和导航；使用 @State / @StorageLink；装饰图标加 enableAnalyzer(false).draggable(false)；设计 token 放 core/theme。
```

### Rule list

```text
把APP_NAME原来的“单条循环班次”升级为“排班规则列表”。
新增 Cycle.ets 和 CycleEdit.ets；老数据自动迁移；备份格式增加 segments 但老备份可导入；规则按起始日倒序展示。
先扩展 ShiftModel，再写页面，最后补单测。
```

### Statistics

```text
请实现APP_NAME统计页 Stats.ets 和 ShiftStats.ets。
需要：本月/本年、每日/每月工时图、按班次类型、当前连续、最长连续、休息天数、夜间班次数、节假日出勤。
跨天班次时长计算正确；统计逻辑放 core；图表动画按设计 token 400-500ms 错峰。
```

### Backup/restore

```text
请为APP_NAME实现备份导出和导入恢复。
要求：导出 JSON 格式带 app/version/types/segments/overrides/holidayMarks/dark；使用系统文件选择器；默认文件名“APP_NAME备份_日期.json”；导入前二次确认；高版本备份拒绝导入；导入后强制同步日历提醒。
```

### Privacy onboarding

```text
请为APP_NAME实现首次启动隐私告知流程。
要求：同意之前不联网、不申请权限；弹窗有查看隐私政策和暂不同意；暂不同意二次确认后退出；隐私政策用应用内原生页面；政策版本号 PRIVACY_VERSION；我的页展示版本号/主体/联系方式/备案号/隐私政策/权限说明/清除全部数据。
```

## Platform features

### Desktop card

```text
请为 HarmonyOS NEXT App【APP_NAME】实现桌面万能卡片。
要求：支持 2×4 和 2×2 两套布局；2×2 实际宽度 130-160vp，单独设计；显示绝对时间不显示倒计时；跟随系统深浅色；数据从 ConfigStore 读；长文本 maxLines(1)+省略；我的页提供添加卡片入口。
```

### Calendar reminder

```text
请把APP_NAME的班次提醒改成写入系统日历。
要求：创建本地账户“APP_NAME排班”，CalendarType.LOCAL；只申请 READ_CALENDAR / WRITE_CALENDAR；写未来约 4 周排班；提醒时刻已过去不补提醒；同步串行化；清除数据删除日程和账户；导入备份后强制同步。
```

### Platform capability evaluation

```text
我在做一个 8-12 小时轮班的排班 App，考虑接入鸿蒙实况窗。
请先查/解释平台规范，再回答：生命周期限制、整班倒计时是否合规、不做后台常驻能否可靠更新、与桌面卡片的增量价值、是否申请该开放能力。
```

## Testing

### Core tests

```text
请为 ShiftModel.test.ets 补 Hypium 用例，覆盖：范围边界、分段规则接管、范围结束后留白不回退、同天起始只留后写、手动覆盖优先、老数据迁移等价、解析容错、跨天班次、提醒触发时间、新旧格式兼容。
测试只依赖 core，不依赖 UI。
```

### Layered debugging

```text
ArkUI 里出现“数据是对的、日志是对的，但界面不刷新”的问题。
请按分层排除法给出排查步骤：存储层 -> 模型层 -> 渲染层，最后给可能修复。
背景：手动标记存在模块级普通 Map 里，UI 直接读这个 Map。
```

### Pixel verification

```text
我有一张鸿蒙模拟器截图，想验证统计图柱状图的刻度中心与柱子中心是否对齐。
请写一个 Python/Pillow 脚本：读图、找到刻度线或柱子边缘、计算横向偏差、输出每个柱子的偏差像素。
```

## Store and filing

### Icon generation

```text
请为 HarmonyOS App【APP_NAME】生成商店图标所需素材。
主题：极简日历 + 三条班次色带。
要求：分层 background/foreground；生成 1024/512/216/144/72 五档方形满幅 PNG；前景留安全边距；说明同步到 AppScope 和 entry；输出 Python/Pillow 脚本。
```

### Screenshot/promo pipeline

```text
请写一个 Python/Pillow 脚本，把 App 截图批量加工成上架素材。
输入 7 张 1280×2832 截图；输出 7 张 1260×2844 商店截图和 7 张 1080×1920 宣传图。
要求重绘状态栏、统一时间 9:41、手机框、圆角、阴影、前置摄像头；坐标参数集中可改。
```

### Store copy

```text
请为【APP_NAME】写应用市场文案，用于华为 AGC。
产品：倒班排班日历 + 工时统计，HarmonyOS NEXT 原生，无广告，数据本地存储。
请输出：应用名称、三句一句话简介、详情介绍、v1.0.0 更新说明、搜索关键词、分类与年龄分级。
要求不写空话，卖点具体。
```

### Privacy policy

```text
请为【APP_NAME】写一份隐私政策，用于应用内原生页面和华为 AGC。
关键事实：不注册、不收集不上传个人信息；数据仅本机；应用不联网、无服务端、无第三方 SDK、无广告；只申请振动、日历读写；开启提醒后写入系统日历本地账户；主体和邮箱。
请包含：不收集信息、本机数据、不联网说明、权限说明、存储安全、未成年人、权利、更新、联系方式。
```

### AGC privacy form

```text
请把上面的APP_NAME隐私政策，转换成华为 AGC「生成协议工具」的逐项填写建议。
要求：明确哪些不勾选、哪些整段替换；权限只填振动和日历；检查全文不得出现网络请求/CDN/位置/通讯录/设备标识/第三方 SDK；与应用内和官网一致。
```

### Filing checklist

```text
我要把一个 HarmonyOS 原生 App【APP_NAME】上架到华为应用市场。
请帮我整理《上架准备清单》，按“必须先定 -> 要做的开发 -> 要准备的素材 -> 已验证无需改动 -> 上线后做”排列。
背景：企业主体已实名；无服务端；数据全部本地；节假日纯本地；服务器阿里云；包名 YOUR_BUNDLE_ID。
请特别写清网站备案、App 备案、公安备案、发布证书、签名、版权信息、内容分级。
```

### Server deployment

```text
请为我的静态官网写两个服务器脚本：deploy_site.sh 和 nginx_setup.sh。
要求：安装 nginx/git；root YOUR_WEB_ROOT；server_name 支持域名和 IP；静态资源缓存 30 天；sudo 适合 Ubuntu 24.04；输出 HTTP 状态码验证。
```

### Release build

```text
请为 HarmonyOS 工程写 build-release.ps1。
要求：设置 DevEco 环境变量；用 hvigorw.js --mode project -p product=release -p buildMode=release assembleApp 编译；产物 build\outputs\release\PROJECT_NAME-release-signed.app；失败退出码 1；打印路径/大小/时间；脚本里不写签名口令。
```

### Launch checklist

```text
请为APP_NAME生成一份“应用发布后待办清单”。
背景：免费版 v1 已准备好，备案审核中，官网已部署，提醒走系统日历。
请区分：等备案下号后必须做、上架后优化、下一版 Pro 范围、需要真机复验的风险点。
```
