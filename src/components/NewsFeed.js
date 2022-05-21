import React from 'react';
import NewsCard from './NewsCard';

const NewsFeed = ({handleDelete,news,showUserInfo}) => {
  return (
    <div>
        {news.map((el)=>{ 
          return (
            <NewsCard el={el} handleDelete={handleDelete} showUserInfo={showUserInfo} />
          )
        })}
    </div>
  )
}

export default NewsFeed