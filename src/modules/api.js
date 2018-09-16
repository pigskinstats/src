import Http from '@/modules/http';
import { GameDate } from '@/modules/game-date';

function viewGameMapper(teams) {
  return function ({ date, awayTeam, awayScore, homeTeam, homeScore }) {
    return {
      date: GameDate.fromIsoDate(date),
      awayTeam: { name: teams[awayTeam].name, score: awayScore },
      homeTeam: { name: teams[homeTeam].name, score: homeScore },
    };
  };
}

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

  async getTeams() {
    const teams = await this._rawTeams;
    return Object.keys(teams).map(slug => Object.assign({}, { slug: slug }, teams[slug]));
  }

  async getTeam(slug) {
    const [teams, games] = await Promise.all([this._rawTeams, this._rawGames]);
    const teamGames = games.filter(({ awayTeam, homeTeam }) => [homeTeam, awayTeam].includes(slug)).map(viewGameMapper(teams));
    return Object.assign({}, teams[slug], { games: teamGames });
  }

  async getGames() {
    const [games, teams] = await Promise.all([this._rawGames, this._rawTeams]);
    return games.map(viewGameMapper(teams));
  }
}

export default new Api(Http);
