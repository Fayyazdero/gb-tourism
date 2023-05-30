import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dashboard } from "../pages/Dashboard";
import { Overview } from "../pages/Dashboard/Overview";
import { Settings } from "../pages/Dashboard/Settings";
import { Posts } from "../pages/Dashboard/Posts";
import { Users } from "../pages/Dashboard/Users";
import { Sidebar } from "../components/dashboard/Sidebar";
import { Header } from "../components/dashboard/Header";
toast.configure();
function AdminLayout() {
  return (
    <div className="App">
      <div className="dashboard-outer">
        <Sidebar />
        <div className="dashboard-content">
          <Header />
          <div className="container-fluid py-4 px-5">
            <Routes>
              <Route exact path="/users" element={<Users />} />
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/" element={<Overview />} />
              <Route exact path="/posts" element={<Posts />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
