import { xeroClient } from "../clients/xero-client.js";
import { ToolResponse } from "../types/tool-response.js";
import { formatError } from "../helpers/format-error.js";
import { getPackageVersion } from "../helpers/get-package-version.js";
import { Invoice } from "xero-node";

interface InvoiceLineItem {
  description: string;
  quantity: number;
  unitAmount: number;
  accountCode: string;
  taxType: string;
}

async function getInvoice(invoiceId: string): Promise<Invoice | undefined> {
  await xeroClient.authenticate();

  // First, get the current invoice to check its status
  const response = await xeroClient.accountingApi.getInvoice(
    "", // tenantId (empty string for default)
    invoiceId, // invoiceId
    undefined, // unitdp
    {
      headers: { "user-agent": `xero-mcp-server-${getPackageVersion()}` },
    }, // options
  );

  return response.body.invoices?.[0];
}

async function updateInvoice(
  invoiceId: string,
  lineItems?: InvoiceLineItem[],
  reference?: string,
  dueDate?: string,
): Promise<Invoice | undefined> {
  const invoice: Invoice = {
    lineItems: lineItems,
    reference: reference,
    dueDate: dueDate,
  };

  const response = await xeroClient.accountingApi.updateInvoice(
    "", // tenantId (empty string for default)
    invoiceId, // invoiceId
    {
      invoices: [invoice],
    }, // invoices
    undefined, // unitdp
    undefined, // idempotencyKey
    {
      headers: { "user-agent": `xero-mcp-server-${getPackageVersion()}` },
    }, // options
  );

  return response.body.invoices?.[0];
}

/**
 * Update an existing invoice in Xero
 */
export async function updateXeroInvoice(
  invoiceId: string,
  lineItems?: InvoiceLineItem[],
  reference?: string,
  dueDate?: string,
): Promise<ToolResponse<Invoice>> {
  try {
    const existingInvoice = await getInvoice(invoiceId);

    const invoiceStatus = existingInvoice?.status;

    // Only allow updates to DRAFT invoices
    if (invoiceStatus !== Invoice.StatusEnum.DRAFT) {
      return {
        result: null,
        isError: true,
        error: `Cannot update invoice because it is not a draft. Current status: ${invoiceStatus}`,
      };
    }

    const updatedInvoice = await updateInvoice(
      invoiceId,
      lineItems,
      reference,
      dueDate,
    );

    if (!updatedInvoice) {
      throw new Error("Invoice update failed.");
    }

    return {
      result: updatedInvoice,
      isError: false,
      error: null,
    };
  } catch (error) {
    return {
      result: null,
      isError: true,
      error: formatError(error),
    };
  }
}
