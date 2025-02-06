import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutAiAssistantSettingsInputSchema } from './UserCreateWithoutAiAssistantSettingsInputSchema';
import { UserUncheckedCreateWithoutAiAssistantSettingsInputSchema } from './UserUncheckedCreateWithoutAiAssistantSettingsInputSchema';

export const UserCreateOrConnectWithoutAiAssistantSettingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAiAssistantSettingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAiAssistantSettingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAiAssistantSettingsInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutAiAssistantSettingsInputSchema;
