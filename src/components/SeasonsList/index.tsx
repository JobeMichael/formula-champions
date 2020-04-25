import React from "react";
import { Button, Table } from "react-bootstrap";
import { SeasonList } from "../../services/getSeasons";

interface SeasonListProps {
  data: Array<SeasonList>;
}

const SeasonsList = ({ data }: SeasonListProps) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ name, nationality, wins, points, team, season }: SeasonList) => (
            <tr key={season}>
              <td>{season}</td>
              <td>{name}</td>
              <td>{nationality}</td>
              <td>{team}</td>
              <td>{wins}</td>
              <td>{points}</td>
              <td>
                <Button>Details</Button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
};
export default SeasonsList;
