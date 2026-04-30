import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />

              <h2 className="text-xl font-bold">
                EduPlatform
              </h2>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              College Discovery, Admissions, Career Guidance,
              and Counseling Platform for students across India.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/schools">Schools</Link>
              <Link href="/colleges-for-12th">12th Colleges</Link>
              <Link href="/colleges">UG/PG Colleges</Link>
              <Link href="/universities">Universities</Link>
              <Link href="/courses">Courses</Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">
              Support
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms-of-service">
                Terms of Service
              </Link>

              <Link href="/contact-us">
                Contact Us
              </Link>

              <Link href="/faq">
                FAQs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">
              Contact
            </h3>

            <div className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@eduplatform.com
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 99999 99999
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" />
                India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {year} EduPlatform. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}