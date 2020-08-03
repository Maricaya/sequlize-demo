const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('fang', 'root', '123456', {
  dialect: 'mysql'
});
// 创建 User 模型
class User extends Model {}
// 初始化 User
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });


// // 同步到数据库
// sequelize.sync()
// // 创建一条记录
//   .then(() => User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   }))
//   .then(jane => {
//     console.log(jane.toJSON());
//   });

// 查询数据库
async function run () {
  // 删除
  User.destroy({
    where: {
      id: 1
    }
  })
  // 查
  const users = await User.findAll();
  console.log(JSON.stringify(users))
  sequelize.close()
}
// 查
run()
