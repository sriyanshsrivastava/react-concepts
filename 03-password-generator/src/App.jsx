import { useState,useCallback, useEffect,useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]= useState(false);
  const [characterAllowed,setCharacterAllowed]= useState(false);
  const [password, setPassword]=useState("");

  const passwordGenerator= useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str +="!@#$%^&*(){}[]_-=+~`"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass)

  },[length,numberAllowed,characterAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])

  // useRef Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select() //selection highlight of selected text
    window.navigator.clipboard.writeText(password)
  },[password])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800 h-fit duration-200'>
        <h1 className='text-white text-center my-3 text-xl font-bold'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 bg-amber-100 font-bold' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick= {copyPasswordToClipboard} className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer font-bold uppercase hover:bg-blue-700 active:bg-blue-900 transition-all duration-200'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-4 justify-center'>
          <div className='flex items-center gap-x-2'>
            <input type="range" name="" id="" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"  id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} defaultChecked={numberAllowed} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"  id="characterInput" onChange={()=>{setCharacterAllowed((prev)=>!prev)}} defaultChecked={characterAllowed} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
