import './services/firestore'
import './App.css';
import {Banner} from "./components/Banner";
import {Hosts} from "./components/hosts";

function App() {
  return (
    <div className="App">
      <Banner/>
        <Hosts/>
    </div>
  );
}

export default App;
