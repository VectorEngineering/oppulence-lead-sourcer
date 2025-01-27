import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteCreateWithoutLinkInputSchema } from './ProgramInviteCreateWithoutLinkInputSchema';
import { ProgramInviteUncheckedCreateWithoutLinkInputSchema } from './ProgramInviteUncheckedCreateWithoutLinkInputSchema';
import { ProgramInviteCreateOrConnectWithoutLinkInputSchema } from './ProgramInviteCreateOrConnectWithoutLinkInputSchema';
import { ProgramInviteUpsertWithoutLinkInputSchema } from './ProgramInviteUpsertWithoutLinkInputSchema';
import { ProgramInviteWhereInputSchema } from './ProgramInviteWhereInputSchema';
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema';
import { ProgramInviteUpdateToOneWithWhereWithoutLinkInputSchema } from './ProgramInviteUpdateToOneWithWhereWithoutLinkInputSchema';
import { ProgramInviteUpdateWithoutLinkInputSchema } from './ProgramInviteUpdateWithoutLinkInputSchema';
import { ProgramInviteUncheckedUpdateWithoutLinkInputSchema } from './ProgramInviteUncheckedUpdateWithoutLinkInputSchema';

export const ProgramInviteUncheckedUpdateOneWithoutLinkNestedInputSchema: z.ZodType<Prisma.ProgramInviteUncheckedUpdateOneWithoutLinkNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramInviteCreateWithoutLinkInputSchema),z.lazy(() => ProgramInviteUncheckedCreateWithoutLinkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramInviteCreateOrConnectWithoutLinkInputSchema).optional(),
  upsert: z.lazy(() => ProgramInviteUpsertWithoutLinkInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProgramInviteWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProgramInviteWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProgramInviteWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramInviteUpdateToOneWithWhereWithoutLinkInputSchema),z.lazy(() => ProgramInviteUpdateWithoutLinkInputSchema),z.lazy(() => ProgramInviteUncheckedUpdateWithoutLinkInputSchema) ]).optional(),
}).strict();

export default ProgramInviteUncheckedUpdateOneWithoutLinkNestedInputSchema;
