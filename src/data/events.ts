export interface Event {
  date: string;
  title: string;
  type: string;
  desc: string;
}

export const events: Event[] = [
  {
    date: "Mar 12, 2026",
    title: "Intro to Web Dev",
    type: "Workshop",
    desc: "Build your first personal website using HTML & CSS."
  },
  {
    date: "Mar 19, 2026",
    title: "Game Jam Kickoff",
    type: "Hackathon",
    desc: "We'll spend the afternoon brainstorming ideas for our club game jam."
  },
  {
    date: "Mar 26, 2026",
    title: "Hardware Hacking",
    type: "Demo",
    desc: "Tearing apart old printers and learning how motors work."
  }
];
