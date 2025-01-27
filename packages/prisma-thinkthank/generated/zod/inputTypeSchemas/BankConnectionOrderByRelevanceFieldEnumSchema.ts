import { z } from 'zod';

export const BankConnectionOrderByRelevanceFieldEnumSchema = z.enum(['id','accessToken','refreshToken','institutionId','institutionName','name','logoUrl','primaryColor','enrollmentId','referenceId','consentId','updateFrequency','errorDetails','supportedProducts','projectId']);

export default BankConnectionOrderByRelevanceFieldEnumSchema;
