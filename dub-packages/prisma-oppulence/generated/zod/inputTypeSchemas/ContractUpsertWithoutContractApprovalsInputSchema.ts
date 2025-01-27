import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractUpdateWithoutContractApprovalsInputSchema } from './ContractUpdateWithoutContractApprovalsInputSchema';
import { ContractUncheckedUpdateWithoutContractApprovalsInputSchema } from './ContractUncheckedUpdateWithoutContractApprovalsInputSchema';
import { ContractCreateWithoutContractApprovalsInputSchema } from './ContractCreateWithoutContractApprovalsInputSchema';
import { ContractUncheckedCreateWithoutContractApprovalsInputSchema } from './ContractUncheckedCreateWithoutContractApprovalsInputSchema';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';

export const ContractUpsertWithoutContractApprovalsInputSchema: z.ZodType<Prisma.ContractUpsertWithoutContractApprovalsInput> = z.object({
  update: z.union([ z.lazy(() => ContractUpdateWithoutContractApprovalsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractApprovalsInputSchema) ]),
  create: z.union([ z.lazy(() => ContractCreateWithoutContractApprovalsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractApprovalsInputSchema) ]),
  where: z.lazy(() => ContractWhereInputSchema).optional()
}).strict();

export default ContractUpsertWithoutContractApprovalsInputSchema;
