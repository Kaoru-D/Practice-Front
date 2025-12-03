const Book = (props) => {
  const { img, title, author, number } = props;
  //console.log(props);
  return (
    <article className="book">
        <h2 className="number">{number + 1}</h2>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;