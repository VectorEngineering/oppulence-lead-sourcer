import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutDecisionMakersInputSchema } from './LeadCreateWithoutDecisionMakersInputSchema';
import { LeadUncheckedCreateWithoutDecisionMakersInputSchema } from './LeadUncheckedCreateWithoutDecisionMakersInputSchema';
import { LeadCreateOrConnectWithoutDecisionMakersInputSchema } from './LeadCreateOrConnectWithoutDecisionMakersInputSchema';
import { LeadUpsertWithoutDecisionMakersInputSchema } from './LeadUpsertWithoutDecisionMakersInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutDecisionMakersInputSchema } from './LeadUpdateToOneWithWhereWithoutDecisionMakersInputSchema';
import { LeadUpdateWithoutDecisionMakersInputSchema } from './LeadUpdateWithoutDecisionMakersInputSchema';
import { LeadUncheckedUpdateWithoutDecisionMakersInputSchema } from './LeadUncheckedUpdateWithoutDecisionMakersInputSchema';

export const LeadUpdateOneRequiredWithoutDecisionMakersNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutDecisionMakersNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutDecisionMakersInputSchema),z.lazy(() => LeadUncheckedCreateWithoutDecisionMakersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutDecisionMakersInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutDecisionMakersInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutDecisionMakersInputSchema),z.lazy(() => LeadUpdateWithoutDecisionMakersInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutDecisionMakersInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutDecisionMakersNestedInputSchema;
