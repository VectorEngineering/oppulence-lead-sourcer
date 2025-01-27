import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadUpdateWithoutExternalSystemsInputSchema } from './LeadUpdateWithoutExternalSystemsInputSchema';
import { LeadUncheckedUpdateWithoutExternalSystemsInputSchema } from './LeadUncheckedUpdateWithoutExternalSystemsInputSchema';
import { LeadCreateWithoutExternalSystemsInputSchema } from './LeadCreateWithoutExternalSystemsInputSchema';
import { LeadUncheckedCreateWithoutExternalSystemsInputSchema } from './LeadUncheckedCreateWithoutExternalSystemsInputSchema';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';

export const LeadUpsertWithoutExternalSystemsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutExternalSystemsInput> = z.object({
  update: z.union([ z.lazy(() => LeadUpdateWithoutExternalSystemsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutExternalSystemsInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutExternalSystemsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutExternalSystemsInputSchema) ]),
  where: z.lazy(() => LeadWhereInputSchema).optional()
}).strict();

export default LeadUpsertWithoutExternalSystemsInputSchema;
