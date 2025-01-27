import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithoutLeadInputSchema } from './DocumentUpdateWithoutLeadInputSchema';
import { DocumentUncheckedUpdateWithoutLeadInputSchema } from './DocumentUncheckedUpdateWithoutLeadInputSchema';
import { DocumentCreateWithoutLeadInputSchema } from './DocumentCreateWithoutLeadInputSchema';
import { DocumentUncheckedCreateWithoutLeadInputSchema } from './DocumentUncheckedCreateWithoutLeadInputSchema';

export const DocumentUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.DocumentUpsertWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DocumentUpdateWithoutLeadInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutLeadInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutLeadInputSchema) ]),
}).strict();

export default DocumentUpsertWithWhereUniqueWithoutLeadInputSchema;
