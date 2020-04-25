export const apiSeasonResults = {
  MRData: {
    xmlns: "http://ergast.com/mrd/1.4",
    series: "f1",
    url: "http://ergast.com/api/f1/2005/results/1.json",
    limit: "30",
    offset: "0",
    total: "19",
    RaceTable: {
      season: "2005",
      position: "1",
      Races: [
        {
          season: "2005",
          round: "1",
          url: "http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix",
          raceName: "Australian Grand Prix",
          Circuit: {
            circuitId: "albert_park",
            url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
            circuitName: "Albert Park Grand Prix Circuit",
            Location: {
              lat: "-37.8497",
              long: "144.968",
              locality: "Melbourne",
              country: "Australia",
            },
          },
          date: "2005-03-06",
          time: "14:00:00Z",
          Results: [
            {
              number: "6",
              position: "1",
              positionText: "1",
              points: "10",
              Driver: {
                driverId: "fisichella",
                code: "FIS",
                url: "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
                givenName: "Giancarlo",
                familyName: "Fisichella",
                dateOfBirth: "1973-01-14",
                nationality: "Italian",
              },
              Constructor: {
                constructorId: "renault",
                url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
                name: "Renault",
                nationality: "French",
              },
              grid: "1",
              laps: "57",
              status: "Finished",
              Time: {
                millis: "5057336",
                time: "1:24:17.336",
              },
              FastestLap: {
                rank: "2",
                lap: "55",
                Time: {
                  time: "1:25.994",
                },
              },
            },
          ],
        },
      ],
    },
  },
};
