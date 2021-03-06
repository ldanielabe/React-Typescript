import { useReducer } from 'react';
import { Counter } from './Counter';

const initialState={
    counter:0
}

type ActionType = | {type: 'incrementar'}
                  | {type: 'decrementar'}
                  | {type: 'custom', payload: number}

const counterReducer = (state: typeof initialState, action: ActionType) =>{

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                counter: state.counter+1,
            }
        case 'decrementar':
            return {
                ...state,
                counter: state.counter-1,
            }
        case 'custom':
            return {
                ...state,
                counter: action.payload,
            }
    
        default:
            return state
    }
}

export const CounterRed = () => {

    // const [counterState, dispatch] = useReducer(counterReducer, initialState);
    // Destructuro counterState
    const [{counter}, dispatch] = useReducer(counterReducer, initialState);

  return(
  <>
    <h4>Counter: {counter}</h4>

    <button 
    className='btn btn-outline-primary' 
    onClick={()=> dispatch({type: 'incrementar'})}>
        +1
    </button>

    <button 
    className='btn btn-outline-primary' 
    onClick={()=> dispatch({type: 'decrementar'})}>
        -1
    </button>

    <button 
    className='btn btn-outline-danger' 
    onClick={()=> dispatch({type: 'custom', payload: 100})}>
        100
    </button>

  </>);
};
