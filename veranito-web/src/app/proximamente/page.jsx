import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="text-center">
        <div className="w-full max-w-2xl">
          <Image
            src="/image/images/proximamente.png" 
            alt="Página en construcción"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
} 