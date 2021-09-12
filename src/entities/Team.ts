import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("teams")
export default class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pokemonId: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  colorOne: string;

  @Column()
  colorTwo?: string;

  @Column()
  teamName: string;
}
