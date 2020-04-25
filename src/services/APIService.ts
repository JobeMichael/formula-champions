const APIService = {
  fetchSeasonsData: async (urls: Array<string>) => {
    return await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    )
      .then((data) => data)
      .catch((err) => err);
  },

  fetchSeasonDetailsData: async (url: string) => {
    return await fetch(url)
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);
  },
};

export default APIService;
