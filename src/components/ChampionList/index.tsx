import React from "react";
import { Button, Table } from "react-bootstrap";
import { ChampionsList } from "../../services/getAllChampions";
import Link from "../UI/Link";
import "./ChampionList.css";

interface ChampionListProps {
  data: Array<ChampionsList>;
}

const ChampionList = ({ data }: ChampionListProps) => {
  const rows = data.map(
    ({
      name,
      nationality,
      wins,
      points,
      team,
      season,
      driverId,
    }: ChampionsList) => (
      <tr key={season}>
        <td>{season}</td>
        <td>{name}</td>
        <td>{nationality}</td>
        <td>{team}</td>
        <td>{wins}</td>
        <td>{points}</td>
        <td className="button-holder">
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
export default ChampionList;
