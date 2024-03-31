import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="container relative grid h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn('absolute right-4 top-4 md:right-8 md:top-8')}
        >
          Login
        </Link>

        <div className="bg-muted text-dark relative hidden h-full flex-col p-10 lg:flex dark:border-r">
          <Image
            src="/images/auth-back.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Background"
            priority
            className="z-0"
          />
          <div className="bg-zing-900 absolute inset-0" />
          <div className="relative z-20 flex items-center text-2xl font-medium">
            <div className="mr-2 h-9 w-9">
              <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
            </div>
            Chillaxo
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Planning team vacations has become as relaxing as the
                vacations themselves. A game-changer for our
                productivity!&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
