import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutDecisionMakersInputSchema } from './LeadCreateWithoutDecisionMakersInputSchema';
import { LeadUncheckedCreateWithoutDecisionMakersInputSchema } from './LeadUncheckedCreateWithoutDecisionMakersInputSchema';
import { LeadCreateOrConnectWithoutDecisionMakersInputSchema } from './LeadCreateOrConnectWithoutDecisionMakersInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutDecisionMakersInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutDecisionMakersInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutDecisionMakersInputSchema),z.lazy(() => LeadUncheckedCreateWithoutDecisionMakersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutDecisionMakersInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutDecisionMakersInputSchema;
