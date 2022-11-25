import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: "Jhonnatan",
    favoritos: [
      { id: 1, nombre: 'Horizon Zero Dawn'},
      { id: 2, nombre: 'Call of Duty Modern Warfare 2'},
    ]
  }

  guardar(){
    console.log("Formulario Posteado")
  }

}
