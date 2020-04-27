import { render, waitForElement } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Champions from ".";
import getAllChampions from "../../services/getAllChampions";
import { seasonChampion } from "../../__mocks__/seasonChampion";

jest.mock("../../services/getAllChampions.ts");

describe("<Champions/>", () => {
  it("renders Champions correctly", async () => {
    getAllChampions.mockReturnValue([seasonChampion]);

    const { asFragment, getByText } = render(
      <MemoryRouter>
        <Champions />
      </MemoryRouter>
    );

    await waitForElement(() => getByText("Fernando Alonso"));
    expect(asFragment()).toMatchSnapshot();
  });
});
