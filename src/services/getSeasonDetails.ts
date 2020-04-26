import httpClient from "./httpClient";

interface GetSeasonDetails {
  (year: number): Promise<Array<SeasonDetails>>;
}

export interface SeasonDetails {
  name: string;
  nationality: string;
  points: string;
  season: string;
  team: string;
  wins: string;
}

const getSeasonDetails = async (year: string) => {
  const { instance } = httpClient();
  const url = `${year}/results/1.json`;
  const { data } = await instance.get(url);

  return getFormattedData(data.MRData.RaceTable.Races);
};

const getFormattedData = <T>(data: T[]): Array<T> =>
  data.reduce((acc: any = [], item: any) => {
    const {
      season,
      date,
      raceName,
      Results: [
        {
          Driver: { familyName, givenName, nationality, driverId },
          Constructor: { name: team },
          Time: { time },
        },
      ],
    } = item;

    acc.push({
      season,
      name: `${familyName} ${givenName}`,
      nationality,
      date,
      raceName,
      team,
      time,
      driverId,
    });

    return acc;
  }, []);

export default getSeasonDetails;
