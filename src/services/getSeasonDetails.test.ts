import { apiSeasonResults } from "../__mocks__/apiSeasonResults";
import { seasonDetails } from "../__mocks__/seasonDetails";
import getSeasonDetails from "./getSeasonDetails";

describe("useFetch", () => {
  beforeEach(() => {});
  it("should return getSeasons data", async () => {
    fetch.mockResponse(JSON.stringify(apiSeasonResults));

    const res = await getSeasonDetails("2005");

    expect(res).toStrictEqual([seasonDetails]);
  });
});
