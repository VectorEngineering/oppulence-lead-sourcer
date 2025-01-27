import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractWhereUniqueInputSchema } from './ContractWhereUniqueInputSchema';
import { ContractUpdateWithoutParentContractInputSchema } from './ContractUpdateWithoutParentContractInputSchema';
import { ContractUncheckedUpdateWithoutParentContractInputSchema } from './ContractUncheckedUpdateWithoutParentContractInputSchema';
import { ContractCreateWithoutParentContractInputSchema } from './ContractCreateWithoutParentContractInputSchema';
import { ContractUncheckedCreateWithoutParentContractInputSchema } from './ContractUncheckedCreateWithoutParentContractInputSchema';

export const ContractUpsertWithWhereUniqueWithoutParentContractInputSchema: z.ZodType<Prisma.ContractUpsertWithWhereUniqueWithoutParentContractInput> = z.object({
  where: z.lazy(() => ContractWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ContractUpdateWithoutParentContractInputSchema),z.lazy(() => ContractUncheckedUpdateWithoutParentContractInputSchema) ]),
  create: z.union([ z.lazy(() => ContractCreateWithoutParentContractInputSchema),z.lazy(() => ContractUncheckedCreateWithoutParentContractInputSchema) ]),
}).strict();

export default ContractUpsertWithWhereUniqueWithoutParentContractInputSchema;
