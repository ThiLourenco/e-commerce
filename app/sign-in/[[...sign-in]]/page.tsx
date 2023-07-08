import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-violet-800 hover:bg-violet-600 text-sm normal-case',
          },
        }}
      />
    </div>
  )
}
