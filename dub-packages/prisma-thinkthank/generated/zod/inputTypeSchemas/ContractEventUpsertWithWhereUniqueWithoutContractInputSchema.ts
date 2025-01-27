import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractEventWhereUniqueInputSchema } from './ContractEventWhereUniqueInputSchema';
import { ContractEventUpdateWithoutContractInputSchema } from './ContractEventUpdateWithoutContractInputSchema';
import { ContractEventUncheckedUpdateWithoutContractInputSchema } from './ContractEventUncheckedUpdateWithoutContractInputSchema';
import { ContractEventCreateWithoutContractInputSchema } from './ContractEventCreateWithoutContractInputSchema';
import { ContractEventUncheckedCreateWithoutContractInputSchema } from './ContractEventUncheckedCreateWithoutContractInputSchema';

export const ContractEventUpsertWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractEventUpsertWithWhereUniqueWithoutContractInput> = z.object({
  where: z.lazy(() => ContractEventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContractEventUpdateWithoutContractInputSchema),z.lazy(() => ContractEventUncheckedUpdateWithoutContractInputSchema) ]),
  create: z.union([ z.lazy(() => ContractEventCreateWithoutContractInputSchema),z.lazy(() => ContractEventUncheckedCreateWithoutContractInputSchema) ]),
}).strict();

export default ContractEventUpsertWithWhereUniqueWithoutContractInputSchema;
