import {useState} from 'react'
import { css } from '@emotion/react';

function WordCard({ id, aword, setCurrentUser, currentUser, handleDelete }) {
  const { name, definition, example, author, written_on } = aword

  const [tags, setTags] = useState([])


  const addTag = (e) => {
      console.log(e.target.value, e.key)
      if (e.key === "Enter"){
        if (e.target.value.length > 0)
        {setTags ([...tags, e.target.value])
        e.target.value =''
      }}
  }


  const removeTag = removedTag => {
      const newTags = tags.filter(tag => tag !== removedTag)
      setTags(newTags)
  }

  return (

    <div style={style}>
      <div>
      <ul>
        <h4>{name}</h4>
        <button onClick={() => handleDelete(id)}>delete</button>
        <p>{definition.replace(/\[|\]|"/g, "")}</p>
        <p>{example.replace(/\[|\]|"/g, "")}</p>
        <p>{author}</p>
        <p>{written_on}</p>
      </ul>
      </div>
      <div style={app}>
        <div style={tagCon}>
          {tags.map((tag, index) => {  
            return (<div key={index} style={tagin}>
                  {tag}<span onClick={()=>removeTag(tag)} style={span}>x</span>
                </div>)
                })
          }
          <input style={tagIn} onKeyDown={addTag}/>
       </div>
      </div>
    </div>
 
 )
}

//STYLE

const style = {
  textAlign: 'left',
  fontFamily: 'Arial',
  backgroundColor: "#f5ffe3",
  fontSize: "20px",
  border: '1px solid gray',
  borderRadius: '5px',
  marginRight: "40px",
  marginBottom: "30px",
  border: "1px solid",
  padding: "5px",
  boxShadow: " 3px 3px"

}

const app = {
 fontFamily: 'Arial',
 textAlign: 'center',

}

const tagCon = {
 midWidth: '50%',
  display: 'flex',
  flexWrap: "wrap",
  height: '50px', 
  minHeight: '20px', 
  margin: "30px",
  border: '1px solid gray', 
  borderRadius :'5px', 
  padding: "10px",
  boxShadow: " 3px 3px"

}

const tagin = {
  display: "flex",
  padding: "5px",
  border: '1px solid gray',
  borderRadius: '5px',
  height: '40px',
  alignItem: "center",
  backgroundColor: "#f5ffe3",
  marginRight: '5px',
  margin: '2px 5px 2px 0px',
  boxShadow: " 3px 3px"
}

const tagIn = { 
  border: 'none',
  flex: 1,
  backgroundColor: "#f5ffe3",
  outline: 'none', 
  padding: 5,
}

const span = {
  marginLeft: "5px", 
  cursor: 'pointer',
  textAlign: 'center',
  
}



export default WordCard