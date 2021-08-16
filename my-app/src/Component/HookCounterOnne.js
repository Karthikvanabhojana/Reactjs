import React, {useState, useEffect} from 'react'

function HookCounterOnne() {
    const [count,setCount] =useState(0)
    const [name,setName] =useState('')
    // useEffects runs after each render
    useEffect(()=>{
        console.log('use Effect Updating document title')
        document.title=`You Clicked ${count} times`
    }, [count])
    return (
        <div>
            <input type="text" value={name } onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOnne
