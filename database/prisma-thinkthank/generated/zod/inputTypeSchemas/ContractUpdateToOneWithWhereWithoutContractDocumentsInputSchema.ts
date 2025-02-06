import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';
import { ContractUpdateWithoutContractDocumentsInputSchema } from './ContractUpdateWithoutContractDocumentsInputSchema';
import { ContractUncheckedUpdateWithoutContractDocumentsInputSchema } from './ContractUncheckedUpdateWithoutContractDocumentsInputSchema';

export const ContractUpdateToOneWithWhereWithoutContractDocumentsInputSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutContractDocumentsInput> = z.object({
  where: z.lazy(() => ContractWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractUpdateWithoutContractDocumentsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractDocumentsInputSchema) ]),
}).strict();

export default ContractUpdateToOneWithWhereWithoutContractDocumentsInputSchema;
