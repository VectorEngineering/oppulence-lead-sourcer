import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadProductFitCreateWithoutAssessmentsInputSchema } from './LeadProductFitCreateWithoutAssessmentsInputSchema';
import { LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema';
import { LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema } from './LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema';
import { LeadProductFitUpsertWithoutAssessmentsInputSchema } from './LeadProductFitUpsertWithoutAssessmentsInputSchema';
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema';
import { LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInputSchema } from './LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInputSchema';
import { LeadProductFitUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUpdateWithoutAssessmentsInputSchema';
import { LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema';

export const LeadProductFitUpdateOneRequiredWithoutAssessmentsNestedInputSchema: z.ZodType<Prisma.LeadProductFitUpdateOneRequiredWithoutAssessmentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadProductFitCreateWithoutAssessmentsInputSchema),z.lazy(() => LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema).optional(),
  upsert: z.lazy(() => LeadProductFitUpsertWithoutAssessmentsInputSchema).optional(),
  connect: z.lazy(() => LeadProductFitWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInputSchema),z.lazy(() => LeadProductFitUpdateWithoutAssessmentsInputSchema),z.lazy(() => LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema) ]).optional(),
}).strict();

export default LeadProductFitUpdateOneRequiredWithoutAssessmentsNestedInputSchema;
