function getRepos() {
  return Promise.resolve({
    total_count: 4,
    items: [
      { id: 207645083, full_name: 'tannerlinsley/react-query' },
      { id: 98418501, full_name: 'ukrbublik/react-awesome-query-builder' },
      { id: 64814946, full_name: 'ReactTraining/react-media' },
      { id: 22968365, full_name: 'contra/react-responsive' },
    ],
  });
}

export default { getRepos: getRepos };
