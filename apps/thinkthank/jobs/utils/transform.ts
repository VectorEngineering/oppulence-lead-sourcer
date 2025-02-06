import { AccountType } from '@prisma/client'
import type { TransactionsSchema as Transactions } from '@solomon-ai/financial-engine-sdk/resources/transactions'

type TransformTransactionData = {
    transaction: Transactions.Data
    workspaceId: string
    bankAccountId: string
    notified?: boolean
}

type Transaction = {
    name: string
    internal_id: string
    category_slug: string | null
    bank_account_id: string
    description: string | null
    balance: number | null
    currency: string
    method: string | null
    amount: number
    team_id: string
    date: string
    status: 'posted' | 'pending'
    notified?: boolean
}

export function transformTransaction({ transaction, workspaceId, bankAccountId, notified }: TransformTransactionData): Transaction {
    return {
        name: transaction.name,
        description: transaction.description,
        date: transaction.date,
        amount: transaction.amount,
        currency: transaction.currency,
        method: transaction.method,
        internal_id: `${workspaceId}_${transaction.id}`,
        category_slug: transaction.category,
        bank_account_id: bankAccountId,
        balance: transaction.balance,
        team_id: workspaceId,
        status: transaction.status,
        // If the transactions are being synced manually, we don't want to notify
        // And using upsert, we don't want to override the notified value
        ...(notified ? { notified } : {})
    }
}

export function getClassification(type: AccountType) {
    switch (type) {
        case AccountType.credit:
            return 'credit'
        case AccountType.depository:
            return 'depository'
        case AccountType.other_liability:
            return 'other_liability'
        case AccountType.other_asset:
            return 'other_asset'
        default:
            return 'default'
    }
}
