const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold">
              EduPlatform
            </h2>

            <p className="text-sm text-muted-foreground">
              College Discovery + Admissions + Counseling Platform
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} EduPlatform. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}