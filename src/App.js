import Header from "./components/Header";
import Markdown from "./pages/Markdown";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/global.css";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <Markdown />
      </div>
      <Footer />
    </div>
  );
}

export default App;
