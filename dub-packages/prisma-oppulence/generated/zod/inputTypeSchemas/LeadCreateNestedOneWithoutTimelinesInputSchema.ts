import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutTimelinesInputSchema } from './LeadCreateWithoutTimelinesInputSchema';
import { LeadUncheckedCreateWithoutTimelinesInputSchema } from './LeadUncheckedCreateWithoutTimelinesInputSchema';
import { LeadCreateOrConnectWithoutTimelinesInputSchema } from './LeadCreateOrConnectWithoutTimelinesInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutTimelinesInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutTimelinesInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutTimelinesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutTimelinesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutTimelinesInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutTimelinesInputSchema;
