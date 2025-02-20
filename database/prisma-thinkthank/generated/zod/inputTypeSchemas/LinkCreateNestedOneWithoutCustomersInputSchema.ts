import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutCustomersInputSchema } from './LinkCreateWithoutCustomersInputSchema';
import { LinkUncheckedCreateWithoutCustomersInputSchema } from './LinkUncheckedCreateWithoutCustomersInputSchema';
import { LinkCreateOrConnectWithoutCustomersInputSchema } from './LinkCreateOrConnectWithoutCustomersInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedOneWithoutCustomersInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutCustomersInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCustomersInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCustomersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutCustomersInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export default LinkCreateNestedOneWithoutCustomersInputSchema;
