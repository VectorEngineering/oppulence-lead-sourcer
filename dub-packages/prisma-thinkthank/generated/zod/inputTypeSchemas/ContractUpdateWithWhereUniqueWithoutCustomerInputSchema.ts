import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractUpdateWithoutCustomerInputSchema } from './ContractUpdateWithoutCustomerInputSchema';
import { ContractUncheckedUpdateWithoutCustomerInputSchema } from './ContractUncheckedUpdateWithoutCustomerInputSchema';

export const ContractUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.ContractUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractUpdateWithoutCustomerInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default ContractUpdateWithWhereUniqueWithoutCustomerInputSchema;
