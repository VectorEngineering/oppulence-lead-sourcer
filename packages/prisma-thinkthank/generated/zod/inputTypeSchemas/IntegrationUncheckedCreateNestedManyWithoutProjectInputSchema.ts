import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntegrationCreateWithoutProjectInputSchema } from './IntegrationCreateWithoutProjectInputSchema';
import { IntegrationUncheckedCreateWithoutProjectInputSchema } from './IntegrationUncheckedCreateWithoutProjectInputSchema';
import { IntegrationCreateOrConnectWithoutProjectInputSchema } from './IntegrationCreateOrConnectWithoutProjectInputSchema';
import { IntegrationCreateManyProjectInputEnvelopeSchema } from './IntegrationCreateManyProjectInputEnvelopeSchema';
import { IntegrationWhereUniqueInputSchema } from './IntegrationWhereUniqueInputSchema';

export const IntegrationUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.IntegrationUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => IntegrationCreateWithoutProjectInputSchema),z.lazy(() => IntegrationCreateWithoutProjectInputSchema).array(),z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema),z.lazy(() => IntegrationUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => IntegrationCreateOrConnectWithoutProjectInputSchema),z.lazy(() => IntegrationCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => IntegrationCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => IntegrationWhereUniqueInputSchema),z.lazy(() => IntegrationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default IntegrationUncheckedCreateNestedManyWithoutProjectInputSchema;
