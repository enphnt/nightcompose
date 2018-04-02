
module.exports = {
  "Intro": function (client) {
    const iterations = 8;
    for (let i = 0; i < 8; i++) {
      for (let i = 0; i < iterations; i++) {
        client
          .moveToElement("canvas", 400, 200)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one / 2)
          .moveToElement("canvas", 1, 1);
      }

      for (let i = 0; i < iterations; i++) {
        client
          .moveToElement("canvas", 100, 700)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one / 2)
          .moveToElement("canvas", 1, 1);
      }
    }
  }
};
