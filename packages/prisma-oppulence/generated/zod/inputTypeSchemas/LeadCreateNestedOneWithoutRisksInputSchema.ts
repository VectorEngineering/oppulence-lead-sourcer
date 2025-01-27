import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutRisksInputSchema } from './LeadCreateWithoutRisksInputSchema';
import { LeadUncheckedCreateWithoutRisksInputSchema } from './LeadUncheckedCreateWithoutRisksInputSchema';
import { LeadCreateOrConnectWithoutRisksInputSchema } from './LeadCreateOrConnectWithoutRisksInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutRisksInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutRisksInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutRisksInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRisksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutRisksInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutRisksInputSchema;
