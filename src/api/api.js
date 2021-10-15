import axios from 'axios';

async function getRepos(query, sort) {
  const url = `https://api.github.com/search/repositories?q=${query}&sort=${sort}`;
  const { data } = await axios.get(url);
  return data;
}

export { getRepos };
