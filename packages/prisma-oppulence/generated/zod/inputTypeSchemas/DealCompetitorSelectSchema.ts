import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DealArgsSchema } from "../outputTypeSchemas/DealArgsSchema"

export const DealCompetitorSelectSchema: z.ZodType<Prisma.DealCompetitorSelect> = z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  name: z.boolean().optional(),
  strengths: z.boolean().optional(),
  weaknesses: z.boolean().optional(),
  strategy: z.boolean().optional(),
  status: z.boolean().optional(),
  threatLevel: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deal: z.union([z.boolean(),z.lazy(() => DealArgsSchema)]).optional(),
}).strict()

export default DealCompetitorSelectSchema;
