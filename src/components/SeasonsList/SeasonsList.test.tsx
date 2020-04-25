import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { seasonChampion } from "../../__mocks__/seasonChampion";
import SeasonsList from "./";

describe("<SeasonsList/>", () => {
  it("renders SeasonsList correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <SeasonsList data={[seasonChampion]} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
