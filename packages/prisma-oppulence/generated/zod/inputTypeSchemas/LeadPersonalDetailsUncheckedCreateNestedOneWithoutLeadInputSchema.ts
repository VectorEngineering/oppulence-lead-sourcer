import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadPersonalDetailsCreateWithoutLeadInputSchema } from './LeadPersonalDetailsCreateWithoutLeadInputSchema';
import { LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema } from './LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema';
import { LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema } from './LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema';
import { LeadPersonalDetailsWhereUniqueInputSchema } from './LeadPersonalDetailsWhereUniqueInputSchema';

export const LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInputSchema: z.ZodType<Prisma.LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadPersonalDetailsCreateWithoutLeadInputSchema),z.lazy(() => LeadPersonalDetailsUncheckedCreateWithoutLeadInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadPersonalDetailsCreateOrConnectWithoutLeadInputSchema).optional(),
  connect: z.lazy(() => LeadPersonalDetailsWhereUniqueInputSchema).optional()
}).strict();

export default LeadPersonalDetailsUncheckedCreateNestedOneWithoutLeadInputSchema;
