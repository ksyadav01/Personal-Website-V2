//const fetch = require("node-fetch");
// exports.handler = async function () {
//     let response = await fetch("http://ws.audioscrobbler.com//2.0/?method=user.getrecenttracks&user=kingeinhorn&api_key=ae3471fe6f952ffb40c99ad83bba5596&format=json")
//         response = await response.json();
//         response.recenttracks.track[0].name + " by " +response.recenttracks.track[0].artist["#text"];
//     return {
//       statusCode: 200,
//       body: 'Hello world!',
//     };
//   };
exports.handler = async () => {
    const url = "http://ws.audioscrobbler.com//2.0/?method=user.getrecenttracks&user=kingeinhorn&api_key=ae3471fe6f952ffb40c99ad83bba5596&format=json";
    try {
        console.log('pp')
      const songStream = await fetch(url);
      console.log(songStream)
      console.log("tester")
      const jsonSong = await songStream.json();
      return {
        statusCode: 200,
        body: JSON.stringify(jsonSong)
      };
    } catch (err) {
      return { statusCode: 422, body: err.stack };
    }
  };