import React from 'react'

function Form({handleSubmit,handleInputChange}) {
  return (
    <form onSubmit={handleSubmit}>
        <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search hot news..."
        />
        <button type="submit" className="submit">
            Submit
        </button>
    </form>
  )
}

export default Form