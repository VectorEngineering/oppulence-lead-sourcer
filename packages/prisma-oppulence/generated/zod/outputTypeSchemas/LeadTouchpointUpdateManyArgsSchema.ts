import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadTouchpointUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadTouchpointUpdateManyMutationInputSchema'
import { LeadTouchpointUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadTouchpointUncheckedUpdateManyInputSchema'
import { LeadTouchpointWhereInputSchema } from '../inputTypeSchemas/LeadTouchpointWhereInputSchema'

export const LeadTouchpointUpdateManyArgsSchema: z.ZodType<Prisma.LeadTouchpointUpdateManyArgs> = z.object({
  data: z.union([ LeadTouchpointUpdateManyMutationInputSchema,LeadTouchpointUncheckedUpdateManyInputSchema ]),
  where: LeadTouchpointWhereInputSchema.optional(),
}).strict() ;

export default LeadTouchpointUpdateManyArgsSchema;
