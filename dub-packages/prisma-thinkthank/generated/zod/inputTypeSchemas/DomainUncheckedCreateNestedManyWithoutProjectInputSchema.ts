import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutProjectInputSchema } from './DomainCreateWithoutProjectInputSchema';
import { DomainUncheckedCreateWithoutProjectInputSchema } from './DomainUncheckedCreateWithoutProjectInputSchema';
import { DomainCreateOrConnectWithoutProjectInputSchema } from './DomainCreateOrConnectWithoutProjectInputSchema';
import { DomainCreateManyProjectInputEnvelopeSchema } from './DomainCreateManyProjectInputEnvelopeSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';

export const DomainUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.DomainUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutProjectInputSchema),z.lazy(() => DomainCreateWithoutProjectInputSchema).array(),z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema),z.lazy(() => DomainUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DomainCreateOrConnectWithoutProjectInputSchema),z.lazy(() => DomainCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DomainCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DomainWhereUniqueInputSchema),z.lazy(() => DomainWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DomainUncheckedCreateNestedManyWithoutProjectInputSchema;
