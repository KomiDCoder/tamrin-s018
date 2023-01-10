import "./BlogPart.css";
const BlogPart = (props) => {
  const BlogPartRender = () => {
    return props.data.map((item, i) => {
      return (
        <div className="blog" key={i}>
          <h3>{item.title}</h3>
          <img className="banner" src={item.image} alt="banner" />
          <p>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div>
      <h1 className="title">Tamrine Dovvom</h1>
      {BlogPartRender()}
    </div>
  );
};
export default BlogPart;
