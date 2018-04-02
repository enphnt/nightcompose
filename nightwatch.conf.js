const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

module.exports = {
  "src_folders": ["compositions"],
  "custom_commands_path": "commands",
  "page_objects_path": "pages",
  "selenium": {
    "start_process": false,
    "server_path": seleniumServer.path,
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": chromedriver.path
    }
  },
  "test_workers": true,
  "test_settings": {
    "default": {
      "launch_url": "",
      "selenium_host": "localhost",
      "selenium_port": 4444,
      "pathname": "/wd/hub",
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "globals": {
        beforeEach: function (client, done) {
          client.status(function (result) {
            client.url("localhost:3000");
            done();
          });
          client.perform(() => {
            client.url("localhost:3000")
              .waitForElementVisible("body > canvas", 3000);
            done();
          });
        },
        afterEach: function (client, done) {
          client.end(function () {
            done();
          });
        },
        one: 1000,
        two: 2000,
        three: 3000,
        four: 4000,
        eight: 8000
      }
    }
  }
};
