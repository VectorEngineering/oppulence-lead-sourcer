import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionWhereUniqueInputSchema } from './ContractVersionWhereUniqueInputSchema';
import { ContractVersionUpdateWithoutContractInputSchema } from './ContractVersionUpdateWithoutContractInputSchema';
import { ContractVersionUncheckedUpdateWithoutContractInputSchema } from './ContractVersionUncheckedUpdateWithoutContractInputSchema';

export const ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractVersionUpdateWithWhereUniqueWithoutContractInput> = z.object({
  where: z.lazy(() => ContractVersionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractVersionUpdateWithoutContractInputSchema),z.lazy(() => ContractVersionUncheckedUpdateWithoutContractInputSchema) ]),
}).strict();

export default ContractVersionUpdateWithWhereUniqueWithoutContractInputSchema;
