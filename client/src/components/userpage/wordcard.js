import { useState, useEffect } from 'react'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function WordCard({ id, aword, setCurrentUser, currentUser, handleDelete }) {
  const { name, definition, example, author, written_on } = aword

  const [tags, setTags] = useState([]);
  // const [isHover, setIshover] = useState(false);
  


  // useEffect((id) => {
  //   fetch(`/userwords/5/tags`)
  //     .then((r) => r.json())
  //     .then(data => setTags(data)) 
  //       // console.log("I am being called", data)
  // }, [])

  // console.log(tags)

  function addTag (e) {
      console.log(e.target.value, e.key)
      if (e.key === "Enter"){
        if (e.target.value.length > 0)
        {setTags ([...tags, e.target.value])
        e.target.value =''
      }}
  }


  function removeTag (removedTag) {
      const newTags = tags.filter(tag => tag !== removedTag)
      setTags(newTags)
  }


  


  return (

    <Box>
      <div>
      <ul>
          <div style={{ display: 'flex', justifyContent: "space-between"}}>
            <h4 style={{fontFamily: 'Kavoon, cursive' }}>{name}</h4>
            <button style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)}>delete</button>
      </div>
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
              {tag}<span onClick={() => removeTag(tag)} style={span}>x</span>
                </div>)
                })
          }
          <input style={tagIn} onKeyDown={addTag}/>
       </div>
      </div>
    </Box>
 
 )
}



//STYLE





const Box = styled.div`
 transition: box-shadow 0.5s;
  width: 85%;
  text-align: left;
  font-family: Arial;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  background: #f5ffe3;
  padding: 5px;
  border-width: 2px;
  border-color:rgba(22, 33, 33, 1);
  display: grid;
  &:hover {
     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);
  }
}
`

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