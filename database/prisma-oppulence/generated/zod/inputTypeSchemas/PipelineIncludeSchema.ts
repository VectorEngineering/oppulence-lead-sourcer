import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { ProjectArgsSchema } from '../outputTypeSchemas/ProjectArgsSchema'
import { PipelineStageFindManyArgsSchema } from '../outputTypeSchemas/PipelineStageFindManyArgsSchema'
import { DealFindManyArgsSchema } from '../outputTypeSchemas/DealFindManyArgsSchema'
import { PipelineKpiFindManyArgsSchema } from '../outputTypeSchemas/PipelineKpiFindManyArgsSchema'
import { PipelineAutomationFindManyArgsSchema } from '../outputTypeSchemas/PipelineAutomationFindManyArgsSchema'
import { StageDurationFindManyArgsSchema } from '../outputTypeSchemas/StageDurationFindManyArgsSchema'
import { PipelineIntegrationFindManyArgsSchema } from '../outputTypeSchemas/PipelineIntegrationFindManyArgsSchema'
import { PipelineAccessRuleFindManyArgsSchema } from '../outputTypeSchemas/PipelineAccessRuleFindManyArgsSchema'
import { PipelineCountOutputTypeArgsSchema } from '../outputTypeSchemas/PipelineCountOutputTypeArgsSchema'

export const PipelineIncludeSchema: z.ZodType<Prisma.PipelineInclude> = z
    .object({
        project: z.union([z.boolean(), z.lazy(() => ProjectArgsSchema)]).optional(),
        stages: z.union([z.boolean(), z.lazy(() => PipelineStageFindManyArgsSchema)]).optional(),
        deals: z.union([z.boolean(), z.lazy(() => DealFindManyArgsSchema)]).optional(),
        kpis: z.union([z.boolean(), z.lazy(() => PipelineKpiFindManyArgsSchema)]).optional(),
        automations: z.union([z.boolean(), z.lazy(() => PipelineAutomationFindManyArgsSchema)]).optional(),
        stageDurations: z.union([z.boolean(), z.lazy(() => StageDurationFindManyArgsSchema)]).optional(),
        integrations: z.union([z.boolean(), z.lazy(() => PipelineIntegrationFindManyArgsSchema)]).optional(),
        accessRules: z.union([z.boolean(), z.lazy(() => PipelineAccessRuleFindManyArgsSchema)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => PipelineCountOutputTypeArgsSchema)]).optional()
    })
    .strict()

export default PipelineIncludeSchema
