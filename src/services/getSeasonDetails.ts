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
  time: string;
  raceName: string;
  driverId: number;
}

const getSeasonDetails = async (year: string) => {
  const { instance } = httpClient();
  const url = `${year}/results/1.json`;
  const response = await instance
    .get(url)
    .catch((error) => console.log("Error!"));

  if (response) {
    return getFormattedData(response.data.MRData.RaceTable.Races);
  }
  return [];
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
      name: `${givenName} ${familyName}`,
      season,
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
