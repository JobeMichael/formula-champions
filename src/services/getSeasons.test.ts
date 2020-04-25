import getSeasons from "./getSeasons";

const mockAPIResponse = {
  MRData: {
    StandingsTable: {
      season: "2006",
      StandingsLists: [
        {
          season: "2006",
          DriverStandings: [
            {
              position: "1",
              points: "134",
              wins: "7",
              Driver: {
                driverId: "alonso",
                code: "ALO",
                givenName: "Fernando",
                familyName: "Alonso",
                nationality: "Spanish",
              },
              Constructors: [
                {
                  name: "Renault",
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const mockOutput = {
  season: "2006",
  points: "134",
  wins: "7",
  name: "Alonso Fernando",
  nationality: "Spanish",
  team: "Renault",
};

describe("useFetch", () => {
  beforeEach(() => {});
  it("should return getSeasons data", async () => {
    fetch.mockResponse(JSON.stringify(mockAPIResponse));

    const res = await getSeasons({ startYear: 2005, endYear: 2006 });

    expect(res).toStrictEqual([mockOutput, mockOutput]);
  });
});
