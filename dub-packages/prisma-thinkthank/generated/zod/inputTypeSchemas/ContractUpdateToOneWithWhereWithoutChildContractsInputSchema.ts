import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';
import { ContractUpdateWithoutChildContractsInputSchema } from './ContractUpdateWithoutChildContractsInputSchema';
import { ContractUncheckedUpdateWithoutChildContractsInputSchema } from './ContractUncheckedUpdateWithoutChildContractsInputSchema';

export const ContractUpdateToOneWithWhereWithoutChildContractsInputSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutChildContractsInput> = z.object({
  where: z.lazy(() => ContractWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractUpdateWithoutChildContractsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutChildContractsInputSchema) ]),
}).strict();

export default ContractUpdateToOneWithWhereWithoutChildContractsInputSchema;
