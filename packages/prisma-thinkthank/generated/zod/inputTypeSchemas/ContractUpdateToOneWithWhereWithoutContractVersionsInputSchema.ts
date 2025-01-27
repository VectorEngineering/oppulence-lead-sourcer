import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';
import { ContractUpdateWithoutContractVersionsInputSchema } from './ContractUpdateWithoutContractVersionsInputSchema';
import { ContractUncheckedUpdateWithoutContractVersionsInputSchema } from './ContractUncheckedUpdateWithoutContractVersionsInputSchema';

export const ContractUpdateToOneWithWhereWithoutContractVersionsInputSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutContractVersionsInput> = z.object({
  where: z.lazy(() => ContractWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractUpdateWithoutContractVersionsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractVersionsInputSchema) ]),
}).strict();

export default ContractUpdateToOneWithWhereWithoutContractVersionsInputSchema;
