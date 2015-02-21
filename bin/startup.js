'use strict';

(function() {
    var bookFace;

    bookFace = require('bookface');

    bookFace.httpServer.listen(bookFace.properties.port);
})();