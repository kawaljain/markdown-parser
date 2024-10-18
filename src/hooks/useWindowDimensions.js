import { useState, useEffect } from "react";

export const useWindowResize = (callback, screenSize) => {
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function getWindowDimensions() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      return {
        width,
        height,
      };
    }
    // wrap it here
    const handleResize = async () => {
      await setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowDimensions.height, windowDimensions.width]);
  return windowDimensions;
};

export default useWindowResize;
