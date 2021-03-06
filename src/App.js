import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Body from './components/body.jsx';
// import Scroll from './components/scrolling.jsx';
import "devicon/devicon.min.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";

//Pages
import Main from "./Routes/Main.jsx";
// import NagivationBar from "./components/navbar.jsx"
import Resume from "./Routes/Resume.jsx";
import NotFoundPage from "./Routes/404.jsx";
import Blog from "./Routes/blog.jsx";
import BlogPage from "./Routes/blogPage.jsx";
import postBlog from "./Routes/makeBlog.jsx";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/404" component={NotFoundPage} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:id" component={BlogPage} />
                <Route exact path="/post" component={postBlog} />
                <Redirect to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
