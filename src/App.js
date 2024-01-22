import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import './App.css'

function App() {
  return (
    <div className="App" >
      <Navbar />
      <section className="Body">
        <Intro />
      </section>
    </div>
  );
}

export default App;
