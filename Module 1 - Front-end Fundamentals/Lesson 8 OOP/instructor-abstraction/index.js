class Television{
    #powerUp(){
        console.log("power up tv");
    }

    #displayLastChannel(){
        console.log("display last channel");
    }

    #getLastVolumeState(){
        console.log("get last volume state")
    }

    turnOn(){
        this.#powerUp();
        this.#displayLastChannel();
        this.#getLastVolumeState();
    }
}

const tv = new Television();
tv.turnOn();