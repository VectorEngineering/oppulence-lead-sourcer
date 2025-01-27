import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadCreateWithoutAttachmentsInputSchema } from './LeadCreateWithoutAttachmentsInputSchema';
import { LeadUncheckedCreateWithoutAttachmentsInputSchema } from './LeadUncheckedCreateWithoutAttachmentsInputSchema';

export const LeadCreateOrConnectWithoutAttachmentsInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutAttachmentsInput> = z.object({
  where: z.lazy(() => LeadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LeadCreateWithoutAttachmentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema) ]),
}).strict();

export default LeadCreateOrConnectWithoutAttachmentsInputSchema;
