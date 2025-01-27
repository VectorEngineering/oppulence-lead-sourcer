import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutRegisteredDomainInputSchema } from './DomainCreateWithoutRegisteredDomainInputSchema';
import { DomainUncheckedCreateWithoutRegisteredDomainInputSchema } from './DomainUncheckedCreateWithoutRegisteredDomainInputSchema';
import { DomainCreateOrConnectWithoutRegisteredDomainInputSchema } from './DomainCreateOrConnectWithoutRegisteredDomainInputSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';

export const DomainCreateNestedOneWithoutRegisteredDomainInputSchema: z.ZodType<Prisma.DomainCreateNestedOneWithoutRegisteredDomainInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutRegisteredDomainInputSchema),z.lazy(() => DomainUncheckedCreateWithoutRegisteredDomainInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutRegisteredDomainInputSchema).optional(),
  connect: z.lazy(() => DomainWhereUniqueInputSchema).optional()
}).strict();

export default DomainCreateNestedOneWithoutRegisteredDomainInputSchema;
