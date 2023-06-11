import fs from "fs";
import events from "events";
import readline from "readline";

class ReadTxtFileAndTransformData {
  constructor(filePath) {
    this.filePath = filePath;
    this.fileData = [];
  }

  transformData(line) {
    const key = line.match(/^\d+/)[0];
    const value = line.replace(/^\d+\.\s*/, "");
    this.fileData.push({ key, value });
  }

  async readFile() {
    try {
      const rl = readline.createInterface({
        input: fs.createReadStream(this.filePath),
        crlfDelay: Infinity,
      });

      rl.on("line", (line) => {
        this.transformData(line);
      });

      await events.once(rl, "close");

      return this.fileData;
    } catch (err) {
      console.error(err);
    }
  }
}
export default ReadTxtFileAndTransformData;
