import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutTagsInputSchema } from './LinkCreateWithoutTagsInputSchema';
import { LinkUncheckedCreateWithoutTagsInputSchema } from './LinkUncheckedCreateWithoutTagsInputSchema';
import { LinkCreateOrConnectWithoutTagsInputSchema } from './LinkCreateOrConnectWithoutTagsInputSchema';
import { LinkUpsertWithoutTagsInputSchema } from './LinkUpsertWithoutTagsInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateToOneWithWhereWithoutTagsInputSchema } from './LinkUpdateToOneWithWhereWithoutTagsInputSchema';
import { LinkUpdateWithoutTagsInputSchema } from './LinkUpdateWithoutTagsInputSchema';
import { LinkUncheckedUpdateWithoutTagsInputSchema } from './LinkUncheckedUpdateWithoutTagsInputSchema';

export const LinkUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneRequiredWithoutTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutTagsInputSchema),z.lazy(() => LinkUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => LinkUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LinkUpdateToOneWithWhereWithoutTagsInputSchema),z.lazy(() => LinkUpdateWithoutTagsInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
}).strict();

export default LinkUpdateOneRequiredWithoutTagsNestedInputSchema;
