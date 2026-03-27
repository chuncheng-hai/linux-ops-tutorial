
# 第一章 Linux简介

## 1.1 Linux的前世今生

<div class="quiz-block" data-quiz-id="c1-1-history"></div>

> "你对于那个问题不能解决吗？那末，你就去调查那个问题的现状和它的历史吧！你完完全全调查明白了，你对那个问题就有解决的办法了。"——《反对本本主义》

尽管有些情景下Linux被认为是一个类UNIX操作系统(Unix-like OS)，但事实上Linux具体是指一个操作系统内核(kernel)。

贝尔实验室
GNU(GNU's Not Unix)
自由软件运动

发行版Debian/Ubuntu、RedHat/CentOS等才为一个OS。
Linux系统运维工程师日常接触的是RedHat/CentOS、Debian/Ubuntu、Kali等Linux发行版，其中CentOS7在业界占比较多，Ubuntu在学界使用较多(主要是进行机器学习计算)，所以从部署CentOS与Ubuntu系统开始学习Linux，是不错的入门方式。

林纳斯.托瓦兹(Linus Torvalds)发布 Linux 内核，后与 GNU 工具结合形成 GNU/Linux 系统。

谨慎选择学习内核，可阅读[我为何放弃 Linux 内核学习](https://happypeter.github.io/2012/06/17/learning-kernel.html)一文

[《UNIX传奇》](https://book.douban.com/subject/35292726/)

## 1.2 Linux的基础命令及其实践技巧  

<div class="quiz-block" data-quiz-id="c1-2-commands"></div>

Linux命令分为**内建命令**与**外部命令**两种。内建命令，由Shell本身提供，如echo命令。基于type命令，可以判断一条命令是内建命令还是外呼命令。如执行`type 'echo'`输出，执行`type 'mkdir'`输出

Linux命令格式为：命令名称 命令参数 命令对象
其中命令参数分为UNIX/POSIX风格，BSD风格，GNU风格三种
可移植操作系统接口(POSIX，)

cp
rsync
vim 编辑器 [《Vim实用技巧（第2版》](https://book.douban.com/subject/26967597/)

常用于调试打印(如验证环境变量是否成功加载)
日常运维实践示例

- 执行`echo $JAVA_HOME`验证JDK环境变量是否成功加载

简单文本操作
文件名不存在时创建文件，文件名存在时修改文件时间标志
touch 2025-08-26.log

如何确定上传到服务器的文件与本地文件是否为同一文件?
基于文件的md5值校验判断
md5sum 2025-08-26.log

文件的node

`echo $?`查看Linux系统命令返回码

输入输出流处理
`>` 符可以重定向输入输出流
日常运维实践示例

- 执行`>  access.log`清空文件内容但不删除文件

`$USER`
外部命令
查找命令路径
which
`which ls`

ps aux | grep 进程名称
ps aux | grep python3
PID

## 1.3 Linux的文件结构

<div class="quiz-block" data-quiz-id="c1-3-filesystem"></div>


Linux 基于[FHS(文件系统层次标准)](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)组织文件系统

```Markdown
/            # 一级层次根和整个文件系统层次结构的根目录
├── bin      # 必需的命令、二进制文件，在单用户模式下需要可用，为所有用户提供的基础命令。
├── boot     # 启动文件
├── dev      # 设备文件
├── etc      # 配置文件
├── home     # 用户目录
├── lib      # 系统库
├── tmp      # 临时文件
├── usr      # 用户程序
└── var      # 变化数据
```
文件约定

/etc/profile 系统级环境变量
/etc/fstab 永久挂载 mount -a
/var/log/message

一般在运维实践中还会创建以下目录

- `/data`
- `/app`
- `applog`

一切皆文件的理念与实践
可以`tail /etc/`

ls -ahl --color=auto
alias ll='ls -ahl'
mkdir -p 创建目录
cd
cd ..
cd ~ 切换到当前用户家目录

软链接
ln -s
硬链接
ln
mount -l
路径映射

权限管理
Linux的各个发行版都是多用户操作系统
useradd 增加用户，userdel删除用户
基于用户、用户组与其它进行权限管理
权限位
sudo提权组
chmod
chmod +x ./test.sh
chown
读取权限 r 4
写入权限 w 2
执行权限 x 1

执行chmod 777带来的便捷性，尤其是`chmod 777 -R /`这种糟糕命令
可以替换为chmod 755保证任何用户都拥有读取与执行的权限

**Lab** 在测试虚拟机先打快照，再执行chmod  -R 777 / 后新开xshell窗口测试ssh连接
cp -a
cp -n
tail -n 2000
tail -f 

vim
`wq`保存并退出
`q!`不保存强制退出
批量替换
wc -l 统计文件行数
du -sh 查询文件或目录大小
浏览大文件时禁止用vim
less
tail -n 2000

nohup
tmux

压缩
gzip
bzip
xz
zip
unzip
.tar.gz 
使用更现代的.tgz后缀
tar -zcvf  ROOT.tgz ./ROOT
tar -xf ROOT.tgz

网络管理
`ip addr`简化`ip a`
ip route show查看路由表
ip route add via
nslookup
ss
netstat
net-tools 包
tcpdump
nmcli dev status 

日常巡检
top 更现代的工具htop
free
df -h

系统管理
/etc/systemd/system/ `.service`后缀为systemd管理器单元配置文件
systemd
init进程 初始进程
systemctl deamon-reload
systemctl enable 服务名称 --now
systemctl start 服务名称 
systemctl status 服务名称 
systemctl stop 服务名称 

磁盘挂载
mount
路劲映射

文本处理三剑客
grep
^匹配开头 $匹配结尾
grep -e
grep -F 强制

sed流式编辑器
-n
-i.bak 备份文件并直接修改文件内容

awk
awk -F '@' '{print $NF}' 以@为分隔符，打印最后一列
`pip install grepexercises sedexercises awkexercises`安装TUI练习工具
命令行执行`grepexercises`进入练习control + n下一题，control + p上一题

网络工具
curl
wget
ping
ping -C
测试TCP端口：telnet 对端IP地址   对端IP的TCP端口
测试UDP端口nc -zvu 对端IP地址   对端IP的UDP端口
远程连接

直接 ssh IP地址使用默认用户root与默认端口22
ssh -P 222 用户名@IP地址
ssh -vvv
堡垒机jumpserver
ssh免密配置

## Linux的运行级别

<div class="quiz-block" data-quiz-id="c1-4-runlevel"></div>


## Linux下的软件安装

<div class="quiz-block" data-quiz-id="c1-5-install"></div>

依赖

操作系统包管理器安装
源码编译安装

编译构建.rpm与.deb安装包
根据.iso文件构建yum与apt本地仓库


脚本输出流处理
1
2

文件结束EOF



本节扩展资源
中文man手册：[https://github.com/man-pages-zh/manpages-zh](https://github.com/man-pages-zh/manpages-zh)
Linux101：[https://101.lug.ustc.edu.cn/](https://101.lug.ustc.edu.cn/)
tldr：[https://github.com/tldr-pages/tldr](https://github.com/tldr-pages/tldr])

