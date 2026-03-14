# 动手学Linux运维

[本书在线阅读地址](https://linux-ops-tutorial.vercel.app)需要科学上网访问

这本书适合哪些人看
[如何成为一名黑客](https://translations.readthedocs.io/en/latest/index.html)  




包管理器
apt-get
apt

apt update

构建apt repo

iptables 防火墙
基于FTP与FTPS的文件上传服务
基于SMTP与POP3协议的邮件服务
简单发送邮件
```bash
apt update
apt install mailutils -y
echo "服务器CPU过高" | mail -s "监控告警" test@example.com
```
构建收发复杂邮件服务，iRedMail自动化邮件系统
DHCP
DNS服务
NFS服务
Samba服务
Nas
NTP时间同步服务 chrosy
Seafile网盘服务
Jumpserver堡垒机

Linux系统调优 系统最大打开文件数 65535
Linux性能分析
GPU 运维
传统监控 Zabbix

中间件的部署和应用
负载均衡 LVS、Nginx、OpenResty、HAproxy
应用服务器 Tomcat(GC、连接池)、Jboss
高可用 Keepalived
数据库 MySQL PostgreSQL、MongoDB
缓存 Redis
消息队列 Kafka RabbitMQ
RPC框架 gRPC

LAMP架构的WordPress Web部署
LNMP架构Web部署


AWS 经典三层架构

容器技术 docker，容器镜像构建dockerfile,容器编排 docker-compose, 容器镜像仓库 Harbor
云原生 
IC(基础设施即代码工具) Terraform
kubernetes的部署与应用，Helm 包管理，Rancher可视化管理平台，KubeSphere云原生应用平台
基于GitOps理念的CICD工具链构建， Gitlab->Jenkins->Harbor->ArgoCD->Kubernetes集群
日志收集ELK Elasticsearch Logstash Kibana  
EFK
APM 链路追踪工具：SkyWalking Pinpoint
云原生监控 Prometheus( Alertmanager告警组件) 监控数据可视化平台 Grafana Loki 
虚拟化技术：KVM、VMware
分布式存储 Ceph
数据仓库 Doris的部署
大数据组件部署与维护 Hadoop、Hive、Hbase、Zookeeper、Flink、Spark、Jstrom、HDFS

安全  常见Web安全漏洞 OWASP Top 10
漏洞扫描

Python
基础数据结构
基础算法
C
C++
Linux 系统编程
Linux 网络编程
操作系统
Go
Lua
自动化工具 Ansible Saltstack Puppet Chef
Jaeger
Zipkin

openstack






本节扩展资源
1. 《UNIX传奇》：[https://book.douban.com/subject/35292726/](https://book.douban.com/subject/35292726/)
2. 《天才的拓荒者:冯·诺伊曼传》：[https://book.douban.com/subject/3464889/](https://book.douban.com/subject/3464889/])

## Lab1 基于虚拟机安装RedHat

1. 浏览器访问[阿里镜像源](https://mirrors.aliyun.com/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-2009.iso)下载CentOS-7-x86_64-DVD-2009.iso文件
2. 安装VMware
3. 安装配置(磁盘分区、root密码、选择安装)
4. 安装SSH连接软件，[Xshell](https://www.xshell.com/zh/free-for-home-school/)
5. 连接CentOS7 的bash环境

## Lab2 基于云服务器安装Ubuntu 22.04
1. 点击[阿里云](https://www.aliyun.com/)进入网页控制台
2. 注册登录
3. 按需使用
4. ECS
5. 弹性IP
6. 安全组


本章仅教学日常工作高频使用的Linux命令行基础命令，更多详见man手册和tldr
