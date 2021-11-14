import { items, menu } from "./data";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Zoom } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

export const Lists = () => {
  const [title, setTitle] = useState("default title");
  const [image, setImage] = useState("default image");
  const [price, setPrice] = useState("default price");
  const [about, setAbout] = useState("default details");
  const { id } = useParams();
  useEffect(() => {
    const newMenu = items.find((menu) => menu.id === parseInt(id));
    setTitle(newMenu.title);
    setImage(newMenu.image);
    setPrice(newMenu.price);
    setAbout(newMenu.about);
  }, []);
  return (
    <div className="route">
      <Zoom>
        <Link to="/">
          <img
            src="https://dl.airtable.com/.attachmentThumbnails/df074f571539de5abfe97b07285ff14b/0dd999b3"
            alt="logo"
            className="logo"
          />
        </Link>
      </Zoom>
      <div className="route-card">
        <img src={image} alt="" />
        <div className="full-route">
          <div className="route-details">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <p className="route-about">{about}</p>
          <button class="cta">
            <span class="hover-underline-animation"> Place an order </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
