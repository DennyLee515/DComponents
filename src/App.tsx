import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Danger</Button>
        <Button onClick={()=>{alert("123")}}>Default</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
        <Button btnType={ButtonType.Danger} disabled >Disabled</Button>
        <Button btnType={ButtonType.Link} href="http://www.google.com">Google</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
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
