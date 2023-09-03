import React from 'react'
import { useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const History = () => {
  const historyList = useSelector((state) => state.searchValues);
  console.log(historyList);
  const Navigate=useNavigate();

  function handleListClick(index){
      Navigate("/",{state: historyList[index] });
  }

  return (
    <div className='history'>
      <h2>Search History</h2>
      <ul>
        {
        historyList.map((element,index)=>(
          <li key={index} onClick={()=>handleListClick(index)}>{element}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default History