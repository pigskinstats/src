import Http from '@/modules/http';
import { GameDate } from '@/modules/game-date';

class Api {
  constructor(http) {
    this._http = http;
  }

  get _rawTeams() {
    return this._http.getJson('/static/wolfe-scores/2018/teams-db.json');
  }

  get _rawGames() {
    return this._http.getJson('/static/wolfe-scores/2018/games-db.json');
  }

  async getGames() {
    const [games, teams] = await Promise.all([this._rawGames, this._rawTeams]);
    const result = games.map(({ date, awayTeam, awayScore, homeTeam, homeScore }) => ({
      date: GameDate.fromIsoDate(date),
      awayTeam: { name: teams[awayTeam].name, score: awayScore },
      homeTeam: { name: teams[homeTeam].name, score: homeScore },
    }));
    return result;
  }
}

export default new Api(Http);
