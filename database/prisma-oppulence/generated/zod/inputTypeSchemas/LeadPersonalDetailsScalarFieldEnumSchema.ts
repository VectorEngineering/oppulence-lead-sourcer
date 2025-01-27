import { z } from 'zod'

export const LeadPersonalDetailsScalarFieldEnumSchema = z.enum([
    'id',
    'leadId',
    'firstName',
    'lastName',
    'title',
    'department',
    'email',
    'phoneWork',
    'phoneMobile',
    'role',
    'jobLevel',
    'yearsInRole',
    'yearsInCompany',
    'birthday',
    'gender',
    'languages',
    'addressLine1',
    'addressLine2',
    'city',
    'state',
    'postalCode',
    'country',
    'communicationPreference',
    'timeZone',
    'education',
    'certifications',
    'skills',
    'decisionMaker',
    'budgetAuthority',
    'influenceLevel',
    'createdAt',
    'updatedAt'
])

export default LeadPersonalDetailsScalarFieldEnumSchema
