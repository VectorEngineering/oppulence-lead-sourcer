import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProgramApplicationIncludeSchema } from '../inputTypeSchemas/ProgramApplicationIncludeSchema'
import { ProgramApplicationWhereInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereInputSchema'
import { ProgramApplicationOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProgramApplicationOrderByWithRelationInputSchema'
import { ProgramApplicationWhereUniqueInputSchema } from '../inputTypeSchemas/ProgramApplicationWhereUniqueInputSchema'
import { ProgramApplicationScalarFieldEnumSchema } from '../inputTypeSchemas/ProgramApplicationScalarFieldEnumSchema'
import { PartnerArgsSchema } from "../outputTypeSchemas/PartnerArgsSchema"
import { ProgramArgsSchema } from "../outputTypeSchemas/ProgramArgsSchema"
import { ProgramEnrollmentArgsSchema } from "../outputTypeSchemas/ProgramEnrollmentArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProgramApplicationSelectSchema: z.ZodType<Prisma.ProgramApplicationSelect> = z.object({
  id: z.boolean().optional(),
  programId: z.boolean().optional(),
  partnerId: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  proposal: z.boolean().optional(),
  website: z.boolean().optional(),
  comments: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  partner: z.union([z.boolean(),z.lazy(() => PartnerArgsSchema)]).optional(),
  program: z.union([z.boolean(),z.lazy(() => ProgramArgsSchema)]).optional(),
  enrollment: z.union([z.boolean(),z.lazy(() => ProgramEnrollmentArgsSchema)]).optional(),
}).strict()

export const ProgramApplicationFindFirstArgsSchema: z.ZodType<Prisma.ProgramApplicationFindFirstArgs> = z.object({
  select: ProgramApplicationSelectSchema.optional(),
  include: ProgramApplicationIncludeSchema.optional(),
  where: ProgramApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ProgramApplicationOrderByWithRelationInputSchema.array(),ProgramApplicationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProgramApplicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProgramApplicationScalarFieldEnumSchema,ProgramApplicationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ProgramApplicationFindFirstArgsSchema;
