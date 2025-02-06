import { BusinessConfig } from "@dub/platform-config";

export default function MagicLinkEmail({
  url,
  host,
}: {
  url: string;
  host: string;
}) {
  return (
    <>
      <h1 className="text-lg opacity-60">Login to {host}</h1>
      <a href={url} target="_blank" className="mb-4 block" rel="noreferrer">
        Click here to log in with this magic link
      </a>
      <p className="my-4 opacity-50">
        If you didn&apos;t try to login, you can safely ignore this email.
      </p>
      <a
        href={BusinessConfig.platformUrl}
        target="_blank"
        className="underline"
        rel="noreferrer"
      >
        {BusinessConfig.name}
      </a>
    </>
  );
}
