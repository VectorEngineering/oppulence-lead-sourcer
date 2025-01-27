import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutLeadInputSchema } from './DocumentCreateWithoutLeadInputSchema';
import { DocumentUncheckedCreateWithoutLeadInputSchema } from './DocumentUncheckedCreateWithoutLeadInputSchema';

export const DocumentCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutLeadInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutLeadInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default DocumentCreateOrConnectWithoutLeadInputSchema;
