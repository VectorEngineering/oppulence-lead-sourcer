import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutTagsInputSchema } from './LinkCreateWithoutTagsInputSchema';
import { LinkUncheckedCreateWithoutTagsInputSchema } from './LinkUncheckedCreateWithoutTagsInputSchema';
import { LinkCreateOrConnectWithoutTagsInputSchema } from './LinkCreateOrConnectWithoutTagsInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutTagsInputSchema),z.lazy(() => LinkUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export default LinkCreateNestedOneWithoutTagsInputSchema;
