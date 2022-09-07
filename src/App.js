import './App.css'
import { Navbar, AppBody, ParticlesApp } from './components/index'

function App() {
  return (
    <div className="app overflow_hidden">
      <Navbar />
      <AppBody />
      <ParticlesApp />
    </div>
  );
}

export default App;