import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractApprovalWhereUniqueInputSchema } from './ContractApprovalWhereUniqueInputSchema';
import { ContractApprovalUpdateWithoutContractInputSchema } from './ContractApprovalUpdateWithoutContractInputSchema';
import { ContractApprovalUncheckedUpdateWithoutContractInputSchema } from './ContractApprovalUncheckedUpdateWithoutContractInputSchema';

export const ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalUpdateWithWhereUniqueWithoutContractInput> = z.object({
  where: z.lazy(() => ContractApprovalWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractApprovalUpdateWithoutContractInputSchema),z.lazy(() => ContractApprovalUncheckedUpdateWithoutContractInputSchema) ]),
}).strict();

export default ContractApprovalUpdateWithWhereUniqueWithoutContractInputSchema;
