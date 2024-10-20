import { useEffect, useState } from "react";

import Header from "./components/Header";
import Markdown from "./pages/Markdown";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/global.css";

import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALTICS_MEASUREMENT_ID);

function App() {
  const [handleEditorViewMobile, setHandleEditorViewMobile] = useState(false);
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

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
