import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutLinkInputSchema } from './CustomerCreateWithoutLinkInputSchema';
import { CustomerUncheckedCreateWithoutLinkInputSchema } from './CustomerUncheckedCreateWithoutLinkInputSchema';
import { CustomerCreateOrConnectWithoutLinkInputSchema } from './CustomerCreateOrConnectWithoutLinkInputSchema';
import { CustomerCreateManyLinkInputEnvelopeSchema } from './CustomerCreateManyLinkInputEnvelopeSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerUncheckedCreateNestedManyWithoutLinkInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateNestedManyWithoutLinkInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutLinkInputSchema),z.lazy(() => CustomerCreateWithoutLinkInputSchema).array(),z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutLinkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CustomerCreateOrConnectWithoutLinkInputSchema),z.lazy(() => CustomerCreateOrConnectWithoutLinkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CustomerCreateManyLinkInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CustomerWhereUniqueInputSchema),z.lazy(() => CustomerWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default CustomerUncheckedCreateNestedManyWithoutLinkInputSchema;
