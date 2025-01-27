import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutContractsInputSchema } from './CustomerCreateWithoutContractsInputSchema';
import { CustomerUncheckedCreateWithoutContractsInputSchema } from './CustomerUncheckedCreateWithoutContractsInputSchema';
import { CustomerCreateOrConnectWithoutContractsInputSchema } from './CustomerCreateOrConnectWithoutContractsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutContractsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutContractsInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutContractsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutContractsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutContractsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutContractsInputSchema;
