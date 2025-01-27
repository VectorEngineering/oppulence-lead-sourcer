import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EndpointCreateWithoutLeadsInputSchema } from './EndpointCreateWithoutLeadsInputSchema';
import { EndpointUncheckedCreateWithoutLeadsInputSchema } from './EndpointUncheckedCreateWithoutLeadsInputSchema';
import { EndpointCreateOrConnectWithoutLeadsInputSchema } from './EndpointCreateOrConnectWithoutLeadsInputSchema';
import { EndpointWhereUniqueInputSchema } from './EndpointWhereUniqueInputSchema';

export const EndpointCreateNestedOneWithoutLeadsInputSchema: z.ZodType<Prisma.EndpointCreateNestedOneWithoutLeadsInput> = z.object({
  create: z.union([ z.lazy(() => EndpointCreateWithoutLeadsInputSchema),z.lazy(() => EndpointUncheckedCreateWithoutLeadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EndpointCreateOrConnectWithoutLeadsInputSchema).optional(),
  connect: z.lazy(() => EndpointWhereUniqueInputSchema).optional()
}).strict();

export default EndpointCreateNestedOneWithoutLeadsInputSchema;
