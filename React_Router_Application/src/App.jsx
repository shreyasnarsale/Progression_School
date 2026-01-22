import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
