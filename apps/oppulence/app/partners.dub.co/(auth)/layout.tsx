import { Grid, Logo } from '@dub/ui'

import { OppulenceConfig as platform } from '@dub/platform-config'

export default function PartnerAuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <Grid className="text-neutral-200" />
        <div className="absolute inset-0 -translate-y-1/2 -scale-x-100 bg-[conic-gradient(from_-32deg,#f00_0deg,#EAB308_99deg,#5CFF80_162deg,#00FFF9_216deg,#3A8BFD_288deg,#855AFC_360deg)] opacity-25 blur-[200px]" />
      </div>
      <div className="relative z-10 mt-10 flex w-full flex-col items-center justify-center px-3 text-center md:px-8">
        <div className="animate-slide-up-fade relative flex w-auto flex-col items-center [--offset:10px] [animation-duration:1.3s] [animation-fill-mode:both]">
          <Logo className="relative h-10 w-10" />
          <span className="text-sm font-medium text-neutral-700">Partner</span>
        </div>
        {children}
      </div>
      <div className="flex grow flex-col justify-end">
        <div className="relative flex w-full flex-col items-center justify-center gap-2 py-10 pb-6">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {platform.company}
          </p>
          <div className="flex gap-3 text-center text-xs text-gray-500 underline underline-offset-2">
            <a
              href={`${platform.webUrl}/legal/privacy`}
              target="_blank"
              className="hover:text-gray-800"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href={`${platform.webUrl}/legal/terms`}
              target="_blank"
              className="hover:text-gray-800"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            <a
              href={platform.platformUrl}
              target="_blank"
              className="hover:text-gray-800"
              rel="noreferrer"
            >
              {platform.platformHost}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
