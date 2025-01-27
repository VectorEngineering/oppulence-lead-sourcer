import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointCreateWithoutLeadInputSchema } from './LeadTouchpointCreateWithoutLeadInputSchema';
import { LeadTouchpointUncheckedCreateWithoutLeadInputSchema } from './LeadTouchpointUncheckedCreateWithoutLeadInputSchema';
import { LeadTouchpointCreateOrConnectWithoutLeadInputSchema } from './LeadTouchpointCreateOrConnectWithoutLeadInputSchema';
import { LeadTouchpointCreateManyLeadInputEnvelopeSchema } from './LeadTouchpointCreateManyLeadInputEnvelopeSchema';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';

export const LeadTouchpointCreateNestedManyWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointCreateNestedManyWithoutLeadInput> = z.object({
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema).array(),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadTouchpointCreateOrConnectWithoutLeadInputSchema),z.lazy(() => LeadTouchpointCreateOrConnectWithoutLeadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadTouchpointCreateManyLeadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadTouchpointWhereUniqueInputSchema),z.lazy(() => LeadTouchpointWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadTouchpointCreateNestedManyWithoutLeadInputSchema;
