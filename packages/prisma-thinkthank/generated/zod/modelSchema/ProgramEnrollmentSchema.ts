import { z } from 'zod'
import { ProgramEnrollmentStatusSchema } from '../inputTypeSchemas/ProgramEnrollmentStatusSchema'

/////////////////////////////////////////
// PROGRAM ENROLLMENT SCHEMA
/////////////////////////////////////////

export const ProgramEnrollmentSchema = z.object({
    status: ProgramEnrollmentStatusSchema,
    id: z.string().cuid(),
    partnerId: z.string(),
    programId: z.string(),
    linkId: z.string().nullish(),
    commissionAmount: z.number().int().nullish(),
    discountId: z.string().nullish(),
    applicationId: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type ProgramEnrollment = z.infer<typeof ProgramEnrollmentSchema>

/////////////////////////////////////////
// PROGRAM ENROLLMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProgramEnrollmentOptionalDefaultsSchema = ProgramEnrollmentSchema.merge(
    z.object({
        status: ProgramEnrollmentStatusSchema.optional(),
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type ProgramEnrollmentOptionalDefaults = z.infer<typeof ProgramEnrollmentOptionalDefaultsSchema>

export default ProgramEnrollmentSchema
