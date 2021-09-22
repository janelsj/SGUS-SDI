import {useEffect, useState} from 'react';
import lightOn from './assets/images/light-on.png';
import lightOff from './assets/images/light-off.png';

function LightState() {

    const [image, setImage] = useState(lightOff);

    useEffect(() => {
        const changeImage = setInterval(() => {
            (image === lightOff) ? setImage(lightOn) : setImage(lightOff);
        }, 1000);
        return () => {clearInterval(changeImage)};
    }, [image])

    return  <img src={image}/>;
}

export default LightState;