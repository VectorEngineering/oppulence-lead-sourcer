import { z } from 'zod'

export const LeadCompanyDetailsScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'companyName',
    'industry',
    'registrationNumber',
    'vatNumber',
    'annualRevenue',
    'employeeCount',
    'foundedYear',
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
    'complianceStatus',
    'createdAt',
    'updatedAt'
])

export default LeadCompanyDetailsScalarFieldEnumSchema
