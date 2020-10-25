import { Injectable } from "@angular/core";
import * as fs from "fs";

export interface IFileConfig<T = any> {
  filename: string;
  fileNum: number;
  content: T;
}

@Injectable({
  providedIn: "root",
})
export class FsService {
  constructor() {}

  public getDataFromFileSystem(path = "../"): IFileConfig[] {
    const dir: string[] = fs.readdirSync(path);

    return dir
      .filter((f) => f.includes(".json"))
      .map((filename) => ({
        filename,
        content: fs.readFileSync(path + filename),
      }))
      .map((f: any) => ({ ...f, content: JSON.parse(f.content) }));
  }
}
