import { z } from 'zod';

export const EnterpriseRoleSchema = z.enum(['SYSTEM_ADMIN','FINANCE_ADMIN','COMPLIANCE_OFFICER','ACCOUNT_MANAGER','TREASURY_MANAGER','CONTROLLER','AUDITOR','APPROVER','VIEWER','DEPARTMENT_HEAD','BUDGET_MANAGER','REPORTING_ANALYST']);

export type EnterpriseRoleType = `${z.infer<typeof EnterpriseRoleSchema>}`

export default EnterpriseRoleSchema;
