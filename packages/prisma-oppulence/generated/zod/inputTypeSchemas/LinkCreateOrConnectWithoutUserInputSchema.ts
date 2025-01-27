import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkCreateWithoutUserInputSchema } from './LinkCreateWithoutUserInputSchema';
import { LinkUncheckedCreateWithoutUserInputSchema } from './LinkUncheckedCreateWithoutUserInputSchema';

export const LinkCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutUserInputSchema),z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default LinkCreateOrConnectWithoutUserInputSchema;
