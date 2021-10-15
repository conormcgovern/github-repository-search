import axios from 'axios';

async function getRepos(query) {
  const { data } = await axios.get(
    `https://api.github.com/search/repositories?q=${query}`
  );
  return data;
}

export { getRepos };
