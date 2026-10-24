import Link from "next/link";
import { IoWarningOutline, IoHome, IoCarSport, IoArrowForward } from "react-icons/io5";
import Breadcrumb from "@/components/common/Breadcrumb";
import { poppins } from "@/lib/fonts";
import { siteMap } from "@/data";

export default function NotFound() {
  const data = siteMap.notFound;
  const { pageTop, code, badge, title, description, buttons, quickLinksSection } = data;

  return (
    <main className={poppins.className}>
      {/* Top */}
      <Breadcrumb
        title={pageTop.title}
        breadcrumb={pageTop.breadcrumb}
      />

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-red-50 border-2 border-red-200/80 flex items-center justify-center text-[#e51a24] text-4xl sm:text-5xl shadow-lg shadow-red-500/10 mb-6">
            <IoWarningOutline />
          </div>

          {/* Number */}
          <div className="text-7xl sm:text-9xl font-black text-[#081839] tracking-tighter leading-none select-none">
            {code.slice(0, 1)}<span className="text-[#e51a24]">{code.slice(1, 2)}</span>{code.slice(2)}
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-[#081839] text-xs font-bold uppercase tracking-wider mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e51a24]" />
            <span>{badge}</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#081839] tracking-tight mt-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto mt-3 leading-relaxed">
            {description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            {buttons?.home && (
              <Link
                href={buttons.home.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e51a24] hover:bg-[#cc141d] text-white font-bold text-sm transition-all shadow-md shadow-red-500/20"
              >
                <IoHome className="text-base" />
                <span>{buttons.home.text}</span>
              </Link>
            )}
            {buttons?.courses && (
              <Link
                href={buttons.courses.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#081839] font-bold text-sm transition-all"
              >
                <IoCarSport className="text-base" />
                <span>{buttons.courses.text}</span>
              </Link>
            )}
          </div>

          {/* Grid */}
          {quickLinksSection && quickLinksSection.links && (
            <div className="mt-12 pt-10 border-t border-gray-100 max-w-xl mx-auto">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {quickLinksSection.title}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {quickLinksSection.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-red-50/60 border border-gray-100 hover:border-red-200 text-xs font-bold text-[#081839] hover:text-[#e51a24] transition-all flex items-center justify-between"
                  >
                    <span>{link.title}</span>
                    <IoArrowForward className="text-xs text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
