import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadProductFitInputSchema } from './LeadCreateWithoutLeadProductFitInputSchema';
import { LeadUncheckedCreateWithoutLeadProductFitInputSchema } from './LeadUncheckedCreateWithoutLeadProductFitInputSchema';
import { LeadCreateOrConnectWithoutLeadProductFitInputSchema } from './LeadCreateOrConnectWithoutLeadProductFitInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLeadProductFitInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLeadProductFitInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadProductFitInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadProductFitInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLeadProductFitInputSchema;
