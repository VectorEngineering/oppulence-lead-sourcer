import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionWhereUniqueInputSchema } from './ContractVersionWhereUniqueInputSchema';
import { ContractVersionCreateWithoutContractInputSchema } from './ContractVersionCreateWithoutContractInputSchema';
import { ContractVersionUncheckedCreateWithoutContractInputSchema } from './ContractVersionUncheckedCreateWithoutContractInputSchema';

export const ContractVersionCreateOrConnectWithoutContractInputSchema: z.ZodType<Prisma.ContractVersionCreateOrConnectWithoutContractInput> = z.object({
  where: z.lazy(() => ContractVersionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractVersionCreateWithoutContractInputSchema),z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema) ]),
}).strict();

export default ContractVersionCreateOrConnectWithoutContractInputSchema;
