---
title: 'lichee'
description: 'lichee 一个运行 javascript 脚本的小工具'
meta:
  - name: 'lichee'
    content: super duper SEO
---

<div align=center><img src="./lichee.png" width="100" height="100"></div>

# lichee 一个运行 javascript 脚本的小工具

有效的获取lichee有两种方式，通过下载源码编译出二进制或着直接直接下载二进制文件

- 下载源代码并且进行编译

::: warning
下载源代码编译需要提前安装 `git` `golang` 环境

`git`工具用于获取代码和代码管理

因为 `lichee` 采用 `golang` 语言进行编写，所以在编译时需要对应的 `golang` 编译环境

`go mod` 中使用的 `golang` 版本是 `1.18` 建议安装 `1.18` 或以上版本

注：如果是开发人员建议可以安装 `golang` 的版本管理工具 `g` 便于对 `golang` 版本的切换
:::

1. 执行以下代码获取源代码

```bash
git clone https://github.com/issueye/lichee.git
```

2. 进入到项目目录下

::: tip
这里小编的开发环境是 `windows` 对应的编译脚本是 `bat` 的，如有开发能力的可以自行参照脚本修改为对应的操作系统脚本
:::

3. 编译对应操作操作系统下的二进制文件，即可获取对应系统的二进制文件

```bash
build-windows.bat

build-linux.bat
```