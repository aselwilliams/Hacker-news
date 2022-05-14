import React from 'react'

const NewsFeed = ({handleDelete,news}) => {
  return (
    <div>
           <>
        {news.map((el)=>{
            
          return (
            <div key={el.objectID} className='underline'>
              <h3>{el.title}</h3>
              <p>Author: {el.author}</p>
              <button onClick={()=>handleDelete(el.objectID)} className='exit'>X</button>
            </div>
          )
        })}
      </> 
    </div>
  )
}

export default NewsFeed