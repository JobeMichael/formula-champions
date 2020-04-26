import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SeasonRaces from ".";
import { seasonDetails } from "../../__mocks__/seasonDetails";

describe("<SeasonRaces/>", () => {
  it("renders SeasonRaces correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SeasonRaces data={[seasonDetails]} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("highlight the row when driver is the champion", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SeasonRaces data={[seasonDetails]} driverId="fisichella" />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
