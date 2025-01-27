import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutAttachmentsInputSchema } from './LeadCreateWithoutAttachmentsInputSchema';
import { LeadUncheckedCreateWithoutAttachmentsInputSchema } from './LeadUncheckedCreateWithoutAttachmentsInputSchema';
import { LeadCreateOrConnectWithoutAttachmentsInputSchema } from './LeadCreateOrConnectWithoutAttachmentsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedManyWithoutAttachmentsInputSchema: z.ZodType<Prisma.LeadCreateNestedManyWithoutAttachmentsInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutAttachmentsInputSchema),z.lazy(() => LeadCreateWithoutAttachmentsInputSchema).array(),z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutAttachmentsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCreateOrConnectWithoutAttachmentsInputSchema),z.lazy(() => LeadCreateOrConnectWithoutAttachmentsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadWhereUniqueInputSchema),z.lazy(() => LeadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadCreateNestedManyWithoutAttachmentsInputSchema;
