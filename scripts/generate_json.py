import json
import re
from datetime import date


INPUT = '../static/wolfe-scores/2019/current.txt'
GAMES_PATH = '../static/wolfe-scores/2019/games-db.json'
TEAMS_PATH = '../static/wolfe-scores/2019/teams-db.json'
ROW_REGEX = re.compile(r'^(.{9}) (.{27}) (.{2}) (.{27}) (.{2}) ?(.*)?$')
DATE_REGEX = re.compile(r'^(\d+)-(.+)-(\d+)')


NORMALIZATIONS = [
    ('San JosÃ© St', 'San Jose St'),
]


def try_int(value, default):
    try:
        return int(value)
    except:
        return default


def get_data():
    with open(INPUT, 'r') as f:
        return f.readlines()

def save_json(data, path):
    with open(path, 'w') as f:
        json.dump(data, f)


def parse_date(value):
    MONTHS = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sep': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12,
    }
    matches = DATE_REGEX.search(value)
    return date(
        year=(2000 + int(matches.group(3))),
        month=MONTHS[matches.group(2)],
        day=int(matches.group(1)),
    )


def parse_row(teams, row):
    try:
        matches = ROW_REGEX.search(row)
        result = {
            'date': parse_date(matches.group(1).strip()).isoformat(),
            'awayTeam': teams.get_slug(matches.group(2).strip()),
            'awayScore': try_int(matches.group(3).strip(), None),
            'homeTeam': teams.get_slug(matches.group(4).strip()),
            'homeScore': try_int(matches.group(5).strip(), None),
            'neutralLocation': matches.group(6).strip() or None,
        }
        return { k:v for (k,v) in result.items() if v is not None }
    except:
        print('Cannot parse row')
        print(row)
        raise


def parse_data(teams, data):
    data_iter = iter(data)
    for _ in range(3):
        next(data_iter)
    for row in data_iter:
        for norm in NORMALIZATIONS:
            row = row.replace(norm[0], norm[1])
        yield parse_row(teams, row)

class Teams(object):
    def __init__(self):
        self._text_to_slug = {}

    def _to_slug(self, text):
        result = text.lower()
        result = result.replace(' ', '-')
        result = re.sub(r'[^a-zA-Z0-9\-]', '', result)
        result = re.sub(r'\-{2,}', '-', result)
        return result

    def get_slug(self, text):
        slug = self._text_to_slug.get(text)
        if slug is None:
            slug = self._to_slug(text)
            self._text_to_slug[text] = slug
        return slug

    def to_dict(self):
        return {  slug: { 'name': name } for name, slug in self._text_to_slug.items() }


def main():
    data = get_data()
    teams = Teams()
    data = list(parse_data(teams, data))
    save_json(data, GAMES_PATH)
    save_json(teams.to_dict(), TEAMS_PATH)
    print('Done')


if __name__ == "__main__":
    main()
