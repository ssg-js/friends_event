/** @jsxImportSource @emotion/react */

import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Explain from "./pages/Explain";
import End from "./pages/End";
import NotFound from "./pages/NotFound";
import Game from "./pages/Game";

function App() {
  return (
    <div
      css={{
        padding: "10px 14px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/game" element={<Game />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/end" element={<End />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
