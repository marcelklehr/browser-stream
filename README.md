# Node.js streams in your browser

Node's new stream API is awesome. Now, you can enjoy it in your browser, too!

## Installation
`component install marcelklehr/browser-stream`

## Usage
Just `require('stream')` as usual, and do awesome stuff, as usual.

`var stream = require('stream')`

Currently available are
 * `stream.Readable`
 * `stream.Writable`
 * `stream.Duplex`
 * `stream.Transform`

*Warning:* Currently all streams are in object mode only. I might get around to have a look at how to implement BUffers in the browser, but right now all I need is object mode. If you'd like to add support for buffers, feel free to wrap up a pull request!

*Warning:* Some parts of the code might be redundant or simply useless due to my hacking around -- you might want to fix that by minifying teh codez.

## Curiosities
1. If this works in IE, let me know.
2. Incidentally, this seems to be a good js benchmarking tool. Firefox seems to be about 10x slower than chrome, btw.
3. I built this for [telepath](https://github.com/marcelklehr/telepath)
