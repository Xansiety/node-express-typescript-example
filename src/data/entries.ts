import { Entry, Visibility, Weather } from '../models/entries.model'

export const Entries: Entry[] = [
  {
    id: '1',
    date: '2020-01-01',
    weather: Weather.rainy,
    visibility: Visibility.bad,
    comment: 'Pretty scary flight, but I survived!',
    flightNumber: 847
  },
  {
    id: '2',
    date: '2020-01-02',
    weather: Weather.rainy,
    visibility: Visibility.good,
    comment: 'Pretty scary flight, but I survived THANKS!!!',
    flightNumber: 965
  },
  {
    id: '3',
    date: '2020-01-03',
    weather: Weather.rainy,
    visibility: Visibility.bad,
    comment: "God, please help me don't die!",
    flightNumber: 123
  },
  {
    id: '4',
    date: '2020-01-04',
    weather: Weather.sunny,
    visibility: Visibility.good,
    comment: 'Why not all days are like this?',
    flightNumber: 456
  },
  {
    id: '5',
    date: '2020-01-05',
    weather: Weather.hurricane,
    visibility: Visibility.goodhelpme,
    comment:
      "I'm not going to fly today, I'm going to die! God don't forget me!",
    flightNumber: 789
  },
  {
    id: '6',
    date: '2020-01-06',
    weather: Weather.sunny,
    visibility: Visibility.good,
    comment: "I'm alive! I'm alive! I'm alive!",
    flightNumber: 321
  }
]
