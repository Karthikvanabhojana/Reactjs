import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment() {
//         this.setState({ 
//             // setState - never modify state directly if you modify then react wont rerender the component directly 
//             //setState will make react know that it has to rerender the component
//             count: this.state.count+1
//         }, 
//         ()=>{console.log('Callback value', this.state.count)})
//         console.log(this.state.count) //syncronous log callback statement
//     }
this.setState(prevState=>({
    count: prevState.count+1
}))
console.log(this.state.count)
    }

    incrementfive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
//all 5  values are are executed in same go so output will change after all 5 methods
    }
    render() {
        return (
            <div>
            <div>
              Count - {this.state.count} 
            </div>
            <button onClick={()=> this.incrementfive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
