import { z } from 'zod'

/////////////////////////////////////////
// LEAD COMPANY DETAILS SCHEMA
/////////////////////////////////////////

export const LeadCompanyDetailsSchema = z.object({
    id: z.string().cuid(),
    leadId: z.string(),
    companyName: z.string(),
    industry: z.string().nullish(),
    registrationNumber: z.string().nullish(),
    vatNumber: z.string().nullish(),
    annualRevenue: z.number().nullish(),
    employeeCount: z.number().int().nullish(),
    foundedYear: z.number().int().nullish(),
    website: z.string().nullish(),
    linkedinUrl: z.string().nullish(),
    addressLine1: z.string().nullish(),
    addressLine2: z.string().nullish(),
    city: z.string().nullish(),
    state: z.string().nullish(),
    postalCode: z.string().nullish(),
    country: z.string().nullish(),
    businessType: z.string().nullish(),
    stockSymbol: z.string().nullish(),
    parentCompany: z.string().nullish(),
    subsidiaries: z.string().nullish(),
    marketSegment: z.string().nullish(),
    competitors: z.string().nullish(),
    keyProducts: z.string().nullish(),
    fiscalYearEnd: z.string().nullish(),
    creditRating: z.string().nullish(),
    paymentTerms: z.string().nullish(),
    certifications: z.string().nullish(),
    complianceStatus: z.string().nullish(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
})

export type LeadCompanyDetails = z.infer<typeof LeadCompanyDetailsSchema>

/////////////////////////////////////////
// LEAD COMPANY DETAILS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const LeadCompanyDetailsOptionalDefaultsSchema = LeadCompanyDetailsSchema.merge(
    z.object({
        id: z.string().cuid().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
)

export type LeadCompanyDetailsOptionalDefaults = z.infer<typeof LeadCompanyDetailsOptionalDefaultsSchema>

export default LeadCompanyDetailsSchema
