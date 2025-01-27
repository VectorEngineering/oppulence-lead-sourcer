import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AIAssistantSettingsWhereInputSchema } from './AIAssistantSettingsWhereInputSchema';
import { AIAssistantSettingsUpdateWithoutUserInputSchema } from './AIAssistantSettingsUpdateWithoutUserInputSchema';
import { AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema } from './AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema';

export const AIAssistantSettingsUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AIAssistantSettingsUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AIAssistantSettingsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AIAssistantSettingsUpdateWithoutUserInputSchema),z.lazy(() => AIAssistantSettingsUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default AIAssistantSettingsUpdateToOneWithWhereWithoutUserInputSchema;
