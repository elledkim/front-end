import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";
import LoginForm from './LoginForm.js';

function App() {
  let submitted = false;
  let userName = "";

  function handleOnSubmit(name){
    submitted = true;
    userName = name;
    console.log(submitted);
  }

  return (
    <div className="App">
      {/* <h1>Hello React!</h1>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/> */}

      {
      (!submitted) ? <LoginForm onsubmit=
      {handleOnSubmit} /> : <Greeting name=
      {userName}/>
      }

      <LoginForm onSubmit={handleOnSubmit}/>

    </div>

  );
}

export default App;
