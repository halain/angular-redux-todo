import { createReducer, on } from "@ngrx/store"
import { Todo } from './models/todo.model'
import * as actions from './todos.actions'


const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a tanos'),
    new Todo('Comprar traje ironman'),
    new Todo('Robar escudo de capitan america')
]

const _todoReducer = createReducer(
    initialState,
    
    on(actions.crear, (state, {texto}) => [...state, new Todo(texto) ] ),
    
    on(actions.toggle, (state, {id}) => {
        return state.map( (todo) =>{
            if (todo.id === id){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else {
                return todo;
            }
        });
    }),

    on(actions.editar, (state, {id, texto}) => {
        return state.map( (todo) =>{
            if (todo.id === id){
                return {
                    ...todo,
                    texto
                }
            }else {
                return todo;
            }
        });
    }),

    on(actions.borrar, (state, {id}) => {
        return state.filter( todo=> todo.id !== id);
    }),

    on(actions.toggleAll, (state, {completado}) => {
        return state.map( (todo) =>{
                return {
                    ...todo,
                    completado
                }
            });
    }),

    on(actions.limpiar, (state) => {
        return state.filter( (todo) => !todo.completado);
    }),

)

export const todoReducer = (state, action) => {
    return _todoReducer(state,action);
}