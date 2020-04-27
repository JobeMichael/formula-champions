import { cleanup, render, waitForElement } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import Champions from ".";
import { AppContext } from "../../context/AppContext";
import getAllChampions from "../../services/getAllChampions";
import { seasonChampion } from "../../__mocks__/seasonChampion";

jest.mock("../../services/getAllChampions.ts");

describe("<Champions/>", () => {
  const setAllChampions = jest.fn();

  beforeEach(() => {
    setAllChampions.mockRestore();

    cleanup();
  });

  const setUp = (context) => (
    <AppContext.Provider value={context}>
      <MemoryRouter>
        <Champions />
      </MemoryRouter>
    </AppContext.Provider>
  );

  it("should get data from context and render component properly", async () => {
    const mockContext = {
      allChampions: [seasonChampion],
      setAllChampions: () => {},
    };
    const { asFragment, getByText } = render(setUp(mockContext));

    await waitForElement(() => getByText("Fernando Alonso"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should get data from API", async () => {
    getAllChampions.mockReturnValue([seasonChampion]);
    const mockContext = {
      allChampions: [],
      setAllChampions: setAllChampions,
    };
    const { getByText } = render(setUp(mockContext));
    await waitForElement(() => getByText("Nationality"));

    expect(getAllChampions).toBeCalledTimes(1);
  });
});
