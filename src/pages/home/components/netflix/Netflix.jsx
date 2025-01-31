import MainLayout from "../../../../component/nav/layout/MainLayout";
import "./netflix.scss";
import React from "react";

const Netflix = () => {
  return (
    <MainLayout>
      <div className="netflix_section">
        <div className="left_box">
          <img src="../assets/john-wick.jpg" alt="images" />
        </div>
        <div className="Right_box">
          <p>Netflix 12 minutes ago</p>
          <h3>Where To Watch 'John Wick: Chapter 4'</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quas
            repudiandae saepe quos sapiente aliquam repellendus suscipit esse.
          </p>
          <p>Movies 4 min read</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Netflix;
