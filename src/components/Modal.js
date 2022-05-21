import React from "react";

function Modal({ userInfo,closeModal }) {
  console.log(userInfo);
  return (
    <div className="flex-btn">
      <div>
        <p><strong>User:</strong> {userInfo.username} </p>
        <p><strong>Created:</strong> {userInfo.created_at} </p>
        <p><strong>Karma:</strong> {userInfo.karma}</p>
        <p><strong>About:</strong> {userInfo.about} </p>
      </div>
      <div>
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

export default Modal;
