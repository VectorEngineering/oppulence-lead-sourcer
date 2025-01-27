import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutCommentsInputSchema } from './LeadCreateWithoutCommentsInputSchema';
import { LeadUncheckedCreateWithoutCommentsInputSchema } from './LeadUncheckedCreateWithoutCommentsInputSchema';
import { LeadCreateOrConnectWithoutCommentsInputSchema } from './LeadCreateOrConnectWithoutCommentsInputSchema';
import { LeadUpsertWithoutCommentsInputSchema } from './LeadUpsertWithoutCommentsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutCommentsInputSchema } from './LeadUpdateToOneWithWhereWithoutCommentsInputSchema';
import { LeadUpdateWithoutCommentsInputSchema } from './LeadUpdateWithoutCommentsInputSchema';
import { LeadUncheckedUpdateWithoutCommentsInputSchema } from './LeadUncheckedUpdateWithoutCommentsInputSchema';

export const LeadUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutCommentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => LeadUpdateWithoutCommentsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutCommentsNestedInputSchema;
