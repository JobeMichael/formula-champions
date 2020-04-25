import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SeasonsList from "./";

const mockData = {
  season: "2006",
  points: "134",
  wins: "7",
  name: "Alonso Fernando",
  nationality: "Spanish",
  team: "Renault",
};

describe("<SeasonsList/>", () => {
  it("renders SeasonsList correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SeasonsList data={[mockData]} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
