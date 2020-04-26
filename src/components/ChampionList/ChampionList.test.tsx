import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ChampionList from ".";
import { seasonChampion } from "../../__mocks__/seasonChampion";

describe("<ChampionList/>", () => {
  it("renders ChampionList correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ChampionList data={[seasonChampion]} />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
