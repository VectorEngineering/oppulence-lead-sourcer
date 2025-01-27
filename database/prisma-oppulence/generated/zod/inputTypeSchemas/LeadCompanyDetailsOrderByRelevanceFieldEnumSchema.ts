import { z } from 'zod'

export const LeadCompanyDetailsOrderByRelevanceFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'companyName',
    'industry',
    'registrationNumber',
    'vatNumber',
    'website',
    'linkedinUrl',
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'postalCode',
    'country',
    'businessType',
    'stockSymbol',
    'parentCompany',
    'subsidiaries',
    'marketSegment',
    'competitors',
    'keyProducts',
    'fiscalYearEnd',
    'creditRating',
    'paymentTerms',
    'certifications',
    'complianceStatus'
])

export default LeadCompanyDetailsOrderByRelevanceFieldEnumSchema
