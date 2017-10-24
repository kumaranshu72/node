var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err,contents) {
    len=contents.split('\n');
    console.log(len.length-1);

});
