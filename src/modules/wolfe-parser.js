import { GameDate } from './game-date';
import { tryNumber } from './util';

const parseRegex = /^(\d+\-[A-Za-z]+\-\d+)\s+(.+?)\s\s+([^\s]+)\s+(.+?)\s\s+([^\s]+)/;

function parseLine(line) {
  const parsed = parseRegex.exec(line);
  if(!parsed) console.error(line);
  try {
    return {
      date: GameDate.fromWolfeDate(parsed[1]),
      awayTeam: {
        name: parsed[2],
        score: tryNumber(parsed[3])
      },
      homeTeam: {
        name: parsed[4],
        score: tryNumber(parsed[5])
      },
    };
  } catch(e) {
    return undefined;
  }
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
      .filter(x => x)
      .reduce((agg, item) => { agg.push(item); return agg; }, []);

    return result;
  }
}

export default new Parser(parseLine);
