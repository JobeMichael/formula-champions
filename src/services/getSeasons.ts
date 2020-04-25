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
  driverId: string;
}

const getSeasons: GetSeasons = async ({ startYear, endYear }) => {
  const seasonUrls = [];

  while (endYear >= startYear) {
    seasonUrls.push(`${startYear}/driverStandings.json`);
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
              Driver: { familyName, givenName, nationality, driverId },
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
      driverId,
    });

    return acc;
  }, []);

export default getSeasons;
