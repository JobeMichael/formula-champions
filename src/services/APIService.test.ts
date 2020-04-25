import APIService from "./APIService";

beforeEach(() => {
  // if you have an existing `beforeEach` just add the following line to it
  fetch.resetMocks();
});

describe("useFetch", () => {
  it("should return getSeasons data", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
    const res = await APIService.fetchSeasonsData(["__URL__"]);

    expect(res[0].data).toEqual("12345");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("__URL__");
  });

  it("getSeasons throw errors during API call", async () => {
    fetch.mockReject("Error");
    const res = await APIService.fetchSeasonsData(["__URL__"]);

    expect(res).toEqual("Error");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual("__URL__");
  });
});
