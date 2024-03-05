import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Poetry from "./components/poetry/Poetry";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
// import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/poetry" element={<Poetry />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
