import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractDocumentCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateWithoutDocumentCommentsInputSchema';
import { ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema';
import { ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema } from './ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema';
import { ContractDocumentUpsertWithoutDocumentCommentsInputSchema } from './ContractDocumentUpsertWithoutDocumentCommentsInputSchema';
import { ContractDocumentWhereUniqueInputSchema } from './ContractDocumentWhereUniqueInputSchema';
import { ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInputSchema } from './ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInputSchema';
import { ContractDocumentUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUpdateWithoutDocumentCommentsInputSchema';
import { ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema } from './ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema';

export const ContractDocumentUpdateOneRequiredWithoutDocumentCommentsNestedInputSchema: z.ZodType<Prisma.ContractDocumentUpdateOneRequiredWithoutDocumentCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ContractDocumentCreateWithoutDocumentCommentsInputSchema),z.lazy(() => ContractDocumentUncheckedCreateWithoutDocumentCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ContractDocumentCreateOrConnectWithoutDocumentCommentsInputSchema).optional(),
  upsert: z.lazy(() => ContractDocumentUpsertWithoutDocumentCommentsInputSchema).optional(),
  connect: z.lazy(() => ContractDocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ContractDocumentUpdateToOneWithWhereWithoutDocumentCommentsInputSchema),z.lazy(() => ContractDocumentUpdateWithoutDocumentCommentsInputSchema),z.lazy(() => ContractDocumentUncheckedUpdateWithoutDocumentCommentsInputSchema) ]).optional(),
}).strict();

export default ContractDocumentUpdateOneRequiredWithoutDocumentCommentsNestedInputSchema;
