
module.exports = {
  "Intro": function (client) {
    const iterations = 8;
    for (let i = 0; i < 4; i++) {
      for (let i = 0; i < iterations; i++) {
        client
          .moveToElement("canvas", 500, 500)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one)
          .moveToElement("canvas", 1, 1);
      }
    }
  }
};
