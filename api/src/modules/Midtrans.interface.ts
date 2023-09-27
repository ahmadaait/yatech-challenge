// Interface for transaction
export interface IItem {
  id: any
  price: number
  quantity: number
  name: string
  brand: string
  category: string
  merchant_name: string
}

export interface IBillingAddres {
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  city: string
  postal_code: string
  country_code: string
}

export interface IShippingAddress {
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  city: string
  postal_code: string
  country_code: string
}

export interface ICustomer {
  first_name: string
  last_name: string
  email: string
  phone: string
  billing_address: IBillingAddres
  shipping_address?: IShippingAddress
}

export interface ITransactionDetails {
  order_id: string
  gross_amount: number
}

export interface IMidtransTransaction {
  transaction_details: ITransactionDetails
  item_details: IItem[]
  customer_details: ICustomer
  custom_field1?: string
  custom_field2?: string
  custom_field3?: string
  enabled_payments?: string[]
}
// End of Interface for Transaction

// Interface for notification
export interface INotification {
  currency?: string
  fraud_status?: string
  signature_key: string
  gross_amount: number
  order_id: string
  payment_type: string
  status_code: number
  status_message: string
  transaction_id: string
  transaction_status: string
  transaction_time: string
}
// End of Interface for notification
