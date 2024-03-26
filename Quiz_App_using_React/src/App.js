//import logo from './logo.svg';
import React, { useState } from 'react';
import { data } from './Data';
import { arr } from './Data';
import './App.css';
import Result from './Result';

function App() {
  const [y, oclick] = useState(0);
  const [x, qclick] = useState(0);
  const [z, scr] = useState(false);
  const func = () => {
    if(y === data[x - 1]['ans'])
    {
      arr[x - 1] = 1;
    }
    else
    {
      arr[x - 1] = 0;
    }
  }

  const sub = () => {
    scr(true);
  }

  return (
    <>
      <div id='bdy'>
        <div className='txt'>Quiz form</div>
        <div className='cont'>
          {
            z ? (
            <>
              <Result ar = {arr}/>
            </>        
            ):(
            <>
            {
              data.map((qu, i) => {
                return (
                  <label  key={i}>
                    <div className='qus'>
                      {1 + i}. {qu.q} <br></br>
                    </div>
                    <div className='option-container'>
                      {
                        qu.op.map((op, j) => {
                          return (
                            <button className='btn' key={j} onClick={() => {oclick(j + 1);qclick(i + 1);}}>
                              {j + 1}. {op}
                            </button>
                          )
                        }
                        )
                      }
                      <input onClick={func}  className='btn1' type='button' value={"Save"}></input>
                    </div>
                  </label>
                )
              })
            }
            <input onClick={sub} className='btn2' type='button' value={"Submit"}></input>
            </>)
          }
        </div>
      </div>
    </>
  );
}

export default App;