'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error.digest);
  console.log(error.message);
  return (
    <html>
      <body>
        <h1>Um erro ocorreu. Tente novamente.</h1>
        <button onClick={() => reset()}>Tente novamente.</button>
      </body>
    </html>
  );
}
