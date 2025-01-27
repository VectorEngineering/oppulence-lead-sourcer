import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DomainCreateWithoutProgramsInputSchema } from './DomainCreateWithoutProgramsInputSchema';
import { DomainUncheckedCreateWithoutProgramsInputSchema } from './DomainUncheckedCreateWithoutProgramsInputSchema';
import { DomainCreateOrConnectWithoutProgramsInputSchema } from './DomainCreateOrConnectWithoutProgramsInputSchema';
import { DomainUpsertWithoutProgramsInputSchema } from './DomainUpsertWithoutProgramsInputSchema';
import { DomainWhereInputSchema } from './DomainWhereInputSchema';
import { DomainWhereUniqueInputSchema } from './DomainWhereUniqueInputSchema';
import { DomainUpdateToOneWithWhereWithoutProgramsInputSchema } from './DomainUpdateToOneWithWhereWithoutProgramsInputSchema';
import { DomainUpdateWithoutProgramsInputSchema } from './DomainUpdateWithoutProgramsInputSchema';
import { DomainUncheckedUpdateWithoutProgramsInputSchema } from './DomainUncheckedUpdateWithoutProgramsInputSchema';

export const DomainUpdateOneWithoutProgramsNestedInputSchema: z.ZodType<Prisma.DomainUpdateOneWithoutProgramsNestedInput> = z.object({
  create: z.union([ z.lazy(() => DomainCreateWithoutProgramsInputSchema),z.lazy(() => DomainUncheckedCreateWithoutProgramsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DomainCreateOrConnectWithoutProgramsInputSchema).optional(),
  upsert: z.lazy(() => DomainUpsertWithoutProgramsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DomainWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DomainWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DomainWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DomainUpdateToOneWithWhereWithoutProgramsInputSchema),z.lazy(() => DomainUpdateWithoutProgramsInputSchema),z.lazy(() => DomainUncheckedUpdateWithoutProgramsInputSchema) ]).optional(),
}).strict();

export default DomainUpdateOneWithoutProgramsNestedInputSchema;
