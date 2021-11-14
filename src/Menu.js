import { menu } from "./data";
import { Zoom, Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <section className="full-menu" id="menu">
      <Bounce>
        <h1 className="menu-title">Marvelous Menu</h1>
      </Bounce>
      <div className="menu-card">
        {menu.map((menuList) => {
          const { id, title, image } = menuList;
          return (
            <div key={id} className="ff">
              <Link to={`/food/${id}`}>
                <Zoom cascade>
                  <div className="menu-list">
                    <img src={image} alt={title} />
                    <div className="menu-details">
                      <h1>{title}</h1>
                      <button className="cta">
                        <span className="hover-underline-animation">
                          {" "}
                          Check Dishes{" "}
                        </span>
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
                </Zoom>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
