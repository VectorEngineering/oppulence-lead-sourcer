import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutExternalSystemsInputSchema } from './LeadCreateWithoutExternalSystemsInputSchema';
import { LeadUncheckedCreateWithoutExternalSystemsInputSchema } from './LeadUncheckedCreateWithoutExternalSystemsInputSchema';
import { LeadCreateOrConnectWithoutExternalSystemsInputSchema } from './LeadCreateOrConnectWithoutExternalSystemsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';

export const LeadCreateNestedOneWithoutExternalSystemsInputSchema: z.ZodType<Prisma.LeadCreateNestedOneWithoutExternalSystemsInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutExternalSystemsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutExternalSystemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutExternalSystemsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional()
}).strict();

export default LeadCreateNestedOneWithoutExternalSystemsInputSchema;
