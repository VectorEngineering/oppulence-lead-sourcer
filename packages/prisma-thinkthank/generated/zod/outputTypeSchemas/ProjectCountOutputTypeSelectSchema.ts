import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ProjectCountOutputTypeSelectSchema: z.ZodType<Prisma.ProjectCountOutputTypeSelect> = z.object({
  users: z.boolean().optional(),
  invites: z.boolean().optional(),
  sentEmails: z.boolean().optional(),
  links: z.boolean().optional(),
  domains: z.boolean().optional(),
  tags: z.boolean().optional(),
  programs: z.boolean().optional(),
  invoices: z.boolean().optional(),
  customers: z.boolean().optional(),
  defaultDomains: z.boolean().optional(),
  restrictedTokens: z.boolean().optional(),
  oAuthCodes: z.boolean().optional(),
  integrations: z.boolean().optional(),
  installedIntegrations: z.boolean().optional(),
  webhooks: z.boolean().optional(),
  registeredDomains: z.boolean().optional(),
  dashboards: z.boolean().optional(),
  utmTemplates: z.boolean().optional(),
  yearInReviews: z.boolean().optional(),
  bankConnections: z.boolean().optional(),
  apps: z.boolean().optional(),
  Inbox: z.boolean().optional(),
  BankAccount: z.boolean().optional(),
  Transaction: z.boolean().optional(),
  TransactionAttachment: z.boolean().optional(),
  TransactionCategory: z.boolean().optional(),
  TransactionEnrichment: z.boolean().optional(),
  Document: z.boolean().optional(),
  CustomerTag: z.boolean().optional(),
  ContractTemplate: z.boolean().optional(),
  Report: z.boolean().optional(),
  InvoiceTemplate: z.boolean().optional(),
}).strict();

export default ProjectCountOutputTypeSelectSchema;
