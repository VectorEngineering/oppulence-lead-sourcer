import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutContractsInputSchema } from './CustomerCreateWithoutContractsInputSchema';
import { CustomerUncheckedCreateWithoutContractsInputSchema } from './CustomerUncheckedCreateWithoutContractsInputSchema';
import { CustomerCreateOrConnectWithoutContractsInputSchema } from './CustomerCreateOrConnectWithoutContractsInputSchema';
import { CustomerUpsertWithoutContractsInputSchema } from './CustomerUpsertWithoutContractsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutContractsInputSchema } from './CustomerUpdateToOneWithWhereWithoutContractsInputSchema';
import { CustomerUpdateWithoutContractsInputSchema } from './CustomerUpdateWithoutContractsInputSchema';
import { CustomerUncheckedUpdateWithoutContractsInputSchema } from './CustomerUncheckedUpdateWithoutContractsInputSchema';

export const CustomerUpdateOneRequiredWithoutContractsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutContractsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutContractsInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutContractsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutContractsInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutContractsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutContractsInputSchema),z.lazy(() => CustomerUpdateWithoutContractsInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutContractsInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneRequiredWithoutContractsNestedInputSchema;
