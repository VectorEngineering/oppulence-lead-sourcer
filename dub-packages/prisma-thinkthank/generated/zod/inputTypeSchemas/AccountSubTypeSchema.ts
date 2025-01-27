import { z } from 'zod';

export const AccountSubTypeSchema = z.enum(['checking','savings','money_market','certificate_of_deposit','treasury','credit_card','line_of_credit','business_credit','personal_loan','investment','brokerage','retirement','education_savings','mortgage','auto_loan','student_loan','business_loan','other']);

export type AccountSubTypeType = `${z.infer<typeof AccountSubTypeSchema>}`

export default AccountSubTypeSchema;
