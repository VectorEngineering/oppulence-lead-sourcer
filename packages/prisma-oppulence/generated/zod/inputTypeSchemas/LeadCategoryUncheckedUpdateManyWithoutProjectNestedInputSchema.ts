import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LeadCategoryCreateWithoutProjectInputSchema } from './LeadCategoryCreateWithoutProjectInputSchema';
import { LeadCategoryUncheckedCreateWithoutProjectInputSchema } from './LeadCategoryUncheckedCreateWithoutProjectInputSchema';
import { LeadCategoryCreateOrConnectWithoutProjectInputSchema } from './LeadCategoryCreateOrConnectWithoutProjectInputSchema';
import { LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema } from './LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema';
import { LeadCategoryCreateManyProjectInputEnvelopeSchema } from './LeadCategoryCreateManyProjectInputEnvelopeSchema';
import { LeadCategoryWhereUniqueInputSchema } from './LeadCategoryWhereUniqueInputSchema';
import { LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema } from './LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema';
import { LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema } from './LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema';
import { LeadCategoryScalarWhereInputSchema } from './LeadCategoryScalarWhereInputSchema';

export const LeadCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.LeadCategoryUncheckedUpdateManyWithoutProjectNestedInput> = z.object({
  create: z.union([ z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema),z.lazy(() => LeadCategoryCreateWithoutProjectInputSchema).array(),z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema),z.lazy(() => LeadCategoryUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LeadCategoryCreateOrConnectWithoutProjectInputSchema),z.lazy(() => LeadCategoryCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => LeadCategoryUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LeadCategoryCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LeadCategoryWhereUniqueInputSchema),z.lazy(() => LeadCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LeadCategoryWhereUniqueInputSchema),z.lazy(() => LeadCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LeadCategoryWhereUniqueInputSchema),z.lazy(() => LeadCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LeadCategoryWhereUniqueInputSchema),z.lazy(() => LeadCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema),z.lazy(() => LeadCategoryUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema),z.lazy(() => LeadCategoryUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LeadCategoryScalarWhereInputSchema),z.lazy(() => LeadCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default LeadCategoryUncheckedUpdateManyWithoutProjectNestedInputSchema;
