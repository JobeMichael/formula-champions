import React, { useEffect } from "react";
import getSeasons from "../../services/getSeasons";

const Home = () => {
  useEffect(() => {
    const fetchSeasonsData = async () => {
      const result = await getSeasons({
        startYear: 2005,
        endYear: 2015,
      });
      console.log(result[0]);
    };

    fetchSeasonsData();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
