import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractEventCreateWithoutContractInputSchema } from './ContractEventCreateWithoutContractInputSchema';
import { ContractEventUncheckedCreateWithoutContractInputSchema } from './ContractEventUncheckedCreateWithoutContractInputSchema';
import { ContractEventCreateOrConnectWithoutContractInputSchema } from './ContractEventCreateOrConnectWithoutContractInputSchema';
import { ContractEventCreateManyContractInputEnvelopeSchema } from './ContractEventCreateManyContractInputEnvelopeSchema';
import { ContractEventWhereUniqueInputSchema } from './ContractEventWhereUniqueInputSchema';

export const ContractEventCreateNestedManyWithoutContractInputSchema: z.ZodType<Prisma.ContractEventCreateNestedManyWithoutContractInput> = z.object({
  create: z.union([ z.lazy(() => ContractEventCreateWithoutContractInputSchema),z.lazy(() => ContractEventCreateWithoutContractInputSchema).array(),z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema),z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractEventCreateOrConnectWithoutContractInputSchema),z.lazy(() => ContractEventCreateOrConnectWithoutContractInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractEventCreateManyContractInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContractEventWhereUniqueInputSchema),z.lazy(() => ContractEventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ContractEventCreateNestedManyWithoutContractInputSchema;
