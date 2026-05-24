export type InstitutionKind =
  | "college"
  | "school"
  | "university"
  | "junior-college";

export type Institution = {
  slug: string;
  name: string;
  location: string;
  rating?: string;
  fees?: string;
  courses?: string;
  board?: string;
  type?: string;
  stream?: string;
  overview?: string;
  kind?: InstitutionKind;
};

export type Exam = {
  slug: string;
  name: string;
  description: string;
};

export type Course = {
  slug: string;
  name: string;
  description: string;
};

export type CollegesPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export type CollegeDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};
