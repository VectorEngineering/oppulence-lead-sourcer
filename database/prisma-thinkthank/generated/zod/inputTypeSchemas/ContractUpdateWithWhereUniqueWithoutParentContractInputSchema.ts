import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractUpdateWithoutParentContractInputSchema } from './ContractUpdateWithoutParentContractInputSchema';
import { ContractUncheckedUpdateWithoutParentContractInputSchema } from './ContractUncheckedUpdateWithoutParentContractInputSchema';

export const ContractUpdateWithWhereUniqueWithoutParentContractInputSchema: z.ZodType<Prisma.ContractUpdateWithWhereUniqueWithoutParentContractInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractUpdateWithoutParentContractInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutParentContractInputSchema) ]),
}).strict();

export default ContractUpdateWithWhereUniqueWithoutParentContractInputSchema;
