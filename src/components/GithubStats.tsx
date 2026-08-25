import { githubUsername } from "../data";

export function GithubStats() {
  return (
    <div className="mb-6 md:mb-8">
      <div className="reveal rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5 mb-4">
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${githubUsername}&theme=tokyonight`}
          alt={`GitHub profile details for ${githubUsername}`}
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="reveal rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${githubUsername}&theme=tokyonight`}
            alt={`GitHub stats for ${githubUsername}`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="reveal rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 sm:p-5">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${githubUsername}&theme=tokyonight&utcOffset=5.5`}
            alt={`Productive time for ${githubUsername}`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
