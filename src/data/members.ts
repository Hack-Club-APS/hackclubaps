export interface Member {
  id: string;
  name: string;
  github: string;
  slack: string;
  bio: string;
  pfp: string;
  color: string;
}

export const members: Member[] = [
  {
    id: "1",
    name: "John Doe",
    github: "johndoe",
    slack: "",
    bio: "Software Engineer",
    pfp: "☠️",
    color: "orange"
  },
  {
    id: "2",
    name: "Jane Smith",
    github: "janesmith",
    slack: "",
    bio: "UX Designer",
    pfp: "🤑",
    color: "yellow"
  },
  {
    id: "3",
    name: "Alice Johnson",
    github: "alicejohnson",
    slack: "",
    bio: "Data Scientist",
    pfp: "👽",
    color: "green"
  },
  {
    id: "4",
    name: "Bob Brown",
    github: "bobbrown",
    slack: "",
    bio: "Full Stack Developer",
    pfp: "👻",
    color: "violet"
  }
];
