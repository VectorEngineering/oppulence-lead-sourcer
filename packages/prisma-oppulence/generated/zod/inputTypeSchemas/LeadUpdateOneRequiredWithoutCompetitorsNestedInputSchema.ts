import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCreateWithoutCompetitorsInputSchema } from './LeadCreateWithoutCompetitorsInputSchema';
import { LeadUncheckedCreateWithoutCompetitorsInputSchema } from './LeadUncheckedCreateWithoutCompetitorsInputSchema';
import { LeadCreateOrConnectWithoutCompetitorsInputSchema } from './LeadCreateOrConnectWithoutCompetitorsInputSchema';
import { LeadUpsertWithoutCompetitorsInputSchema } from './LeadUpsertWithoutCompetitorsInputSchema';
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema';
import { LeadUpdateToOneWithWhereWithoutCompetitorsInputSchema } from './LeadUpdateToOneWithWhereWithoutCompetitorsInputSchema';
import { LeadUpdateWithoutCompetitorsInputSchema } from './LeadUpdateWithoutCompetitorsInputSchema';
import { LeadUncheckedUpdateWithoutCompetitorsInputSchema } from './LeadUncheckedUpdateWithoutCompetitorsInputSchema';

export const LeadUpdateOneRequiredWithoutCompetitorsNestedInputSchema: z.ZodType<Prisma.LeadUpdateOneRequiredWithoutCompetitorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCreateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedCreateWithoutCompetitorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadCreateOrConnectWithoutCompetitorsInputSchema).optional(),
  upsert: z.lazy(() => LeadUpsertWithoutCompetitorsInputSchema).optional(),
  connect: z.lazy(() => LeadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadUpdateToOneWithWhereWithoutCompetitorsInputSchema),z.lazy(() => LeadUpdateWithoutCompetitorsInputSchema),z.lazy(() => LeadUncheckedUpdateWithoutCompetitorsInputSchema) ]).optional(),
}).strict();

export default LeadUpdateOneRequiredWithoutCompetitorsNestedInputSchema;
