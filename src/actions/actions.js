const helloWorld = (fn) => (state, actions) => {
    actions.sayHi(state, actions);
    fn.updateState(
        'greeting',
        'hello world'
    )
}

const sayHi = (fn) => (state, actions) => {
    console.log('hi', state),
    actions.sayHiAgain()
}

const sayHiAgain = () => console.log('...hi')

export const actions = (fn) => ({
    helloWorld: helloWorld(fn),
    sayHi: sayHi(fn),
    sayHiAgain: sayHiAgain
});
