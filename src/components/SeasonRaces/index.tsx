import React from "react";
import { Table } from "react-bootstrap";
import { SeasonDetails } from "../../services/getSeasonDetails";
import "./SeasonRaces.css";

interface SeasonRacesProps {
  driverId: number;
  data: Array<SeasonDetails>;
}

const SeasonRaces = ({ data, driverId: ChampionId }: SeasonRacesProps) => (
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
          time,
          raceName,
          driverId,
        }: SeasonDetails) => (
          <tr key={raceName}>
            <td>{raceName}</td>
            <td>
              {name}
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
