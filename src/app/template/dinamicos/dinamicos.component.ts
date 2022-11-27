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

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: "Jhonnatan",
    favoritos: [
      { id: 1, nombre: 'Horizon Zero Dawn'},
      { id: 2, nombre: 'Call of Duty Modern Warfare 2'},
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = { 
      id : this.persona.favoritos.length,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar( index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar(){
    console.log("Formulario Posteado")
  }

}
