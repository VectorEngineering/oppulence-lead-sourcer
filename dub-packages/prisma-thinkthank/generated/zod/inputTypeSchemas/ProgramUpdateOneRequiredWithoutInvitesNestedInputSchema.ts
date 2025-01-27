import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProgramCreateWithoutInvitesInputSchema } from './ProgramCreateWithoutInvitesInputSchema';
import { ProgramUncheckedCreateWithoutInvitesInputSchema } from './ProgramUncheckedCreateWithoutInvitesInputSchema';
import { ProgramCreateOrConnectWithoutInvitesInputSchema } from './ProgramCreateOrConnectWithoutInvitesInputSchema';
import { ProgramUpsertWithoutInvitesInputSchema } from './ProgramUpsertWithoutInvitesInputSchema';
import { ProgramWhereUniqueInputSchema } from './ProgramWhereUniqueInputSchema';
import { ProgramUpdateToOneWithWhereWithoutInvitesInputSchema } from './ProgramUpdateToOneWithWhereWithoutInvitesInputSchema';
import { ProgramUpdateWithoutInvitesInputSchema } from './ProgramUpdateWithoutInvitesInputSchema';
import { ProgramUncheckedUpdateWithoutInvitesInputSchema } from './ProgramUncheckedUpdateWithoutInvitesInputSchema';

export const ProgramUpdateOneRequiredWithoutInvitesNestedInputSchema: z.ZodType<Prisma.ProgramUpdateOneRequiredWithoutInvitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProgramCreateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutInvitesInputSchema).optional(),
  upsert: z.lazy(() => ProgramUpsertWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => ProgramWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProgramUpdateToOneWithWhereWithoutInvitesInputSchema),z.lazy(() => ProgramUpdateWithoutInvitesInputSchema),z.lazy(() => ProgramUncheckedUpdateWithoutInvitesInputSchema) ]).optional(),
}).strict();

export default ProgramUpdateOneRequiredWithoutInvitesNestedInputSchema;
