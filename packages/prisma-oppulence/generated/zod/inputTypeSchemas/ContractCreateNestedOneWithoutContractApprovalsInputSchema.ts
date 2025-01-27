import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractCreateWithoutContractApprovalsInputSchema } from './ContractCreateWithoutContractApprovalsInputSchema';
import { ContractUncheckedCreateWithoutContractApprovalsInputSchema } from './ContractUncheckedCreateWithoutContractApprovalsInputSchema';
import { ContractCreateOrConnectWithoutContractApprovalsInputSchema } from './ContractCreateOrConnectWithoutContractApprovalsInputSchema';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';

export const ContractCreateNestedOneWithoutContractApprovalsInputSchema: z.ZodType<Prisma.ContractCreateNestedOneWithoutContractApprovalsInput> = z.object({
  create: z.union([ z.lazy(() => ContractCreateWithoutContractApprovalsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractApprovalsInputSchema).optional(),
  connect: z.lazy(() => ContractWhereUniqueInputSchema).optional()
}).strict();

export default ContractCreateNestedOneWithoutContractApprovalsInputSchema;
