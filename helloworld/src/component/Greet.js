import React from 'react'

// function Greet() {
//     return <h1>Hello Karthik</h1>
// }
const Greet =(props) => {
     console.log(props)
     return (
         <div>
     <h1>Hello {props.name} a.k.a {props.heroName}</h1>
     {props.children}
     
     </div> //if multiple wrapper then div tag must be used
     )
}

export default Greet