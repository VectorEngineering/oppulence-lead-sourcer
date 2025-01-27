import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutTagsInputSchema } from './LeadCreateWithoutTagsInputSchema';
import { LeadUncheckedCreateWithoutTagsInputSchema } from './LeadUncheckedCreateWithoutTagsInputSchema';

export const LeadCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutTagsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutTagsInputSchema;
