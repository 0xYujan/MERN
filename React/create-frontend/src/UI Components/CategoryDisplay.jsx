const CategoryDisplay = ({ image, name, price }) => {
    return (
      <div className="container">
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <p>Price: {price}</p>
       
      </div>
    );
  };
  
  export default CategoryDisplay;