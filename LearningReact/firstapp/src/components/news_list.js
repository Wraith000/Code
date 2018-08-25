import React from 'react'

import NewsItem from '../components/news_list_item'
const NewsList = (props) => {
    const items = props.news.map((item)=>{
        return(
            <NewsItem news={item} key={item.id}/>
        )
    })
    return(
        <div>
            {items}
        </div>
    )
}

export default NewsList;