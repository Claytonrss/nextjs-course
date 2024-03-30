'use client';

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <h2>Um erro ocorreu.</h2>
      <p>{error.message}</p>
    </div>
  );
}
