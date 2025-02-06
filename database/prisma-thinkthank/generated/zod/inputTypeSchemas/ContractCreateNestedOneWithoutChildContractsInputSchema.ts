import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractCreateWithoutChildContractsInputSchema } from './ContractCreateWithoutChildContractsInputSchema';
import { ContractUncheckedCreateWithoutChildContractsInputSchema } from './ContractUncheckedCreateWithoutChildContractsInputSchema';
import { ContractCreateOrConnectWithoutChildContractsInputSchema } from './ContractCreateOrConnectWithoutChildContractsInputSchema';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';

export const ContractCreateNestedOneWithoutChildContractsInputSchema: z.ZodType<Prisma.ContractCreateNestedOneWithoutChildContractsInput> = z.object({
  create: z.union([ z.lazy(() => ContractCreateWithoutChildContractsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutChildContractsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractCreateOrConnectWithoutChildContractsInputSchema).optional(),
  connect: z.lazy(() => ContractWhereUniqueInputSchema).optional()
}).strict();

export default ContractCreateNestedOneWithoutChildContractsInputSchema;
