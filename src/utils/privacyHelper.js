// Exact Recruiter Route Check: returns true if URL path, hash, or search contains 'recruit'
export function checkIsRecruiterMode() {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();
  return path.includes('recruit') || hash.includes('recruit') || search.includes('recruit');
}
