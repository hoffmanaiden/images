import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID aUfE7g-N-MvzBQXqUQo6sCeA6Rtob7vdJfqOob1MVYM'
  }
});