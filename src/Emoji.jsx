import {useState} from 'react'

function Emoji() {
  const [mood, setMood] = useState(true)
  return(
    <>
    {mood ? "😊" : "😔"}
    <button onClick={() => setMood(!mood)}>Change Mood</button>
    </>
  )
}

export default Emoji;