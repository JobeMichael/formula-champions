import moxios from "moxios";
import { apiSeasonResults } from "../__mocks__/apiSeasonResults";
import { seasonDetails } from "../__mocks__/seasonDetails";
import getSeasonDetails from "./getSeasonDetails";

describe("loanCalculator", () => {
  const mockData = {
    url: "2005/results/1.json",
    response: { data: [{ id: "c51ce410c124a10e0db5e4b97fc2af39" }] },
  };
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("should axios a thing", async (done) => {
    moxios.stubRequest(mockData.url, {
      status: 200,
      responseText: apiSeasonResults,
    });
    const data = await getSeasonDetails("2005");

    expect(data).toEqual([seasonDetails]);
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
    await getSeasonDetails("2005");

    const request = moxios.requests.mostRecent();
    expect(request.config.method).toEqual("get");
    expect(request.url).toEqual(mockData.url);
    done();
  });
});
