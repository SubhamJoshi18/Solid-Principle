interface IInvoiceProcessor {
  processInvoice(invoiceName: string): void;
}

class InvoiceProcessor {
  public invoiceProcessor: IInvoiceProcessor;

  constructor(invoiceProcessor: IInvoiceProcessor) {
    this.invoiceProcessor = invoiceProcessor;
  }

  public processAnyInvoice(invoiceName: string) {
    return this.invoiceProcessor.processInvoice(invoiceName);
  }
}

class PDFInvoiceProcessor implements IInvoiceProcessor {
  processInvoice(invoiceName: string): void {}
}

const pdfInvoice = new PDFInvoiceProcessor();
const invoice = new InvoiceProcessor(pdfInvoice);
