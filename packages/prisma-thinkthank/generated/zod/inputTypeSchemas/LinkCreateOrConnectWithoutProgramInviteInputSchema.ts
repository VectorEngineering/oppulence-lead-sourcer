import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkCreateWithoutProgramInviteInputSchema } from './LinkCreateWithoutProgramInviteInputSchema';
import { LinkUncheckedCreateWithoutProgramInviteInputSchema } from './LinkUncheckedCreateWithoutProgramInviteInputSchema';

export const LinkCreateOrConnectWithoutProgramInviteInputSchema: z.ZodType<Prisma.LinkCreateOrConnectWithoutProgramInviteInput> = z.object({
  where: z.lazy(() => LinkWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LinkCreateWithoutProgramInviteInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProgramInviteInputSchema) ]),
}).strict();

export default LinkCreateOrConnectWithoutProgramInviteInputSchema;
