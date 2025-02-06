import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutProgramsInputSchema } from './DomainCreateWithoutProgramsInputSchema';
import { DomainUncheckedCreateWithoutProgramsInputSchema } from './DomainUncheckedCreateWithoutProgramsInputSchema';
import { DomainCreateOrConnectWithoutProgramsInputSchema } from './DomainCreateOrConnectWithoutProgramsInputSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';

export const DomainCreateNestedOneWithoutProgramsInputSchema: z.ZodType<Prisma.DomainCreateNestedOneWithoutProgramsInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutProgramsInputSchema),z.lazy(() => DomainUncheckedCreateWithoutProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutProgramsInputSchema).optional(),
  connect: z.lazy(() => DomainWhereUniqueInputSchema).optional()
}).strict();

export default DomainCreateNestedOneWithoutProgramsInputSchema;
