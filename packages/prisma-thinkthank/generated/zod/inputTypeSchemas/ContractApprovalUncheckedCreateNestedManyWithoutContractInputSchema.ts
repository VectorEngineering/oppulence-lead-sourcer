import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractApprovalCreateWithoutContractInputSchema } from './ContractApprovalCreateWithoutContractInputSchema';
import { ContractApprovalUncheckedCreateWithoutContractInputSchema } from './ContractApprovalUncheckedCreateWithoutContractInputSchema';
import { ContractApprovalCreateOrConnectWithoutContractInputSchema } from './ContractApprovalCreateOrConnectWithoutContractInputSchema';
import { ContractApprovalCreateManyContractInputEnvelopeSchema } from './ContractApprovalCreateManyContractInputEnvelopeSchema';
import { ContractApprovalWhereUniqueInputSchema } from './ContractApprovalWhereUniqueInputSchema';

export const ContractApprovalUncheckedCreateNestedManyWithoutContractInputSchema: z.ZodType<Prisma.ContractApprovalUncheckedCreateNestedManyWithoutContractInput> = z.object({
  create: z.union([ z.lazy(() => ContractApprovalCreateWithoutContractInputSchema),z.lazy(() => ContractApprovalCreateWithoutContractInputSchema).array(),z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema),z.lazy(() => ContractApprovalUncheckedCreateWithoutContractInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractApprovalCreateOrConnectWithoutContractInputSchema),z.lazy(() => ContractApprovalCreateOrConnectWithoutContractInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractApprovalCreateManyContractInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContractApprovalWhereUniqueInputSchema),z.lazy(() => ContractApprovalWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ContractApprovalUncheckedCreateNestedManyWithoutContractInputSchema;
