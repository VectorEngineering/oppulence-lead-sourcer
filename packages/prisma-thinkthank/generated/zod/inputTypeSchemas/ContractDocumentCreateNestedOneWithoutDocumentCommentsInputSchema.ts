import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateWithoutDocumentCommentsInputSchema';
import { ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema';
import { ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';

export const ContractDocumentCreateNestedOneWithoutDocumentCommentsInputSchema: z.ZodType<Prisma.ContractDocumentCreateNestedOneWithoutDocumentCommentsInput> = z.object({
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutDocumentCommentsInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema).optional(),
  connect: z.lazy(() => ContractDocumentWhereUniqueInputSchema).optional()
}).strict();

export default ContractDocumentCreateNestedOneWithoutDocumentCommentsInputSchema;
