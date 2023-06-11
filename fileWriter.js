import fs from "fs";
import path from "path";

class FileWriter {
  constructor(outputFileName, sortedData) {
    this.outputFileName = outputFileName;
    this.sortedData = sortedData;
  }

  async writeFile() {
    try {
        const currentDir = process.cwd();
        const filePathToWrite = path.join(currentDir, this.outputFileName);

        await fs.promises.writeFile(filePathToWrite, '');

      const writeStream = fs.createWriteStream(filePathToWrite, {
        encoding: "utf8",
      });

      this.sortedData.forEach((elemnt) => {
        writeStream.write(elemnt.key + ", ");
      });

      writeStream.end();

      writeStream.on("finish", () => {
        console.info(`output successfully written to ${filePathToWrite}`);
      });
    } catch (err) {
      console.error(err);
    }
  }
}
export default FileWriter;
