const tag = require('jsmediatags');

function parseTag(tag) {
  var {title,artist,album,year,track} = tag.tags;
  return {
  'title': title,
  'artist': artist,
  'album': album,
  'year': year,
  'track': track
  };
}

function songInfo (songName) {
  return new Promise((resolve, reject) => {
  tag.read(songName, {
    onSuccess: tag => {
    let info = parseTag(tag);
    info['url'] = songName;
    resolve (info);
    },
    onError: error => reject(error)
  });
  });
}

module.exports = songInfo;