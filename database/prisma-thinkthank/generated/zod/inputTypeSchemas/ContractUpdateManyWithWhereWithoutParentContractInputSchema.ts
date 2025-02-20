import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractScalarWhereInputSchema } from './ContractScalarWhereInputSchema';
import { ContractUpdateManyMutationInputSchema } from './ContractUpdateManyMutationInputSchema';
import { ContractUncheckedUpdateManyWithoutParentContractInputSchema } from './ContractUncheckedUpdateManyWithoutParentContractInputSchema';

export const ContractUpdateManyWithWhereWithoutParentContractInputSchema: z.ZodType<Prisma.ContractUpdateManyWithWhereWithoutParentContractInput> = z.object({
  where: z.lazy(() => ContractScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContractUpdateManyMutationInputSchema),z.lazy(() => ContractUncheckedUpdateManyWithoutParentContractInputSchema) ]),
}).strict();

export default ContractUpdateManyWithWhereWithoutParentContractInputSchema;
