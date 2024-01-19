import React, { useEffect } from "react";
import "./styles.css"; // Import your loader styles

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");

    if (loader) {
      console.log("Loader is rendered");
      setTimeout(() => {
        loader.classList.add("loader--hidden");
        console.log("Loader is hidden");
      }, 500);
    }
  }, []);

  return <div className="loader"></div>;
};

export default Loader;
