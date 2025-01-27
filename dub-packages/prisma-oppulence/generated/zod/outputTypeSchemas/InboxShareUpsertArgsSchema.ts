import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InboxShareIncludeSchema } from '../inputTypeSchemas/InboxShareIncludeSchema'
import { InboxShareWhereUniqueInputSchema } from '../inputTypeSchemas/InboxShareWhereUniqueInputSchema'
import { InboxShareCreateInputSchema } from '../inputTypeSchemas/InboxShareCreateInputSchema'
import { InboxShareUncheckedCreateInputSchema } from '../inputTypeSchemas/InboxShareUncheckedCreateInputSchema'
import { InboxShareUpdateInputSchema } from '../inputTypeSchemas/InboxShareUpdateInputSchema'
import { InboxShareUncheckedUpdateInputSchema } from '../inputTypeSchemas/InboxShareUncheckedUpdateInputSchema'
import { InboxArgsSchema } from "../outputTypeSchemas/InboxArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const InboxShareSelectSchema: z.ZodType<Prisma.InboxShareSelect> = z.object({
  id: z.boolean().optional(),
  inboxId: z.boolean().optional(),
  userId: z.boolean().optional(),
  email: z.boolean().optional(),
  accessLevel: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  password: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  lastAccessed: z.boolean().optional(),
  accessCount: z.boolean().optional(),
  maxAccesses: z.boolean().optional(),
  ipRestriction: z.boolean().optional(),
  domainRestriction: z.boolean().optional(),
  deviceLimit: z.boolean().optional(),
  requireMFA: z.boolean().optional(),
  notifyOnAccess: z.boolean().optional(),
  accessSchedule: z.boolean().optional(),
  revokedAt: z.boolean().optional(),
  revokedBy: z.boolean().optional(),
  revokeReason: z.boolean().optional(),
  inbox: z.union([z.boolean(),z.lazy(() => InboxArgsSchema)]).optional(),
}).strict()

export const InboxShareUpsertArgsSchema: z.ZodType<Prisma.InboxShareUpsertArgs> = z.object({
  select: InboxShareSelectSchema.optional(),
  include: InboxShareIncludeSchema.optional(),
  where: InboxShareWhereUniqueInputSchema,
  create: z.union([ InboxShareCreateInputSchema,InboxShareUncheckedCreateInputSchema ]),
  update: z.union([ InboxShareUpdateInputSchema,InboxShareUncheckedUpdateInputSchema ]),
}).strict() ;

export default InboxShareUpsertArgsSchema;
