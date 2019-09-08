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

function recordCounter(slug) {
  return function(result, game) {
    const key = recordKey(game, slug);
    if(key) {
      result[key] += 1;
    }
    return result;
  }
}

class Api {
  async _getRawTeams(year) {
    const url = `/static/wolfe-scores/${year}/teams-db.json`;
    return await axios.get(url).then(({ data }) => data);
  }

  async _getRawGames(year) {
    const url = `/static/wolfe-scores/${year}/games-db.json`;
    return await axios.get(url).then(({ data }) => data);
  }

  async getTeams({ season }) {
    const teams = await this._getRawTeams(season);
    return Object.keys(teams).map(slug => Object.assign({ slug }, teams[slug]));
  }

  async getTeam({ slug, season }) {
    const [ teams, games ] = await Promise.all([this._getRawTeams(season), this._getRawGames(season)]);
    const teamGames = games.filter(({ awayTeam, homeTeam }) => [homeTeam, awayTeam].includes(slug));

    return Object.assign({},
      teams[slug],
      { games: teamGames.map(viewGameMapper(teams)) },
      { record: teamGames.reduce(recordCounter(slug), { wins: 0, losses: 0 }) }
    );
  }

  async getGames({ season }) {
    const [ games, teams ] = await Promise.all([this._getRawGames(season), this._getRawTeams(season)]);
    return games.map(viewGameMapper(teams));
  }

  getSeasons() {
    return [ 2018, 2019 ];
  }
}

export default new Api();
