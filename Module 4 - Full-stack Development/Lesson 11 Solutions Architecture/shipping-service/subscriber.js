const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://test.mosquitto.org");
const topicToListen = "abcd1234";
const logger = require("./file-logger");

logger.info(`shipping-service mqtt connected`);

client.on("connect", function () {
  client.subscribe(topicToListen, function (err) {
    if (err) {
      logger.error(`subscribe to ${topicToListen} encountered error`, err);
      return;
    }
    logger.info(`shipping-service subscribed to ${topicToListen}`);
  });
});

client.on("message", (topic, message) => {
  if (topic === topicToListen) {
    logger.info(`shipping-service: ${message.toString()}`);
  }
});
