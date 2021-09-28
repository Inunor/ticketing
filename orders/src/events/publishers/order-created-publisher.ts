import { 
  Publisher, 
  OrderCreatedEvent, 
  Subjects 
} from '@baktickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
