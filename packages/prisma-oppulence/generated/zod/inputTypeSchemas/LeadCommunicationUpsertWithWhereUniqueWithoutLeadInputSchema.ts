import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCommunicationWhereUniqueInputSchema } from './LeadCommunicationWhereUniqueInputSchema';
import { LeadCommunicationUpdateWithoutLeadInputSchema } from './LeadCommunicationUpdateWithoutLeadInputSchema';
import { LeadCommunicationUncheckedUpdateWithoutLeadInputSchema } from './LeadCommunicationUncheckedUpdateWithoutLeadInputSchema';
import { LeadCommunicationCreateWithoutLeadInputSchema } from './LeadCommunicationCreateWithoutLeadInputSchema';
import { LeadCommunicationUncheckedCreateWithoutLeadInputSchema } from './LeadCommunicationUncheckedCreateWithoutLeadInputSchema';

export const LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadCommunicationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadCommunicationUpdateWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema),z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadCommunicationUpsertWithWhereUniqueWithoutLeadInputSchema;
