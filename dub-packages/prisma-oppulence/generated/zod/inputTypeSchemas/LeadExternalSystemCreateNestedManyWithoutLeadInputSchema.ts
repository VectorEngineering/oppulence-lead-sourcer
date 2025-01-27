import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadExternalSystemCreateWithoutLeadInputSchema } from './LeadExternalSystemCreateWithoutLeadInputSchema';
import { LeadExternalSystemUncheckedCreateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedCreateWithoutLeadInputSchema';
import { LeadExternalSystemCreateOrConnectWithoutLeadInputSchema } from './LeadExternalSystemCreateOrConnectWithoutLeadInputSchema';
import { LeadExternalSystemCreateManyLeadInputEnvelopeSchema } from './LeadExternalSystemCreateManyLeadInputEnvelopeSchema';
import { LeadExternalSystemWhereUniqueInputSchema } from './LeadExternalSystemWhereUniqueInputSchema';

export const LeadExternalSystemCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema),z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadExternalSystemCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadExternalSystemCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadExternalSystemCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),z.lazy(() => LeadExternalSystemWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadExternalSystemCreateNestedManyWithoutLeadInputSchema;
