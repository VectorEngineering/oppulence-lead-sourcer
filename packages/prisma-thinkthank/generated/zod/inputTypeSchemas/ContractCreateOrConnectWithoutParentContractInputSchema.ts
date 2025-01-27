import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractCreateWithoutParentContractInputSchema } from './ContractCreateWithoutParentContractInputSchema';
import { ContractUncheckedCreateWithoutParentContractInputSchema } from './ContractUncheckedCreateWithoutParentContractInputSchema';

export const ContractCreateOrConnectWithoutParentContractInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutParentContractInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractCreateWithoutParentContractInputSchema),z.lazy(() => ContractUncheckedCreateWithoutParentContractInputSchema) ]),
}).strict();

export default ContractCreateOrConnectWithoutParentContractInputSchema;
