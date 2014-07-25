#!js
var renderHtml = require('./html');
var headers = { "Content-Type": "text/html" };
module.exports = [200, headers, renderHtml(
  ["html",
    ["head",
      ["title", "Test Page"]
    ],
    ["body",
      ["h1", "Test Page"],
      ["p", "Welcome to the test page"]
    ]
  ]
)];
