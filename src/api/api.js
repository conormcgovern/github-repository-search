import axios from 'axios';

async function getRepos(query, sort, language) {
  const q = language ? `${query} language:${language}` : query;
  const url = `https://api.github.com/search/repositories?q=${q}&sort=${sort}`;
  const { data } = await axios.get(url);
  return data;
}

async function getRepo(ownerLogin, repoName) {
  const url = `https://api.github.com/repos/${ownerLogin}/${repoName}`;
  const { data } = await axios.get(url);
  return data;
}

export { getRepos, getRepo };
