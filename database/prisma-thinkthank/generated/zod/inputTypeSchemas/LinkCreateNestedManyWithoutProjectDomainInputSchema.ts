import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutProjectDomainInputSchema } from './LinkCreateWithoutProjectDomainInputSchema';
import { LinkUncheckedCreateWithoutProjectDomainInputSchema } from './LinkUncheckedCreateWithoutProjectDomainInputSchema';
import { LinkCreateOrConnectWithoutProjectDomainInputSchema } from './LinkCreateOrConnectWithoutProjectDomainInputSchema';
import { LinkCreateManyProjectDomainInputEnvelopeSchema } from './LinkCreateManyProjectDomainInputEnvelopeSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedManyWithoutProjectDomainInputSchema: z.ZodType<Prisma.LinkCreateNestedManyWithoutProjectDomainInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutProjectDomainInputSchema),z.lazy(() => LinkCreateWithoutProjectDomainInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProjectDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutProjectDomainInputSchema),z.lazy(() => LinkCreateOrConnectWithoutProjectDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyProjectDomainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LinkCreateNestedManyWithoutProjectDomainInputSchema;
