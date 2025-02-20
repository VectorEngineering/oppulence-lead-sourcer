import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionScalarWhereInputSchema } from './ContractVersionScalarWhereInputSchema';
import { ContractVersionUpdateManyMutationInputSchema } from './ContractVersionUpdateManyMutationInputSchema';
import { ContractVersionUncheckedUpdateManyWithoutContractInputSchema } from './ContractVersionUncheckedUpdateManyWithoutContractInputSchema';

export const ContractVersionUpdateManyWithWhereWithoutContractInputSchema: z.ZodType<Prisma.ContractVersionUpdateManyWithWhereWithoutContractInput> = z.object({
  where: z.lazy(() => ContractVersionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContractVersionUpdateManyMutationInputSchema),z.lazy(() => ContractVersionUncheckedUpdateManyWithoutContractInputSchema) ]),
}).strict();

export default ContractVersionUpdateManyWithWhereWithoutContractInputSchema;
