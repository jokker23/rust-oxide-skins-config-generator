const fs = require('fs');

var output = {};

var currentItem = '';

fs.readFile('data.txt', 'utf8', function (error, data) {
  if (error)
    return console.log(err);

  var lines = data.split(/\r\n|\r|\n/g);

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    var match = /\(([^)]+)\)/.exec(line);
    if (match) {
      currentItem = match[1];
      output[currentItem] = [];

      continue;
    }

    if (line.startsWith('| ')) {
      var match = /([0-9]+)(\s+[|])/.exec(line);

      if (match) {
        var match2 = /([0-9]+)/.exec(match[1])

        if (match2) {
          output[currentItem].push(parseInt(match2[1]));
        }
      }
    }
  }

  output = JSON.stringify(output);

  fs.writeFile('processed_data.txt', output, function(error) {
    if (error)
      return console.log(error);
  });
});
