import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTouchpointCreateManyInputSchema } from '../inputTypeSchemas/LeadTouchpointCreateManyInputSchema'

export const LeadTouchpointCreateManyArgsSchema: z.ZodType<Prisma.LeadTouchpointCreateManyArgs> = z.object({
  data: z.union([ LeadTouchpointCreateManyInputSchema,LeadTouchpointCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default LeadTouchpointCreateManyArgsSchema;
