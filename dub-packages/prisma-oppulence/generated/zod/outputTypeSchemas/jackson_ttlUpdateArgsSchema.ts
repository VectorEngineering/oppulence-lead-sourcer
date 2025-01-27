import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_ttlUpdateInputSchema } from '../inputTypeSchemas/jackson_ttlUpdateInputSchema'
import { jackson_ttlUncheckedUpdateInputSchema } from '../inputTypeSchemas/jackson_ttlUncheckedUpdateInputSchema'
import { jackson_ttlWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_ttlWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_ttlSelectSchema: z.ZodType<Prisma.jackson_ttlSelect> = z.object({
  key: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
}).strict()

export const jackson_ttlUpdateArgsSchema: z.ZodType<Prisma.jackson_ttlUpdateArgs> = z.object({
  select: jackson_ttlSelectSchema.optional(),
  data: z.union([ jackson_ttlUpdateInputSchema,jackson_ttlUncheckedUpdateInputSchema ]),
  where: jackson_ttlWhereUniqueInputSchema,
}).strict() ;

export default jackson_ttlUpdateArgsSchema;
