import React from "react";
import propTypes from "prop-types";
import { Book } from "./Book";
import { Hiring } from "./Hiring";
import { NotHiring } from "./NotHiring";

class Library extends React.Component {
  static defaultProps = {
    books: [{ title: "Tahoe Tales", author: "Chet Whitley", pages: 1000 }]
  };

  state = {
    open: false,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }));
  }

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <section>
        {this.state.hiing ? <Hiring /> : <NotHiring />}
        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map(product => {
              return (
                <div>
                  <h1>{product.id}</h1>
                  <h3>{product.name}</h3>
                  <h4>{product.description}</h4>
                  <img src={product.image} alt={product.name} height={100} />
                </div>
              );
            })}
          </div>
        )}
        <h1>{this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </section>
    );
  }
}

Library.propTypes = { books: propTypes.array };

Book.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  page: propTypes.number,
  freeBookmark: propTypes.bool
};
export default Library;
