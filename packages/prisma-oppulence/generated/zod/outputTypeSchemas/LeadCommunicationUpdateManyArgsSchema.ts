import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationUpdateManyMutationInputSchema } from '../inputTypeSchemas/LeadCommunicationUpdateManyMutationInputSchema'
import { LeadCommunicationUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/LeadCommunicationUncheckedUpdateManyInputSchema'
import { LeadCommunicationWhereInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereInputSchema'

export const LeadCommunicationUpdateManyArgsSchema: z.ZodType<Prisma.LeadCommunicationUpdateManyArgs> = z.object({
  data: z.union([ LeadCommunicationUpdateManyMutationInputSchema,LeadCommunicationUncheckedUpdateManyInputSchema ]),
  where: LeadCommunicationWhereInputSchema.optional(),
}).strict() ;

export default LeadCommunicationUpdateManyArgsSchema;
