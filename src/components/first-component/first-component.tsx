import * as React from 'react';
import { State } from '../../state/state';
import { Actions } from '../../actions/actions';

interface Props {state: State, actions: Actions};
export const firstComponent = ({state, actions}: Props) => {
    return (
        <div>
            <h1>{state.greeting}</h1>
            <button onClick={ () => actions.helloWorld() }>say hello</button>
        </div>
    );
}
