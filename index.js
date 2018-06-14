const fs = require('fs');

const data = fs.readFileSync('item_skins_list.html.md', 'utf8');
const lines = data.split(/\r\n|\r|\n/g);

const output = {};

let activeItem = '';

for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];

  const item = /^##.+\((.+)\)/.exec(line);
  if (item) {
    activeItem = item[1];
    output[activeItem] = [];
    continue;
  }

  const entry = /^\| (\d+)/.exec(line);
  if (entry) {
    output[activeItem].push(parseInt(entry[1]));
    continue;
  }
}

fs.writeFileSync('processed_data.json', JSON.stringify(output, null, 2));
