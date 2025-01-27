import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractEventWhereUniqueInputSchema } from './ContractEventWhereUniqueInputSchema';
import { ContractEventCreateWithoutContractInputSchema } from './ContractEventCreateWithoutContractInputSchema';
import { ContractEventUncheckedCreateWithoutContractInputSchema } from './ContractEventUncheckedCreateWithoutContractInputSchema';

export const ContractEventCreateOrConnectWithoutContractInputSchema: z.ZodType<Prisma.ContractEventCreateOrConnectWithoutContractInput> = z.object({
  where: z.lazy(() => ContractEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractEventCreateWithoutContractInputSchema),z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema) ]),
}).strict();

export default ContractEventCreateOrConnectWithoutContractInputSchema;
