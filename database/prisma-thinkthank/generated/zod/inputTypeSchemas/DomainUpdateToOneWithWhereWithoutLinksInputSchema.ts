import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';
import { DomainUpdateWithoutLinksInputSchema } from './DomainUpdateWithoutLinksInputSchema';
import { DomainUncheckedUpdateWithoutLinksInputSchema } from './DomainUncheckedUpdateWithoutLinksInputSchema';

export const DomainUpdateToOneWithWhereWithoutLinksInputSchema: z.ZodType<Prisma.DomainUpdateToOneWithWhereWithoutLinksInput> = z.object({
  where: z.lazy(() => DomainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DomainUpdateWithoutLinksInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutLinksInputSchema) ]),
}).strict();

export default DomainUpdateToOneWithWhereWithoutLinksInputSchema;
