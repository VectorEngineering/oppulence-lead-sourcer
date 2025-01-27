import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadNurturingInputSchema } from './LeadCreateWithoutLeadNurturingInputSchema';
import { LeadUncheckedCreateWithoutLeadNurturingInputSchema } from './LeadUncheckedCreateWithoutLeadNurturingInputSchema';
import { LeadCreateOrConnectWithoutLeadNurturingInputSchema } from './LeadCreateOrConnectWithoutLeadNurturingInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadNurturingInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadNurturingInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadNurturingInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadNurturingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadNurturingInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadNurturingInputSchema;
