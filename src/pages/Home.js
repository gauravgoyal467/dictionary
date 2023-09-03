import React,{useState} from 'react'
import Content from '../components/Content';
import { useDispatch} from 'react-redux';
import {addSearchValue} from '../redux/actions/SearchAction'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const[word,setWord]=useState("");
    const[result,setResult]=useState("");
    const[error,setError]=useState("");
    const message="Sorry pal, we couldn't find definitions for the word you were looking for ,You can try to search again with correct spell or head to the web instead."
    const dispatch=useDispatch();
    const currentWord=useLocation().state ?? "";
    console.log(currentWord);

    function handleClick(){
        setError("");
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response=>{
            if(response.ok){
               dispatch(addSearchValue(word));
               return response.json()
            }else{ 
                setError(message);
            }
        })
        .then(data=>setResult(data))
        .catch(err=>console.log("Fetch error :",err));
    }

    return (
    <div>
        <div className="searchBar">
            <input type="text" onChange={(e)=>setWord(e.target.value)}/>
            <button onClick={handleClick}>Search</button>
        </div>
        {result!==undefined && result!=="" ?
            (
                <Content result={result}/>
            ):
            (
              <div className='err'>
                 {error}
              </div>
            ) 
        }       
    </div>
  )
}

export default Home