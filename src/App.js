import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Body from './components/body.jsx';
import Scroll from './components/scrolling.jsx';
import "devicon/devicon.min.css";
import{
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

//Pages
import NotFoundPage from './pages/404'
import NagivationBar from "./components/navbar.jsx"
import Resume from "./pages/resume.jsx"
import Blog from "./pages/blog.jsx"
function App() {
  return (
    <Router>
        <Switch>
            <Route exact path='/' component={NagivationBar} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/blog" component={Blog} />
            <Redirect to="/404" />
        </Switch>
    </Router>
  );
};

export default App;
