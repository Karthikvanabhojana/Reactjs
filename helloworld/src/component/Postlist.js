import React, { Component } from 'react'
import axios from 'axios'
 class Postlist extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts: [], 
              errorMsg: []
         }
     }

    //  only once in life time
     componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=> {
            console.log(error)
            this.setState({errorMsg: 'Retrivng data'} )
        })
     }
     
    render() {
        const {posts,error}=this.state
        return (
            <div>
                List of post{
                    posts.length?
                    posts.map(post=><div key={post.id}> {post.title}</div>):
                    null
                }
            </div>

        )
    }
}

export default Postlist
