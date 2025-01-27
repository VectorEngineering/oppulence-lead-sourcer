import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutCommentsInputSchema } from './LeadCreateWithoutCommentsInputSchema';
import { LeadUncheckedCreateWithoutCommentsInputSchema } from './LeadUncheckedCreateWithoutCommentsInputSchema';
import { LeadCreateOrConnectWithoutCommentsInputSchema } from './LeadCreateOrConnectWithoutCommentsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutCommentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutCommentsInputSchema;
