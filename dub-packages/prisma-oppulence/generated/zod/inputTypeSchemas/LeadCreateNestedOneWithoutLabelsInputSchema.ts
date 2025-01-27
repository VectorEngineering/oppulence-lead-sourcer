import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLabelsInputSchema } from './LeadCreateWithoutLabelsInputSchema';
import { LeadUncheckedCreateWithoutLabelsInputSchema } from './LeadUncheckedCreateWithoutLabelsInputSchema';
import { LeadCreateOrConnectWithoutLabelsInputSchema } from './LeadCreateOrConnectWithoutLabelsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutLabelsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutLabelsInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLabelsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLabelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLabelsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutLabelsInputSchema;
