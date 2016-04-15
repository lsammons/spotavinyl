(function(module) {

  function Auction (opts) {
    // pass in multiple auction sales and give them an index??
    Object.keys(opts).forEach(function(e, index, keys) {
      this[e] = opts[e];
    },this);
  }

  // CONSTRUCTOR OBJECT FOR AUCTIONS
  Auction.all = [];

  // Article.createTable = function(callback) {
  //   webDB.execute(
  //     'CREATE TABLE IF NOT EXISTS articles (' +
  //       'id INTEGER PRIMARY KEY, ' +
  //       'title VARCHAR(255) NOT NULL, ' +
  //       'author VARCHAR(255) NOT NULL, ' +
  //       'authorUrl VARCHAR (255), ' +
  //       'category VARCHAR(20), ' +
  //       'publishedOn DATETIME, ' +
  //       'body TEXT NOT NULL);',
  //     function(result) {
  //       console.log('Successfully set up the articles table.', result);
  //       if (callback) callback();
  //     }
  //   );
  // };

  // Article.truncateTable = function(callback) {
  //   webDB.execute(
  //     'DELETE FROM articles;',
  //     callback
  //   );
  // };

  // Article.prototype.insertRecord = function(callback) {
  //   webDB.execute(
  //     [
  //       {
  //         'sql': 'INSERT INTO articles (title, author, authorUrl, category, publishedOn, body) VALUES (?, ?, ?, ?, ?, ?);',
  //         'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body],
  //       }
  //     ],
  //     callback
  //   );
  // };

  // Article.prototype.deleteRecord = function(callback) {
  //   webDB.execute(
  //     [
  //       {
  //         'sql': 'DELETE FROM articles WHERE id = ?;',
  //         'data': [this.id]
  //       }
  //     ],
  //     callback
  //   );
  // };

  // Article.prototype.updateRecord = function(callback) {
  //   webDB.execute(
  //     [
  //       {
  //         'sql': 'UPDATE articles SET title = ?, author = ?, authorUrl = ?, category = ?, publishedOn = ?, body = ? WHERE id = ?;',
  //         'data': [this.title, this.author, this.authorUrl, this.category, this.publishedOn, this.body, this.id]
  //       }
  //     ],
  //     callback
  //   );
  // };

  // Article.loadAll = function(rows) {
  //   Article.all = rows.map(function(ele) {
  //     return new Article(ele);
  //   });
  // };

  // Article.fetchAll = function(next) {
  //   webDB.execute('SELECT * FROM articles ORDER BY publishedOn DESC', function(rows) {
  //     if (rows.length) {
  //       Article.loadAll(rows);
  //       next();
  //     } else {
  //       $.getJSON('/data/hackerIpsum.json', function(rawData) {
  //         // Cache the json, so we don't need to request it next time:
  //         rawData.forEach(function(item) {
  //           var article = new Article(item); // Instantiate an article based on item from JSON
  //           article.insertRecord(); // Cache the article in DB
  //         });
  //         webDB.execute('SELECT * FROM articles', function(rows) {
  //           Article.loadAll(rows);
  //           next();
  //         });
  //       });
  //     }
  //   });
  // };

  // Article.allAuthors = function() {
  //   return Article.all.map(function(article) {
  //     return article.author;
  //   })
  //   .reduce(function(names, name) {
  //     if (names.indexOf(name) === -1) {
  //       names.push(name);
  //     }
  //     return names;
  //   }, []);
  // };

  // Article.numWordsAll = function() {
  //   return Article.all.map(function(article) {
  //     return article.body.match(/\b\w+/g).length;
  //   })
  //   .reduce(function(a, b) {
  //     return a + b;
  //   });
  // };

  // Article.numWordsByAuthor = function() {
  //   return Article.allAuthors().map(function(author) {
  //     return {
  //       name: author,
  //       numWords: Article.all.filter(function(a) {
  //         return a.author === author;
  //       })
  //       .map(function(a) {
  //         return a.body.match(/\b\w+/g).length;
  //       })
  //       .reduce(function(a, b) {
  //         return a + b;
  //       })
  //     };
  //   });
  // };

  // Article.stats = function() {
  //   return {
  //     numArticles: Article.all.length,
  //     numWords: Article.numwords(),
  //     Authors: Article.allAuthors(),
  //   };
  // };

  module.Auction = Auction;
})(window);
