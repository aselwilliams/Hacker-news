import axios from "axios";
import "./App.css";
import React, { Component } from "react";
import LoadingIcon from "./components/LoadingIcon";
import NewsFeed from "./components/NewsFeed";
const api = "https://hn.algolia.com/api/v1/search?query=";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      isLoading: false,
      searchValue: "",
      url: api,
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(this.state.url)
      .then((data) =>
        this.setState({ news: data.data.hits, isLoading: false })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      axios
        .get(this.state.url)
        .then((data) => this.setState({ news: data.data.hits }));
    }
  }

  handleDelete = (id) => {
    const updatedList = this.state.news.filter((item) => item.objectID !== id);
    this.setState({ news: updatedList });
  };

  handleInputChange = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      url: `${api}${this.state.searchValue}`,
    });
  };
  render() {
    const { news, isLoading } = this.state;
    return (
      <>
        <div className="container">
          <header>
            <h1>Hacker News</h1>
          </header>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search hot news..."
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          {isLoading ? (
            <LoadingIcon />
          ) : (
            <>
              {news.map((el) => {
                return (
                  <div key={el.objectID} className="underline">
                    <h3>{el.title}</h3>
                    <p>
                      <strong>Author:</strong> {el.author}
                    </p>
                    <button
                      onClick={() => this.handleDelete(el.objectID)}
                      className="exit"
                    >
                      X
                    </button>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
