import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutCompetitorsInputSchema } from './LeadCreateWithoutCompetitorsInputSchema';
import { LeadUncheckedCreateWithoutCompetitorsInputSchema } from './LeadUncheckedCreateWithoutCompetitorsInputSchema';
import { LeadCreateOrConnectWithoutCompetitorsInputSchema } from './LeadCreateOrConnectWithoutCompetitorsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutCompetitorsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutCompetitorsInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCompetitorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCompetitorsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutCompetitorsInputSchema;
