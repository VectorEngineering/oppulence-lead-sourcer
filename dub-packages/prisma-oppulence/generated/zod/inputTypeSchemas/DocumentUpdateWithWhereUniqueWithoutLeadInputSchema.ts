import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithoutLeadInputSchema } from './DocumentUpdateWithoutLeadInputSchema';
import { DocumentUncheckedUpdateWithoutLeadInputSchema } from './DocumentUncheckedUpdateWithoutLeadInputSchema';

export const DocumentUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutLeadInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutLeadInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default DocumentUpdateWithWhereUniqueWithoutLeadInputSchema;
