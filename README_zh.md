# 代码风名片生成器

<div align="center">

[![pages-build-deployment](https://github.com/Dangks/code-style-contact-card/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Dangks/code-style-contact-card/actions/workflows/pages/pages-build-deployment)  
[English](README.md) | [中文](README_zh.md)

</div>

### 描述
一个基于网页的程序员专属名片生成器，可以将名片信息以各种编程语言格式展示，让你也能用代码生成独特的程序员风格名片。名片样式模仿流行的 IDE 代码显示效果，包含语法高亮。

### 效果预览
<div align="center">
    <img src="https://github.com/user-attachments/assets/7954edbd-0495-4ce1-b90e-c738e12296ba" alt="生成卡片预览" width="60%" />
</div>  

### 在线体验
[code-style-contact-card](https://dangks.github.io/code-style-contact-card/)

### 功能特点
- 支持多种编程语言格式：
  - JSON
  - YAML
  - XML
  - TypeScript
  - Python
  - Java
  - Go
  - Rust
- IDE 风格暗色主题显示
- 实时预览
- 缩放控制（50% - 200%）
- 导出高质量 PNG 图片
- 显示行号
- 语法高亮

### 使用方法
1. 填写个人信息：
   - 名片标题
   - 姓名
   - 职位
   - 电话
   - 邮箱
   - 链接
2. 选择代码格式
3. 点击"Save as Image"按钮导出图片

### 技术细节
- 纯前端实现
- 无外部依赖（除 html2canvas 外）
- 标准名片尺寸（ISO 7810 ID-1）：85.60 × 53.98 毫米
- 响应式设计

### 项目结构
```
code-style-contact-card/
├── index.html          # 主 HTML 文件
├── README.md          # 英文文档
├── README_zh.md       # 中文文档
└── src/
    ├── css/
    │   └── style.css      # 样式文件
    └── js/
        ├── cardGenerator.js    # 名片生成逻辑
        ├── exportCard.js       # 图片导出功能
        ├── html2canvas.min.js  # HTML转图片工具
        ├── main.js             # 主程序逻辑
        ├── zoomController.js   # 缩放功能
        └── formatters/         # 代码格式化器
            ├── jsonFormatter.js
            ├── xmlFormatter.js
            ├── yamlFormatter.js
            ├── tsFormatter.js
            ├── pyFormatter.js
            ├── javaFormatter.js
            ├── goFormatter.js
            └── rustFormatter.js
```
### 许可
[MIT License](LICENSE)

### 声明
- 项目开发过程使用了 AI 辅助工具 Claude 3.5
- 使用了第三方库：
  - html2canvas (v1.4.1): 用于将 HTML 内容转换为图片
- 灵感来源：VSCode 的代码编辑器界面样式

---
*注：本项目仅供娱乐，建议搭配正式名片一起使用*
