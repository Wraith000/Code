import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter,Route, Link } from 'react-router-dom'

//Components
import Header from './components/Header';
import NewsList from './components/news_list';
import JSON from './posts.json'
import Home from './components/Home';
import Page from './components/Page';

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
class App extends Component{
    state = {
        news: JSON,
        filter:[]
    }
    getKeyword = (event)=>
    {
        let keyword = event.target.value;
        let Filtered = this.state.news.filter((item)=>{ return item.title.indexOf(keyword) > -1})
        this.setState({
            filter: Filtered
        })

    }
    render(){
        
        return (
            
            <div>
            <BrowserRouter>
            <header>
                <Link to="/">Home</Link><br/>
                <Link to="/page">Page</Link>
                <div>
            <Route path="/" exact component={Home}/>
            <Route path="/page"  component={Page}/>
            </div>
            </header>
            
            </BrowserRouter>
            
            <h1 style={MystyleObject.Header}><Header keyword={this.getKeyword}/></h1>
            <NewsList news={this.state.filter.length === 0 ? this.state.news : this.state.filter}/>
            </div>
        )
    }
}
ReactDom.render(<App/>,document.querySelector('#root'))
