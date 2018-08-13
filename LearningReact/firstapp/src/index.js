import React from 'react';
import ReactDom from 'react-dom';

//Components
import Header from './components/Header'
var MystyleObject = {
    Header: {
        background:"#AA5939",
        textAlign:"center",
        color:"#FFFFFF",
        paddingTop:30,
        paddingBottom:30,
    },
    Logo : {
        fontSize:"40px"
    }
}
const App = () => {
    return (
        <h1 style={MystyleObject.Header}>Hello World!!! <Header/></h1>
    )
}

const App2 = () => {
    return React.createElement('h1',{className:'MyClass'},'Hello world')
}
ReactDom.render(<App/>,document.querySelector('#root'))
//ReactDom.render(<App2/>,document.querySelector('#root'))