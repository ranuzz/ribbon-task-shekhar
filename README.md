## ribbon take home task :: Shekhar Chandra

## Requirements

Create a simple React Native app, which:

* When it starts, retrieves the latest currency exchange rates from the Czech National Bank.
    *	API URL: https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt
    *	Documentation: https://www.cnb.cz/en/faq/Format-of-the-foreign-exchange-market-rates/
* Parses the downloaded data and clearly displays it to the user in the UI.
* Add a simple form, into which the customer can enter an amount in CZK and select a currency, and after clicking a button sees the amount entered in CZK converted into the selected currency.
* Commit your code throughout your work and upload the resulting codebase into a Github repo.
* Tech stack: React Native (+ Hooks), TypeScript, Styled Components, React Query.

Overall: Keep the code simple and the UI nice and easy to use for the user.

## Environment Setup

> https://reactnative.dev/docs/environment-setup

* Using Windows as development OS
* Using Android as target OS

### nodejs, openjdk8 and android sdk

```
choco install nodejs-lts
node -v
v16.13.1
```

```
choco install openjdk8
java -version
openjdk version "1.8.0_312"
OpenJDK Runtime Environment (build 1.8.0_312-b07)
OpenJDK 64-Bit Server VM (build 25.312-b07, mixed mode)
```

```
Android SDK
Android 11.0 (R) 
API Level 30
```

```sh
npx react-native init ribbonTaskApp --template react-native-template-typescript
```


### Running Sample

```
npx react-native start
```

```
npx react-native run-android --deviceId=****
```

## Screenshots

![phone](/asset/Screenshot_20211212-202832_ribbonTaskApp.jpg)
![emulator](/asset/Screenshot_1639369944.png)

## Video

[capture](/asset/ribbiontask.webm)