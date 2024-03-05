import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { Header } from "./components/header/Header";
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <AppRouter />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
