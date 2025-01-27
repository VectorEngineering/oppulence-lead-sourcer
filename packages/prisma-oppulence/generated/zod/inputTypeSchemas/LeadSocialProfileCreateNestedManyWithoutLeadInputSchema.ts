import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadSocialProfileCreateWithoutLeadInputSchema } from './LeadSocialProfileCreateWithoutLeadInputSchema';
import { LeadSocialProfileUncheckedCreateWithoutLeadInputSchema } from './LeadSocialProfileUncheckedCreateWithoutLeadInputSchema';
import { LeadSocialProfileCreateOrConnectWithoutLeadInputSchema } from './LeadSocialProfileCreateOrConnectWithoutLeadInputSchema';
import { LeadSocialProfileCreateManyLeadInputEnvelopeSchema } from './LeadSocialProfileCreateManyLeadInputEnvelopeSchema';
import { LeadSocialProfileWhereUniqueInputSchema } from './LeadSocialProfileWhereUniqueInputSchema';

export const LeadSocialProfileCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadSocialProfileCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadSocialProfileCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadSocialProfileCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadSocialProfileCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadSocialProfileWhereUniqueInputSchema),z.lazy(() => LeadSocialProfileWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadSocialProfileCreateNestedManyWithoutLeadInputSchema;
