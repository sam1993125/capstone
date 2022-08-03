import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";
import styled from '@emotion/styled'

function Form({ id, currentUser }) {

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState();
  const [definition, setDefinition] = useState();
  const [example, setExample] = useState();
  const [author, setAuthor] = useState();
  const [writtenon, setWrittenon] = useState();
  const history = useHistory();


  function handleSubmit(e) {

    console.log({
      name: name,
      definition: definition,
      example: example,
      author: author,
      written_on: writtenon,
    })
    e.preventDefault();
    setIsLoading(true);
    fetch( `/users/${currentUser.id}/words`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        definition: definition,
        example: example,
        author: author,
        written_on: writtenon,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Container>
        <p style={{
          textAlign: 'center',
          fontFamily: 'Roboto Condensed',
          fontSize: '50px',
          textShadow: '5px 5px rgba(22, 33, 33, 0.2)'
        }}>Add Words</p>
        <form onSubmit={handleSubmit}>
          <p><Input
            type="text"
            name="word"
            placeholder="Word"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </p>
          <p>
            <Input
              type="text"
              name="definition"
              placeholder="Definition"
              value={definition}
              onChange={(e) => setDefinition(e.target.value)}
            />
          </p>
          <p>
            <Input
              type="text"
              name="example"
              placeholder="Example"
              value={example}
              onChange={(e) => setExample(e.target.value)}
            />
          </p>
          <p>
            <Input
              type="text"
              name="author"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </p>
          <p>
            <Input
              type="date"
              name="written_on"
              placeholder="Written On"
              value={writtenon}
              onChange={(e) => setWrittenon(e.target.value)}
            />
          </p>
          <Button type="submit">Add</Button>
        </form>
    </Container>
  )
}

const Button = styled.button`
  padding: 10px;
  margin:10px;
  background: rgba(1,138,159, 0.6);
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  color: white; 
  border-color :#f5ffe3;
  border-width: 1px;
  text-decroration: none;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  }
  @media screen and (max-width: 748px){
        text-align: center;
        margin-right: 0px;
        padding: 20px 0;
         &:hover {
     box-shadow: none
  }
    }
}
`

const Input = styled.input`
  width: 60%;
  padding: 12px 20px;
  size: 50px;
  margin: 8px 0;
  display: inline - block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border - box;
`

const Container = styled.div`
      border-radius: 20px;
  transition: box-shadow 1s;
  padding: 20px;
  background-color: #f5ffe3;
  box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  max-width: 600px;
  margin: 100px auto;
  padding: 5px;
  text-align: center;
  @media screen and (max-width: 748px){
      width: calc (100% - 2rem);
        margin: 20px;
        height: auto;
        width: auto;
    }

`



export default Form