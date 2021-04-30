import _ from 'lodash';
import './styles.module.scss';

// import { routes } from "@info/info";
import Navigator from '@components/Navigator';
import Home from '@pages/Home';
import About from '@pages/About';
import Blogs from '@pages/Blogs';
import Projects from '@pages/Projects';

function App() {
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
      <Blogs />
      <Projects />
      {/*_.map(routes, (item, index) =>
        <Route exact path={index}>
          {item}
        </Route>
      )*/}
    </div>
  );
}

export default App;
