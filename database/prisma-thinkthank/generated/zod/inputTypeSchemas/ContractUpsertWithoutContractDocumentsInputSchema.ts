import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractUpdateWithoutContractDocumentsInputSchema } from './ContractUpdateWithoutContractDocumentsInputSchema';
import { ContractUncheckedUpdateWithoutContractDocumentsInputSchema } from './ContractUncheckedUpdateWithoutContractDocumentsInputSchema';
import { ContractCreateWithoutContractDocumentsInputSchema } from './ContractCreateWithoutContractDocumentsInputSchema';
import { ContractUncheckedCreateWithoutContractDocumentsInputSchema } from './ContractUncheckedCreateWithoutContractDocumentsInputSchema';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';

export const ContractUpsertWithoutContractDocumentsInputSchema: z.ZodType<Prisma.ContractUpsertWithoutContractDocumentsInput> = z.object({
  update: z.union([ z.lazy(() => ContractUpdateWithoutContractDocumentsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractDocumentsInputSchema) ]),
  create: z.union([ z.lazy(() => ContractCreateWithoutContractDocumentsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractDocumentsInputSchema) ]),
  where: z.lazy(() => ContractWhereInputSchema).optional()
}).strict();

export default ContractUpsertWithoutContractDocumentsInputSchema;
