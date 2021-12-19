const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')
const topic = "abcd1234";

const broadcast = (message) => {
    console.info("Broadcast function called with message", message);
    client.publish(topic, message);
    console.log(`product-service published ${topic} : ${message}`);                
}

module.exports = broadcast;