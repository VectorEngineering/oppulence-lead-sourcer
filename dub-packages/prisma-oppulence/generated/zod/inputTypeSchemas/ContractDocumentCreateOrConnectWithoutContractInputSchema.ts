import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';
import { ContractDocumentCreateWithoutContractInputSchema } from './ContractDocumentCreateWithoutContractInputSchema';
import { ContractDocumentUncheckedCreateWithoutContractInputSchema } from './ContractDocumentUncheckedCreateWithoutContractInputSchema';

export const ContractDocumentCreateOrConnectWithoutContractInputSchema: z.ZodType<Prisma.ContractDocumentCreateOrConnectWithoutContractInput> = z.object({
  where: z.lazy(() => ContractDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutContractInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutContractInputSchema) ]),
}).strict();

export default ContractDocumentCreateOrConnectWithoutContractInputSchema;
