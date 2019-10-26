# Isomorphic Worker Webpack

This project is an isomorphic webpack generated with [webpack-starter](https://github.com/wbkd/webpack-starter), and deployed with [Cloudflare Workers](https://www.cloudflare.com/zh-tw/products/cloudflare-workers/).

## Installation

Create .env file from .env.example

Install the cli and add your `account_id`, `zone_id` into `wrangler.toml`.

```sh
yarn global add @cloudflare/wrangler
```

## Usage

Install dependencies.

```sh
yarn install
```

Start a dev server.

```sh
yarn start
```

Build your website.

```sh
yarn build
```

## Deploy

Watch worker with wrangler script.

```sh
yarn worker:watch
```

Build worker with wrangler script.

```sh
yarn worker:build
```

Publish worker with wrangler script.

```sh
yarn worker:publish
```

## Credit

- [webpack-starter](https://github.com/wbkd/webpack-starter)

- [react-workers-template](https://github.com/cloudflare/react-workers-template)

- [cloudflare templates](https://developers.cloudflare.com/workers/templates/)

## License

Isomorphic Worker Webpack share is open source software [licensed as MIT](https://github.com/explooosion/isomorphic-worker-webpack/blob/master/LICENSE).