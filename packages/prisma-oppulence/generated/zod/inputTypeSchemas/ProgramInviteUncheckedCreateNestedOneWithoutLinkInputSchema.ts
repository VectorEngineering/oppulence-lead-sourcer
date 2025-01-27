import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteCreateWithoutLinkInputSchema } from './ProgramInviteCreateWithoutLinkInputSchema';
import { ProgramInviteUncheckedCreateWithoutLinkInputSchema } from './ProgramInviteUncheckedCreateWithoutLinkInputSchema';
import { ProgramInviteCreateOrConnectWithoutLinkInputSchema } from './ProgramInviteCreateOrConnectWithoutLinkInputSchema';
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema';

export const ProgramInviteUncheckedCreateNestedOneWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteUncheckedCreateNestedOneWithoutLinkInput> = z.object({
  create: z.union([ z.lazy(() => ProgramInviteCreateWithoutLinkInputSchema),z.lazy(() => ProgramInviteUncheckedCreateWithoutLinkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramInviteCreateOrConnectWithoutLinkInputSchema).optional(),
  connect: z.lazy(() => ProgramInviteWhereUniqueInputSchema).optional()
}).strict();

export default ProgramInviteUncheckedCreateNestedOneWithoutLinkInputSchema;
