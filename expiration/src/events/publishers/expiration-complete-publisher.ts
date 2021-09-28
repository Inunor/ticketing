import { 
  Subjects, 
  Publisher, 
  ExpirationCompleteEvent
} from '@baktickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
