import Configuration from "./components/Configuration";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="bg row d-flex pb-5">
        <Header />
        <Configuration />
      </div>
    </div>
  );
}

export default App;
