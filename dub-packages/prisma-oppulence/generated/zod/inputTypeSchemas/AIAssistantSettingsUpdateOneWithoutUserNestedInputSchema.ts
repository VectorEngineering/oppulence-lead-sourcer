import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AIAssistantSettingsCreateWithoutUserInputSchema } from './AIAssistantSettingsCreateWithoutUserInputSchema';
import { AIAssistantSettingsUncheckedCreateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedCreateWithoutUserInputSchema';
import { AIAssistantSettingsCreateOrConnectWithoutUserInputSchema } from './AIAssistantSettingsCreateOrConnectWithoutUserInputSchema';
import { AIAssistantSettingsUpsertWithoutUserInputSchema } from './AIAssistantSettingsUpsertWithoutUserInputSchema';
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema';
import { AIAssistantSettingsWhereUniqueInputSchema } from './AIAssistantSettingsWhereUniqueInputSchema';
import { AIAssistantSettingsUpdateToOneWithWhereWithoutUserInputSchema } from './AIAssistantSettingsUpdateToOneWithWhereWithoutUserInputSchema';
import { AIAssistantSettingsUpdateWithoutUserInputSchema } from './AIAssistantSettingsUpdateWithoutUserInputSchema';
import { AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema';

export const AIAssistantSettingsUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AIAssistantSettingsUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AIAssistantSettingsCreateWithoutUserInputSchema),z.lazy(() => AIAssistantSettingsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AIAssistantSettingsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AIAssistantSettingsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AIAssistantSettingsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AIAssistantSettingsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AIAssistantSettingsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AIAssistantSettingsUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AIAssistantSettingsUpdateWithoutUserInputSchema),z.lazy(() => AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default AIAssistantSettingsUpdateOneWithoutUserNestedInputSchema;
