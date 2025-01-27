import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReportRecipientScalarWhereInputSchema } from './ReportRecipientScalarWhereInputSchema';
import { ReportRecipientUpdateManyMutationInputSchema } from './ReportRecipientUpdateManyMutationInputSchema';
import { ReportRecipientUncheckedUpdateManyWithoutReportInputSchema } from './ReportRecipientUncheckedUpdateManyWithoutReportInputSchema';

export const ReportRecipientUpdateManyWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ReportRecipientUpdateManyWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => ReportRecipientScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReportRecipientUpdateManyMutationInputSchema),z.lazy(() => ReportRecipientUncheckedUpdateManyWithoutReportInputSchema) ]),
}).strict();

export default ReportRecipientUpdateManyWithWhereWithoutReportInputSchema;
