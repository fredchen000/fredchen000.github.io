import styles from './App.module.scss';

function App() {
  console.log(styles);
  return (
    <div styleName="App">
      <div styleName="test" / >
      <header styleName="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          styleName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
