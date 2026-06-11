type ProfessorSocialProps = {
  instagram: string;
  youtube?: string;
};

function InstagramIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.8 8.001a2.5 2.5 0 0 0-1.76-1.77C18.36 6 12 6 12 6s-6.36 0-8.04.231A2.5 2.5 0 0 0 2.2 8.001 26.3 26.3 0 0 0 2 12a26.3 26.3 0 0 0 .2 3.999 2.5 2.5 0 0 0 1.76 1.77C5.64 18 12 18 12 18s6.36 0 8.04-.231a2.5 2.5 0 0 0 1.76-1.77A26.3 26.3 0 0 0 22 12a26.3 26.3 0 0 0-.2-3.999z" />
      <path d="m10 15 6-3-6-3v6z" fill="var(--background)" />
    </svg>
  );
}

export function ProfessorSocial({ instagram, youtube }: ProfessorSocialProps) {
  return (
    <div className="flex justify-center gap-3">
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--primary)] text-[var(--background)] transition-transform hover:scale-105"
      >
        <InstagramIcon />
      </a>

      {youtube ? (
        <a
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--terracotta)] bg-[var(--terracotta)] text-[var(--background)] transition-transform hover:scale-105"
        >
          <YoutubeIcon />
        </a>
      ) : null}
    </div>
  );
}
