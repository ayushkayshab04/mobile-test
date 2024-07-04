export interface Event {
    title: string;
    time: string;
    location: string;
    image: any; // Since `require` returns any type in TypeScript
  }