// const axios = require('axios');
// const API = axios.create({
//     baseURL: "https://api.data.gov.sg/v1/environment",
// });

// Create 'Time Now':
const h2 = document.createElement('h2');
document.querySelector('h1').insertAdjacentElement("afterend", h2);
(function dateTimeNow() {
    h2.innerHTML = `Time now: ${new Date()}`;
    setInterval(() => {
        h2.innerHTML = `Time now: ${new Date()}`;
    }, 1000);
})();

//Function to show temperature at each location:
function divMaker(stn, temperature) {
    const div1 = document.createElement('div');
    div1.innerHTML = stn;
    const div2 = document.createElement('div');
    div2.innerHTML = temperature;
    document.getElementById('temp').append(div1, div2);
};

//Get API Data:
(async function getData() {

    //Get date/time in Singapore time:
    const dateTime = new Date().toISOString();
    const dateToday = dateTime.slice(0,10);
    
    /*
        //for date_time parameter (optional):
    let hourNowSGT = new Date().getHours();
    const dateTimeSGT = getDateTimeSGT();
    function getDateTimeSGT(){
        hourNowSGT<10 ? hourNowSGT='0'+hourNowSGT.toString() : hourNowSGT;
        return dateTime.slice(0,11)+`${hourNowSGT}`+dateTime.slice(13,19);
    }
    */

const temperature = await axios.get("https://api.data.gov.sg/v1/environment/air-temperature", {
        params: {
          date: dateToday,
        //   date_time: dateTimeSGT,
        }
    })
    const readingsArr = temperature.data.items.find(i => i.readings).readings;
    const stations = temperature.data.metadata.stations;

    //Temperature in Each Region: 
    await Promise.all(readingsArr.map(async(reading) => {
        await stations.find((station) => {
            if (reading.station_id === station.id) {
                reading.station_id = station.name;
            }
        });
    }));
    return readingsArr;
})().then((res) => {
        res.forEach(obj => {
            // console.log(obj);
            return divMaker(obj.station_id, obj.value);
        });
});