import { Link, Project, Tag } from '@dub/prisma-oppulence/client'

import z from '@/lib/zod'
import { LinkSchema as LinkSchemaOld } from '@/lib/zod/schemas/links'

// Helper function to create a type-safe matcher
const anyOfType = <T>(type: T) => type as unknown as T

export const LinkSchema = LinkSchemaOld.extend({
  identifier: z.null(),
})

export const expectedLink: Partial<Link> & {
  identifier: null
  tagId: string | null
  tags: []
  webhookIds: string[]
} = {
  id: anyOfType<string>(''),
  key: anyOfType<string>(''),
  domain: 'dub.sh',
  shortLink: anyOfType<string>(''),
  trackConversion: false,
  archived: false,
  expiresAt: null,
  password: null,
  proxy: false,
  title: null,
  description: null,
  image: null,
  video: null,
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
  rewrite: false,
  doIndex: false,
  ios: null,
  android: null,
  geo: null,
  publicStats: false,
  clicks: 0,
  lastClicked: null,
  leads: 0,
  sales: 0,
  saleAmount: 0,
  identifier: null,
  tagId: null,
  comments: null,
  tags: [],
  webhookIds: [],
  createdAt: anyOfType<Date>(new Date()),
  updatedAt: anyOfType<Date>(new Date()),
  expiredUrl: null,
  externalId: null,
  programId: null,
  tenantId: null,
}

export const expectedTag: Partial<Tag> = {
  id: anyOfType<string>(''),
  createdAt: anyOfType<Date>(new Date()),
  updatedAt: anyOfType<Date>(new Date()),
}

export const expectedWorkspace: Partial<Project> = {
  id: anyOfType<string>(''),
  name: anyOfType<string>(''),
  slug: anyOfType<string>(''),
  logo: anyOfType<string>(''),

  plan: anyOfType<string>(''),
  stripeId: anyOfType<string>(''),
  billingCycleStart: anyOfType<number>(0),
  inviteCode: anyOfType<string>(''),

  usage: anyOfType<number>(0),
  usageLimit: anyOfType<number>(0),
  linksUsage: anyOfType<number>(0),
  linksLimit: anyOfType<number>(0),
  salesUsage: anyOfType<number>(0),
  salesLimit: anyOfType<number>(0),
  domainsLimit: anyOfType<number>(0),
  tagsLimit: anyOfType<number>(0),
  usersLimit: anyOfType<number>(0),

  createdAt: anyOfType<Date>(new Date()),
  updatedAt: anyOfType<Date>(new Date()),
}
