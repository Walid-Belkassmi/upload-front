import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Info from "./pages/Info";

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
