import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealCompetitorSelectSchema } from '../inputTypeSchemas/DealCompetitorSelectSchema';
import { DealCompetitorIncludeSchema } from '../inputTypeSchemas/DealCompetitorIncludeSchema';

export const DealCompetitorArgsSchema: z.ZodType<Prisma.DealCompetitorDefaultArgs> = z.object({
  select: z.lazy(() => DealCompetitorSelectSchema).optional(),
  include: z.lazy(() => DealCompetitorIncludeSchema).optional(),
}).strict();

export default DealCompetitorArgsSchema;
