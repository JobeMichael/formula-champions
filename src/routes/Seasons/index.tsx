import React, { useEffect, useState } from "react";
import SeasonsList from "../../components/SeasonsList";
import getSeasons from "../../services/getSeasons";
import "./Seasons.css";

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

  return (
    <div className="seasons-wrapper">
      <div className="seasons-header">
        <h1>2005 - 2015</h1>
        <p> Formula1 races winners from 2005 to 2015.</p>
      </div>
      {seasons && <SeasonsList data={seasons} />}
    </div>
  );
};

export default Home;
