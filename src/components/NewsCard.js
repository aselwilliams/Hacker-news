import React from 'react'

function NewsCard({el,handleDelete}) {
  return (
    <div key={el.objectID} className='underline'>
        <h3>{el.title}</h3>
        <p>Author: {el.author}</p>
        <button onClick={()=>handleDelete(el.objectID)} className='exit'>X</button>
    </div>
  )
}

export default NewsCard
