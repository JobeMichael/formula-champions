import axios from "axios";
import httpClient from "./httpClient";

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
  const instances = [];
  const { instance } = httpClient();

  while (endYear >= startYear) {
    instances.push(instance.get(`${startYear}/driverStandings.json`));
    startYear = startYear + 1;
  }

  const response = await axios
    .all(instances)
    .then(axios.spread((...responses) => responses))
    .catch((errors) => {});

  return getFormattedSeasonsData(response as any);
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
    } = item.data.MRData.StandingsTable;

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
