import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutInvitesInputSchema } from './ProgramCreateWithoutInvitesInputSchema';
import { ProgramUncheckedCreateWithoutInvitesInputSchema } from './ProgramUncheckedCreateWithoutInvitesInputSchema';
import { ProgramCreateOrConnectWithoutInvitesInputSchema } from './ProgramCreateOrConnectWithoutInvitesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';

export const ProgramCreateNestedOneWithoutInvitesInputSchema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutInvitesInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional()
}).strict();

export default ProgramCreateNestedOneWithoutInvitesInputSchema;
