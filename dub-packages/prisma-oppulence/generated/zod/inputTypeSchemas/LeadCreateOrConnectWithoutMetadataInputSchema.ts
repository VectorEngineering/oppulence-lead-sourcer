import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutMetadataInputSchema } from './LeadCreateWithoutMetadataInputSchema';
import { LeadUncheckedCreateWithoutMetadataInputSchema } from './LeadUncheckedCreateWithoutMetadataInputSchema';

export const LeadCreateOrConnectWithoutMetadataInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutMetadataInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutMetadataInputSchema),z.lazy(() => LeadUncheckedCreateWithoutMetadataInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutMetadataInputSchema;
