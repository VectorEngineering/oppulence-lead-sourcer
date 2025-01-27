import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutCustomersInputSchema } from './LinkCreateWithoutCustomersInputSchema';
import { LinkUncheckedCreateWithoutCustomersInputSchema } from './LinkUncheckedCreateWithoutCustomersInputSchema';
import { LinkCreateOrConnectWithoutCustomersInputSchema } from './LinkCreateOrConnectWithoutCustomersInputSchema';
import { LinkUpsertWithoutCustomersInputSchema } from './LinkUpsertWithoutCustomersInputSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateToOneWithWhereWithoutCustomersInputSchema } from './LinkUpdateToOneWithWhereWithoutCustomersInputSchema';
import { LinkUpdateWithoutCustomersInputSchema } from './LinkUpdateWithoutCustomersInputSchema';
import { LinkUncheckedUpdateWithoutCustomersInputSchema } from './LinkUncheckedUpdateWithoutCustomersInputSchema';

export const LinkUpdateOneWithoutCustomersNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneWithoutCustomersNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutCustomersInputSchema),z.lazy(() => LinkUncheckedCreateWithoutCustomersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutCustomersInputSchema).optional(),
  upsert: z.lazy(() => LinkUpsertWithoutCustomersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LinkUpdateToOneWithWhereWithoutCustomersInputSchema),z.lazy(() => LinkUpdateWithoutCustomersInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutCustomersInputSchema) ]).optional(),
}).strict();

export default LinkUpdateOneWithoutCustomersNestedInputSchema;
