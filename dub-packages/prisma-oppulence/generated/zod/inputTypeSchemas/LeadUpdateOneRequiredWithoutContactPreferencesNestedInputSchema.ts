import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutContactPreferencesInputSchema } from './LeadCreateWithoutContactPreferencesInputSchema';
import { LeadUncheckedCreateWithoutContactPreferencesInputSchema } from './LeadUncheckedCreateWithoutContactPreferencesInputSchema';
import { LeadCreateOrConnectWithoutContactPreferencesInputSchema } from './LeadCreateOrConnectWithoutContactPreferencesInputSchema';
import { LeadUpsertWithoutContactPreferencesInputSchema } from './LeadUpsertWithoutContactPreferencesInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutContactPreferencesInputSchema } from './LeadUpdateToOneWithWhereWithoutContactPreferencesInputSchema';
import { LeadUpdateWithoutContactPreferencesInputSchema } from './LeadUpdateWithoutContactPreferencesInputSchema';
import { LeadUncheckedUpdateWithoutContactPreferencesInputSchema } from './LeadUncheckedUpdateWithoutContactPreferencesInputSchema';

export const LeadUpdateOneRequiredWithoutContactPreferencesNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutContactPreferencesNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutContactPreferencesInputSchema),z.lazy(() => LeadUncheckedCreateWithoutContactPreferencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutContactPreferencesInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutContactPreferencesInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutContactPreferencesInputSchema),z.lazy(() => LeadUpdateWithoutContactPreferencesInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutContactPreferencesInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutContactPreferencesNestedInputSchema;
