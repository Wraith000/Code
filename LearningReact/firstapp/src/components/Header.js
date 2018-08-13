import React from 'react'
import '../css/Importstyle.css'
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
class Header extends React.Component{

    state = {
        Keywords : ""

    }
    InputChangeHandler = (event) => {
        this.setState({
            Keywords : event.target.value
        })
    }

    GetData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    
    render(){
        return (
            <div>
                <div 
                style={MystyleObject.Header}
                onClick={() => {console.log('I was clicked')}}
                >Logo</div>
                <input style={MystyleObject.Logo} onChange={this.InputChangeHandler.bind(this)} className="input" type="text"/>
                <div style={MystyleObject.Header}>{this.state.Keywords}</div>
            </div>
            )
    }
    
    componentDidMount(){
        this.GetData();
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