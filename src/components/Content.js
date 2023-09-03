import React from 'react'

const Content = ({result}) => {
  return (
    <div>
        {
        result.map((element,index)=>(
            <div className='resultSet' key={index}>
                <h2>{element.word}</h2>
                <p>{element.phonetic}</p>
                <div className="sound">
                { element.phonetics.map((item,index)=>(
                        <div key={index}>
                            <audio controls>
                                <source src={item.audio} type="audio/mp3"/>
                            </audio>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
                </div>
                <div className="definition">
                    { element.meanings.map((item,index)=>(
                        <div className='part' key={index} >
                            <h3>{item.partOfSpeech}</h3>
                            {item.definitions.map((def,index)=>(
                                <div key={index}>
                                    <li>{def.definition}</li>
                                </div>
                            ))
                            } 
                        </div>
                    ))
                }
                </div>
            </div>
        ))
    }
    </div> 
  )
}

export default Content