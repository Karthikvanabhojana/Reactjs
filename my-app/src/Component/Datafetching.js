import React, {useState,useEffect} from 'react'
import axios from 'axios'
function Datafetching() {
    const [post,setPost] =useState({})
    const [id,setId]=useState(1)
    const [idFromButtonclick,setidFromButtonclick]=useState(1)
    const handleClick=()=>{
        setidFromButtonclick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonclick}`)
        .then(res=> {
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonclick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button"onClick={handleClick}>Fetch post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}> {post.title}</li>
                    ))
                }
            </ul> */}
            
        </div>
    )
}

export default Datafetching
