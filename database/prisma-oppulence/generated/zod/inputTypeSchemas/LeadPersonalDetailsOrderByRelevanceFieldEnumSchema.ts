import { z } from 'zod'

export const LeadPersonalDetailsOrderByRelevanceFieldEnumSchema = z.enum([
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
    'influenceLevel'
])

export default LeadPersonalDetailsOrderByRelevanceFieldEnumSchema
