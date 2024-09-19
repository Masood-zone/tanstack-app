import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/users";
import SettingsPage from "./pages/settings";
import HelpPage from "./pages/help";
import DashboardPage from "./pages/dashboard";
import MainLayout from "./pages";

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen">
          <MainLayout />
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<HelpPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
