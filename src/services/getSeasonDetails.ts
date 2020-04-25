import APIService from "./APIService";

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

export const baseUrl = "http://ergast.com/api/f1";

const getSeasonDetails = async (year: string) => {
  const url = `${baseUrl}/${year}/results/1.json`;

  const res = await APIService.fetchSeasonDetailsData(url);

  return getFormattedData(res.MRData.RaceTable.Races);
};

const getFormattedData = <T>(data: T[]): Array<T> =>
  data.reduce((acc: any = [], item: any) => {
    const {
      season,
      date,
      raceName,
      Results: [
        {
          Driver: { familyName, givenName, nationality },
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
    });

    return acc;
  }, []);

export default getSeasonDetails;
