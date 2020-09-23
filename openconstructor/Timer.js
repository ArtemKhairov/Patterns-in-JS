const EventBuilder = require('./EventBuilder');

const timer = new EventBuilder((emit) => {
  let timerTickCount = 0;
  const i = setInterval(() => emit('tick', timerTickCount++), 1000);
})

module.exports = timer;