import Main from "./pages";
import './App.css'
import { useEffect, useState } from "react";

const API_URL = "https://piccolo-server.vercel.app/words"
function App() {

const [title, setTitle] = useState<unknown>("")
const [loading, setLoading] = useState<boolean>(false)

useEffect(() => {
  const fetchRandom = async () => {
setLoading(true)
try {
  const response = await fetch(
    "https://piccolo-server.vercel.app/words"
  )
  const data = await response.json()
  console.log("data", data);
  
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

return {
  title,
  loading,
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
