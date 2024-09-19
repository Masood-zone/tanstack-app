import { Settings } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Users } from "lucide-react";
import { HelpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar, { SidebarItem } from "../components/sidebar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <Link to="/">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          active={location.pathname === "/"}
          alert={false}
        />
      </Link>
      <Link to="/users">
        <SidebarItem
          icon={<Users size={20} />}
          text="Users"
          active={location.pathname === "/users"}
          alert={true}
        />
      </Link>
      <Link to="/settings">
        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          active={location.pathname === "/settings"}
          alert={false}
        />
      </Link>
      <Link to="/help">
        <SidebarItem
          icon={<HelpCircle size={20} />}
          text="Help"
          active={location.pathname === "/help"}
          alert={false}
        />
      </Link>
    </Sidebar>
  );
};

export default MainLayout;
