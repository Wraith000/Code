import React from 'react'

const NewsItem = (props) =>{
    
return(
    
    <div>
            <h3>{props.news.title}</h3>
            <h4>{props.news.body}</h4>
    </div>
    )
}

export default NewsItem