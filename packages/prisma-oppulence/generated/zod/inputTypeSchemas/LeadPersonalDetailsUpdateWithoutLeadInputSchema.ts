import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema'
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema'
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema'
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema'
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema'
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema'

export const LeadPersonalDetailsUpdateWithoutLeadInputSchema: z.ZodType<Prisma.LeadPersonalDetailsUpdateWithoutLeadInput> = z
    .object({
        id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
        firstName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        lastName: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        title: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        department: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        email: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        phoneWork: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        phoneMobile: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        role: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        jobLevel: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        yearsInRole: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        yearsInCompany: z
            .union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        birthday: z
            .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        gender: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        languages: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        addressLine1: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        addressLine2: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        city: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        state: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        postalCode: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        country: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        communicationPreference: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        timeZone: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        education: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        certifications: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        skills: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        decisionMaker: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        budgetAuthority: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
        influenceLevel: z
            .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
            .optional()
            .nullable(),
        createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
        updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
    })
    .strict()

export default LeadPersonalDetailsUpdateWithoutLeadInputSchema
