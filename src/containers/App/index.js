import {
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import _ from 'lodash';
import './styles.module.scss';

import Navigator from '@components/Navigator';
import Home from '@pages/Home';
import About from '@pages/About';
import Blogs from '@pages/Blogs';
import Contact from '@pages/Contact';
import Projects from '@pages/Projects';

function App() {
  let location = useLocation();

  const routes={
    "/": <Home />,
    "/#about": <About />,
    "/#blogs": <Blogs />,
    "/#contact": <Contact />,
    "/#projects": <Projects />
  };

  return (
    <div styleName="wrapper">
      <Navigator
        bgColor="light"
        variant="light"
        textColor="text-secondary"
        initBgColor="transparant"
        initVariant="dark"
        initTextColor="text-light"
      />
      <Home />
      <About />
      {/*_.map(routes, (item, index) =>
        <Route exact path={index}>
          {item}
        </Route>
      )*/}
    </div>
  );
}

export default App;
