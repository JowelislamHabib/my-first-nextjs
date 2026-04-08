import React from "react";
import DashboardPage from "./page";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaChartPie, FaUserEdit } from "react-icons/fa";
import { RiSidebarUnfoldLine } from "react-icons/ri";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <RiSidebarUnfoldLine />
          </label>
          <div className="px-4">This is dashboard header</div>
        </nav>
        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
                {/* Home icon */}
                <MdDashboard />
                <Link href={"/dashboard"}>
                  <span className="is-drawer-close:hidden">Dashboard</span>
                </Link>
              </button>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Revenue"
              >
                {/* Settings icon */}
                <FaChartPie />
                <Link href={"/dashboard/revenue"}>
                  <span className="is-drawer-close:hidden">Revenue</span>
                </Link>
              </button>
            </li>
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                {/* Settings icon */}
                <FaUserEdit />
                <Link href={"/dashboard/profile"}>
                  <span className="is-drawer-close:hidden">Profile</span>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
