import React from "react";
import "./welcome.scss";
import MainLayout from "../../../../component/nav/layout/MainLayout";

const Welcome = () => {
  return (
    <MainLayout>
      <div className="welcome_section">
        <p>WELCOME TO NEWSSHORT </p>
        <h2>
          Craft narratives✍️ that ignite inspiration💡, knowledge🔰, and
          entertainment📹
        </h2>
      </div>
    </MainLayout>
  );
};

export default Welcome;
