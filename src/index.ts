import { Elysia, t } from 'elysia'
import {
  fetchBestStories,
  fetchNewStories,
  fetchTopStories,
} from './data/hacker-news-api'
import swagger from '@elysiajs/swagger'
import { stories } from './models/stories'

const app = new Elysia()
  .use(swagger())
  .group('/stories', (app) => {
    return (
      app
        .setModel({ stories })
        // response not inferred until schema is added at handler level
        // t.Array(t.Object()) is not inferred correctly, it's inferred as t.Object()
        .guard({ schema: { response: 'stories' } }, (app) => {
          return app
            .get('/top', async () => fetchTopStories())
            .get('/new', async () => fetchNewStories())
            .get('/best', async () => fetchBestStories())
        })
    )
  })
  .get('/health', () => ({ status: 'ok' }))

app.listen(3000, ({ hostname, port }) => {
  console.log(`🚀 Running at http://${hostname}:${port}`)
})
