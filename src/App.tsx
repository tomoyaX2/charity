import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { Header } from "./components/Header";
import { Post1 } from "./components/post1";
import { Post2 } from "./components/post2";
import { Intro } from "./components/Intro";
import { History } from "./components/History";
import { Team } from "./components/Team";
import { BankDetails } from "./components/BankDetails";
import { Navbar, Nav } from "rsuite";
import { useState } from "react";

function App() {
  const [navState, setNavState] = useState("about");
  return (
    <div className="pb-20">
      <Header />
      <Navbar
        appearance="subtle"
        className="lg:px-40 sm:px-20 px-10 text-2xl font-bold"
      >
        <Nav onSelect={(key) => setNavState(key)} activeKey={navState}>
          <Nav.Item eventKey="about">Про нас</Nav.Item>
          <Nav.Item eventKey="events">Події</Nav.Item>
        </Nav>
      </Navbar>
      <div className="lg:px-40 sm:px-20 px-10">
        {navState === "about" && (
          <>
            <Intro />
            <History />
            <Team />
            <div className="w-full h-12 bg-blue-100 flex items-center justify-center mt-4">
              <h3 className="text-blue-400">Реквізити</h3>
            </div>
            <BankDetails />
          </>
        )}
        {navState === "events" && (
          <>
            <Post1 />
            <Post2 />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
