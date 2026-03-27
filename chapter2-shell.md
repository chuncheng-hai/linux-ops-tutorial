# Shell脚本

Shell bash、fish、zsh

```bash
#!/usr/bin/env bash

echo "Hello,World!"

# 脚本返回执行码
exit 0
```

计算机语言分为编译型与解释型。bash脚本是解释型语言，开头第一行声明执行脚本的解释器


#!/usr/bin/env bash
#!/usr/bin/bash
#!/usr/bin/sh

脚本接收参数

安装Python
```bash
pip3 install tldr
type "tldr"
```
sh -n
set -x 开启bash的DEBUG模式，也可以在运行脚本时以参数的形式添加 sh -x 




## 分支结构

<div class="quiz-block" data-quiz-id="c2-1-branch"></div>

## 循环结构

<div class="quiz-block" data-quiz-id="c2-2-loop"></div>

for循环

while循环读取每行文件

```bash
while IFS= read -r line; do
    echo "${line}"
done < file
```
