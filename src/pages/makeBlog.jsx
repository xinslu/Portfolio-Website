import hash from "hash-it";
import React, { Component } from 'react';

export default class postBlog extends Component{
    constructor(props) {
        super(props);
        this.state={
            title: '',
            subject: '',
            timeStamp: '',
            text: '',
            preview: '',
            password: 11059027813934
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    render(){
        const {title,subject,timeStamp,text,password}=this.state
        return (
            <form class="ml-5" onSubmit={this.onSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" value={this.subject}>Subject</label>
                <input type="text" id="subject" name="subject" class="form-control" onChange={this.handleInputChange} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" onChange={this.handleInputChange}/>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" value={this.subject}>Preview</label>
                <input type="text" id="subject" name="preview" class="form-control" onChange={this.handleInputChange} />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Text</label>
                <textarea class="form-control" id="text" name="text" onChange={this.handleInputChange}></textarea>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" id="password" onChange={this.handlePassword} />
              </div>
              <button type="submit" class="btn btn-primary" onChange={this.handleInputChange}>Submit</button>
            </form>
        )
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handlePassword(event){
        this.setState({
            password: hash(event.target.value)
        })
    }

    async onSubmit(event){
        event.preventDefault()
        this.setState({
            timeStamp: new Date().toDateString()
        })
        if (this.state.password === 11059027813934){
            const res=await fetch('http://localhost:5000/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                timeStamp: this.state.timeStamp,
                subject: this.state.subject,
                title: this.state.title,
                preview: this.state.preview,
                blogText: this.state.text
              })
            })
            const jsonData=await res.json()
            if (jsonData.success){
                console.log("Posted")
            }else{
                console.log("Not Posted")
            }
        }else{
            console.log("Wrong Password! Apple ID Password")
        }


    }
}
