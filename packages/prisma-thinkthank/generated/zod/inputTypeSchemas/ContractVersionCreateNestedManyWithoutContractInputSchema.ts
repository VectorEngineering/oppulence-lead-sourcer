import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractVersionCreateWithoutContractInputSchema } from './ContractVersionCreateWithoutContractInputSchema';
import { ContractVersionUncheckedCreateWithoutContractInputSchema } from './ContractVersionUncheckedCreateWithoutContractInputSchema';
import { ContractVersionCreateOrConnectWithoutContractInputSchema } from './ContractVersionCreateOrConnectWithoutContractInputSchema';
import { ContractVersionCreateManyContractInputEnvelopeSchema } from './ContractVersionCreateManyContractInputEnvelopeSchema';
import { ContractVersionWhereUniqueInputSchema } from './ContractVersionWhereUniqueInputSchema';

export const ContractVersionCreateNestedManyWithoutContractInputSchema: z.ZodType<Prisma.ContractVersionCreateNestedManyWithoutContractInput> = z.object({
  create: z.union([ z.lazy(() => ContractVersionCreateWithoutContractInputSchema),z.lazy(() => ContractVersionCreateWithoutContractInputSchema).array(),z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema),z.lazy(() => ContractVersionUncheckedCreateWithoutContractInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ContractVersionCreateOrConnectWithoutContractInputSchema),z.lazy(() => ContractVersionCreateOrConnectWithoutContractInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ContractVersionCreateManyContractInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ContractVersionWhereUniqueInputSchema),z.lazy(() => ContractVersionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ContractVersionCreateNestedManyWithoutContractInputSchema;
