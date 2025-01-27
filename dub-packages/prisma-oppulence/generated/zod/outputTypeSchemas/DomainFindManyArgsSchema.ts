import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DomainIncludeSchema } from '../inputTypeSchemas/DomainIncludeSchema'
import { DomainWhereInputSchema } from '../inputTypeSchemas/DomainWhereInputSchema'
import { DomainOrderByWithRelationInputSchema } from '../inputTypeSchemas/DomainOrderByWithRelationInputSchema'
import { DomainWhereUniqueInputSchema } from '../inputTypeSchemas/DomainWhereUniqueInputSchema'
import { DomainScalarFieldEnumSchema } from '../inputTypeSchemas/DomainScalarFieldEnumSchema'
import { LinkFindManyArgsSchema } from "../outputTypeSchemas/LinkFindManyArgsSchema"
import { ProjectArgsSchema } from "../outputTypeSchemas/ProjectArgsSchema"
import { RegisteredDomainArgsSchema } from "../outputTypeSchemas/RegisteredDomainArgsSchema"
import { ProgramFindManyArgsSchema } from "../outputTypeSchemas/ProgramFindManyArgsSchema"
import { DomainCountOutputTypeArgsSchema } from "../outputTypeSchemas/DomainCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DomainSelectSchema: z.ZodType<Prisma.DomainSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  verified: z.boolean().optional(),
  placeholder: z.boolean().optional(),
  expiredUrl: z.boolean().optional(),
  notFoundUrl: z.boolean().optional(),
  primary: z.boolean().optional(),
  archived: z.boolean().optional(),
  lastChecked: z.boolean().optional(),
  logo: z.boolean().optional(),
  projectId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  links: z.union([z.boolean(),z.lazy(() => LinkFindManyArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => ProjectArgsSchema)]).optional(),
  registeredDomain: z.union([z.boolean(),z.lazy(() => RegisteredDomainArgsSchema)]).optional(),
  programs: z.union([z.boolean(),z.lazy(() => ProgramFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const DomainFindManyArgsSchema: z.ZodType<Prisma.DomainFindManyArgs> = z.object({
  select: DomainSelectSchema.optional(),
  include: DomainIncludeSchema.optional(),
  where: DomainWhereInputSchema.optional(),
  orderBy: z.union([ DomainOrderByWithRelationInputSchema.array(),DomainOrderByWithRelationInputSchema ]).optional(),
  cursor: DomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DomainScalarFieldEnumSchema,DomainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default DomainFindManyArgsSchema;
