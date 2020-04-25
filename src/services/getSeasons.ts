import APIService from "./APIService";

interface GetSeasonsArg {
  startYear: number;
  endYear: number;
}

interface GetSeasons {
  (arg: GetSeasonsArg): Promise<Array<Response>>;
}

interface Response {
  name: string;
  nationality: string;
  points: string;
  season: string;
  team: string;
  wins: string;
}

export const baseUrl = "http://ergast.com/api/f1";

const getSeasons: GetSeasons = async ({ startYear, endYear }) => {
  const seasonUrls = [];

  while (endYear >= startYear) {
    seasonUrls.push(`${baseUrl}/${startYear}/driverStandings.json`);
    startYear = startYear + 1;
  }

  return getFormattedSeasonsData(
    await APIService.fetchSeasonsData(seasonUrls)
  ) as Array<Response>;
};

const getFormattedSeasonsData = <T>(apiResponse: T[]): Array<Response> =>
  apiResponse.reduce((acc: any = [], item: any) => {
    const {
      season,
      StandingsLists: [
        {
          DriverStandings: [
            {
              points,
              wins,
              Driver: { familyName, givenName, nationality },
              Constructors: [{ name: team }],
            },
          ],
        },
      ],
    } = item.MRData.StandingsTable;

    acc.push({
      season,
      points,
      wins,
      name: `${familyName} ${givenName}`,
      nationality,
      team,
    });

    return acc;
  }, []);

export default getSeasons;
