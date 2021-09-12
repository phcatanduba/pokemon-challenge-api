import { getRepository } from "typeorm";
import Team from "../entities/Team";
import TeamData from "../interfaces/team";

export async function create(team: TeamData[]) {
  team.forEach(async (pokemon) => {
    const { name, image, id, colors, teamName } = pokemon;

    await getRepository(Team).insert({
      pokemonId: id,
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
  const teamsName: any = {};
  const result = [];
  teams.forEach((team, i) => {
    if (!(team.teamName in teamsName)) {
      teamsName[team.teamName] = [team];
    } else if (teamsName[team.teamName].length === 6) {
      teamsName[i] = [team];
    } else {
      teamsName[team.teamName].push(team);
    }
  });

  for (let key in teamsName) {
    result.push(teamsName[key]);
  }
  return result;
}
