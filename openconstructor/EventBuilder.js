const { EventEmitter } = require('events');
const EventEmiter = require('events');

module.exports = class EventBuilder extends EventEmiter{
  constructor(executor) {
    super();

    const emit = this.emit.bind(this);

    this.emit = undefined;
    executor(emit);
  }
}