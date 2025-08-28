import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { AboutSection } from "./pages/mabe/AboutMe";
import { AboutErick } from "./pages/erick/AboutMe";
import { AboutAnthony } from "./pages/anthony/AboutMe";
import { AboutSantiago } from "./pages/santiago/AboutMe";
import { AboutXabier } from "./pages/xabier/AboutMe";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/aboutMabe" element={<AboutSection />} />
          <Route path="/aboutErick" element={<AboutErick />} />
          <Route path="/aboutAnthony" element={<AboutAnthony />} />
          <Route path="/aboutSantiago" element={<AboutSantiago />} />
          <Route path="/aboutXabier" element={<AboutXabier />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
