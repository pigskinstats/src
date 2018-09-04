
const parseRegex = /^(\d+\-[A-Za-z]+\-\d+)\s+(.+?)\s\s+(\d+)\s+(.+?)\s\s+(\d+)/;

function parseLine(line) {
  const parsed = parseRegex.exec(line);
  if(!parsed) console.error(line);
  const dateString = parsed[1];
  const scores = {};
  scores[parsed[2]] = Number(parsed[3]);
  scores[parsed[4]] = Number(parsed[5]);
  return {
    date: dateString,
    scores: scores,
  };
}

class Parser {
  constructor(lineParser) {
    this.lineParser = lineParser;
  }

  parse(data) {
    const result = data
      .split('\n')
      .splice(3)
      .filter(x => x)
      .map(this.lineParser)
      .reduce((agg, item) => { agg.push(item); return agg; }, []);

    return result;
  }
}

export default new Parser(parseLine);
