import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EditorJuegos from "./pages/EditorJuegos";
import GestorTareas from "./pages/GestorTareas";
import ProtectedRoute from "./components/ProtectedRoute";
import External from "./pages/External";
import OauthCallback from "./pages/OauthCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/oauth/callback" element={<OauthCallback />} />

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
            <ProtectedRoute roles={["admin","editor"]}>
              <EditorJuegos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tareas"
          element={
            <ProtectedRoute roles={["admin","editor"]}>
              <GestorTareas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/external"
          element={
            <ProtectedRoute>
              <External />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;