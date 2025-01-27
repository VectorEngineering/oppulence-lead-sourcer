import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PipelineAccessRuleIncludeSchema } from '../inputTypeSchemas/PipelineAccessRuleIncludeSchema'
import { PipelineAccessRuleWhereUniqueInputSchema } from '../inputTypeSchemas/PipelineAccessRuleWhereUniqueInputSchema'
import { PipelineAccessRuleCreateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleCreateInputSchema'
import { PipelineAccessRuleUncheckedCreateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUncheckedCreateInputSchema'
import { PipelineAccessRuleUpdateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUpdateInputSchema'
import { PipelineAccessRuleUncheckedUpdateInputSchema } from '../inputTypeSchemas/PipelineAccessRuleUncheckedUpdateInputSchema'
import { AccessRuleConditionFindManyArgsSchema } from "../outputTypeSchemas/AccessRuleConditionFindManyArgsSchema"
import { PipelineArgsSchema } from "../outputTypeSchemas/PipelineArgsSchema"
import { PipelineAccessRuleCountOutputTypeArgsSchema } from "../outputTypeSchemas/PipelineAccessRuleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PipelineAccessRuleSelectSchema: z.ZodType<Prisma.PipelineAccessRuleSelect> = z.object({
  id: z.boolean().optional(),
  pipelineId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  userId: z.boolean().optional(),
  teamId: z.boolean().optional(),
  accessLevel: z.boolean().optional(),
  conditions: z.union([z.boolean(),z.lazy(() => AccessRuleConditionFindManyArgsSchema)]).optional(),
  pipeline: z.union([z.boolean(),z.lazy(() => PipelineArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PipelineAccessRuleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PipelineAccessRuleUpsertArgsSchema: z.ZodType<Prisma.PipelineAccessRuleUpsertArgs> = z.object({
  select: PipelineAccessRuleSelectSchema.optional(),
  include: PipelineAccessRuleIncludeSchema.optional(),
  where: PipelineAccessRuleWhereUniqueInputSchema,
  create: z.union([ PipelineAccessRuleCreateInputSchema,PipelineAccessRuleUncheckedCreateInputSchema ]),
  update: z.union([ PipelineAccessRuleUpdateInputSchema,PipelineAccessRuleUncheckedUpdateInputSchema ]),
}).strict() ;

export default PipelineAccessRuleUpsertArgsSchema;
