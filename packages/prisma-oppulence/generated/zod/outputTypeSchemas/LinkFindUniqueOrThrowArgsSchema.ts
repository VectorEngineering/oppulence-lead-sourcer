import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LinkIncludeSchema } from '../inputTypeSchemas/LinkIncludeSchema'
import { LinkWhereUniqueInputSchema } from '../inputTypeSchemas/LinkWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"
import { LinkTagFindManyArgsSchema } from "../outputTypeSchemas/LinkTagFindManyArgsSchema"
import { LinkWebhookFindManyArgsSchema } from "../outputTypeSchemas/LinkWebhookFindManyArgsSchema"
import { DashboardArgsSchema } from "../outputTypeSchemas/DashboardArgsSchema"
import { ProgramEnrollmentArgsSchema } from "../outputTypeSchemas/ProgramEnrollmentArgsSchema"
import { ProgramInviteArgsSchema } from "../outputTypeSchemas/ProgramInviteArgsSchema"
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { CustomerFindManyArgsSchema } from "../outputTypeSchemas/CustomerFindManyArgsSchema"
import { LinkCountOutputTypeArgsSchema } from "../outputTypeSchemas/LinkCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LinkSelectSchema: z.ZodType<Prisma.LinkSelect> = z.object({
  id: z.boolean().optional(),
  domain: z.boolean().optional(),
  key: z.boolean().optional(),
  url: z.boolean().optional(),
  shortLink: z.boolean().optional(),
  archived: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  expiredUrl: z.boolean().optional(),
  password: z.boolean().optional(),
  trackConversion: z.boolean().optional(),
  proxy: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  image: z.boolean().optional(),
  video: z.boolean().optional(),
  utm_source: z.boolean().optional(),
  utm_medium: z.boolean().optional(),
  utm_campaign: z.boolean().optional(),
  utm_term: z.boolean().optional(),
  utm_content: z.boolean().optional(),
  rewrite: z.boolean().optional(),
  doIndex: z.boolean().optional(),
  ios: z.boolean().optional(),
  android: z.boolean().optional(),
  geo: z.boolean().optional(),
  userId: z.boolean().optional(),
  projectId: z.boolean().optional(),
  externalId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  publicStats: z.boolean().optional(),
  clicks: z.boolean().optional(),
  lastClicked: z.boolean().optional(),
  leads: z.boolean().optional(),
  sales: z.boolean().optional(),
  saleAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  comments: z.boolean().optional(),
  programId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  projectDomain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => LinkTagFindManyArgsSchema)]).optional(),
  webhooks: z.union([z.boolean(),z.lazy(() => LinkWebhookFindManyArgsSchema)]).optional(),
  dashboard: z.union([z.boolean(),z.lazy(() => DashboardArgsSchema)]).optional(),
  programEnrollment: z.union([z.boolean(),z.lazy(() => ProgramEnrollmentArgsSchema)]).optional(),
  programInvite: z.union([z.boolean(),z.lazy(() => ProgramInviteArgsSchema)]).optional(),
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  customers: z.union([z.boolean(),z.lazy(() => CustomerFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LinkCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LinkFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LinkFindUniqueOrThrowArgs> = z.object({
  select: LinkSelectSchema.optional(),
  include: LinkIncludeSchema.optional(),
  where: LinkWhereUniqueInputSchema,
}).strict() ;

export default LinkFindUniqueOrThrowArgsSchema;
