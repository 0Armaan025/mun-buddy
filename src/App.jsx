import { useState } from "react";
import "../src/index.css";

import HomePage from "../src/pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <DashboardPage />
    </>
  );
}

export default App;
