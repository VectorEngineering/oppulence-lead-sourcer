import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationPreferenceWhereInputSchema } from '../inputTypeSchemas/NotificationPreferenceWhereInputSchema'
import { NotificationPreferenceOrderByWithRelationInputSchema } from '../inputTypeSchemas/NotificationPreferenceOrderByWithRelationInputSchema'
import { NotificationPreferenceWhereUniqueInputSchema } from '../inputTypeSchemas/NotificationPreferenceWhereUniqueInputSchema'

export const NotificationPreferenceAggregateArgsSchema: z.ZodType<Prisma.NotificationPreferenceAggregateArgs> = z.object({
  where: NotificationPreferenceWhereInputSchema.optional(),
  orderBy: z.union([ NotificationPreferenceOrderByWithRelationInputSchema.array(),NotificationPreferenceOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationPreferenceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default NotificationPreferenceAggregateArgsSchema;
