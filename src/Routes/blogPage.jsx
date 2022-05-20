import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

export default class BlogPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: this.props.match.params.id,
            validBlog: true,
            title: '',
            subject: '',
            timeStamp: '',
            text: '',

        }
    }
    render(){
        console.log(this.state.text)
        const {validBlog,subject,title,text,timeStamp}=this.state
        if (validBlog){
            return (
                <div style={{marginLeft: `15%`,marginTop: `4%`,marginRight: `15%`}}>
                <strong><Link to="/blog">Blog</Link></strong><br />
                <div className="container ml-5 pl-5" >
                    <p class="mt-5 ml-5 lead text-primary">{subject}</p>
                    <h1 className="display-3 ml-5">{title}</h1>
                    <h6 className="text-muted ml-5 mt-2">{timeStamp}</h6>
                    <p className="lead ml-5 mt-5 mr-5" style={{whiteSpace: "pre-line", textAlign: `justify`}}>{text}</p>
                </div>
                </div>)
        }else{
            return (<Redirect to='/404' />)
        }

    }
    async componentDidMount(){
        const id=this.state.id
        const res=await fetch(process.env.REACT_APP_HEROKU_BACKEND+'getblogpost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: id
          }),
        })
        const jsonData=await res.json()
        if (jsonData.success){
            const results=jsonData.results[0]
            this.setState({
            title: results.title,
            subject: results.subject,
            timeStamp: results.timeStamp,
            text: results.blogText

        })
        } else{
            this.setState({
                validBlog: false
            })
        }


    }
}
