import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutProgramInviteInputSchema } from './LinkCreateWithoutProgramInviteInputSchema';
import { LinkUncheckedCreateWithoutProgramInviteInputSchema } from './LinkUncheckedCreateWithoutProgramInviteInputSchema';
import { LinkCreateOrConnectWithoutProgramInviteInputSchema } from './LinkCreateOrConnectWithoutProgramInviteInputSchema';
import { LinkUpsertWithoutProgramInviteInputSchema } from './LinkUpsertWithoutProgramInviteInputSchema';
import { LinkWhereInputSchema } from './LinkWhereInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';
import { LinkUpdateToOneWithWhereWithoutProgramInviteInputSchema } from './LinkUpdateToOneWithWhereWithoutProgramInviteInputSchema';
import { LinkUpdateWithoutProgramInviteInputSchema } from './LinkUpdateWithoutProgramInviteInputSchema';
import { LinkUncheckedUpdateWithoutProgramInviteInputSchema } from './LinkUncheckedUpdateWithoutProgramInviteInputSchema';

export const LinkUpdateOneWithoutProgramInviteNestedInputSchema: z.ZodType<Prisma.LinkUpdateOneWithoutProgramInviteNestedInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutProgramInviteInputSchema),z.lazy(() => LinkUncheckedCreateWithoutProgramInviteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutProgramInviteInputSchema).optional(),
  upsert: z.lazy(() => LinkUpsertWithoutProgramInviteInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LinkWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LinkUpdateToOneWithWhereWithoutProgramInviteInputSchema),z.lazy(() => LinkUpdateWithoutProgramInviteInputSchema),z.lazy(() => LinkUncheckedUpdateWithoutProgramInviteInputSchema) ]).optional(),
}).strict();

export default LinkUpdateOneWithoutProgramInviteNestedInputSchema;
