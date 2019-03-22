exports.read = function (table, rows, columns, clog) {
    if (rows !== Number(rows) || rows === 0 || columns !== Number(columns) || columns === 0 || table !== String(table)) {
        throw 'error: wrong input type';
    }
    let row = table.split('%%');
    if (clog == true) { console.log("table.js: table read"); }
    return row[columns - 1].split('$$')[rows - 1];
};
exports.write = function (table, rows, columns, text, clog) {
    if (rows !== Number(rows) || rows === 0 ||A columns !== Number(columns) || columns === 0 || text !== String(text) || table !== String(table)) {
        throw 'error: wrong input type';
    }
    if (text.replace(/\$\$/g, "-").replace(/\%\%/g, "-") !== text) {
      throw 'error: text contains "%%" or "$$"';
    }
    let row = table.split('$$');
    let target = row[columns].split('%%');
    target[rows] = text;
    row[columns] = target.join('%%');
    if (clog == true) { console.log("table.js: table modified"); }
    return row.join('$$');
};
exports.create = function (rows, columns, clog) {
    if (rows !== Number(rows) || rows === 0 || columns !== Number(columns) || columns === 0) {
        throw 'error: wrong input type';
    }
    if (rows < 1 || columns < 1) {
      throw 'error: rows/cols input must be greater than 0';
    }
    let rowt = '$$-'.repeat(rows-1);
    let col = '-' + rowt + '%%';
    if (clog == true) { console.log("table.js: table created"); }
    return col.repeat(columns-1) + '-' + '$$-'.repeat(rows-1);
};
exports.check = function (string) {
	if (String(string) !== string) {
		return false;
	}
	if (string.replace(/(\$\$)|(\%\%)/g, "-") !== string) {
		return false;
	} else {
		return true;
	}
};
