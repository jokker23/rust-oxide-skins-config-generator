const fs = require('fs');

let data = fs.readFileSync('item_skins_list.md', 'utf8');
let lines = data.split(/\r\n|\r|\n/g);

let output = {};
let activeItem = '';

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  let item = /^(?:##.+\()(.+)(?:\))/.exec(line);
  if (item) {
    activeItem = item[1];
    output[activeItem] = [];
    continue;
  }

  let entry = /^(?:\| )(\d+)/.exec(line);
  if (entry) {
    output[activeItem].push(parseInt(entry[1]));
    continue;
  }
}

fs.writeFileSync('processed_data.txt', JSON.stringify(output, null, '  '));
