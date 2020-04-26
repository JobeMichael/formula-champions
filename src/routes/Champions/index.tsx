import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ChampionList from "../../components/ChampionList";
import getAllChampions from "../../services/getAllChampions";
import "./Champions.css";

const Champions = () => {
  const [champions, setChampions] = useState([]) as any;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchSeasonsData = async () => {
      const startYear = 2005;
      const endYear = 2015;
      const data = await getAllChampions({ startYear, endYear });

      setChampions((prevState: any) => [...prevState, ...data]);
      setLoading(false);
    };
    fetchSeasonsData();
  }, []);

  return (
    <div className="champions-wrapper">
      <div className="champions-header">
        <h1>2005 - 2015</h1>
        <p> Formula1 races winners from 2005 to 2015.</p>
      </div>
      {champions && <ChampionList data={champions} />}
      {loading && (
        <div className="loader-holder">
          <Spinner animation="border" variant="info" />
        </div>
      )}
    </div>
  );
};

export default Champions;
