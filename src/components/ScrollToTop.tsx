import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Standard scroll to top
    window.scrollTo(0, 0);
    
    // Also try on the document elements directly
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    
    // Use requestAnimationFrame for a second try to ensure it happens after render
    const timer = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
