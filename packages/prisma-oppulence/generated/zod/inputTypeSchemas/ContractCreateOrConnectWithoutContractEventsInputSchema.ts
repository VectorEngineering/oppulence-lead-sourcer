import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractCreateWithoutContractEventsInputSchema } from './ContractCreateWithoutContractEventsInputSchema';
import { ContractUncheckedCreateWithoutContractEventsInputSchema } from './ContractUncheckedCreateWithoutContractEventsInputSchema';

export const ContractCreateOrConnectWithoutContractEventsInputSchema: z.ZodType<Prisma.ContractCreateOrConnectWithoutContractEventsInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractCreateWithoutContractEventsInputSchema),z.lazy(() => ContractUncheckedCreateWithoutContractEventsInputSchema) ]),
}).strict();

export default ContractCreateOrConnectWithoutContractEventsInputSchema;
