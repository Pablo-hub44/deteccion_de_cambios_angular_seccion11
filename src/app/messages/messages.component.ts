import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {
  //messages = signal<string[]>([]);

  /**
   * 
   */
  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  /**
   * 
   * @param message ya no los usamos para ejecutar el evento, sino que usamos el service
   */
  // onAddMessage(message: string) {
  //   this.messages.update((oldMessages) => [...oldMessages, message]);
  // }
}
