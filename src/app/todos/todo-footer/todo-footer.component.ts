import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { limpiar } from '../todos.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes' ];

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filtro').subscribe( filtro => {
    //   this.filtroActual = filtro; 
    // });

    // this.store.select('todos').subscribe( todos => {
    //   this.pendientes = todos.filter(todo=> todo.completado === false).length;
      
    // })

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo=> !todo.completado).length;
    })

  }

  cambiarFiltro(filtro: filtrosValidos){

    this.store.dispatch( setFiltro({filtro}));

  }


  limpiar(){
    this.store.dispatch( limpiar());
  }

}
