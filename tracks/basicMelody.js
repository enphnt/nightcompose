
module.exports = {
  "Intro": function (client) {
    const iterations = 4;
    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < iterations; i++) {
        client
          .moveToElement("canvas", 500, 500)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one)
          .moveToElement("canvas", 1, 1);
        client
          .moveToElement("canvas", 700, 500)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one)
          .moveToElement("canvas", 1, 1);
        client
          .moveToElement("canvas", 900, 500)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one)
          .moveToElement("canvas", 1, 1);
        client
          .moveToElement("canvas", 200, 500)
          .mouseButtonDown()
          .mouseButtonUp()
          .pause(client.globals.one)
          .moveToElement("canvas", 1, 1);
      }
    }
  }
};
