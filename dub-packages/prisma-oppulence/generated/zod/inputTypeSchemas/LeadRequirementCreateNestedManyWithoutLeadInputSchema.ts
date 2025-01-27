import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadRequirementCreateWithoutLeadInputSchema } from './LeadRequirementCreateWithoutLeadInputSchema';
import { LeadRequirementUncheckedCreateWithoutLeadInputSchema } from './LeadRequirementUncheckedCreateWithoutLeadInputSchema';
import { LeadRequirementCreateOrConnectWithoutLeadInputSchema } from './LeadRequirementCreateOrConnectWithoutLeadInputSchema';
import { LeadRequirementCreateManyLeadInputEnvelopeSchema } from './LeadRequirementCreateManyLeadInputEnvelopeSchema';
import { LeadRequirementWhereUniqueInputSchema } from './LeadRequirementWhereUniqueInputSchema';

export const LeadRequirementCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema),z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadRequirementCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadRequirementCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadRequirementCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadRequirementWhereUniqueInputSchema),z.lazy(() => LeadRequirementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadRequirementCreateNestedManyWithoutLeadInputSchema;
