import { z } from 'zod'

/////////////////////////////////////////
// ACCESS RULE CONDITION SCHEMA
/////////////////////////////////////////

export const AccessRuleConditionSchema = z.object({
    id: z.string().cuid(),
    ruleId: z.string(),
    field: z.string(),
    operator: z.string(),
    value: z.string()
})

export type AccessRuleCondition = z.infer<typeof AccessRuleConditionSchema>

/////////////////////////////////////////
// ACCESS RULE CONDITION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const AccessRuleConditionOptionalDefaultsSchema = AccessRuleConditionSchema.merge(
    z.object({
        id: z.string().cuid().optional()
    })
)

export type AccessRuleConditionOptionalDefaults = z.infer<typeof AccessRuleConditionOptionalDefaultsSchema>

export default AccessRuleConditionSchema
