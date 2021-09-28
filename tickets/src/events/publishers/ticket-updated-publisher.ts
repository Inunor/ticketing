import { 
  Publisher, 
  Subjects,
  TicketUpdatedEvent,
} from '@baktickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
