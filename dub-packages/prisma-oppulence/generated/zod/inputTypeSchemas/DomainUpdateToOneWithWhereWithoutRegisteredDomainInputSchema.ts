import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';
import { DomainUpdateWithoutRegisteredDomainInputSchema } from './DomainUpdateWithoutRegisteredDomainInputSchema';
import { DomainUncheckedUpdateWithoutRegisteredDomainInputSchema } from './DomainUncheckedUpdateWithoutRegisteredDomainInputSchema';

export const DomainUpdateToOneWithWhereWithoutRegisteredDomainInputSchema: z.ZodType<Prisma.DomainUpdateToOneWithWhereWithoutRegisteredDomainInput> = z.object({
  where: z.lazy(() => DomainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DomainUpdateWithoutRegisteredDomainInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutRegisteredDomainInputSchema) ]),
}).strict();

export default DomainUpdateToOneWithWhereWithoutRegisteredDomainInputSchema;
