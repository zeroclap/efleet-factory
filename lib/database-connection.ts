import { redirect } from "next/navigation";

export function isDatabaseConnectionError(error: unknown) {
  if (!error || typeof error !== "object") {
    return false;
  }

  const maybeError = error as { code?: string; message?: string };
  const code = maybeError.code ?? "";
  const message = maybeError.message?.toLowerCase() ?? "";

  return (
    code === "P1000" ||
    code === "P1001" ||
    code === "P1010" ||
    message.includes("authentication") ||
    message.includes("connection to database not available") ||
    message.includes("handshake")
  );
}

export function redirectOnDatabaseConnectionError(error: unknown): never {
  if (isDatabaseConnectionError(error)) {
    redirect("/setup/database");
  }

  throw error;
}
