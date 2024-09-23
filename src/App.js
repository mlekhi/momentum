import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div
      style={{ background: 'linear-gradient(to right, #273B4D, #091322)' }}
    >
      <Menu />
      <div className="flex justify-center items-center h-screen"
      >
        <p className="text-3xl font-bold text-white">Momentum</p>
      </div>
    </div>
      <p>Momentum is a co-working community bringing together Western University’s builders, creatives, technologists, designers, researchers, budding founders, and more to work on their passion projects. Our goal is to foster a space that for people to connect over their interests, work together, and remain accountable & dedicated to work they care about. (Note: no schoolwork allowed at our sessions!)</p>
      <a>Give us a follow!</a>
      <Footer />
    </div>
  );
}

export default App;
