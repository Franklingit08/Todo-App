import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import EditPage from "./screens/EditPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>

      <ToastContainer/>
    </>
  );
}

export default App;