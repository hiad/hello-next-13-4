import { readFile, writeFile } from "../helpers/file-helpers";
const FILE_PATH = "src/database.json";
const database = readFile(FILE_PATH);

function HitCounter() {
  let { hits } = JSON.parse(database);

  hits += 1;

  writeFile(
    FILE_PATH,
    JSON.stringify({
      hits,
    })
  );
  return hits;
}
export default HitCounter;
