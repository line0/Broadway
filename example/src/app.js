const Player = require('broadwayjs/Player/Player');
//OR import broadwayjs from 'broadwayjs';

var player = new Player({
    useWorker: true,
    reuseMemory: true,
    workerFile: '/assets/decoder.js',
});

const Stream = require('./Stream');
const MP4Player = require('./mp4');

const useWorkers = true;
const webgl = 'auto';
const render = true;

const src = 'http://mbebenita.github.io/Broadway/fox.mp4';
const mp4player = new MP4Player(new Stream(src), player);

document.body.appendChild(player.canvas);
mp4player.play();
