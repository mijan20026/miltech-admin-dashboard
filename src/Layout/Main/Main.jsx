import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen w-screen flex bg-baseBg overflow-hidden">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen transition-all duration-300">
        <Header toggleSidebar={() => setCollapsed(!collapsed)} />
        <div className="flex-1 mt-3 overflow-hidden">
          <div className="h-full overflow-y-auto bg-baseBg rounded-md p-7 pt-0">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
