import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommunicationWhereUniqueInputSchema } from './LeadCommunicationWhereUniqueInputSchema';
import { LeadCommunicationUpdateWithoutLeadInputSchema } from './LeadCommunicationUpdateWithoutLeadInputSchema';
import { LeadCommunicationUncheckedUpdateWithoutLeadInputSchema } from './LeadCommunicationUncheckedUpdateWithoutLeadInputSchema';

export const LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCommunicationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadCommunicationUpdateWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCommunicationUpdateWithWhereUniqueWithoutLeadInputSchema;
