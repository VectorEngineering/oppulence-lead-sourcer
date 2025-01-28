import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LogIncludeSchema } from '../inputTypeSchemas/LogIncludeSchema'
import { LogWhereUniqueInputSchema } from '../inputTypeSchemas/LogWhereUniqueInputSchema'
import { LogCreateInputSchema } from '../inputTypeSchemas/LogCreateInputSchema'
import { LogUncheckedCreateInputSchema } from '../inputTypeSchemas/LogUncheckedCreateInputSchema'
import { LogUpdateInputSchema } from '../inputTypeSchemas/LogUpdateInputSchema'
import { LogUncheckedUpdateInputSchema } from '../inputTypeSchemas/LogUncheckedUpdateInputSchema'
import { EndpointArgsSchema } from "../outputTypeSchemas/EndpointArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LogSelectSchema: z.ZodType<Prisma.LogSelect> = z.object({
  id: z.boolean().optional(),
  endpointId: z.boolean().optional(),
  type: z.boolean().optional(),
  postType: z.boolean().optional(),
  message: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  endpoint: z.union([z.boolean(),z.lazy(() => EndpointArgsSchema)]).optional(),
}).strict()

export const LogUpsertArgsSchema: z.ZodType<Prisma.LogUpsertArgs> = z.object({
  select: LogSelectSchema.optional(),
  include: LogIncludeSchema.optional(),
  where: LogWhereUniqueInputSchema,
  create: z.union([ LogCreateInputSchema,LogUncheckedCreateInputSchema ]),
  update: z.union([ LogUpdateInputSchema,LogUncheckedUpdateInputSchema ]),
}).strict() ;

export default LogUpsertArgsSchema;
