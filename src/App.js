import { useState } from "react";

import Header from "./components/Header";
import Markdown from "./pages/Markdown";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/global.css";

function App() {
  const [handleEditorViewMobile, setHandleEditorViewMobile] = useState(false);
  return (
    <div className="main">
      <Header
        handleEditorViewMobile={handleEditorViewMobile}
        setHandleEditorViewMobile={setHandleEditorViewMobile}
      />
      <div className="main-container">
        <Markdown
          handleEditorViewMobile={handleEditorViewMobile}
          setHandleEditorViewMobile={setHandleEditorViewMobile}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
