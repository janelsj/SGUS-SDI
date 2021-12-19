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

client.on("message", ({studentId, score}, message) => {
    console.log(message);
    if(topicToListen.score >= 50){
        console.log(`
          ${{studentId,
            score,
            grade: "P"
          }}`);
    } else {
      console.log(`
        ${{studentId,
          score,
          grade: "F"
        }}`)
    };
    client.end();
})
