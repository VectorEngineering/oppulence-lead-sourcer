import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutCommunicationsInputSchema } from './LeadCreateWithoutCommunicationsInputSchema';
import { LeadUncheckedCreateWithoutCommunicationsInputSchema } from './LeadUncheckedCreateWithoutCommunicationsInputSchema';
import { LeadCreateOrConnectWithoutCommunicationsInputSchema } from './LeadCreateOrConnectWithoutCommunicationsInputSchema';
import { LeadUpsertWithoutCommunicationsInputSchema } from './LeadUpsertWithoutCommunicationsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutCommunicationsInputSchema } from './LeadUpdateToOneWithWhereWithoutCommunicationsInputSchema';
import { LeadUpdateWithoutCommunicationsInputSchema } from './LeadUpdateWithoutCommunicationsInputSchema';
import { LeadUncheckedUpdateWithoutCommunicationsInputSchema } from './LeadUncheckedUpdateWithoutCommunicationsInputSchema';

export const LeadUpdateOneRequiredWithoutCommunicationsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutCommunicationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCommunicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCommunicationsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutCommunicationsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutCommunicationsInputSchema),z.lazy(() => LeadUpdateWithoutCommunicationsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCommunicationsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutCommunicationsNestedInputSchema;
