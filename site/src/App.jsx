import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Upgrade from "./pages/Upgrade";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Upgrade />} />
        <Route path="/upgrade" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
