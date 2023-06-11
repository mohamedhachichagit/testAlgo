import { exit } from "process";
import ReadTxtFileAndTransformData from "./readTxtFileAndTransformData.js";
import FileWriter from "./fileWriter.js";
import ArraySorter from "./arraySorter.js";

(async () => {
  try {
    let sourceFilePath;

    if (process.argv.length > 2) {
      sourceFilePath = process.argv.at(2);
    } else {
      console.error("please add the file path");
      exit(1);
    }

    const reader = new ReadTxtFileAndTransformData(sourceFilePath);
    const fileData = await reader.readFile();
    const arraySorter = new ArraySorter(fileData);
    const sortedData = arraySorter.sortData();
    const writer = new FileWriter("output.txt", sortedData);
    await writer.writeFile();
  } catch (err) {
    console.error(err);
  }
})();
