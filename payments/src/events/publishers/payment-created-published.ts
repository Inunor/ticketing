import { 
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from '@baktickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
