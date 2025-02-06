import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';
import { ContractDocumentUpdateWithoutContractInputSchema } from './ContractDocumentUpdateWithoutContractInputSchema';
import { ContractDocumentUncheckedUpdateWithoutContractInputSchema } from './ContractDocumentUncheckedUpdateWithoutContractInputSchema';

export const ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema: z.ZodType<Prisma.ContractDocumentUpdateWithWhereUniqueWithoutContractInput> = z.object({
  where: z.lazy(() => ContractDocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ContractDocumentUpdateWithoutContractInputSchema),z.lazy(() => ContractDocumentUncheckedUpdateWithoutContractInputSchema) ]),
}).strict();

export default ContractDocumentUpdateWithWhereUniqueWithoutContractInputSchema;
