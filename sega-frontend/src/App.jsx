import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditorJuegos from "./pages/EditorJuegos";
import GestorTareas from "./pages/GestorTareas";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <EditorJuegos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tareas"
          element={
            <ProtectedRoute>
              <GestorTareas />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;