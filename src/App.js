import Header from "./components/Header";
import Markdown from "./pages/Markdown";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/global.css";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="main-container">
        <Markdown />
      </div>
    </div>
  );
}

export default App;
