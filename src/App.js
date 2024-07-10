import './App.css';
import Footer from "./Footer";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
