import { getRepository } from "typeorm";
import Team from "../entities/Team";
import TeamData from "../interfaces/team";

export async function create(team: TeamData[]) {
  team.forEach(async (pokemon) => {
    const { name, image, id, colors, teamName } = pokemon;
    await getRepository(Team).insert({
      id,
      name,
      image,
      colorOne: colors.colorOne,
      colorTwo: colors.colorTwo,
      teamName,
    });
  });
  return team;
}

export async function get() {
  const teams = await getRepository(Team).find();
  return teams;
}
