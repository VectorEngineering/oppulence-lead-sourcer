import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereInputSchema } from './ContractWhereInputSchema';
import { ContractUpdateWithoutContractEventsInputSchema } from './ContractUpdateWithoutContractEventsInputSchema';
import { ContractUncheckedUpdateWithoutContractEventsInputSchema } from './ContractUncheckedUpdateWithoutContractEventsInputSchema';

export const ContractUpdateToOneWithWhereWithoutContractEventsInputSchema: z.ZodType<Prisma.ContractUpdateToOneWithWhereWithoutContractEventsInput> = z.object({
  where: z.lazy(() => ContractWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractUpdateWithoutContractEventsInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutContractEventsInputSchema) ]),
}).strict();

export default ContractUpdateToOneWithWhereWithoutContractEventsInputSchema;
