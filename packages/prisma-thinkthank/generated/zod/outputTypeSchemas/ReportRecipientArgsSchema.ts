import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportRecipientSelectSchema } from '../inputTypeSchemas/ReportRecipientSelectSchema';
import { ReportRecipientIncludeSchema } from '../inputTypeSchemas/ReportRecipientIncludeSchema';

export const ReportRecipientArgsSchema: z.ZodType<Prisma.ReportRecipientDefaultArgs> = z.object({
  select: z.lazy(() => ReportRecipientSelectSchema).optional(),
  include: z.lazy(() => ReportRecipientIncludeSchema).optional(),
}).strict();

export default ReportRecipientArgsSchema;
