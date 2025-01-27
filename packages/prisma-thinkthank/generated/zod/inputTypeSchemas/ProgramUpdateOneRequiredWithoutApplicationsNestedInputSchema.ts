import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutApplicationsInputSchema } from './ProgramCreateWithoutApplicationsInputSchema';
import { ProgramUncheckedCreateWithoutApplicationsInputSchema } from './ProgramUncheckedCreateWithoutApplicationsInputSchema';
import { ProgramCreateOrConnectWithoutApplicationsInputSchema } from './ProgramCreateOrConnectWithoutApplicationsInputSchema';
import { ProgramUpsertWithoutApplicationsInputSchema } from './ProgramUpsertWithoutApplicationsInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutApplicationsInputSchema } from './ProgramUpdateToOneWithWhereWithoutApplicationsInputSchema';
import { ProgramUpdateWithoutApplicationsInputSchema } from './ProgramUpdateWithoutApplicationsInputSchema';
import { ProgramUncheckedUpdateWithoutApplicationsInputSchema } from './ProgramUncheckedUpdateWithoutApplicationsInputSchema';

export const ProgramUpdateOneRequiredWithoutApplicationsNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutApplicationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutApplicationsInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutApplicationsInputSchema),z.lazy(() => ProgramUpdateWithoutApplicationsInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutApplicationsInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutApplicationsNestedInputSchema;
