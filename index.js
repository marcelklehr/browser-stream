var Stream = module.exports = require('./Stream');

Stream.Readable = require('./Readable');
Stream.Writable = require('./Writable');
Stream.Duplex = require('./Duplex');
Stream.Transform = require('./Transform');
//Stream.PassThrough = require('./Passthrough');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;