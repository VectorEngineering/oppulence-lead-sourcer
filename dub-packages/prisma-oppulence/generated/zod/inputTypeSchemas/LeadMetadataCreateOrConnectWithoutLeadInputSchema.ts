import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadMetadataWhereUniqueInputSchema } from './LeadMetadataWhereUniqueInputSchema';
import { LeadMetadataCreateWithoutLeadInputSchema } from './LeadMetadataCreateWithoutLeadInputSchema';
import { LeadMetadataUncheckedCreateWithoutLeadInputSchema } from './LeadMetadataUncheckedCreateWithoutLeadInputSchema';

export const LeadMetadataCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadMetadataCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => LeadMetadataWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadMetadataCreateWithoutLeadInputSchema),z.lazy(() => LeadMetadataUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default LeadMetadataCreateOrConnectWithoutLeadInputSchema;
