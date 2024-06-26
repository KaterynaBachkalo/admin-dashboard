export interface ICustomers {
  photo?: string;
  image?: string;
  name: string;
  email: string;
  spent: string;
  phone: string;
  address: string;
  register_date: string;
}

export interface IProducts {
  _id: string;
  id: string;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
}

export interface IProductsToBD {
  name: string;
  category: string;
  suppliers: string;
  stock: string;
  price: string;
}

export interface ISuppliers {
  _id: string;
  name: string;
  suppliers: string;
  address: string;
  date: string;
  amount: string;
  status: string;
}

export interface ISuppliersToBD {
  name: string;
  address: string;
  suppliers: string;
  date: string;
  amount: string;
  status: string;
}

export interface IIncomeExpenses {
  name: string;
  amount: string;
  type: string;
}

export interface IOrders {
  photo: string;
  name: string;
  address: string;
  products: string;
  price: string;
  status: string;
  order_date: string;
}

export interface IForms {
  email: string;
  password: string;
}
