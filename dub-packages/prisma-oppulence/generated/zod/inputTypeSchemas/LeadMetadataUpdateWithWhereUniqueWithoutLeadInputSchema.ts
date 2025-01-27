import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadMetadataWhereUniqueInputSchema } from './LeadMetadataWhereUniqueInputSchema';
import { LeadMetadataUpdateWithoutLeadInputSchema } from './LeadMetadataUpdateWithoutLeadInputSchema';
import { LeadMetadataUncheckedUpdateWithoutLeadInputSchema } from './LeadMetadataUncheckedUpdateWithoutLeadInputSchema';

export const LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadMetadataWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => LeadMetadataUpdateWithoutLeadInputSchema),z.lazy(() => LeadMetadataUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default LeadMetadataUpdateWithWhereUniqueWithoutLeadInputSchema;
