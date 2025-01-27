import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutLeadProductFitInputSchema } from './LeadCreateWithoutLeadProductFitInputSchema';
import { LeadUncheckedCreateWithoutLeadProductFitInputSchema } from './LeadUncheckedCreateWithoutLeadProductFitInputSchema';
import { LeadCreateOrConnectWithoutLeadProductFitInputSchema } from './LeadCreateOrConnectWithoutLeadProductFitInputSchema';
import { LeadUpsertWithoutLeadProductFitInputSchema } from './LeadUpsertWithoutLeadProductFitInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutLeadProductFitInputSchema } from './LeadUpdateToOneWithWhereWithoutLeadProductFitInputSchema';
import { LeadUpdateWithoutLeadProductFitInputSchema } from './LeadUpdateWithoutLeadProductFitInputSchema';
import { LeadUncheckedUpdateWithoutLeadProductFitInputSchema } from './LeadUncheckedUpdateWithoutLeadProductFitInputSchema';

export const LeadUpdateOneRequiredWithoutLeadProductFitNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutLeadProductFitNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedCreateWithoutLeadProductFitInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutLeadProductFitInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutLeadProductFitInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutLeadProductFitInputSchema),z.lazy(() => LeadUpdateWithoutLeadProductFitInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutLeadProductFitInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutLeadProductFitNestedInputSchema;
