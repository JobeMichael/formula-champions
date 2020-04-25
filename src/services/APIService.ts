const APIService = {
  fetchSeasonsData: async (urls: Array<string>) => {
    return await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    )
      .then((data) => data)
      .catch((err) => err);
  },

  getSeasonDetails: async (year: number) => {
    const url = `${baseUrl}/${year}/results/1.json`;

    const result = await fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  },
};

export default APIService;
