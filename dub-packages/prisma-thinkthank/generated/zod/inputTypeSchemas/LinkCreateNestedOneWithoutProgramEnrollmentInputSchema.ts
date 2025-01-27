import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutProgramEnrollmentInputSchema } from './LinkCreateWithoutProgramEnrollmentInputSchema';
import { LinkUncheckedCreateWithoutProgramEnrollmentInputSchema } from './LinkUncheckedCreateWithoutProgramEnrollmentInputSchema';
import { LinkCreateOrConnectWithoutProgramEnrollmentInputSchema } from './LinkCreateOrConnectWithoutProgramEnrollmentInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedOneWithoutProgramEnrollmentInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutProgramEnrollmentInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutProgramEnrollmentInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProgramEnrollmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutProgramEnrollmentInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export default LinkCreateNestedOneWithoutProgramEnrollmentInputSchema;
