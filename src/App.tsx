import Main from "./pages";
import './App.css'
import { useEffect, useState } from "react";
function App() {

const [title, setTitle] = useState("")
const [loading, setLoading] = useState(false)

useEffect(() => {
  const fetchRandom = async () => {
setLoading(true)
try {
  const response = await fetch(
    "http://43.201.83.196/words"
  )
  const data = await response.json()
  const words = data.data
  const randomIndex = Math.floor(
    Math.random() * words.length
  )
  const randomWord = words [randomIndex]
  setTitle(randomWord)
  setLoading(false)
} catch (error) {
  console.error("!!!!!!", error);
  setLoading(false)
  
}

  }
fetchRandom()
}, [])
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
