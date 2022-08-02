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
  background-color: #f5ffe3;
  font-size: 10px;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
  }
`

const Input = styled.input`
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline - block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border - box;
`

const Container = styled.div`
      text-align: center;
      font-family: 'Roboto Condensed', sans-serif;
      background-color: #f5ffe3;
      font-size: 24px;
      border: '1px solid gray',
      borderRadius: '5px',
      marginRight: "28px",
      marginLeft: "28px",
      marginBottom: "30px",
      marginRight: "20px",
      marginLeft: "20px",
      marginBottom: "50px",
      padding: "5px",
      boxShadow: "3px 3px"
`



export default Form