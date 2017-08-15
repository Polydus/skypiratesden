# Sky Pirate's Den


This is a remake of the [Sky Pirate's Den](http://finalfantasy.wikia.com/wiki/Sky_Pirate's_Den) in the original Final Fantasy XII for PlayStation 2 in Node.js. It uses the [gumer-psn](https://github.com/jhewt/gumer-psn) library to connect to Sony's servers and retrieve a PSN account's trophy data.  


This application is currently hosted [on Heroku](http://skypiratesden.herokuapp.com/).


#### How to run the Sky Pirate's Den Locally

With NPM, Node and Heroku installed, run the following:

```sh
$ git clone https://github.com/polydus/skypiratesden.git
$ cd skypiratesden/
$ npm install
$ cp .env.example .env
```

Add a valid PSN account to the .env file, then run: 

```sh
$ heroku local
```


