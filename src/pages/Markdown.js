import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

import EditorHeader from "../components/EditorHeader";

import { SVG_ICON_SIZE } from "../data/constant";

import useWindowResize from "../hooks/useWindowDimensions";
import { getConvertedString } from "../utils/Converter";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";

function Markdown() {
  const [htmlPreview, setHtmlPreview] = useState(null);
  const [editorheight, setEditorheight] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(true);

  const [showPreview, setShowPreview] = useState(false);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const [converted, setConverted] = useState(null);

  const { height, width } = useWindowResize();

  useEffect(() => {
    setEditorheight(height - 200);
    if (width <= 760) {
      setIsMobileSize(true);
    } else {
      setIsMobileSize(false);
    }
  }, [height, width]);

  const onChangeEditor = (value, detail) => {
    setHtmlPreview(value);

    if (value) {
      let html = "";
      let lineSplit = value.split("\n");

      lineSplit.forEach((line, index) => {
        const prev = index === 0 ? "" : lineSplit[index - 1];
        html = `${html}${getConvertedString(line, prev)}`;
        setConverted(html);
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div
          className="col-md-6 col-sm-12 "
          style={{
            display: isMobileSize ? (!showPreview ? "block" : "none") : "block",
          }}
        >
          <EditorHeader title={"Markdown"}>
            <div
              className=" link-secondary cursor-pointer"
              onClick={() => {
                setShowFullScreen(!showFullScreen);
              }}
            >
              {showFullScreen ? (
                <AiOutlineFullscreen size={SVG_ICON_SIZE} />
              ) : (
                <AiOutlineFullscreenExit size={SVG_ICON_SIZE} />
              )}
            </div>
          </EditorHeader>
          <div
            className="editor-container"
            style={{ height: `${editorheight}px` }}
          >
            <AceEditor
              mode="markdown"
              theme="xcode"
              onChange={onChangeEditor}
              name="editor"
              showPrintMargin={false}
              editorProps={{ $blockScrolling: true }}
              value={htmlPreview}
              width="100%"
              fontSize={16}
              lineHeight={24}
              debounce={150}
              height="1200px"
              className="border-1 "
            />
          </div>
        </div>
        <div
          className="col-md-6  col-sm-12  preview-main-container"
          style={{
            display: isMobileSize ? (showPreview ? "block" : "none") : "block",
          }}
        >
          <EditorHeader title={"Preview"}>
            <div className="p-2 link-secondary cursor-pointer">{"</>"}</div>
          </EditorHeader>
          <div
            className="editor-container border-1"
            style={{ height: `${editorheight}px` }}
          >
            <div
              id="preview"
              className="preview-container"
              dangerouslySetInnerHTML={{ __html: converted }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markdown;
