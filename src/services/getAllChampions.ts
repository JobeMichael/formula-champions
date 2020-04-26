import axios from "axios";
import httpClient from "./httpClient";

interface Period {
  startYear: number;
  endYear: number;
}

interface GetAllChampions {
  (arg: Period): Promise<Array<ChampionsList>>;
}

export interface ChampionsList {
  name: string;
  nationality: string;
  points: string;
  season: string;
  team: string;
  wins: string;
  driverId: string;
}

const getAllChampions: GetAllChampions = async ({ startYear, endYear }) => {
  const instances = [];
  const { instance } = httpClient();

  while (endYear >= startYear) {
    instances.push(instance.get(`${startYear}/driverStandings.json`));
    startYear = startYear + 1;
  }

  const response = await axios
    .all(instances)
    .then(axios.spread((...responses) => responses))
    .catch((errors) => {
      console.log("Error!");
    });

  if (response) {
    return getFormattedSeasonsData(response);
  }
  return [];
};

const getFormattedSeasonsData = <T>(apiSeasonList: T[]): Array<ChampionsList> =>
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

export default getAllChampions;
