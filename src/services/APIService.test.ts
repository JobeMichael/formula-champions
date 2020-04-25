import APIService from "./APIService";

beforeEach(() => {
  fetch.resetMocks();
});

describe("APIService", () => {
  describe("getSeasons", () => {
    it("should return success data", async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
      const res = await APIService.fetchSeasonsData(["__URL__"]);

      expect(res[0].data).toEqual("12345");
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual("__URL__");
    });

    it("should throw error, if API fails", async () => {
      fetch.mockReject("Error");
      const res = await APIService.fetchSeasonsData(["__URL__"]);

      expect(res).toEqual("Error");
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual("__URL__");
    });
  });

  describe("getSeasonDetails", () => {
    it("should return success data", async () => {
      fetch.mockResponseOnce(JSON.stringify({ data: "12345" }));
      const res = await APIService.fetchSeasonDetailsData("__URL__");

      expect(res.data).toEqual("12345");
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual("__URL__");
    });

    it("should throw error, if API fails", async () => {
      fetch.mockReject("Error");
      const res = await APIService.fetchSeasonDetailsData("__URL__");

      expect(res).toEqual("Error");
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual("__URL__");
    });
  });
});
