import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramInviteCreateWithoutLinkInputSchema } from './ProgramInviteCreateWithoutLinkInputSchema';
import { ProgramInviteUncheckedCreateWithoutLinkInputSchema } from './ProgramInviteUncheckedCreateWithoutLinkInputSchema';
import { ProgramInviteCreateOrConnectWithoutLinkInputSchema } from './ProgramInviteCreateOrConnectWithoutLinkInputSchema';
import { ProgramInviteWhereUniqueInputSchema } from './ProgramInviteWhereUniqueInputSchema';

export const ProgramInviteCreateNestedOneWithoutLinkInputSchema: z.ZodType<Prisma.ProgramInviteCreateNestedOneWithoutLinkInput> = z.object({
  create: z.union([ z.lazy(() => ProgramInviteCreateWithoutLinkInputSchema),z.lazy(() => ProgramInviteUncheckedCreateWithoutLinkInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramInviteCreateOrConnectWithoutLinkInputSchema).optional(),
  connect: z.lazy(() => ProgramInviteWhereUniqueInputSchema).optional()
}).strict();

export default ProgramInviteCreateNestedOneWithoutLinkInputSchema;
