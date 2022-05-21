import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/blog.css";
import Footer from "./Footer.jsx";

export default class Blog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogPosts: [],
		};
	}
	render() {
		var blogPosts = this.state.blogPosts;
		if (blogPosts) {
			return (
				<div>
					<div
						id="home"
						className="justify-content-center"
						style={{
							fontFamily: "Trebuchet MS",
							paddingTop: "7vh",
							textAlign: "center",
							paddingBottom: "3vh",
						}}
					>
						<h1 className="display-4 text-center justify-content-center">
							<strong style={{fontFamily: 'VT323'}}>Ready Progammer One</strong>
						</h1>
						<p className="font-monospace h4">
							<small class="text-muted">
								A blog, by{" "}
								<span className="text-primary">
									<Link to="/" style={{textDecoration: "none"}}>Kinshuk Phalke</Link>
								</span>
								, where I post whatever's on my mind.
							</small>
						</p>
					</div>
					<div>
						<hr
							style={{
								margin: "0em 0em 2em 0em",
								backgroundColor: "#eee",
							}}
						/>
					</div>
					<div>
						{blogPosts.map((blog, index) => (
							<div>
								<div
									className="container"
									style={{ alignItems: "center" }}
								>
									<div
										id={blog._id}
										class="p-4 w-100 d-flex flex-column position-static"
										style={{
											marginRight: "15vh",
											width: "100vh",
											border: "1px solid #eee",
										}}
									>
										<strong class="d-inline-block mb-2 text-primary">
											{blog.subject}
										</strong>
										<Link to={`/blog/${blog._id}`} style={{textDecoration: "none"}}>
											<h3 class="mb-0">{blog.title}</h3>
										</Link>
										<div class="mb-1 text-muted">
											{blog.timeStamp}
										</div>
										<p class="lead card-text mb-auto">
											{blog.preview}
										</p>
									</div>
								</div>
								<div
									style={{
										marginRight: "5vh",
										marginLeft: "5vh",
									}}
								>
									<hr
										style={{
											height: "1px",
											backgroundColor: "#eee",
										}}
									/>
								</div>
							</div>
						))}
					</div>
					<div style={{bottom: `0`, position: `absolute`, width: `100%`}}>
						<Footer />
					</div>
				</div>
			);
		} else {
			return <h1>loading</h1>;
		}
	}

	async componentDidMount() {
		const res = await fetch(
			process.env.REACT_APP_HEROKU_BACKEND + "getblogpost",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: "",
				}),
			}
		);
		const jsonData = await res.json();
		this.setState({ blogPosts: jsonData.results });
	}
}
