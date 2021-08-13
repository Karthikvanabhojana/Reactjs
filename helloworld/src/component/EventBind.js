import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message :'Hello'
         }
        //  this.clickHandler=this.clickHandler.bind(this) method 3
     }
    // method 1 to 3
    // clickHandler() {
    //      this.setState({
    //          message :'Goodbye'
    //      })
    //     console.log(this);

    //  }
    // method4
    clickHandler=()=> {
        this.setState({
            message : 'Goodbye'
        })
    }
      //react document suggets method 3 and 4 , contructor binding or class property approach 
    render() {
        return (
            <div>
               <div>{this.state.message}</div>
               {/* 1.every update to the state makes the component to rerender and generate brand new event handler in every render */}
                <button onClick={this.clickHandler.bind(this)}>Click</button> 
                {/* method 2 */}
                {/* <button onClick={() =>this.clickHandler()}>Click</button> not efficient */}


            </div>
        )
    }
}

export default EventBind
