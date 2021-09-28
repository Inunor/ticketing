import { 
  Publisher, 
  OrderCancelledEvent, 
  Subjects 
} from '@baktickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
