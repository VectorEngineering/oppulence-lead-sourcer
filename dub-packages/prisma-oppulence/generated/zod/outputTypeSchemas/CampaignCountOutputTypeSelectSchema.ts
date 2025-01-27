import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CampaignCountOutputTypeSelectSchema: z.ZodType<Prisma.CampaignCountOutputTypeSelect> = z.object({
  leads: z.boolean().optional(),
  touchpoints: z.boolean().optional(),
  variants: z.boolean().optional(),
}).strict();

export default CampaignCountOutputTypeSelectSchema;
