import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SeasonRaces from "../../components/SeasonRaces";
import Link from "../../components/UI/Link";
import getSeasonDetails from "../../services/getSeasonDetails";

const Details = () => {
  const [seasonDetails, setSeasonDetails] = useState() as any;
  console.log("Details -> seasonDetails", seasonDetails);
  const { year } = useParams();

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
    <div>
      <Link to="/">
        <Button variant="link">Back to list</Button>
      </Link>
      {seasonDetails && <SeasonRaces data={seasonDetails} />}
    </div>
  );
};

export default Details;
