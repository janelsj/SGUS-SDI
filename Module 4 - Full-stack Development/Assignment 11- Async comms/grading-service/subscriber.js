const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org')
const topicToListen = "sdiassignment";

console.log(`grading-service mqtt connected`);

client.on('connect', function () {
    client.subscribe(topicToListen, function (err) {
      if (err) {
        console.error(`subscribe to ${topicToListen} encountered error`, err);
        return;
      };
      console.log(`grading-service subscribed to ${topicToListen}`);
    })
  })


client.on("message", (topic, message) => {
  if(topic === topicToListen) {
    console.log(message.toString());
  };
    client.end();
})
