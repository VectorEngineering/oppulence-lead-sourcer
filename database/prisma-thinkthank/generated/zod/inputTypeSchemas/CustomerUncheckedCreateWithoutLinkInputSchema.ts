import { Prisma } from '@prisma/client'
import Decimal from 'decimal.js'
import { z } from 'zod'
import { isValidDecimalInput } from './isValidDecimalInput'
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'
import { SaleUncheckedCreateNestedManyWithoutCustomerInputSchema } from './SaleUncheckedCreateNestedManyWithoutCustomerInputSchema'
import { CustomerTagUncheckedCreateNestedManyWithoutCustomerInputSchema } from './CustomerTagUncheckedCreateNestedManyWithoutCustomerInputSchema'
import { ContractUncheckedCreateNestedManyWithoutCustomerInputSchema } from './ContractUncheckedCreateNestedManyWithoutCustomerInputSchema'
import { InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema'

export const CustomerUncheckedCreateWithoutLinkInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutLinkInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string().optional().nullable(),
        email: z.string().optional().nullable(),
        avatar: z.string().optional().nullable(),
        externalId: z.string().optional().nullable(),
        stripeCustomerId: z.string().optional().nullable(),
        clickId: z.string().optional().nullable(),
        clickedAt: z.coerce.date().optional().nullable(),
        country: z.string().optional().nullable(),
        projectId: z.string(),
        projectConnectId: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        addressLine1: z.string().optional().nullable(),
        addressLine2: z.string().optional().nullable(),
        city: z.string().optional().nullable(),
        contact: z.string().optional().nullable(),
        countryCode: z.string().optional().nullable(),
        state: z.string().optional().nullable(),
        zip: z.string().optional().nullable(),
        note: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),
        token: z.string().optional().nullable(),
        vatNumber: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        companyName: z.string().optional().nullable(),
        tradingName: z.string().optional().nullable(),
        registrationNumber: z.string().optional().nullable(),
        isVendor: z.boolean().optional(),
        alternativePhone: z.string().optional().nullable(),
        fax: z.string().optional().nullable(),
        contactTitle: z.string().optional().nullable(),
        contactEmail: z.string().optional().nullable(),
        contactPhone: z.string().optional().nullable(),
        billingAddressLine1: z.string().optional().nullable(),
        billingAddressLine2: z.string().optional().nullable(),
        billingCity: z.string().optional().nullable(),
        billingState: z.string().optional().nullable(),
        billingZip: z.string().optional().nullable(),
        billingCountryCode: z.string().optional().nullable(),
        billingEmail: z.string().optional().nullable(),
        taxId: z.string().optional().nullable(),
        taxExempt: z.boolean().optional(),
        taxExemptionNumber: z.string().optional().nullable(),
        currency: z.string().optional().nullable(),
        preferredPaymentMethod: z.string().optional().nullable(),
        paymentTerms: z.string().optional().nullable(),
        creditLimit: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        bankName: z.string().optional().nullable(),
        bankAccountName: z.string().optional().nullable(),
        bankAccountNumber: z.string().optional().nullable(),
        bankRoutingNumber: z.string().optional().nullable(),
        bankSwiftCode: z.string().optional().nullable(),
        bankIban: z.string().optional().nullable(),
        industry: z.string().optional().nullable(),
        customerType: z.string().optional().nullable(),
        customerStatus: z.string().optional().nullable(),
        customerRating: z.number().int().optional().nullable(),
        discountTerms: z.string().optional().nullable(),
        latePaymentPenalty: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        creditScore: z.number().int().optional().nullable(),
        customFields: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        lastOrderDate: z.coerce.date().optional().nullable(),
        accountManager: z.string().optional().nullable(),
        shippingAddresses: z.string().optional().nullable(),
        billingAddresses: z.string().optional().nullable(),
        warehouseAddresses: z.string().optional().nullable(),
        billingCurrency: z.string().optional().nullable(),
        billingCycle: z.string().optional().nullable(),
        invoiceDeliveryMethod: z.string().optional().nullable(),
        invoiceFormat: z.string().optional().nullable(),
        purchaseOrderRequired: z.boolean().optional(),
        autoInvoice: z.boolean().optional(),
        taxExemptionExpiry: z.coerce.date().optional().nullable(),
        taxJurisdiction: z.string().optional().nullable(),
        taxClassification: z.string().optional().nullable(),
        withholdingTaxRate: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        taxDocuments: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        availableCredit: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        riskRating: z.string().optional().nullable(),
        insurancePolicy: z.string().optional().nullable(),
        insuranceExpiry: z.coerce.date().optional().nullable(),
        insuranceCoverage: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        earlyPaymentDiscount: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        minimumOrderValue: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        maximumOrderValue: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        averagePaymentDays: z.number().int().optional().nullable(),
        paymentFrequency: z.string().optional().nullable(),
        bankAccounts: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        contractStartDate: z.coerce.date().optional().nullable(),
        contractEndDate: z.coerce.date().optional().nullable(),
        contractRenewalDate: z.coerce.date().optional().nullable(),
        contractStatus: z.string().optional().nullable(),
        legalStatus: z.string().optional().nullable(),
        complianceStatus: z.string().optional().nullable(),
        certifications: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        licenses: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        ndaStatus: z.boolean().optional(),
        ndaExpiryDate: z.coerce.date().optional().nullable(),
        customerSegment: z.string().optional().nullable(),
        accountTier: z.string().optional().nullable(),
        leadSource: z.string().optional().nullable(),
        marketingCampaigns: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        preferredLanguage: z.string().optional().nullable(),
        communicationPreferences: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        subscriptionStatus: z.string().optional().nullable(),
        loyaltyPoints: z.number().int().optional().nullable(),
        referralSource: z.string().optional().nullable(),
        referralCode: z.string().optional().nullable(),
        lifetimeValue: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        acquisitionCost: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        retentionRate: z
            .union([z.number(), z.string(), z.instanceof(Decimal), z.instanceof(Prisma.Decimal), DecimalJsLikeSchema])
            .refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' })
            .optional()
            .nullable(),
        satisfactionScore: z.number().int().optional().nullable(),
        lastReviewDate: z.coerce.date().optional().nullable(),
        nextReviewDate: z.coerce.date().optional().nullable(),
        erpId: z.string().optional().nullable(),
        crmId: z.string().optional().nullable(),
        accountingId: z.string().optional().nullable(),
        lastLoginDate: z.coerce.date().optional().nullable(),
        lastInteractionDate: z.coerce.date().optional().nullable(),
        totalOrders: z.number().int().optional().nullable(),
        totalReturns: z.number().int().optional().nullable(),
        activeSubscriptions: z.number().int().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        notes: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        sales: z.lazy(() => SaleUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
        CustomerTags: z.lazy(() => CustomerTagUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
        Contracts: z.lazy(() => ContractUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
        Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
    })
    .strict()

export default CustomerUncheckedCreateWithoutLinkInputSchema
