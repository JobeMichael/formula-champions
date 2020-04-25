import React, { useEffect, useState } from "react";
import SeasonsList from "../../components/SeasonsList";
import getSeasons from "../../services/getSeasons";

const Home = () => {
  const [seasons, setSeasons] = useState() as any;

  useEffect(() => {
    const fetchSeasonsData = async () => {
      const result = await getSeasons({
        startYear: 2005,
        endYear: 2015,
      });
      setSeasons(result);
    };

    fetchSeasonsData();
  }, []);

  console.log(seasons);

  return <div>{seasons && <SeasonsList data={seasons} />}</div>;
};

export default Home;
