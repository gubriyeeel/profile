"use client";

type ErrorProps = {
  error: Error & { digest?: string };
};

export default function Error({ error }: ErrorProps) {
  return (
    <main className="h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <h1 className="text-4xl">Something went wrong!</h1>
      <p className="mt-4 text-lg text-muted-foreground">{error.message}</p>
    </main>
  );
}
