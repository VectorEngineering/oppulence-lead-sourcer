import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { jackson_indexWhereInputSchema } from '../inputTypeSchemas/jackson_indexWhereInputSchema'
import { jackson_indexOrderByWithRelationInputSchema } from '../inputTypeSchemas/jackson_indexOrderByWithRelationInputSchema'
import { jackson_indexWhereUniqueInputSchema } from '../inputTypeSchemas/jackson_indexWhereUniqueInputSchema'
import { Jackson_indexScalarFieldEnumSchema } from '../inputTypeSchemas/Jackson_indexScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const jackson_indexSelectSchema: z.ZodType<Prisma.jackson_indexSelect> = z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  storeKey: z.boolean().optional(),
}).strict()

export const jackson_indexFindFirstOrThrowArgsSchema: z.ZodType<Prisma.jackson_indexFindFirstOrThrowArgs> = z.object({
  select: jackson_indexSelectSchema.optional(),
  where: jackson_indexWhereInputSchema.optional(),
  orderBy: z.union([ jackson_indexOrderByWithRelationInputSchema.array(),jackson_indexOrderByWithRelationInputSchema ]).optional(),
  cursor: jackson_indexWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Jackson_indexScalarFieldEnumSchema,Jackson_indexScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default jackson_indexFindFirstOrThrowArgsSchema;
