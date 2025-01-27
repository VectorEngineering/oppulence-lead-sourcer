import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const LinkCreateManyInputSchema: z.ZodType<Prisma.LinkCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  domain: z.string(),
  key: z.string(),
  url: z.string(),
  shortLink: z.string(),
  archived: z.boolean().optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  expiredUrl: z.string().optional().nullable(),
  password: z.string().optional().nullable(),
  trackConversion: z.boolean().optional(),
  proxy: z.boolean().optional(),
  title: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  video: z.string().optional().nullable(),
  utm_source: z.string().optional().nullable(),
  utm_medium: z.string().optional().nullable(),
  utm_campaign: z.string().optional().nullable(),
  utm_term: z.string().optional().nullable(),
  utm_content: z.string().optional().nullable(),
  rewrite: z.boolean().optional(),
  doIndex: z.boolean().optional(),
  ios: z.string().optional().nullable(),
  android: z.string().optional().nullable(),
  geo: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  userId: z.string().optional().nullable(),
  projectId: z.string().optional().nullable(),
  externalId: z.string().optional().nullable(),
  tenantId: z.string().optional().nullable(),
  publicStats: z.boolean().optional(),
  clicks: z.number().int().optional(),
  lastClicked: z.coerce.date().optional().nullable(),
  leads: z.number().int().optional(),
  sales: z.number().int().optional(),
  saleAmount: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.string().optional().nullable(),
  programId: z.string().optional().nullable()
}).strict();

export default LinkCreateManyInputSchema;
