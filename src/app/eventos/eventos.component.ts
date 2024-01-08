import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {




  public eventos: any = [
    {
    Tema: 'Angular',
    Local: 'Belo horizonte'
    },

    {
      Tema: '.net',
      Local: 'Brasilia'
      },

      {
        Tema: 'Angular e sua novidades',
        Local: 'Rio de janeiro'
        }

]

}


