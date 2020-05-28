import re
import requests


SCORES_URL = 'http://prwolfe.bol.ucla.edu/cfootball/scores.htm'
REGEX = re.compile(r'<pre>(.*?)</pre>', re.MULTILINE | re.DOTALL | re.IGNORECASE)
OUT_PATH = '../public/static/wolfe-scores/2019/current.txt'


def download():
    result = requests.get(SCORES_URL)
    return result.text


def parse_html(content):
    matches = REGEX.search(content)
    if matches is None:
        raise ValueError('Cannot parse content')
    return matches.group(1)


def sanitize(content):
    lines = content.split('\n')
    clean_lines = (line.rstrip() for line in lines if re.match(r'^\w*$', line) is None)
    return '\n'.join(clean_lines)


def write_out(content):
    with open(OUT_PATH, 'w') as f:
        f.write(content)


def main():
    downloaded = download()
    score_table = parse_html(downloaded)
    result = sanitize(score_table)
    write_out(result)
    print('Done')


if __name__ == "__main__":
    main()
