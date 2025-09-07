import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")
  const btnColors=["Red","Green","White","Olive","Lavender","Blue","Black"]

  return (
    <div className="h-screen w-full duration-500" style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-amber-50 px-3 py-2 rounded-full '>
          {btnColors.map(
            (btnColor,index)=>
              <button className='outline-none px-4 py-1 rounded-full shadow-md cursor-pointer w-16 h-8' 
            style={{backgroundColor:btnColor}} key={index} 
            onClick={()=>setColor(btnColor)}></button>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default App
