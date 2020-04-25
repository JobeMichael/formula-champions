import APIService from "./APIService";

interface GetSeasonsArg {
  startYear: number;
  endYear: number;
}

interface GetSeasons {
  (arg: GetSeasonsArg): Promise<Array<SeasonList>>;
}

export interface SeasonList {
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

  const res = await APIService.fetchSeasonsData(seasonUrls);
  return getFormattedSeasonsData<Array<SeasonList>>(res);
};

const getFormattedSeasonsData = <T>(apiSeasonList: T[]): Array<SeasonList> =>
  apiSeasonList.reduce((acc: any = [], item: any) => {
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
