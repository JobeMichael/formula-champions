import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SeasonsList from "../../components/SeasonsList";
import getSeasons from "../../services/getSeasons";
import "./Seasons.css";

const Home = () => {
  const [seasons, setSeasons] = useState([]) as any;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchSeasonsData = async () => {
      const startYear = 2005;
      const endYear = 2015;

      const result = await getSeasons({
        startYear,
        endYear,
      });
      setSeasons((prevState: any) => [...prevState, ...result]);
      setLoading(false);
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
      {loading && (
        <div className="loader-holder">
          <Spinner animation="border" variant="info" />
        </div>
      )}
    </div>
  );
};

export default Home;
