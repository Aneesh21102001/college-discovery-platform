import type { Institution, InstitutionKind } from "@/lib/types";

const currencyPattern = /\d[\d,]*/;

export function sanitizeText(value?: string) {
  return value?.replaceAll("â‚¹", "₹").trim() ?? "";
}

export function detectInstitutionKind(institution: Institution): InstitutionKind {
  if (institution.kind) {
    return institution.kind;
  }

  if (institution.board) {
    return "school";
  }

  if (institution.stream) {
    return "junior-college";
  }

  if (institution.type) {
    return "university";
  }

  return "college";
}

export function getInstitutionLabel(institution: Institution) {
  const kind = detectInstitutionKind(institution);

  switch (kind) {
    case "school":
      return "School";
    case "junior-college":
      return "Junior College";
    case "university":
      return "University";
    default:
      return "College";
  }
}

export function formatFees(value?: string) {
  const sanitized = sanitizeText(value);

  if (!sanitized) {
    return null;
  }

  const match = sanitized.match(currencyPattern);

  if (!match) {
    return sanitized;
  }

  const suffix = sanitized.slice(match.index! + match[0].length).trim();

  return `₹${match[0]}${suffix ? ` ${suffix}` : ""}`;
}

export function getInstitutionHighlights(institution: Institution) {
  return [
    institution.board ? `Board: ${institution.board}` : null,
    institution.type ? `Type: ${institution.type}` : null,
    institution.stream ? `Stream: ${institution.stream}` : null,
    institution.courses ? `${splitCourses(institution.courses).length} course groups` : null,
  ].filter((value): value is string => Boolean(value));
}

export function splitCourses(courses?: string) {
  return sanitizeText(courses)
    .split(",")
    .map((course) => course.trim())
    .filter(Boolean);
}

export function getInstitutionOverview(institution: Institution) {
  if (institution.overview) {
    return sanitizeText(institution.overview);
  }

  const label = getInstitutionLabel(institution);
  const descriptors = getInstitutionHighlights(institution);

  if (descriptors.length > 0) {
    return `${institution.name} is a ${label.toLowerCase()} in ${institution.location}. ${descriptors.join(
      " • "
    )}.`;
  }

  return `${institution.name} is a ${label.toLowerCase()} in ${institution.location} with a current rating of ${institution.rating ?? "N/A"}.`;
}
