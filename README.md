# EzLang -- The Easy Programing Language

EzLang 是一门简单、高效的语言, EzLang 希望通过简单易懂的语法给开发者提供良好的开发体验.

## 如何使用

可以先通过以下脚本安装编译环境.

```bash
# 安装 cmake llvm
brew install cmake llvm@14
# 安装依赖
npm i
```

目前只有词法和语法分析器开发完成.

语义检查、类型检查、LLVM IR 绑定 可能不会有了，作者快要寄了.

## 语法/语义

EzLang 支持 模块化、结构体、变量、函数、闭包…… 等等特性, 详细的 语法/语义设计 可以查看 [docs](docs/README.md)

## 进度

- [ ] 编译器
  - [x] lexer parser
  - [ ] 语义检查、类型推断与检查
  - [ ] LLVM IR 绑定
- [ ] vscode lsp 插件
- [ ] 包管理工具
