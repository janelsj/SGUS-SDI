const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')
const topicToListen = "abcd1234";

console.log(`inventory-service mqtt connected`);

client.on('connect', function () {
    client.subscribe(topicToListen, function (err) {
      if (err) {
        console.error(`subscribe to ${topicToListen} encountered error`, err);
        return;
      }
      console.log(`inventory-service subscribed to ${topicToListen}`);
    })
  })

client.on("message", (topic, message) => {
    console.log(message.toString());
    if(topic === topicToListen){
        console.log(`inventory received: ${message.toString()}`);
    }
})
