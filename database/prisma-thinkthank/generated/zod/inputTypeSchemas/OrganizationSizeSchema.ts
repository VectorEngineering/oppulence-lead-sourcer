import { z } from 'zod'

export const OrganizationSizeSchema = z.enum([
    'OneToFive',
    'SixToTwentyFive',
    'TwentySixToOneHundred',
    'OneHundredOneToFiveHundred',
    'FiveHundredToOneThousand',
    'OneThousandToFiveThousand',
    'FiveThousandPlus'
])

export type OrganizationSizeType = `${z.infer<typeof OrganizationSizeSchema>}`

export default OrganizationSizeSchema
