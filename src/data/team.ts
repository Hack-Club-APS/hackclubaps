export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  color: string;
  icon: string;
  github: string;
  slack: string;
}

export const team: TeamMember[] = [
  {
    name: "Jaydev Parmar",
    role: "Founder",
    bio: "Loves shipping code and hacking",
    color: "red",
    icon: "🦖",
    github: "https://github.com/Jaydev-1510",
    slack: "https://hackclub.enterprise.slack.com/team/U0A022J58PN"
  },
  {
    name: "Keyaan Khatri",
    role: "President",
    bio: "Full-stack wizard. VIM user.",
    color: "blue",
    icon: "🧙‍♂️",
    github: "https://github.com/Keyaan-07",
    slack: "https://hackclub.enterprise.slack.com/team/U07DZ6A6CR4"
  },
  {
    name: "Aum Vyas",
    role: "Leader",
    bio: "Hardware hacker & rustacean.",
    color: "yellow",
    icon: "🧑🏻‍💻",
    github: "https://github.com/",
    slack: "https://hackclub.enterprise.slack.com/team/U09KW8WDF99"
  }
];
