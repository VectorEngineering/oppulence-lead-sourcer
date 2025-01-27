import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';
import { ContractDocumentCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema';

export const ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema: z.ZodType<Prisma.ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInput> = z.object({
  where: z.lazy(() => ContractDocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutDocumentAnnotationsInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema) ]),
}).strict();

export default ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema;
