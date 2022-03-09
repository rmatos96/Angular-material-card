import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'atividade4';

  constructor(
    private snack:MatSnackBar
  ){}

  alertar():void{
    this.snack.open('Pacote Comprado', 'Fechar')
  }
}
