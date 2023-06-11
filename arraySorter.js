class ArraySorter {
  constructor(fileData) {
    this.fileData = fileData;
    this.sortedData = [];
  }

  sortData() {
    this.sortedData = this.fileData.sort((a, b) => {
      const charA = a.value.trim().charAt(0);
      const charB = b.value.trim().charAt(0);
      if (charA === charB) {
        const lastCharA = a.value.trim().slice(-1);
        const lastCharB = b.value.trim().slice(-1);
        if (lastCharA === lastCharB) {
          const numberA = parseInt(a.value.match(/\d+/)[0]);
          const numberB = parseInt(b.value.match(/\d+/)[0]);
          return numberA - numberB;
        }
        return lastCharA.localeCompare(lastCharB);
      }
      return charA.localeCompare(charB);
    });
    return this.sortedData;
  }
}
export default ArraySorter;
