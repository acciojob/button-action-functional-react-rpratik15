import React,{useState} from 'react'

function RenderPara() {

    const [show,setShow]=useState(false)
    const showHide=()=>
    {
        setShow((prevState) => !prevState )//
        
    }
    
  return (
    <>
        <button id="click" onClick={showHide}>Click</button>

        {show && ( <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}
      
        </>
  )
}

export default RenderPara