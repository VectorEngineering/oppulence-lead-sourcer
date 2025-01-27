import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractCreateWithoutContractDocumentsInputSchema } from './ContractCreateWithoutContractDocumentsInputSchema';
import { ContractUncheckedCreateWithoutContractDocumentsInputSchema } from './ContractUncheckedCreateWithoutContractDocumentsInputSchema';

export const ContractCreateOrConnectWithoutContractDocumentsInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutContractDocumentsInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractCreateWithoutContractDocumentsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractDocumentsInputSchema) ]),
}).strict();

export default ContractCreateOrConnectWithoutContractDocumentsInputSchema;
