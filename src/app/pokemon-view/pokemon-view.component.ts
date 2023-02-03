import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { ProductosService } from '../productos.service';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-mi-carrito-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
  misPokemonLista:any;
  misPokemon:any;
  private  usuarioLogueado:Boolean = true

  constructor(private adminUsuario:UsuariosService,private http:HttpDataService){
  }

  ngOnInit(): void {
    let aux:any[]=[]
    for(let a = 1 ;a<10;a++){
      this.http.getPokemonById(a).subscribe(pokemon =>{
        //this.misPokemon.push(pokemon);
        console.log(pokemon)

        aux.push(  {
          name:pokemon.name,
          status:pokemon.name,
          species:pokemon.name,
          type:pokemon.types[0].name,
          id:pokemon.order,
          image:pokemon.order
        });
      })
    }
    this.misPokemon = aux;
  }

}
