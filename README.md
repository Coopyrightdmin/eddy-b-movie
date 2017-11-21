# eddy-b-movie
Eddy is a chatbot able to interconnect people with the movie database (TMDb)

## Requirements

#### Node version

We recommend to use at least `node v4.3.0`

## Usage


#### Installation

using npm
`npm install`

or yarn
`yarn`


#### Create the config file

 Create a `config.js` file in the `src` directory of your project, copy/paste these lines:

```
module.exports = {
  MOVIEDB_TOKEN: '',
  REQUEST_TOKEN: '',
};
```

Create your MovieDB account to get your token (https://developers.themoviedb.org/3)

Complete the Recast.AI `REQUEST_TOKEN` : go to your bot page, click on the settings icon (on the right side of your screen), and copy the `request_token`.

Tips: This config.js file will never be pushed onto your repository. If you would like to deploy your code with **Bot Hosting**, you just have to create env. variables in **Bot Hosting** section in **RUN** page. More info in [About your config. file](https://github.com/RecastAI/starter-NodeJS#about-your-config-file)


#### Run locally

using npm `npm start`

using yarn `yarn start`

> **Note:** Next steps, only if you have connected your bot to channels, using the Bot Connector tool

- download [ngrok](https://ngrok.com/)
- launch it: `./ngrok http 5000`
- copy the url ngrok gave and paste it in the [Recast.AI](https://recast.ai) interface: Go to your bot page, click on the **RUN** tab and edit your `current bot webhook`
- Chat with your bot on the channels you've configured ;)

## Documentation

Code | Documentation
------------ | -------------
Receiving messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Sending messages | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - connect
Rich messaging | See the different [payload message](https://man.recast.ai)
Manage the conversation | [The Recast.AI SDK](https://github.com/RecastAI/SDK-NodeJS/wiki) - converse


## More

You can view the whole API reference at [man.recast.ai](https://man.recast.ai).
You can follow us on Twitter at [@recastai](https://twitter.com/recastai) for updates and releases.

