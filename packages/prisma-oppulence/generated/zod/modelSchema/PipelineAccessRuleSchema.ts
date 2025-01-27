import { z } from 'zod'
import { AccessLevelSchema } from '../inputTypeSchemas/AccessLevelSchema'

/////////////////////////////////////////
// PIPELINE ACCESS RULE SCHEMA
/////////////////////////////////////////

export const PipelineAccessRuleSchema = z.object({
    accessLevel: AccessLevelSchema,
    id: z.string().cuid(),
    pipelineId: z.string(),
    roleId: z.string().nullish(),
    userId: z.string().nullish(),
    teamId: z.string().nullish()
})

export type PipelineAccessRule = z.infer<typeof PipelineAccessRuleSchema>

/////////////////////////////////////////
// PIPELINE ACCESS RULE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const PipelineAccessRuleOptionalDefaultsSchema = PipelineAccessRuleSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type PipelineAccessRuleOptionalDefaults = z.infer<typeof PipelineAccessRuleOptionalDefaultsSchema>

export default PipelineAccessRuleSchema
