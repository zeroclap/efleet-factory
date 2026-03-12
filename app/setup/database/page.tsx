export default function SetupDatabasePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-6">
        <h1 className="text-3xl font-bold mb-4 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          Database setup required
        </h1>
        <p className="font-[family-name:var(--font-geist-sans)] text-[#333333] mb-3">
          This app could not connect to PostgreSQL.
        </p>
        <ol className="list-decimal list-inside space-y-2 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          <li>Open your local environment file.</li>
          <li>Set a valid <code>DATABASE_URL</code> value.</li>
          <li>Restart the dev server and refresh the page.</li>
        </ol>
      </div>
    </div>
  );
}
