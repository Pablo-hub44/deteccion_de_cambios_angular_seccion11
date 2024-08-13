import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MesaggesService } from '../../services/mesagges.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent  implements OnInit{
  // messages = input.required<string[]>(); //con signalahora lo conseguiremos del service
  
  
  private mesagesService = inject(MesaggesService)
  
  
  private change_ref = inject(ChangeDetectorRef);//*servicio proveido por angular, para volver s tener la deteccion de cambios ya que la pusimos en onPush
  
  messages: string[] = [];
  //messages = this.mesagesService.allMessages
  // get messages(){
  //   return this.mesagesService.allMessages
  // }
  
  //para limpiar la subscripcion
  private destroyRef = inject(DestroyRef);

  /**
   * nota: en los get no deberia haber metodos get que hagan tareas muy complejas
   */
  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output en la lista de mensajes';
    //return Math.random();  esto mandaria un menaje de error porque el prin+mer valor no corresponderia con el del segundo valor 
  }


  ngOnInit() {
    //nos subscribimos a una propiedad xd en rxjs
    const subscription = this.mesagesService.messages$.subscribe((messages)=>{
      this.messages = messages;//le asignamos los mensajes conseguidos y nuestra propiedad de aqui
      this.change_ref.markForCheck();
    });


    //una ves iniciada la subscripcion se tiene que limpiar porque no se limpia|clean sola
    this.destroyRef.onDestroy(()=>{
      subscription.unsubscribe();
    })
  }

    //otra forma en ves de usar subscripciones y todo lo de arriba , conseguimo los mensajes  se service y con sintaxis de rxjs la almacenamos
messages$ = this.mesagesService.messages$

}
