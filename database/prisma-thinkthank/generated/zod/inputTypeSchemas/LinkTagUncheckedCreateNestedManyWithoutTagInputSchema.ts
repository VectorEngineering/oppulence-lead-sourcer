import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkTagCreateWithoutTagInputSchema } from './LinkTagCreateWithoutTagInputSchema';
import { LinkTagUncheckedCreateWithoutTagInputSchema } from './LinkTagUncheckedCreateWithoutTagInputSchema';
import { LinkTagCreateOrConnectWithoutTagInputSchema } from './LinkTagCreateOrConnectWithoutTagInputSchema';
import { LinkTagCreateManyTagInputEnvelopeSchema } from './LinkTagCreateManyTagInputEnvelopeSchema';
import { LinkTagWhereUniqueInputSchema } from './LinkTagWhereUniqueInputSchema';

export const LinkTagUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.LinkTagUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => LinkTagCreateWithoutTagInputSchema),z.lazy(() => LinkTagCreateWithoutTagInputSchema).array(),z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema),z.lazy(() => LinkTagUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LinkTagCreateOrConnectWithoutTagInputSchema),z.lazy(() => LinkTagCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LinkTagCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LinkTagWhereUniqueInputSchema),z.lazy(() => LinkTagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default LinkTagUncheckedCreateNestedManyWithoutTagInputSchema;
