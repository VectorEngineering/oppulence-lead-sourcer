import { z } from 'zod'

/////////////////////////////////////////
// DEFAULT DOMAINS SCHEMA
/////////////////////////////////////////

export const DefaultDomainsSchema = z.object({
    id: z.string().cuid(),
    oppulence: z.boolean(),
    solomonai: z.boolean(),
    thinkthank: z.boolean(),
    dublink: z.boolean(),
    dubsh: z.boolean(),
    chatgpt: z.boolean(),
    sptifi: z.boolean(),
    gitnew: z.boolean(),
    callink: z.boolean(),
    amznid: z.boolean(),
    ggllink: z.boolean(),
    figpage: z.boolean(),
    loooooooong: z.boolean(),
    projectId: z.string()
})

export type DefaultDomains = z.infer<typeof DefaultDomainsSchema>

/////////////////////////////////////////
// DEFAULT DOMAINS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const DefaultDomainsOptionalDefaultsSchema = DefaultDomainsSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        oppulence: z.boolean().optional(),
        solomonai: z.boolean().optional(),
        thinkthank: z.boolean().optional(),
        dublink: z.boolean().optional(),
        dubsh: z.boolean().optional(),
        chatgpt: z.boolean().optional(),
        sptifi: z.boolean().optional(),
        gitnew: z.boolean().optional(),
        callink: z.boolean().optional(),
        amznid: z.boolean().optional(),
        ggllink: z.boolean().optional(),
        figpage: z.boolean().optional(),
        loooooooong: z.boolean().optional()
    })
)

export type DefaultDomainsOptionalDefaults = z.infer<typeof DefaultDomainsOptionalDefaultsSchema>

export default DefaultDomainsSchema
