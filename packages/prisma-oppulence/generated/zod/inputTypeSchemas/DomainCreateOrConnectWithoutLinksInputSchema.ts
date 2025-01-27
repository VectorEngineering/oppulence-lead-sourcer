import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainCreateWithoutLinksInputSchema } from './DomainCreateWithoutLinksInputSchema';
import { DomainUncheckedCreateWithoutLinksInputSchema } from './DomainUncheckedCreateWithoutLinksInputSchema';

export const DomainCreateOrConnectWithoutLinksInputSchema: z.ZodType<Prisma.DomainCreateOrConnectWithoutLinksInput> = z.object({
  where: z.lazy(() => DomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DomainCreateWithoutLinksInputSchema),z.lazy(() => DomainUncheckedCreateWithoutLinksInputSchema) ]),
}).strict();

export default DomainCreateOrConnectWithoutLinksInputSchema;
