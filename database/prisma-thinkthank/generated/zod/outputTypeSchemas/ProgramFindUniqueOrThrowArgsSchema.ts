import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramIncludeSchema } from '../inputTypeSchemas/ProgramIncludeSchema'
import { ProgramWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramWhereUniqueInputSchema'
import { DiscountFindManyArgsSchema } from "../outputTypeSchemas/DiscountFindManyArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { DomainArgsSchema } from "../outputTypeSchemas/DomainArgsSchema"
import { ProgramEnrollmentFindManyArgsSchema } from "../outputTypeSchemas/ProgramEnrollmentFindManyArgsSchema"
import { PayoutFindManyArgsSchema } from "../outputTypeSchemas/PayoutFindManyArgsSchema"
import { SaleFindManyArgsSchema } from "../outputTypeSchemas/SaleFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { ProgramResourceFindManyArgsSchema } from "../outputTypeSchemas/ProgramResourceFindManyArgsSchema"
import { ProgramApplicationFindManyArgsSchema } from "../outputTypeSchemas/ProgramApplicationFindManyArgsSchema"
import { ProgramInviteFindManyArgsSchema } from "../outputTypeSchemas/ProgramInviteFindManyArgsSchema"
import { LinkFindManyArgsSchema } from "../outputTypeSchemas/LinkFindManyArgsSchema"
import { ProgramCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProgramCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramSelectSchema: z.ZodType<Prisma.ProgramSelect> = z.object({
  id: z.boolean().optional(),
  workspaceId: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  logo: z.boolean().optional(),
  wordmark: z.boolean().optional(),
  brandColor: z.boolean().optional(),
  domain: z.boolean().optional(),
  url: z.boolean().optional(),
  type: z.boolean().optional(),
  cookieLength: z.boolean().optional(),
  commissionAmount: z.boolean().optional(),
  commissionType: z.boolean().optional(),
  commissionDuration: z.boolean().optional(),
  commissionInterval: z.boolean().optional(),
  landerData: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  discounts: z.union([z.boolean(),z.lazy(() => DiscountFindManyArgsSchema)]).optional(),
  workspace: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  primaryDomain: z.union([z.boolean(),z.lazy(() => DomainArgsSchema)]).optional(),
  partners: z.union([z.boolean(),z.lazy(() => ProgramEnrollmentFindManyArgsSchema)]).optional(),
  payouts: z.union([z.boolean(),z.lazy(() => PayoutFindManyArgsSchema)]).optional(),
  sales: z.union([z.boolean(),z.lazy(() => SaleFindManyArgsSchema)]).optional(),
  invoices: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  resources: z.union([z.boolean(),z.lazy(() => ProgramResourceFindManyArgsSchema)]).optional(),
  applications: z.union([z.boolean(),z.lazy(() => ProgramApplicationFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => ProgramInviteFindManyArgsSchema)]).optional(),
  links: z.union([z.boolean(),z.lazy(() => LinkFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProgramCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProgramFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProgramFindUniqueOrThrowArgs> = z.object({
  select: ProgramSelectSchema.optional(),
  include: ProgramIncludeSchema.optional(),
  where: ProgramWhereUniqueInputSchema,
}).strict() ;

export default ProgramFindUniqueOrThrowArgsSchema;
