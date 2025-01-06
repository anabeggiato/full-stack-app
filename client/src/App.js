import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => { //login to run immediately when the page renders
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data)
    })
  }, []) //list of states which will trigger like the function to run again

  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
         return <div className='post'>
          <div className='title'> {value.title} </div>
          <div className='body'> {value.postText} </div>
          <div className='footer'> {value.username} </div>
         </div>;
      })}
    </div>
  );
}

export default App;
