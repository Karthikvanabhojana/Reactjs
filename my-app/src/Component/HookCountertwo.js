import React, {useState} from 'react'

function HookCountertwo() {
    const initialCount=0
    const [count,setCount] =useState(initialCount)
    const incrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(count+1)
        }
    }
    const incrementFivecorrect=()=>{
        for(let i=0;i<5;i++){
            setCount(previouscount=>previouscount+1)
        }
    }
    return (
        <div>
            Count: {count}
            {/* <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button> */}
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(previouscount=>previouscount+1)}>Increment</button>
            <button onClick={()=>setCount(previouscount=>previouscount-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            <button onClick={incrementFivecorrect}>Increment 5 Correct</button>

        </div>
    )
}

export default HookCountertwo
