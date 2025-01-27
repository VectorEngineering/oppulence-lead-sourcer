import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const LeadCountOutputTypeSelectSchema: z.ZodType<Prisma.LeadCountOutputTypeSelect> = z.object({
  categories: z.boolean().optional(),
  attachments: z.boolean().optional(),
  tags: z.boolean().optional(),
  comments: z.boolean().optional(),
  history: z.boolean().optional(),
  contactPreferences: z.boolean().optional(),
  socialProfiles: z.boolean().optional(),
  communications: z.boolean().optional(),
  decisionMakers: z.boolean().optional(),
  requirements: z.boolean().optional(),
  timelines: z.boolean().optional(),
  competitors: z.boolean().optional(),
  risks: z.boolean().optional(),
  touchpoints: z.boolean().optional(),
  consents: z.boolean().optional(),
  externalSystems: z.boolean().optional(),
  leadTasks: z.boolean().optional(),
  metadata: z.boolean().optional(),
  labels: z.boolean().optional(),
  deals: z.boolean().optional(),
  LeadScore: z.boolean().optional(),
  Campaign: z.boolean().optional(),
  LeadProductFit: z.boolean().optional(),
  LeadBudget: z.boolean().optional(),
  LeadSegmentation: z.boolean().optional(),
  LeadFeedback: z.boolean().optional(),
  LeadNurturing: z.boolean().optional(),
  LeadComplianceAudit: z.boolean().optional(),
  LeadCompetitiveAnalysis: z.boolean().optional(),
}).strict();

export default LeadCountOutputTypeSelectSchema;
