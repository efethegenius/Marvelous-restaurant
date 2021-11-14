import { chefs } from "./data";
export const Chef = () => {
  return (
    <div className="chefs">
      {chefs.map((chef) => {
        const { id, name, title, image } = chef;
        return (
          <div key={id} className="chef-card">
            <img src={image} alt={title} />
            <h2>{name}</h2>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};
