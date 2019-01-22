import axios from 'axios';
import { GameDate } from '@/modules/game-date';

function viewGameMapper(teams) {
  return function ({ date, awayTeam, awayScore, homeTeam, homeScore }) {
    return {
      date: GameDate.fromIsoDate(date),
      awayTeam: { slug: awayTeam, name: teams[awayTeam].name, score: awayScore },
      homeTeam: { slug: homeTeam, name: teams[homeTeam].name, score: homeScore },
    };
  };
}

function recordKey(game, slug) {
  const getKey = (gameSlug) => gameSlug === slug ? 'this' : 'other';
  const scores = {};
  scores[getKey(game.homeTeam)] = game.homeScore;
  scores[getKey(game.awayTeam)] = game.awayScore;
  if(scores.this === undefined) {
    // no score available
    return undefined;
  }
  if(scores.this === scores.away) {
    return 'tie';
  }
  return scores.this > scores.other ? 'wins' : 'losses';
}

class Api {
  async _getRawTeams() {
    return await axios.get('/static/wolfe-scores/2018/teams-db.json').then(({ data }) => data);
  }

  async _getRawGames() {
    return await axios.get('/static/wolfe-scores/2018/games-db.json').then(({ data }) => data);
  }

  async getTeams() {
    const teams = await this._getRawTeams();
    return Object.keys(teams).map(slug => Object.assign({ slug }, teams[slug]));
  }

  async getTeam(slug) {
    const [teams, games] = await Promise.all([this._getRawTeams(), this._getRawGames()]);
    const teamGames = games.filter(({ awayTeam, homeTeam }) => [homeTeam, awayTeam].includes(slug));

    const record = teamGames.reduce((result, game) => { 
      const key = recordKey(game, slug);
      if(key) {
        result[key] += 1;
      }
      return result;
    }, { wins: 0, losses: 0 });

    return Object.assign({},
      teams[slug],
      { games: teamGames.map(viewGameMapper(teams)) },
      { record: record }
    );
  }

  async getGames() {
    const [games, teams] = await Promise.all([this._getRawGames(), this._getRawTeams()]);
    return games.map(viewGameMapper(teams));
  }
}

export default new Api();
