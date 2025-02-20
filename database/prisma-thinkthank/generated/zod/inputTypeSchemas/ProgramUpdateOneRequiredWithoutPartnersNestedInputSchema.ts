import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutPartnersInputSchema } from './ProgramCreateWithoutPartnersInputSchema';
import { ProgramUncheckedCreateWithoutPartnersInputSchema } from './ProgramUncheckedCreateWithoutPartnersInputSchema';
import { ProgramCreateOrConnectWithoutPartnersInputSchema } from './ProgramCreateOrConnectWithoutPartnersInputSchema';
import { ProgramUpsertWithoutPartnersInputSchema } from './ProgramUpsertWithoutPartnersInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutPartnersInputSchema } from './ProgramUpdateToOneWithWhereWithoutPartnersInputSchema';
import { ProgramUpdateWithoutPartnersInputSchema } from './ProgramUpdateWithoutPartnersInputSchema';
import { ProgramUncheckedUpdateWithoutPartnersInputSchema } from './ProgramUncheckedUpdateWithoutPartnersInputSchema';

export const ProgramUpdateOneRequiredWithoutPartnersNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutPartnersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutPartnersInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutPartnersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutPartnersInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutPartnersInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutPartnersInputSchema),z.lazy(() => ProgramUpdateWithoutPartnersInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutPartnersInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutPartnersNestedInputSchema;
