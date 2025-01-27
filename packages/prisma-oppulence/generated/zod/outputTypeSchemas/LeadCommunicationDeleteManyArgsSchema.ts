import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCommunicationWhereInputSchema } from '../inputTypeSchemas/LeadCommunicationWhereInputSchema'

export const LeadCommunicationDeleteManyArgsSchema: z.ZodType<Prisma.LeadCommunicationDeleteManyArgs> = z.object({
  where: LeadCommunicationWhereInputSchema.optional(),
}).strict() ;

export default LeadCommunicationDeleteManyArgsSchema;
