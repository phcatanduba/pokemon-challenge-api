interface TeamData {
  id: number;
  name: string;
  image: string;
  colors: { colorOne: string; colorTwo?: string };
  teamName: string;
}

export default TeamData;
