import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutHistoryInputSchema } from './LeadCreateWithoutHistoryInputSchema';
import { LeadUncheckedCreateWithoutHistoryInputSchema } from './LeadUncheckedCreateWithoutHistoryInputSchema';
import { LeadCreateOrConnectWithoutHistoryInputSchema } from './LeadCreateOrConnectWithoutHistoryInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutHistoryInputSchema),z.lazy(() => LeadUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutHistoryInputSchema;
