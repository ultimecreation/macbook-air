import Configuration from "./components/Configuration";
import Header from "./components/Header";
import { MacBookProviders } from "./providers/MacBookProviders";

function App() {
  return (
    <div className="container">
      <div className="bg row d-flex pb-5">
        <Header />
        <MacBookProviders>
          <Configuration />
        </MacBookProviders>
      </div>
    </div>
  );
}

export default App;
