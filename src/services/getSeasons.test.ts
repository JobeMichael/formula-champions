import { apiDriverStandings } from "../__mocks__/apiDriverStandings";
import { seasonChampion } from "../__mocks__/seasonChampion";
import getSeasons from "./getSeasons";

describe("useFetch", () => {
  beforeEach(() => {});
  it("should return getSeasons data", async () => {
    fetch.mockResponse(JSON.stringify(apiDriverStandings));

    const res = await getSeasons({ startYear: 2005, endYear: 2006 });

    expect(res).toStrictEqual([seasonChampion, seasonChampion]);
  });
});
