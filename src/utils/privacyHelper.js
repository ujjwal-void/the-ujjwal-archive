// Helper utility to detect if current URL is the Recruiter Pass URL
export function checkIsRecruiterMode() {
  if (typeof window === 'undefined') return false;
  const hash = window.location.hash.replace('#', '');
  const searchParams = new URLSearchParams(window.location.search);
  const isRecruiterQuery = searchParams.get('r') === '1' || searchParams.get('recruiter') === 'true';
  return hash === 'recruiter' || hash === 'hiring' || isRecruiterQuery;
}
