import { useState } from "react";
import AceEditor from "react-ace";

import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

function Markdown() {
  const [htmlPreview, setPreview] = useState(null);
  const [fullScreen, setFullScreen] = useState(true);

  const backgroundColor = "#e8e8e8";

  const onChange = (value) => {
    setPreview(value);
  };

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-md-6">
          <div
            className="nav-scroller "
            style={{
              borderBottom: "1px solid #e5e5e5",
              borderTop: "1px solid #e5e5e5",
              border: "1px solid #e5e5e5",
            }}
          >
            <nav
              className=" justify-content-between align-items-center"
              style={{
                display: "flex",
                height: "100%",
              }}
            >
              <div
                className="link-secondary cursor-pointer"
                style={{ paddingLeft: ".5rem" }}
              >
                {"Markdown"}
              </div>
              <div
                className=" link-secondary cursor-pointer"
                onClick={() => {
                  setFullScreen(!fullScreen);
                }}
                style={{ paddingRight: ".5rem" }}
              >
                {fullScreen ? (
                  <AiOutlineFullscreen size={25} />
                ) : (
                  <AiOutlineFullscreenExit size={25} />
                )}
              </div>
            </nav>
          </div>

          <AceEditor
            mode="java"
            theme="xcode"
            onChange={onChange}
            name="editor"
            showPrintMargin={false}
            editorProps={{ $blockScrolling: true }}
            value={htmlPreview}
            width="100%"
            fontSize={16}
            lineHeight={24}
            debounce={150}
            height="500px"
            style={{ border: `1px solid ${backgroundColor}` }}
          />
        </div>
        <div className="col-md-6">
          <div
            className="nav-scroller py-1 "
            style={{
              borderBottom: "1px solid #e5e5e5",
              borderTop: "1px solid #e5e5e5",
              border: "1px solid #e5e5e5",
            }}
          >
            <nav className="nav d-flex justify-content-between">
              <div className="p-2 link-secondary cursor-pointer">
                {"Preview"}
              </div>
              <div className="p-2 link-secondary cursor-pointer">{"</>"}</div>
            </nav>
          </div>

          <div
            id="preview"
            className="preview-html"
            preview=""
            style={{
              border: `1px solid ${backgroundColor}`,
              paddingLeft: "20px",
              height: "500px",
            }}
            // dangerouslySetInnerHTML={{ __html: htmlPreview }}
          >
            <h1 className="code-line" data-line-start="0" data-line-end="1">
              Kawal{" "}
            </h1>
            <h2 className="code-line" data-line-start="1" data-line-end="2">
              Jain
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markdown;
