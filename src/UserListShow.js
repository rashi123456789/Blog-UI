import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class ShowList extends React.Component
{
    constructor()
    {
        super()
        this.state={
            users:{},
            posts:[]
        }
    }
    componentDidMount()
    {
        const userId=this.props.match.params.userId
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return(
            <div>
                <h2>User Name - {this.state.users.name}</h2>
                <h2>POSTS WRITTEN BY USERS</h2>
                <ul>
                    {
                        this.state.posts.map((ele,i)=>{
                        return (<li key={i}><Link to={`/userssss/${ele.id}`}>{ele.title}</Link></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default ShowList