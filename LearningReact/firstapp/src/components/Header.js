import React from 'react'
import '../css/Importstyle.css'
var MystyleObject = {
    Header: {
        background:"grey",
        textAlign:"center"
    },
    Logo : {
        fontSize:"40px"
    }
}
class Header extends React.Component{

    InputChangeHandler()
    {
        console.log('Input changed')

    }
    render(){
        return (
            <header>
                <div 
                style={MystyleObject.Header}
                onClick={() => {console.log('I was clicked')}}
                >Logo</div>
                <input style={MystyleObject.Logo} onChange={this.InputChangeHandler} className="input" type="text"/>
            </header>
            )
    }
    
            
            
        
}
// const Header = () => {
// return <div>Header component - {GetDate()}</div>

// }
// const GetDate = () => {
//     var b = new Date()
//     return b.getFullYear();

// }

export default Header