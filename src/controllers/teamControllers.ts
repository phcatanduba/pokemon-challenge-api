import { Request, Response } from "express";

import TeamData from "../interfaces/team";
import * as teamServices from "../services/teamServices";

export async function create(req: Request, res: Response) {
  const team = req.body as TeamData[];
  try {
    await teamServices.create(team);
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function get(req: Request, res: Response) {
  try {
    await teamServices.get();
    res.sendStatus(200);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
