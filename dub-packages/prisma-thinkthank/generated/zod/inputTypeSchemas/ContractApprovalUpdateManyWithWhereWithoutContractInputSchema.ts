import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractApprovalScalarWhereInputSchema } from './ContractApprovalScalarWhereInputSchema';
import { ContractApprovalUpdateManyMutationInputSchema } from './ContractApprovalUpdateManyMutationInputSchema';
import { ContractApprovalUncheckedUpdateManyWithoutContractInputSchema } from './ContractApprovalUncheckedUpdateManyWithoutContractInputSchema';

export const ContractApprovalUpdateManyWithWhereWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalUpdateManyWithWhereWithoutContractInput> = z.object({
  where: z.lazy(() => ContractApprovalScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ContractApprovalUpdateManyMutationInputSchema),z.lazy(() => ContractApprovalUncheckedUpdateManyWithoutContractInputSchema) ]),
}).strict();

export default ContractApprovalUpdateManyWithWhereWithoutContractInputSchema;
