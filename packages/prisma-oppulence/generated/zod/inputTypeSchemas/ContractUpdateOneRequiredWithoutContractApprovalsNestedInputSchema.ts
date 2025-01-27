import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractCreateWithoutContractApprovalsInputSchema } from './ContractCreateWithoutContractApprovalsInputSchema';
import { ContractUncheckedCreateWithoutContractApprovalsInputSchema } from './ContractUncheckedCreateWithoutContractApprovalsInputSchema';
import { ContractCreateOrConnectWithoutContractApprovalsInputSchema } from './ContractCreateOrConnectWithoutContractApprovalsInputSchema';
import { ContractUpsertWithoutContractApprovalsInputSchema } from './ContractUpsertWithoutContractApprovalsInputSchema';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractUpdateToOneWithWhereWithoutContractApprovalsInputSchema } from './ContractUpdateToOneWithWhereWithoutContractApprovalsInputSchema';
import { ContractUpdateWithoutContractApprovalsInputSchema } from './ContractUpdateWithoutContractApprovalsInputSchema';
import { ContractUncheckedUpdateWithoutContractApprovalsInputSchema } from './ContractUncheckedUpdateWithoutContractApprovalsInputSchema';

export const ContractUpdateOneRequiredWithoutContractApprovalsNestedInputSchema: z.ZodType<Prisma.ContractUpdateOneRequiredWithoutContractApprovalsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContractCreateWithoutContractApprovalsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractApprovalsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutContractApprovalsInputSchema).optional(),
  upsert: z.lazy(() => ContractUpsertWithoutContractApprovalsInputSchema).optional(),
  connect: z.lazy(() => ContractWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ContractUpdateToOneWithWhereWithoutContractApprovalsInputSchema),z.lazy(() => ContractUpdateWithoutContractApprovalsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractApprovalsInputSchema) ]).optional(),
}).strict();

export default ContractUpdateOneRequiredWithoutContractApprovalsNestedInputSchema;
