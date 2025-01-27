import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const AIAssistantSettingsWhereInputSchema: z.ZodType<Prisma.AIAssistantSettingsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AIAssistantSettingsWhereInputSchema),z.lazy(() => AIAssistantSettingsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AIAssistantSettingsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AIAssistantSettingsWhereInputSchema),z.lazy(() => AIAssistantSettingsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  historyRetentionDays: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxQuestionsPerDay: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  enableCitations: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  enableFollowUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  contextWindow: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  preferredResponseLength: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  languageStyle: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  useCustomKnowledge: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  customKnowledgeIds: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  conversationCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  lastConversationAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default AIAssistantSettingsWhereInputSchema;
