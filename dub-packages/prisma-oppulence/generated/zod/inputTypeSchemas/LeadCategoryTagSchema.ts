import { z } from 'zod';

export const LeadCategoryTagSchema = z.enum(['lead_new','lead_qualified','lead_converted','sale_new','sale_renewal','sale_upgrade','sale_cross_sell','sale_down_sell','revenue_subscription','revenue_service','revenue_product','revenue_consulting','revenue_training','followup_call','followup_meeting','followup_email','followup_demo','activity_meeting','activity_call','activity_email','activity_proposal','activity_contract','pipeline_early','pipeline_mid','pipeline_late','pipeline_closing','customer_new','customer_existing','customer_returning','customer_churned','payment_initial','payment_installment','payment_subscription','payment_refund','other_expense','other_adjustment','other_miscellaneous']);

export type LeadCategoryTagType = `${z.infer<typeof LeadCategoryTagSchema>}`

export default LeadCategoryTagSchema;
