import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private subject = new Subject();

  constructor() {}

  setMessage(msg: any) {
    this.subject.next(msg);
  }

  getMessage() {
    return this.subject.asObservable();
  }
}
