import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryCreateWithoutProjectInputSchema } from './LeadCategoryCreateWithoutProjectInputSchema';
import { LeadCategoryUncheckedCreateWithoutProjectInputSchema } from './LeadCategoryUncheckedCreateWithoutProjectInputSchema';
import { LeadCategoryCreateOrConnectWithoutProjectInputSchema } from './LeadCategoryCreateOrConnectWithoutProjectInputSchema';
import { LeadCategoryCreateManyProjectInputEnvelopeSchema } from './LeadCategoryCreateManyProjectInputEnvelopeSchema';
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema';

export const LeadCategoryUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.LeadCategoryUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema),z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema).array(),z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema),z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCategoryCreateOrConnectWithoutProjectInputSchema),z.lazy(() => LeadCategoryCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCategoryCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LeadCategoryWhereUniqueInputSchema),z.lazy(() => LeadCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LeadCategoryUncheckedCreateNestedManyWithoutProjectInputSchema;
