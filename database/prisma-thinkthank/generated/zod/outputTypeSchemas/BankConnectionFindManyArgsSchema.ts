import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BankConnectionIncludeSchema } from '../inputTypeSchemas/BankConnectionIncludeSchema'
import { BankConnectionWhereInputSchema } from '../inputTypeSchemas/BankConnectionWhereInputSchema'
import { BankConnectionOrderByWithRelationInputSchema } from '../inputTypeSchemas/BankConnectionOrderByWithRelationInputSchema'
import { BankConnectionWhereUniqueInputSchema } from '../inputTypeSchemas/BankConnectionWhereUniqueInputSchema'
import { BankConnectionScalarFieldEnumSchema } from '../inputTypeSchemas/BankConnectionScalarFieldEnumSchema'
import { BankConnectionSettingsArgsSchema } from "../outputTypeSchemas/BankConnectionSettingsArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { BankAccountFindManyArgsSchema } from "../outputTypeSchemas/BankAccountFindManyArgsSchema"
import { BankConnectionCountOutputTypeArgsSchema } from "../outputTypeSchemas/BankConnectionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BankConnectionSelectSchema: z.ZodType<Prisma.BankConnectionSelect> = z.object({
  id: z.boolean().optional(),
  accessToken: z.boolean().optional(),
  refreshToken: z.boolean().optional(),
  tokenExpiresAt: z.boolean().optional(),
  institutionId: z.boolean().optional(),
  institutionName: z.boolean().optional(),
  name: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  primaryColor: z.boolean().optional(),
  provider: z.boolean().optional(),
  status: z.boolean().optional(),
  enrollmentId: z.boolean().optional(),
  referenceId: z.boolean().optional(),
  consentId: z.boolean().optional(),
  consentExpiresAt: z.boolean().optional(),
  lastAccessed: z.boolean().optional(),
  lastSuccessfulUpdate: z.boolean().optional(),
  nextUpdateAttempt: z.boolean().optional(),
  updateFrequency: z.boolean().optional(),
  errorDetails: z.boolean().optional(),
  errorRetries: z.boolean().optional(),
  errorCount: z.boolean().optional(),
  lastErrorAt: z.boolean().optional(),
  supportsAccountIdentification: z.boolean().optional(),
  supportsTransactionSync: z.boolean().optional(),
  supportsBalanceRefresh: z.boolean().optional(),
  supportedProducts: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  settings: z.union([z.boolean(),z.lazy(() => BankConnectionSettingsArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  bankAccounts: z.union([z.boolean(),z.lazy(() => BankAccountFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BankConnectionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BankConnectionFindManyArgsSchema: z.ZodType<Prisma.BankConnectionFindManyArgs> = z.object({
  select: BankConnectionSelectSchema.optional(),
  include: BankConnectionIncludeSchema.optional(),
  where: BankConnectionWhereInputSchema.optional(),
  orderBy: z.union([ BankConnectionOrderByWithRelationInputSchema.array(),BankConnectionOrderByWithRelationInputSchema ]).optional(),
  cursor: BankConnectionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BankConnectionScalarFieldEnumSchema,BankConnectionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BankConnectionFindManyArgsSchema;
