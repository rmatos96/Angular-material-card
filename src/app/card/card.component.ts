import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Output()
  EventClick: EventEmitter<any>=new EventEmitter<any>()

  emitirEvento():void{
    this.EventClick.emit()
  }
  
  @Input()
  primeiro:string=''
  @Input()
  segundo:string=''
  @Input()
  terceiro:string=''
  @Input()
  quarto:string=''
  @Input()
  quinto:string=''
  @Input()
  bg:string=''
  @Input()
  cor:string=''
  @Input()
  altura:string=''
}
