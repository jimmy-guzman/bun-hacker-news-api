interface Story {
  by: string
  descendants?: number
  id: number
  kids?: number[]
  score: number
  time: number
  title: string
  type: 'story'
  url?: string
}

type StoriesPrefix = 'new' | 'top' | 'best'
type Route = `${StoriesPrefix}stories` | `item/${number}`
type Versions = 0

const hackerNewsApi = (route: Route, version: Versions = 0) => {
  return `https://hacker-news.firebaseio.com/v${version}/${route}.json?print=pretty`
}

const fetchTopStory = async (story: number) => {
  const response = await fetch(hackerNewsApi(`item/${story}`))

  return response.json<Story>()
}

const createFetchStories = (type: StoriesPrefix) => {
  return async () => {
    const response = await fetch(hackerNewsApi(`${type}stories`))
    const stories = await response.json<number[]>()
    const results = await Promise.all(stories.map(fetchTopStory))

    return results.filter(Boolean)
  }
}

export const fetchTopStories = createFetchStories('top')

export const fetchNewStories = createFetchStories('new')

export const fetchBestStories = createFetchStories('best')
