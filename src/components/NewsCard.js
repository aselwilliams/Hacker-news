import React from "react";


function NewsCard({ el, handleDelete,showUserInfo }) {
  



  return (
    <div key={el.objectID} className="underline">
      <h3>{el.title}</h3>
      <p>Author:<span onClick={()=>showUserInfo(el.author)}>{el.author}</span> </p>
      <button onClick={() => handleDelete(el.objectID)} className="exit">
        X
      </button>
    </div>
  );
}

export default NewsCard;
