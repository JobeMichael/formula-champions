import React from "react";
import { Button, Table } from "react-bootstrap";
import { SeasonList } from "../../services/getSeasons";
import Link from "../UI/Link";

interface SeasonListProps {
  data: Array<SeasonList>;
}

const SeasonsList = ({ data }: SeasonListProps) => {
  const rows = data.map(
    ({
      name,
      nationality,
      wins,
      points,
      team,
      season,
      driverId,
    }: SeasonList) => (
      <tr key={season}>
        <td>{season}</td>
        <td>{name}</td>
        <td>{nationality}</td>
        <td>{team}</td>
        <td>{wins}</td>
        <td>{points}</td>
        <td>
          <Link to={`season/${season}`} state={{ driverId }}>
            <Button>Details</Button>
          </Link>
        </td>
      </tr>
    )
  );

  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Season</th>
          <th>Name</th>
          <th>Nationality</th>
          <th>Team</th>
          <th>Wins</th>
          <th>Points</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
export default SeasonsList;
