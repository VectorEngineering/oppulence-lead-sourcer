import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateWithoutAssignedToInputSchema } from './LeadUpdateWithoutAssignedToInputSchema';
import { LeadUncheckedUpdateWithoutAssignedToInputSchema } from './LeadUncheckedUpdateWithoutAssignedToInputSchema';
import { LeadCreateWithoutAssignedToInputSchema } from './LeadCreateWithoutAssignedToInputSchema';
import { LeadUncheckedCreateWithoutAssignedToInputSchema } from './LeadUncheckedCreateWithoutAssignedToInputSchema';

export const LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadUpsertWithWhereUniqueWithoutAssignedToInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LeadUpdateWithoutAssignedToInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutAssignedToInputSchema) ]),
  create: z.union([ z.lazy(() => LeadCreateWithoutAssignedToInputSchema),z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema) ]),
}).strict();

export default LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema;
