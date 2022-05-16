import axios from "axios";
import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
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
    // this.getData()
    // this.setState({isLoading:false})
    axios
      .get(this.state.url)
      .then((data) =>
        this.setState({ news: data.data.hits, isLoading: false })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      // this.getData()
      axios
        .get(this.state.url)
        .then((data) => this.setState({ news: data.data.hits }));
    }
  }

  // getData=()=>{
  //   axios
  //   .get(this.state.url)
  //   .then((data) =>
  //     this.setState({ news: data.data.hits })
  //   );
  // }

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
          <Form handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
          {isLoading ? 
            <LoadingIcon />
         :  <NewsFeed news={news} handleDelete={this.handleDelete}/>}
        </div>
      </>
    );
  }
}

export default App;
