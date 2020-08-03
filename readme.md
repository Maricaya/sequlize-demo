# Sequelize demo
docker 创建 mysql
```bash
# 创建 mysql
docker run --name mysql1 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.7.27
# 进入 mysql1
docker exec -it mysql1 bash
# mysql 中创建 database 
create database fang;
# 运行 test.js 创建数据
```

Squalize 会帮助我们处理 SQL 语句。