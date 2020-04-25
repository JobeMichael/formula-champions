import React from "react";
import { Table } from "react-bootstrap";

const SeasonRaces = ({ data }: any) => (
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
      {data.map(({ name, nationality, team, season, time, raceName }: any) => (
        <tr key={raceName}>
          <td>{raceName}</td>
          <td>{name}</td>
          <td>{team}</td>
          <td>{nationality}</td>
          <td>{time}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default SeasonRaces;
