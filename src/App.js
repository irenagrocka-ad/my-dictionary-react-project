import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="rainbow" />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
