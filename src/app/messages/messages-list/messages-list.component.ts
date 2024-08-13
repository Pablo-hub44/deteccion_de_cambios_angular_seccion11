import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { MesaggesService } from '../../services/mesagges.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  // messages = input.required<string[]>(); ahora lo conseguiremos del service

  
  private mesagesService = inject(MesaggesService)
  
  
  private change_ref = inject(ChangeDetectorRef);//*servicio proveido por angular, para volver s tener la deteccion de cambios ya que la pusimos en onPush

  //messages = this.mesagesService.allMessages
  get messages(){
    return this.mesagesService.allMessages
  }


  /**
   * no deberia haber metodos get que hagan tareas muy complejas
   */
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output en la lista de mensajes';
    //return Math.random();  esto mandaria un menaje de error porque el prin+mer valor no corresponderia con el del segundo valor 
  }
}
