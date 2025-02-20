import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutUserInputSchema } from './LinkCreateWithoutUserInputSchema';
import { LinkUncheckedCreateWithoutUserInputSchema } from './LinkUncheckedCreateWithoutUserInputSchema';
import { LinkCreateOrConnectWithoutUserInputSchema } from './LinkCreateOrConnectWithoutUserInputSchema';
import { LinkCreateManyUserInputEnvelopeSchema } from './LinkCreateManyUserInputEnvelopeSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.LinkCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutUserInputSchema),z.lazy(() => LinkCreateWithoutUserInputSchema).array(),z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema),z.lazy(() => LinkUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkCreateOrConnectWithoutUserInputSchema),z.lazy(() => LinkCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkWhereUniqueInputSchema),z.lazy(() => LinkWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LinkCreateNestedManyWithoutUserInputSchema;
