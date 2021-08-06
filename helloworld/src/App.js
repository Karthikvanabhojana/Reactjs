import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/hello'
import Message from './component/Messsage'
function App() {
  return (
    <div className="App" >
      <Message />
      {/* <Greet name="Bruce" heroName="Superman">
        <p>
          THis is a paragraph
        </p>
      </Greet>
      <Greet name="Clerk" heroName="Flash "/> 
      <button>Action</button>

      {/* reusability */}
      {/* <Greet name="Karthik" heroName="Batman"/>

      <Welcome name="Bruce" heroName="Superman"/>
      <Welcome name="Clerk" heroName="Flash "/>
      <Welcome name="Karthik" heroName="Batman"/> } */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
