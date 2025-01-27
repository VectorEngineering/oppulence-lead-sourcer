import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereInputSchema } from './LeadWhereInputSchema';
import { LeadUpdateWithoutContactPreferencesInputSchema } from './LeadUpdateWithoutContactPreferencesInputSchema';
import { LeadUncheckedUpdateWithoutContactPreferencesInputSchema } from './LeadUncheckedUpdateWithoutContactPreferencesInputSchema';

export const LeadUpdateToOneWithWhereWithoutContactPreferencesInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutContactPreferencesInput> = z.object({
  where: z.lazy(() => LeadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LeadUpdateWithoutContactPreferencesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutContactPreferencesInputSchema) ]),
}).strict();

export default LeadUpdateToOneWithWhereWithoutContactPreferencesInputSchema;
