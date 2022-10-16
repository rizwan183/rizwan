 
import './App.css';
import './App.scss'
import {About,Footer,Header,Skill,Work} from './container';
import {Navbar} from './components/index';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
