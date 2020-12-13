# React Native - Vanilla (Not Expo)

## Setting up

Install RVM and ruby build 2.5

```
$ curl -L https://get.rvm.io | bash -s stable

$ rvm install ruby-2.6

$ rvm use ruby-2.6.3

$ rvm --default use 2.6.5
```

Install XCode from the App Store

You may have to change the path of `xcode-select`

```
$ sudo xcode-select --switch /Applications/Xcode.app
```

Then to run metro:

```
$ npx react-native start
```

Leave this running, and in a new terminal run:

```
$ npx react-native run-ios
```
