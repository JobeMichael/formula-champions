import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <h1>Details page</h1>
    </div>
  );
};

export default Details;
