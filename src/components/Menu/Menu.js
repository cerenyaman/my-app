import React, { useState } from "react";
import "./Menu.css";
import SideBar from "../SideBar/SideBar";
import Order from "../../assets/images/myorder.png";
import Hepsi from "../../assets/images/hepsi.png";
import Product from "../../assets/images/product.png";
import Account from "../../assets/images/accounting.png";
import Notifications from "../../assets/images/notifications.png";
import Tips from "../../assets/images/tips.png";
import Questions from "../../assets/images/question.png";
import Exp from "../../assets/images/exploration.png";
import Bar from "../../assets/images/bar.png";
import Logout from "../../assets/images/logout.png";
import Categories from "../../assets/images/categories.png";
function Menu() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="container">
      <div className="menu">
        <div
          style={{
            backgroundColor: "#2e3448",
            width: "72px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="side"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              class="sidenav-1"
              style={{
                display: "flex",
                flexDirection: "column",

                textDecoration: "none",
              }}
            >
              {" "}
              <img className="colorbar" src={Bar} alt="" />
              <a href="#about" style={{ borderBottom: "1px solid #3d4257" }}>
                <img className="text-img" src={Hepsi} alt="" />
              </a>
              <a href="#services">
                <img className="logo" src={Categories} alt="" />
              </a>
              <a href="#services">
                <img className="logo" src={Order} alt="" />
              </a>
              <a href="#clients">
                <img className="logo" src={Product} alt="" />
              </a>
              <a href="#contact">
                <img className="logo" src={Account} alt="" />
              </a>
            </div>
            <div
              class="sidenav-2"
              style={{
                display: "flex",
                flexDirection: "column",
                textDecoration: " none",
              }}
            >
              <a href="#about">
                <img className="tips" src={Notifications} alt="" />
              </a>
              <a href="#services">
                <img className="tips" src={Tips} alt="" />
              </a>
              <a
                href="#clients"
                onClick={() =>
                  setShowSidebar((prevShowSidebar) => !prevShowSidebar)
                }
              >
                <img className="tips" src={Questions} alt="" />
              </a>
              <a href="#contact" style={{ borderBottom: "1px solid #3d4257" }}>
                <img className="tips" src={Exp} alt="" />
              </a>
              <a href="#contact">
                <img className="tips" src={Exp} alt="" />
              </a>
              <a href="#contact" style={{ borderBottom: "1px solid #3d4257" }}>
                <img className="tips" src={Logout} alt="" />
              </a>

              <a href="#contact">
                <div className="bound"></div>
              </a>
            </div>
          </div>
        </div>
        {/*       <button
          role="button"
          onClick={() => setShowSidebar((prevShowSidebar) => !prevShowSidebar)}
        >
          Show Side
        </button> */}
      </div>
      {showSidebar && (
        <div className="sidebar">
          <SideBar />
        </div>
      )}
    </div>
  );
}

export default Menu;
