const schedule = require('node-schedule');

// 定义处理程序函数
function handler() {
  console.log('执行每日定时任务');
  // 在这里编写你的逻辑代码
}

// 安排每天13:30执行任务
exports.handler = () => {
  schedule.scheduleJob('40 13 * * *', handler);
};
