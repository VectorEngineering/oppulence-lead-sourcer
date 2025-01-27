import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractEventWhereUniqueInputSchema } from './ContractEventWhereUniqueInputSchema';
import { ContractEventUpdateWithoutContractInputSchema } from './ContractEventUpdateWithoutContractInputSchema';
import { ContractEventUncheckedUpdateWithoutContractInputSchema } from './ContractEventUncheckedUpdateWithoutContractInputSchema';

export const ContractEventUpdateWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractEventUpdateWithWhereUniqueWithoutContractInput> = z.object({
  where: z.lazy(() => ContractEventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractEventUpdateWithoutContractInputSchema),z.lazy(() => ContractEventUncheckedUpdateWithoutContractInputSchema) ]),
}).strict();

export default ContractEventUpdateWithWhereUniqueWithoutContractInputSchema;
