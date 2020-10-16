import { Injectable } from "@angular/core";
import * as fs from "fs";

@Injectable({
  providedIn: "root",
})
export class FsService {
  constructor() {}

  public getDataFromFileSystem(path = "../"): any[] {
    const dir: string[] = fs.readdirSync(path);

    return dir
      .filter((f) => f.includes(".json"))
      .map((filename) => fs.readFileSync(path + filename))
      .map((f: any) => JSON.parse(f));
  }
}
