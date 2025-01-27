import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LeadNurturingWhereInputSchema } from '../inputTypeSchemas/LeadNurturingWhereInputSchema'

export const LeadNurturingDeleteManyArgsSchema: z.ZodType<Prisma.LeadNurturingDeleteManyArgs> = z.object({
  where: LeadNurturingWhereInputSchema.optional(),
}).strict() ;

export default LeadNurturingDeleteManyArgsSchema;
