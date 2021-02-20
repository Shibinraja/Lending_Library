import './App.css';
import React from "react";
import axios from "axios";
import {Header , Footer , BodyCard} from '../src/Components/Container/Container'

export default function App() {
  
  const [data, setData] = React.useState([]);


  React.useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",{
      headers: {
        'Authorization': "token"
      }
    })  
    .then((res)=>{

      setData(...data , res.data.books)
    })
  },[])
  
  return (
    <div className="App">
      <Header/>
      <BodyCard books={data}/>
      <Footer/>
    </div>
  );
}

