/** @jsxImportSource @emotion/react */

import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import End from "./pages/End";
import NotFound from "./pages/NotFound";
import Game from "./pages/Game";
import Rank from "./pages/Rank";
import Space from "./components/Space";

function App() {
  return (
    <div
      css={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Space height={40} />
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/end" element={<End />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Space height={25} />
    </div>
  );
}

export default App;
