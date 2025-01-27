import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientWhereInputSchema } from '../inputTypeSchemas/ReportRecipientWhereInputSchema'

export const ReportRecipientDeleteManyArgsSchema: z.ZodType<Prisma.ReportRecipientDeleteManyArgs> = z.object({
  where: ReportRecipientWhereInputSchema.optional(),
}).strict() ;

export default ReportRecipientDeleteManyArgsSchema;
