import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutWorkspaceInputSchema } from './ProgramCreateWithoutWorkspaceInputSchema';
import { ProgramUncheckedCreateWithoutWorkspaceInputSchema } from './ProgramUncheckedCreateWithoutWorkspaceInputSchema';
import { ProgramCreateOrConnectWithoutWorkspaceInputSchema } from './ProgramCreateOrConnectWithoutWorkspaceInputSchema';
import { ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { ProgramCreateManyWorkspaceInputEnvelopeSchema } from './ProgramCreateManyWorkspaceInputEnvelopeSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema } from './ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { ProgramScalarWhereInputSchema } from './ProgramScalarWhereInputSchema';

export const ProgramUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.ProgramUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema),z.lazy(() => ProgramCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProgramCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => ProgramCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => ProgramUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProgramCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProgramWhereUniqueInputSchema),z.lazy(() => ProgramWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => ProgramUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => ProgramUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProgramScalarWhereInputSchema),z.lazy(() => ProgramScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ProgramUpdateManyWithoutWorkspaceNestedInputSchema;
