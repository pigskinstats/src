
const parseRegex = /^(\d+\-[A-Za-z]+\-\d+)\s+(.+?)\s\s+(\d+)\s+(.+?)\s\s+(\d+)/;

function parseLine(line) {
  const parsed = parseRegex.exec(line);
  if(!parsed) console.error(line);
  return {
    date: parsed[1],
    awayTeam: {
      name: parsed[2],
      score: Number(parsed[3])
    },
    homeTeam: {
      name: parsed[4],
      score: Number(parsed[5])
    },
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
