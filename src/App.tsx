import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>GitHub Stats</h1>
      <Outlet />
    </div>
  );
}
