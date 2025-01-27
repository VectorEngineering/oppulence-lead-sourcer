import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractEventScalarWhereInputSchema } from './ContractEventScalarWhereInputSchema';
import { ContractEventUpdateManyMutationInputSchema } from './ContractEventUpdateManyMutationInputSchema';
import { ContractEventUncheckedUpdateManyWithoutContractInputSchema } from './ContractEventUncheckedUpdateManyWithoutContractInputSchema';

export const ContractEventUpdateManyWithWhereWithoutContractInputSchema: z.ZodType<Prisma.ContractEventUpdateManyWithWhereWithoutContractInput> = z.object({
  where: z.lazy(() => ContractEventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContractEventUpdateManyMutationInputSchema),z.lazy(() => ContractEventUncheckedUpdateManyWithoutContractInputSchema) ]),
}).strict();

export default ContractEventUpdateManyWithWhereWithoutContractInputSchema;
