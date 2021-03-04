import logo from './logo.svg';
import './App.css';


function Header() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

      <h1>To Do</h1>
      <button type="button">Sing up</button>
    </div>
  );
}

export default Header;