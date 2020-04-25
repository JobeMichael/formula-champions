import React from "react";
import { Table } from "react-bootstrap";
import "./SeasonRaces.css";

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
            <td>
              {name}{" "}
              {driverId === ChampionId && (
                <span className="star">&#10026;</span>
              )}
            </td>
            <td>{team}</td>
            <td>{nationality}</td>
            <td>{time}</td>
          </tr>
        )
      )}
    </tbody>
  </Table>
);

export default SeasonRaces;
