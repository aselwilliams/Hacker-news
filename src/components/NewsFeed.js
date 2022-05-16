import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({handleDelete,news}) => {
  return (
    <div>
        {news.map((el)=>{ 
          return (
            <NewsCard el={el} handleDelete={handleDelete}/>
          )
        })}
    </div>
  )
}

export default NewsFeed