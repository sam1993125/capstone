import React from 'react'

function Form() {

  function handleSubmit(){

  }

  return (
    <div>
      <h2>Add Words</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="word"
          placeholder="Word"
          // onChange={(e) => (e.target.value)}
        />
        <input
          type="text"
          name="definition"
          placeholder="Definition"
          // onChange={(e) => (e.target.value)}
        />
        <input
          type="text"
          name="example"
          placeholder="Example"
          // onChange={(e) => (e.target.value)}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          // value={year}
          // onChange={(e) => (e.target.value)}
        />
        <input
          type="date"
          name="written_on"
          placeholder="Written On"
          // onChange={(e) => (e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default Form