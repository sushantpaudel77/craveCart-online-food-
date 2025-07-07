import React, { useRef } from "react";
import { categories } from "../../assets/assets";
import "./ExploreMenu.css"

const ExploreMenu = () => {

  const menuRef = useRef(null);
  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({left: -200, behaviour: "smooth"});
    }
  }

   const scrollright = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({left: 200, behaviour: "smooth"});
    }
  }

  return (
    <div className="explore-menu position-relative">
      <h1 className="d-flex align-items-center justify-content-between">
        Explore the Menu
        <div className="d=flex">
          <i className="bi bi-arrow-left-circle scroll-icon" onClick={scrollLeft}></i>
          <i className="bi bi-arrow-right-circle scroll-icon" onClick={scrollright}></i>
        </div>
      </h1>
      <p>Explore curated list of dished from top categories</p>
      <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list" ref={menuRef}>
        {categories.map((item, index) => {
          return (
            <div key={index} className="text-center explore-menu-list-item">
              <img
                src={item.icon}
                alt=""
                className="rounded-circle"
                height={128}
                width={128}
              />
              <p className="mt-2 fw-bold">{item.category}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
