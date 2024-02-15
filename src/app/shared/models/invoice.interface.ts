export interface InvoiceInterface {
    id: number;
    invoiceNumber: string;
    total: string;
    invoiceDate: string;
    status: string;
}

export interface InvoicesPaginationInterface {
  totalPages: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
}


export interface InvoiceServiceInterfae {
  invoices: InvoiceInterface[];
  pagination: InvoicesPaginationInterface;
}
