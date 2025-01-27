import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutDealInputSchema } from './DocumentCreateWithoutDealInputSchema';
import { DocumentUncheckedCreateWithoutDealInputSchema } from './DocumentUncheckedCreateWithoutDealInputSchema';

export const DocumentCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutDealInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDealInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutDealInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutDealInputSchema;
