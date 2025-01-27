import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const LeadPersonalDetailsCreateManyInputSchema: z.ZodType<Prisma.LeadPersonalDetailsCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        leadId: z.string(),
        firstName: z.string().optional().nullable(),
        lastName: z.string().optional().nullable(),
        title: z.string().optional().nullable(),
        department: z.string().optional().nullable(),
        email: z.string().optional().nullable(),
        phoneWork: z.string().optional().nullable(),
        phoneMobile: z.string().optional().nullable(),
        role: z.string().optional().nullable(),
        jobLevel: z.string().optional().nullable(),
        yearsInRole: z.number().int().optional().nullable(),
        yearsInCompany: z.number().int().optional().nullable(),
        birthday: z.coerce.date().optional().nullable(),
        gender: z.string().optional().nullable(),
        languages: z.string().optional().nullable(),
        addressLine1: z.string().optional().nullable(),
        addressLine2: z.string().optional().nullable(),
        city: z.string().optional().nullable(),
        state: z.string().optional().nullable(),
        postalCode: z.string().optional().nullable(),
        country: z.string().optional().nullable(),
        communicationPreference: z.string().optional().nullable(),
        timeZone: z.string().optional().nullable(),
        education: z.string().optional().nullable(),
        certifications: z.string().optional().nullable(),
        skills: z.string().optional().nullable(),
        decisionMaker: z.boolean().optional(),
        budgetAuthority: z.boolean().optional(),
        influenceLevel: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default LeadPersonalDetailsCreateManyInputSchema
