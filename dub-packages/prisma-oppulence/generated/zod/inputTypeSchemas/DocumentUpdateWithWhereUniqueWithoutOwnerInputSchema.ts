import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithoutOwnerInputSchema } from './DocumentUpdateWithoutOwnerInputSchema';
import { DocumentUncheckedUpdateWithoutOwnerInputSchema } from './DocumentUncheckedUpdateWithoutOwnerInputSchema';

export const DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.DocumentUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutOwnerInputSchema),z.lazy(() => DocumentUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export default DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema;
