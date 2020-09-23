const EventEmitter = require('events');

module.exports = class Observer extends EventEmitter {
  constructor(tasks) {
    super();

    this.tasks = tasks;
    this.done = 0;

    this.start = this.start.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  start() {
    this.tasks.forEach((t, i) => t(() => this.doneTask(i + 1)));
  }

  doneTask(i) {
    this.done++;
    this.emit('done', `Task ${i} done!`);

    this.done === this.tasks.length && this.emit('all:done', 'All done!');
  }
};