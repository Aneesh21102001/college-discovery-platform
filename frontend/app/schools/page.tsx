import { Clock3 } from "lucide-react";

export default function Page() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-2xl rounded-3xl border bg-background p-12 text-center shadow-sm">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border">
          <Clock3 className="h-8 w-8" />
        </div>

        <h1 className="mt-6 text-4xl font-bold">
          Coming Soon
        </h1>

        <p className="mt-4 text-muted-foreground">
          This section is currently under development and will be available soon.
        </p>

        <div className="mt-8 inline-flex rounded-full border px-4 py-2 text-sm">
          Launching Soon
        </div>

      </div>
    </section>
  );
}