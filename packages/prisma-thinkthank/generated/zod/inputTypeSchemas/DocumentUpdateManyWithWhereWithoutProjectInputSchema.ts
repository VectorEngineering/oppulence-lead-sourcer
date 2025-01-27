import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema';
import { DocumentUpdateManyMutationInputSchema } from './DocumentUpdateManyMutationInputSchema';
import { DocumentUncheckedUpdateManyWithoutProjectInputSchema } from './DocumentUncheckedUpdateManyWithoutProjectInputSchema';

export const DocumentUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.DocumentUpdateManyWithWhereWithoutProjectInput> = z.object({
  where: z.lazy(() => DocumentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DocumentUpdateManyMutationInputSchema),z.lazy(() => DocumentUncheckedUpdateManyWithoutProjectInputSchema) ]),
}).strict();

export default DocumentUpdateManyWithWhereWithoutProjectInputSchema;
