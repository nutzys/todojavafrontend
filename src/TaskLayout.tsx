import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { navLinks } from "./constatnts/navLinks";

const TaskLayout = () => {
  const [activeLink, setActiveLink] = useState<number>(1);
  const setActive = (id: number) => {
    setActiveLink(id);
  };
  return (
    <div className="h-screen bg-zinc-100">
      <nav className="shadow-md h-20 flex items-center justify-between flex-shrink-0 rounded-lg space-x-10 uppercase px-20">
        <div className="space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.to}
                className={
                  link.id === activeLink ? "text-red-600" : "text-zinc-700"
                }
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-3">
          <div>
            <h1 className="normal-case text-sm">
              Welcome, <span className="text-zinc-400">Ulvis Dulbergs</span>
            </h1>
          </div>
        </div>
      </nav>
      <div className="h-full p-7 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default TaskLayout;
