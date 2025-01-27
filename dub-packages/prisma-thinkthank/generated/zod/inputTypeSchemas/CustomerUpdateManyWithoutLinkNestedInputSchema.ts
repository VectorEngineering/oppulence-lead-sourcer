import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutLinkInputSchema } from './CustomerCreateWithoutLinkInputSchema';
import { CustomerUncheckedCreateWithoutLinkInputSchema } from './CustomerUncheckedCreateWithoutLinkInputSchema';
import { CustomerCreateOrConnectWithoutLinkInputSchema } from './CustomerCreateOrConnectWithoutLinkInputSchema';
import { CustomerUpsertWithWhereUniqueWithoutLinkInputSchema } from './CustomerUpsertWithWhereUniqueWithoutLinkInputSchema';
import { CustomerCreateManyLinkInputEnvelopeSchema } from './CustomerCreateManyLinkInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithWhereUniqueWithoutLinkInputSchema } from './CustomerUpdateWithWhereUniqueWithoutLinkInputSchema';
import { CustomerUpdateManyWithWhereWithoutLinkInputSchema } from './CustomerUpdateManyWithWhereWithoutLinkInputSchema';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';

export const CustomerUpdateManyWithoutLinkNestedInputSchema: z.ZodType<Prisma.CustomerUpdateManyWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutLinkInputSchema),z.lazy(() => CustomerCreateWithoutLinkInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutLinkInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CustomerUpsertWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => CustomerUpsertWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyLinkInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateWithWhereUniqueWithoutLinkInputSchema),z.lazy(() => CustomerUpdateWithWhereUniqueWithoutLinkInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CustomerUpdateManyWithWhereWithoutLinkInputSchema),z.lazy(() => CustomerUpdateManyWithWhereWithoutLinkInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CustomerScalarWhereInputSchema),z.lazy(() => CustomerScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default CustomerUpdateManyWithoutLinkNestedInputSchema;
