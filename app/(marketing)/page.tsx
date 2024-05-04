import {ClerkLoaded, ClerkLoading, SignedOut, SignedIn, UserButton, SignInButton, SignUpButton} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[240px] lg:h[424px] md-8 lg:mb-0">
        <Image src='/mascot.svg' fill alt='Mascot' />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master new languages with Lingo.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h5- w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" fallbackRedirectUrl="/learn" forceRedirectUrl="/learn">
                <Button size="lg" variant="secondary" className="w-full">Get Started</Button>
              </SignUpButton>
              <SignInButton mode="modal" fallbackRedirectUrl="/learn" forceRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline" className="w-full">I already have an account</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" asChild className="w-full">
                <Link href="/learn">
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>

    </div>
  );
}
