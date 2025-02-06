import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';
import { ContractDocumentUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUpdateWithoutDocumentCommentsInputSchema';
import { ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema';

export const ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInputSchema: z.ZodType<Prisma.ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInput> = z.object({
  where: z.lazy(() => ContractDocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractDocumentUpdateWithoutDocumentCommentsInputSchema),z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema) ]),
}).strict();

export default ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInputSchema;
