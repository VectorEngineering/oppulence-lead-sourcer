import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLabelsInputSchema } from './LeadCreateWithoutLabelsInputSchema';
import { LeadUncheckedCreateWithoutLabelsInputSchema } from './LeadUncheckedCreateWithoutLabelsInputSchema';
import { LeadCreateOrConnectWithoutLabelsInputSchema } from './LeadCreateOrConnectWithoutLabelsInputSchema';
import { LeadUpsertWithoutLabelsInputSchema } from './LeadUpsertWithoutLabelsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutLabelsInputSchema } from './LeadUpdateToOneWithWhereWithoutLabelsInputSchema';
import { LeadUpdateWithoutLabelsInputSchema } from './LeadUpdateWithoutLabelsInputSchema';
import { LeadUncheckedUpdateWithoutLabelsInputSchema } from './LeadUncheckedUpdateWithoutLabelsInputSchema';

export const LeadUpdateOneRequiredWithoutLabelsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLabelsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLabelsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLabelsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLabelsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutLabelsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutLabelsInputSchema),z.lazy(() => LeadUpdateWithoutLabelsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLabelsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutLabelsNestedInputSchema;
