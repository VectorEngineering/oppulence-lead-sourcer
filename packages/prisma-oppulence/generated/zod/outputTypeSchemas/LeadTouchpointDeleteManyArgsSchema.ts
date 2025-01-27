import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTouchpointWhereInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereInputSchema'

export const LeadTouchpointDeleteManyArgsSchema: z.ZodType<Prisma.LeadTouchpointDeleteManyArgs> = z.object({
  where: LeadTouchpointWhereInputSchema.optional(),
}).strict() ;

export default LeadTouchpointDeleteManyArgsSchema;
