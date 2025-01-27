import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramCreateWithoutInvitesInputSchema } from './ProgramCreateWithoutInvitesInputSchema';
import { ProgramUncheckedCreateWithoutInvitesInputSchema } from './ProgramUncheckedCreateWithoutInvitesInputSchema';

export const ProgramCreateOrConnectWithoutInvitesInputSchema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutInvitesInput> = z.object({
  where: z.lazy(() => ProgramWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProgramCreateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutInvitesInputSchema) ]),
}).strict();

export default ProgramCreateOrConnectWithoutInvitesInputSchema;
