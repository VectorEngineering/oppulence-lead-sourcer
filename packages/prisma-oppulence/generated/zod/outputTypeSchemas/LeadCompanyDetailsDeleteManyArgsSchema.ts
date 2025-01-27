import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadCompanyDetailsWhereInputSchema } from '../inputTypeSchemas/LeadCompanyDetailsWhereInputSchema'

export const LeadCompanyDetailsDeleteManyArgsSchema: z.ZodType<Prisma.LeadCompanyDetailsDeleteManyArgs> = z.object({
  where: LeadCompanyDetailsWhereInputSchema.optional(),
}).strict() ;

export default LeadCompanyDetailsDeleteManyArgsSchema;
