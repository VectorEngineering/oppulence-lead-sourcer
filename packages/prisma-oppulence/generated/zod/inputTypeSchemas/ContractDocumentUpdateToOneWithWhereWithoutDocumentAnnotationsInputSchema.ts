import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentWhereInputSchema } from './ContractDocumentWhereInputSchema';
import { ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema';

export const ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInputSchema: z.ZodType<Prisma.ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInput> = z.object({
  where: z.lazy(() => ContractDocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema),z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema) ]),
}).strict();

export default ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInputSchema;
