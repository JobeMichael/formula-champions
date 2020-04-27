import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ChampionList from "../../components/ChampionList";
import { AppContext } from "../../context/AppContext";
import getAllChampions from "../../services/getAllChampions";
import "./Champions.css";

const Champions = () => {
  const [loading, setLoading] = useState(false);
  const { setAllChampions, allChampions } = useContext(AppContext);

  useEffect(() => {
    const fetchSeasonsData = async () => {
      setLoading(true);
      const startYear = 2005;
      const endYear = 2015;
      const data = await getAllChampions({ startYear, endYear });

      setAllChampions((prevState: any) => [...prevState, ...data]);
      setLoading(false);
    };

    if (allChampions.length === 0) {
      fetchSeasonsData();
    }
  }, []);

  return (
    <div className="champions-wrapper">
      <div className="champions-header">
        <h1>2005 - 2015</h1>
        <p> Formula1 races winners from 2005 to 2015.</p>
      </div>
      {allChampions && <ChampionList data={allChampions} />}
      {loading && (
        <div className="loader-holder">
          <Spinner animation="border" variant="info" />
        </div>
      )}
    </div>
  );
};

export default Champions;
