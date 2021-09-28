import nats from 'node-nats-streaming';

import { TickedCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222'
});

stan.on('connect', async () => {
  console.log('Published connected to NATS');

  const publisher = new TickedCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '1',
      title: 'title',
      price: 20,
      userId: '1',
    });
  } catch (err) {
    console.error(err);
  }
});
