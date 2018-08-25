import React from 'react'
import '../css/Importstyle.css'


const MystyleObject = {
    Header: {
        background:"#AA5939",
        textAlign:"center",
        color:"#FFFFFF",
        paddingTop:30,
        
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

    // InputChangeHandler = function(event)
    // {
    //     this.setState({
    //         Keywords : event.target.value
    //     })
    // }
    
    
    render(){
        
        let Header2 =  {
            background:'',
            textAlign:"center",
            color:"#FFFFFF",
            paddingTop:30,
            paddingBottom:30
        }
        if(this.state.Keywords !== '')
        { Header2.background="#AA5939" }
        else
        { Header2.background="green" }
        return (
            <div>
                <div 
                style={MystyleObject.Header}
                onClick={() => {console.log('I was clicked')}}
                >Logo</div>
                <input style={MystyleObject.Logo} onChange={this.props.keyword} className="input" type="text"/>
                <div style={Header2}>{this.state.Keywords}</div>
                
            </div>
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