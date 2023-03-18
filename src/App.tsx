import "./App.css";
import "rsuite/dist/rsuite.min.css";
import { Header } from "./Landing/Header";
import { Intro } from "./Landing/Intro";
import { History } from "./Landing/History";
import { Team } from "./Landing/Team";
import { BankDetails } from "./Landing/BankDetails";
import { Navbar, Nav } from "rsuite";
import { useState } from "react";
import { Events } from "./Events";
import { Reports } from "./Reports";
import { News } from "./News";

function App() {
  const [navState, setNavState] = useState("about");
  return (
    <div className="pb-20 flex flex-col items-center">
      <Header />
      <Navbar
        appearance="subtle"
        className="lg:px-40 sm:px-20 xsm:px-4 text-2xl font-bold border-b-2 border-gray-200 flex w-full justify-center"
      >
        <Nav onSelect={(key) => setNavState(key)} activeKey={navState}>
          <Nav.Item eventKey="about">Про нас</Nav.Item>
          <Nav.Item eventKey="events">Збори</Nav.Item>
          <Nav.Item eventKey="report">Звiти</Nav.Item>
          <Nav.Item eventKey="news">Новини</Nav.Item>
        </Nav>
      </Navbar>
      <div className="lg:px-40 xsm:px-0  sm:px-10 max-w-400 flex flex-col justify-center items-center">
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
        {navState === "events" && <Events />}
        {navState === "report" && <Reports />}
        {navState === "news" && <News />}
      </div>
    </div>
  );
}

export default App;
