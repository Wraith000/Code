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
    render(){
        return (
            <header>
                <div style={MystyleObject.Header}>Logo</div>
                <input style={MystyleObject.Logo} className="input" type="text"/>
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