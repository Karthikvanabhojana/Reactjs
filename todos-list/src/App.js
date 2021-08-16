import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos=[
    {
      sno:1,
      title:"Go to Market",
      desc: "hello sn number 1"
    },
    {
      sno:2,
      title:"Go to Mall",
      desc: "hello sn number 2"
    },
    {
      sno:3,
      title:"Go to Showroom",
      desc: "hello sn number 3"
    }
  ]
  return (
    <>
    <Header title="My Todos List" />
    <Todos todos={todos} />
    <Footer />
    </>
  );
}

export default App;