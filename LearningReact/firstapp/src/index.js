import React from 'react';
import ReactDom from 'react-dom';

//Components
import Header from './components/Header'

const App = () => {
    return (
        <h1>Hello World!!! <Header/></h1>
    )
}

const App2 = () => {
    return React.createElement('h1',{className:'MyClass'},'Hello world')
}
ReactDom.render(<App/>,document.querySelector('#root'))
//ReactDom.render(<App2/>,document.querySelector('#root'))