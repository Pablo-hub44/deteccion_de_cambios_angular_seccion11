import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CounterComponent  implements OnInit{
  
  private zone = inject(NgZone);

  // count = signal(0);
  count = 0;

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  onDecrement() {
    //this.count.update((prevCount) => prevCount - 1); con signal
    this.count = this.count -1;
  }



  onIncrement() {
    //this.count.update((prevCount) => prevCount + 1);
    this.count = this.count +1;
  }

  ngOnInit() {
    setTimeout(() =>{
      // this.count.set(0);//le seteamos al contador a 0 en 4 seg, es un signal

      this.count = 0; //sin signal
    }, 4000);

    //enfocado de que se conoce como evitar la contaminacion zonal
    this.zone.runOutsideAngular(() =>{
      setTimeout(() =>{
        console.log('el timer expiro');
        }, 5000);
    })
  }
}
