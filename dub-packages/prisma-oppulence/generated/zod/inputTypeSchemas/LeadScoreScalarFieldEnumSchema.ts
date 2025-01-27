import { z } from 'zod';

export const LeadScoreScalarFieldEnumSchema = z.enum(['id','leadId','websiteVisits','emailEngagement','socialEngagement','contentDownloads','companySizeScore','industryScore','budgetScore','technicalFitScore','meetingAttendance','responseTime','interactionQuality','behavioralWeight','demographicWeight','engagementWeight','totalScore','scoringMethod','lastCalculated','nextRecalculation','mlFeatures','confidenceScore']);

export default LeadScoreScalarFieldEnumSchema;
