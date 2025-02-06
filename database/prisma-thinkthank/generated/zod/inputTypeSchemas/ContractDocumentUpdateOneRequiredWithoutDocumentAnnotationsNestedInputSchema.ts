import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema } from './ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUpsertWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUpsertWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';
import { ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema';
import { ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema';

export const ContractDocumentUpdateOneRequiredWithoutDocumentAnnotationsNestedInputSchema: z.ZodType<Prisma.ContractDocumentUpdateOneRequiredWithoutDocumentAnnotationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutDocumentAnnotationsInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentAnnotationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractDocumentCreateOrConnectWithoutDocumentAnnotationsInputSchema).optional(),
  upsert: z.lazy(() => ContractDocumentUpsertWithoutDocumentAnnotationsInputSchema).optional(),
  connect: z.lazy(() => ContractDocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ContractDocumentUpdateToOneWithWhereWithoutDocumentAnnotationsInputSchema),z.lazy(() => ContractDocumentUpdateWithoutDocumentAnnotationsInputSchema),z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentAnnotationsInputSchema) ]).optional(),
}).strict();

export default ContractDocumentUpdateOneRequiredWithoutDocumentAnnotationsNestedInputSchema;
