
import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MesaggesService } from '../../services/mesagges.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
})
export class NewMessageComponent {
  // add = output<string>(); //evento de salida signal

  //inyeccion de dependencia
  private mesageService = inject(MesaggesService);
  //sin signal
  enteredText = ''; // signal(''); <--con signal

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());//ya no usado , usamos el servuce

    this.mesageService.addMessage(this.enteredText); //con () si usaramos signal

    this.enteredText = '';//si usaramos signal set('')
  }
}
