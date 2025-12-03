const Book = (props) => {
  const { img, title, author, number } = props;
  //console.log(props);
  return (
    <article className="book">        
      <img src={img} alt={title} />
      <h2 className="number">{`# ${number + 1}`}</h2>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;