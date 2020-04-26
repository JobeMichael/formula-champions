import moxios from "moxios";
import { apiDriverStandings } from "../__mocks__/apiDriverStandings";
import { seasonChampion } from "../__mocks__/seasonChampion";
import getAllChampions from "./getAllChampions";

describe("getAllChampions", () => {
  const mockData = {
    url: "2005/driverStandings.json",
    response: { data: [{ id: "c51ce410c124a10e0db5e4b97fc2af39" }] },
  };
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("should returns success data", async (done) => {
    moxios.stubRequest(mockData.url, {
      status: 200,
      responseText: apiDriverStandings,
    });
    const data = await getAllChampions({ startYear: 2005, endYear: 2005 });

    expect(data).toEqual([seasonChampion]);
    const request = moxios.requests.mostRecent();
    expect(request.config.method).toEqual("get");
    expect(request.url).toEqual(mockData.url);
    done();
  });

  it("should returns error when API fails", async (done) => {
    moxios.stubRequest(mockData.url, {
      status: 404,
      error: null,
    });
    await getAllChampions({ startYear: 2005, endYear: 2005 });

    const request = moxios.requests.mostRecent();
    expect(request.config.method).toEqual("get");
    expect(request.url).toEqual(mockData.url);
    done();
  });
});
