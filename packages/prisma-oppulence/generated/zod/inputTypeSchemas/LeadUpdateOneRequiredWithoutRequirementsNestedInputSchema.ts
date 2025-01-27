import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutRequirementsInputSchema } from './LeadCreateWithoutRequirementsInputSchema';
import { LeadUncheckedCreateWithoutRequirementsInputSchema } from './LeadUncheckedCreateWithoutRequirementsInputSchema';
import { LeadCreateOrConnectWithoutRequirementsInputSchema } from './LeadCreateOrConnectWithoutRequirementsInputSchema';
import { LeadUpsertWithoutRequirementsInputSchema } from './LeadUpsertWithoutRequirementsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutRequirementsInputSchema } from './LeadUpdateToOneWithWhereWithoutRequirementsInputSchema';
import { LeadUpdateWithoutRequirementsInputSchema } from './LeadUpdateWithoutRequirementsInputSchema';
import { LeadUncheckedUpdateWithoutRequirementsInputSchema } from './LeadUncheckedUpdateWithoutRequirementsInputSchema';

export const LeadUpdateOneRequiredWithoutRequirementsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutRequirementsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutRequirementsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutRequirementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutRequirementsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutRequirementsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutRequirementsInputSchema),z.lazy(() => LeadUpdateWithoutRequirementsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutRequirementsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutRequirementsNestedInputSchema;
