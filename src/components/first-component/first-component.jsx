import * as React from 'react';

export const firstComponent = ({state, actions}) => {
    return (
        <div>
            <h1>{state.greeting}</h1>
            <button onClick={ () => actions.helloWorld(state, actions) }>say hello</button>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}
