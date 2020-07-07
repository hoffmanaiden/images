import React, { Component } from 'react';
import unsplash from "../api/unsplash";
import SearchBar from './SearchBar';
import ImageList from "./ImageList";
// import Pages from './Pages';


class App extends Component {
  state = { images: [], pages: 0 };
  // # of pages on this.state.pages

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos?page=3', {
      params: { query: term, per_page: 30 },
    });
    this.setState({ images: response.data.results });
    this.setState({ pages: response.data.total_pages });
    console.log(response);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;