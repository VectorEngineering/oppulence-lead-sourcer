import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema';
import { LeadTouchpointUpdateWithoutLeadInputSchema } from './LeadTouchpointUpdateWithoutLeadInputSchema';
import { LeadTouchpointUncheckedUpdateWithoutLeadInputSchema } from './LeadTouchpointUncheckedUpdateWithoutLeadInputSchema';
import { LeadTouchpointCreateWithoutLeadInputSchema } from './LeadTouchpointCreateWithoutLeadInputSchema';
import { LeadTouchpointUncheckedCreateWithoutLeadInputSchema } from './LeadTouchpointUncheckedCreateWithoutLeadInputSchema';

export const LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadTouchpointUpdateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadTouchpointCreateWithoutLeadInputSchema),z.lazy(() => LeadTouchpointUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadTouchpointUpsertWithWhereUniqueWithoutLeadInputSchema;
