# Introduction to React Native: Assignment

## Brief

In this assignment, you will be installing android emulator. Developing with React Native using emulator brings about the following benefts:

- It allows you to test multiple OS version.
- It allows you to mock device specific data, such as your current location.
- You don't have to use your real device.
- The power of being able to take screenshot and share screen with your team mates (how are you going to show your phone to your teammate via zoom?)

Note: iOS calls it `iOS Simulator` and Android calls it `Android Emulator` (FYI).

### Step 1 - Install Android Studio

Go to official android studio [download page](https://developer.android.com/studio), launch the installer package and follow the steps on screen.

<img src="./assets/images/android-download-page.png" />

If you are prompted that Java is required, download it at [here](https://www.oracle.com/java/technologies/downloads)

> JDK 11 Oracle Version is free for development but requires a paid license for commercial use.

### Step 2 - Setup an AVD (Android Virtual Device)

Follow instructors on this [link](https://www.dummies.com/web-design-development/mobile-apps/how-to-set-up-an-emulator-in-android-studio/)

For standardization, select `Pixel XL` as device, and choose the latest OS. It is `R` on the date of writing.

Once setup is done, you should see a new device being displayed on your Android Virtual Device Manager. Under the column `Actions`, click on `launch` button. Wait for android emulator to finish loading up and you should see something like this.

<img src="./assets/images/emulator.png" />

### Step 3 - Launch Android Emulator from Expo

Go back to the project created in your lesson, start it with `yarn start`. On the browser, you should be able to click on `Run on Android Device/Emulator` and deploy the app on your android emulator.

<img src="./assets/images/launch-android-emulator.png" />

### Step 4: Install react-devtools package

Following this documentation, run the following command on Terminal to install `react-devtools`.

```
npm install -g react-devtools
```

Once installation completed, run this command on Terminal.

```
react-devtools
```

The development tools will begin to launch.

<img src="./assets/images/dev-tools-launch.png" />

### Step 5: Turn on debug mode on android emulator

Go back to the android emulator, while your application is running, press `Ctrl` + `M` (Windows) or `Command` + `M` (MacOS), a window will launch. Click on "Debug Remote JS".

<img src="./assets/images/shake.png" width="200px" />

Next, you will observe that your `react-devtools` is connected to your android emulator.

<img src="./assets/images/connect-debugger.png" />

Congratulations! You have successfully setup android emulator to develop with React Native.

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
