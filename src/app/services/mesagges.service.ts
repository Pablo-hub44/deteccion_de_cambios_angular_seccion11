import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesaggesService {
  //usando rxjs
  messages$ = new BehaviorSubject<string[]>([])


  constructor() { }

  //private messages = signal<string[]>([]); con signal

  //*sin signal
  private messages: string[] = [];

  // allMessages = this.messages.asReadonly();

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    // con signal
    //this.messages.update((prevMessages) => [...prevMessages, message]);

    //*sin signal
    this.messages = [...this.messages, message]//creamos una copia de mensajes y agregamos el nuevo mensaje

    this.messages$.next(this.messages)//.next permite emitir un nuevo valor  y vamos a emitir los mensajes
  }
}
