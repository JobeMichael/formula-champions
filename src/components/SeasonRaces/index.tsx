import React from "react";
import { Table } from "react-bootstrap";

const SeasonRaces = ({ data, driverId: ChampionId }: any) => (
  <Table responsive striped bordered hover>
    <thead>
      <tr>
        <th>Race</th>
        <th>Driver</th>
        <th>Team</th>
        <th>Nationality</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      {data.map(
        ({
          name,
          nationality,
          team,
          season,
          time,
          raceName,
          driverId,
        }: any) => (
          <tr key={raceName}>
            <td>{raceName}</td>
            <td>{name}</td>
            <td>{team}</td>
            <td>{nationality}</td>
            <td>{time}</td>
            <td>{driverId === ChampionId && "champion"}</td>
          </tr>
        )
      )}
    </tbody>
  </Table>
);

export default SeasonRaces;
