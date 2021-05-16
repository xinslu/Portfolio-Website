import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

const Blog = () =>{
	return(
		<div>
		<div id="home" className="justify-content-center" style={{fontFamily: "Trebuchet MS", paddingTop: "7vh", textAlign: "center",paddingBottom: "3vh"}}><h1 className="display-4 text-center justify-content-center"><strong>Blog</strong></h1>
		<h3><small class="text-muted">By <span className="text-primary"><Link to="/">Kinshuk Phalke</Link></span>, where I post whatever's on my mind.</small></h3></div>
		<div><hr style={{margin: "0em 0em 2em 0em", backgroundColor: "#eee"}} /></div>
		<div className="container" style={{alignItems: "center"}}><div class="p-4 w-100 d-flex flex-column position-static" style={{marginRight: "15vh",width: "100vh", border: "1px solid #eee"}}><strong class="d-inline-block mb-2 text-primary">Intro</strong>
		<h3 class="mb-0">Hello World</h3>
		<div class="mb-1 text-muted">Nov 12</div>
		<p class="lead card-text mb-auto">Hi! I just created this page and I haven't yet uploaded anything. Stay tuned for my first blog post.</p></div></div>
		<div style={{marginRight: "5vh",marginLeft: "5vh"}}><hr style={{height: "1px", backgroundColor: "#eee"}} /></div>
		</div>
		)
}
export default Blog;