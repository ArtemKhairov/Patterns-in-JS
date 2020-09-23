const Observer = require('./Observer');
const tasks = [
  (d) => setTimeout(d, 5000),
  (d) => setTimeout(d, 1000),
  (d) => setTimeout(d, 3000),
];

const Tasker = new Observer(tasks);
Tasker.start();

async function Process() {
  Tasker.on('done', console.info);

  const result = await new Promise(r => {
    Tasker.on('all:done', r);
  });

  setTimeout(() => console.log(result), 1000);
}

Process();