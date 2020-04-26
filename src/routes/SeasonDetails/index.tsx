import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import SeasonRaces from "../../components/SeasonRaces";
import Link from "../../components/UI/Link";
import getSeasonDetails from "../../services/getSeasonDetails";
import "./SeasonDetails.css";

const Details = () => {
  const [seasonDetails, setSeasonDetails] = useState() as any;
  const { year } = useParams();
  const { state } = useLocation() as any;

  useEffect(() => {
    const fetchSeasonsData = async () => {
      if (year) {
        const result = await getSeasonDetails(year);
        setSeasonDetails(result);
      }
    };
    fetchSeasonsData();
  }, [setSeasonDetails, year]);

  return (
    <div className="seasons-wrapper">
      <div className="seasons-header">
        <h1>{year} Season</h1>
        <p></p>
      </div>
      <Link to="/">
        <Button variant="info">{"< Back to list"}</Button>
      </Link>
      {seasonDetails && (
        <SeasonRaces data={seasonDetails} driverId={state?.driverId || ""} />
      )}
    </div>
  );
};

export default Details;
