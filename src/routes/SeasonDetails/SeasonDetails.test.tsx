import { render, waitForElement } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import SeasonDetails from ".";
import getSeasonDetails from "../../services/getSeasonDetails";
import { seasonDetails } from "../../__mocks__/seasonDetails";

jest.mock("../../services/getSeasonDetails.ts");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    year: "2005",
  }),
}));

describe("<SeasonDetails/>", () => {
  it("renders SeasonDetails correctly", async () => {
    getSeasonDetails.mockReturnValue([seasonDetails]);

    const { asFragment, getByText } = render(
      <MemoryRouter>
        <SeasonDetails />
      </MemoryRouter>
    );

    await waitForElement(() => getByText("Fisichella Giancarlo"));
    expect(asFragment()).toMatchSnapshot();
  });
});
