import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import _ from 'lodash';
import './styles.scss';

import Home from '@pages/Home';
import About from '@pages/About';
import Blogs from '@pages/Blogs';
import Contact from '@pages/Contact';
import Projects from '@pages/Projects';

import {
  Route,
  Switch,
  useLocation
} from "react-router-dom";

function App() {
  let location = useLocation();

  const routes={
    "/": <Home />,
    "/about": <About />,
    "/blogs": <Blogs />,
    "/contact": <Contact />,
    "/projects": <Projects />
  };

  return (
    <Switch location={location}>
      {_.map(routes, (item, index) =>
        <Route exact path={index}>
          {item}
        </Route>
      )}
    </Switch>
  );
}

export default App;
