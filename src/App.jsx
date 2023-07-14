import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Entery from "./pages/Entery";
import Login from "./pages/Login";
import Protected from "./utils/Protected";
export default function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Entery />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/dashboard"
              element={
                <Protected>
                  {" "}
                  <Dashboard />
                </Protected>
              }
            ></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
