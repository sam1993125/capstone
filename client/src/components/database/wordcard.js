import React from 'react'

function WordCard({ aword, setCurrentUser, currentUser }) {
    //   const [like, setLike] = useState(true)
    const { word, definition, example, author, written_on } = aword

    //   function handleToggleClick (){

    // }

    return (
        <ul>
        <div style={{
                textAlign: 'left',
                fontFamily: 'Arial',
                backgroundColor: "#f5ffe3",
                fontSize: "24px",
                border: '1px solid gray',
                borderRadius: '5px',
                marginRight: "30px",
                marginBottom: "30px",
                // border: "1px solid",
                padding: "5px",
                boxShadow: " 3px 3px"

        }}>
                <h4>{word}</h4>
                <p>{definition}</p>
                <p>{example}</p>
                <p>{author}</p>
                <p>{written_on}</p>
            </div>
        </ul>
    )
}


export default WordCard