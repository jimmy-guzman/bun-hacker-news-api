# Bun Hacker News API

> Hacker News Api built with [bun](https://bun.sh) & [ElysiaJS](https://elysiajs.com)

_This is just a friendly abstraction over the [Official Hacker News API](https://github.com/HackerNews/API#hacker-news-api) to use as a playground._

## Getting Started

First install `bun`, with the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then install dependencies, with the following command:

```
bun install
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/swagger to see the results

## Docker

```
docker build -t hacker-news-api .
```

```
docker run hacker-news-api
```
