export class LatLong {
  lat: number;
  long: number;
}

export class Route {
  title: string;
  startPosition: LatLong;
  endPosition: LatLong;
}

export const routes: Route[] = [
  {
    title: 'De Osasco até Fortaleza',
    startPosition: { lat: -23.5317, long: -46.7899 },
    endPosition: { lat: -3.71839, long: -38.5434 },
  },
  {
    title: 'De São Luis até Rio de Janeiro',
    startPosition: { lat: -2.53073, long: -44.3068 },
    endPosition: { lat: -22.9081269, long: -43.1848695 },
  },
];