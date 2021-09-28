import { 
  Publisher, 
  Subjects,
  TicketCreatedEvent,
} from '@baktickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
