import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportAccessWhereInputSchema } from '../inputTypeSchemas/ReportAccessWhereInputSchema'

export const ReportAccessDeleteManyArgsSchema: z.ZodType<Prisma.ReportAccessDeleteManyArgs> = z.object({
  where: ReportAccessWhereInputSchema.optional(),
}).strict() ;

export default ReportAccessDeleteManyArgsSchema;
