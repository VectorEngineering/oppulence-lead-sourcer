import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutLinksInputSchema } from './ProgramCreateWithoutLinksInputSchema';
import { ProgramUncheckedCreateWithoutLinksInputSchema } from './ProgramUncheckedCreateWithoutLinksInputSchema';
import { ProgramCreateOrConnectWithoutLinksInputSchema } from './ProgramCreateOrConnectWithoutLinksInputSchema';
import { ProgramUpsertWithoutLinksInputSchema } from './ProgramUpsertWithoutLinksInputSchema';
import { ProgramWhereInputSchema } from './ProgramWhereInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutLinksInputSchema } from './ProgramUpdateToOneWithWhereWithoutLinksInputSchema';
import { ProgramUpdateWithoutLinksInputSchema } from './ProgramUpdateWithoutLinksInputSchema';
import { ProgramUncheckedUpdateWithoutLinksInputSchema } from './ProgramUncheckedUpdateWithoutLinksInputSchema';

export const ProgramUpdateOneWithoutLinksNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneWithoutLinksNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutLinksInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutLinksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutLinksInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutLinksInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProgramWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutLinksInputSchema),z.lazy(() => ProgramUpdateWithoutLinksInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutLinksInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneWithoutLinksNestedInputSchema;
