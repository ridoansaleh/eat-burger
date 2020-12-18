import { useState, useEffect } from "react";

function useWindowSize() {
  const isWindowClient = typeof window === "object";
  const [isMobile, setMobile] = useState(
    isWindowClient ? window.innerWidth < 1024 : false
  );

  useEffect(() => {
    function setSize() {
      setMobile(window.innerWidth < 1024);
    }

    if (isWindowClient) {
      window.addEventListener("resize", setSize);

      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setMobile]);

  return isMobile;
}

export default useWindowSize;
