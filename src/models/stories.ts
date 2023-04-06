import { t } from 'elysia'

export const story = t.Object({
  by: t.String(),
  descendants: t.Optional(t.Number()),
  id: t.Number(),
  kids: t.Optional(t.Array(t.Number())),
  score: t.Number(),
  time: t.Number(),
  title: t.String(),
  type: t.String(),
  url: t.Optional(t.String()),
})

export const stories = t.Array(story)
