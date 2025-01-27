import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutMetadataInputSchema } from './LeadUpdateWithoutMetadataInputSchema';
import { LeadUncheckedUpdateWithoutMetadataInputSchema } from './LeadUncheckedUpdateWithoutMetadataInputSchema';
import { LeadCreateWithoutMetadataInputSchema } from './LeadCreateWithoutMetadataInputSchema';
import { LeadUncheckedCreateWithoutMetadataInputSchema } from './LeadUncheckedCreateWithoutMetadataInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutMetadataInputSchema: z.ZodType<Prisma.LeadUpsertWithoutMetadataInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutMetadataInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutMetadataInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutMetadataInputSchema),z.lazy(() => LeadUncheckedCreateWithoutMetadataInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutMetadataInputSchema;
