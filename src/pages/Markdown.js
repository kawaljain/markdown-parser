import { useState } from "react";
import AceEditor from "react-ace";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

import EditorHeader from "../components/EditorHeader";

import { SVG_ICON_SIZE } from "../data/constant";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";

function Markdown() {
  const [htmlPreview, setPreview] = useState(null);
  const [fullScreen, setFullScreen] = useState(true);
  const onChange = (value) => {
    setPreview(value);
  };

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-md-6">
          <EditorHeader title={"Markdown"}>
            <div
              className=" link-secondary cursor-pointer"
              onClick={() => {
                setFullScreen(!fullScreen);
              }}
            >
              {fullScreen ? (
                <AiOutlineFullscreen size={SVG_ICON_SIZE} />
              ) : (
                <AiOutlineFullscreenExit size={SVG_ICON_SIZE} />
              )}
            </div>
          </EditorHeader>

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
            className="border-1 "
          />
        </div>
        <div className="col-md-6">
          <EditorHeader title={"Preview"}>
            <div className="p-2 link-secondary cursor-pointer">{"</>"}</div>
          </EditorHeader>
          <div
            id="preview"
            className=" preview-container preview-html"
            // dangerouslySetInnerHTML={{ __html: htmlPreview }}
          >
            <h1 className="code-line" data-line-start="0" data-line-end="1">
              Kawal
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
