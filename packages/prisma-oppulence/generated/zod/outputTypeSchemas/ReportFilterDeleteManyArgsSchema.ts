import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportFilterWhereInputSchema } from '../inputTypeSchemas/ReportFilterWhereInputSchema'

export const ReportFilterDeleteManyArgsSchema: z.ZodType<Prisma.ReportFilterDeleteManyArgs> = z.object({
  where: ReportFilterWhereInputSchema.optional(),
}).strict() ;

export default ReportFilterDeleteManyArgsSchema;
