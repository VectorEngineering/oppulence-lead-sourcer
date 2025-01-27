import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkCreateWithoutProgramEnrollmentInputSchema } from './LinkCreateWithoutProgramEnrollmentInputSchema';
import { LinkUncheckedCreateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedCreateWithoutProgramEnrollmentInputSchema';

export const LinkCreateOrConnectWithoutProgramEnrollmentInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutProgramEnrollmentInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutProgramEnrollmentInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProgramEnrollmentInputSchema) ]),
}).strict();

export default LinkCreateOrConnectWithoutProgramEnrollmentInputSchema;
