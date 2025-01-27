import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutResourcesInputSchema } from './ProgramCreateWithoutResourcesInputSchema';
import { ProgramUncheckedCreateWithoutResourcesInputSchema } from './ProgramUncheckedCreateWithoutResourcesInputSchema';
import { ProgramCreateOrConnectWithoutResourcesInputSchema } from './ProgramCreateOrConnectWithoutResourcesInputSchema';
import { ProgramUpsertWithoutResourcesInputSchema } from './ProgramUpsertWithoutResourcesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutResourcesInputSchema } from './ProgramUpdateToOneWithWhereWithoutResourcesInputSchema';
import { ProgramUpdateWithoutResourcesInputSchema } from './ProgramUpdateWithoutResourcesInputSchema';
import { ProgramUncheckedUpdateWithoutResourcesInputSchema } from './ProgramUncheckedUpdateWithoutResourcesInputSchema';

export const ProgramUpdateOneRequiredWithoutResourcesNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutResourcesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutResourcesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutResourcesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutResourcesInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutResourcesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutResourcesInputSchema),z.lazy(() => ProgramUpdateWithoutResourcesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutResourcesInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutResourcesNestedInputSchema;
