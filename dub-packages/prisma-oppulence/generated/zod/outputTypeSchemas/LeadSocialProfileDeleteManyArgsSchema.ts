import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadSocialProfileWhereInputSchema } from '../inputTypeSchemas/LeadSocialProfileWhereInputSchema'

export const LeadSocialProfileDeleteManyArgsSchema: z.ZodType<Prisma.LeadSocialProfileDeleteManyArgs> = z.object({
  where: LeadSocialProfileWhereInputSchema.optional(),
}).strict() ;

export default LeadSocialProfileDeleteManyArgsSchema;
