import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateWithoutProjectDomainInputSchema } from './LinkUpdateWithoutProjectDomainInputSchema';
import { LinkUncheckedUpdateWithoutProjectDomainInputSchema } from './LinkUncheckedUpdateWithoutProjectDomainInputSchema';
import { LinkCreateWithoutProjectDomainInputSchema } from './LinkCreateWithoutProjectDomainInputSchema';
import { LinkUncheckedCreateWithoutProjectDomainInputSchema } from './LinkUncheckedCreateWithoutProjectDomainInputSchema';

export const LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutProjectDomainInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => LinkUpdateWithoutProjectDomainInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProjectDomainInputSchema) ]),
  create: z.union([ z.lazy(() => LinkCreateWithoutProjectDomainInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema) ]),
}).strict();

export default LinkUpsertWithWhereUniqueWithoutProjectDomainInputSchema;
