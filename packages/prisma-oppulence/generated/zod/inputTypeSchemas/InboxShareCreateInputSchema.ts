import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { InboxCreateNestedOneWithoutSharesInputSchema } from './InboxCreateNestedOneWithoutSharesInputSchema';

export const InboxShareCreateInputSchema: z.ZodType<Prisma.InboxShareCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  accessLevel: z.string(),
  expiresAt: z.coerce.date().optional().nullable(),
  password: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  lastAccessed: z.coerce.date().optional().nullable(),
  accessCount: z.number().int().optional(),
  maxAccesses: z.number().int().optional().nullable(),
  ipRestriction: z.string().optional().nullable(),
  domainRestriction: z.string().optional().nullable(),
  deviceLimit: z.number().int().optional().nullable(),
  requireMFA: z.boolean().optional(),
  notifyOnAccess: z.boolean().optional(),
  accessSchedule: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  revokedAt: z.coerce.date().optional().nullable(),
  revokedBy: z.string().optional().nullable(),
  revokeReason: z.string().optional().nullable(),
  inbox: z.lazy(() => InboxCreateNestedOneWithoutSharesInputSchema)
}).strict();

export default InboxShareCreateInputSchema;
