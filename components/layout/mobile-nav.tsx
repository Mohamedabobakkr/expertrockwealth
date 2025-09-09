"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Calculator,
  Users,
  FileText,
  Award,
  Globe,
  Briefcase,
  Shield,
  Banknote,
  ChevronDown,
  X,
  Languages,
  Phone,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const serviceItems = [
  {
    key: "company-formation",
    href: "/services/company-formation",
    icon: Building2,
  },
  {
    key: "business-licensing",
    href: "/services/business-licensing",
    icon: Award,
  },
  {
    key: "visa-services",
    href: "/services/visa-services",
    icon: Globe,
  },
  {
    key: "banking-assistance",
    href: "/services/banking-assistance",
    icon: Banknote,
  },
  {
    key: "legal-services",
    href: "/services/legal-services",
    icon: Shield,
  },
  {
    key: "accounting-services",
    href: "/services/accounting-services",
    icon: Calculator,
  },
];

export function MobileNav({ isOpen, onClose, locale }: MobileNavProps) {
  const t = useTranslations();
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { key: "home", href: "/", label: t("nav.home") },
    { key: "calculator", href: "/calculator", label: t("nav.calculator") },
    { key: "case-studies", href: "/case-studies", label: t("nav.case-studies") },
    { key: "blog", href: "/blog", label: t("nav.blog") },
    { key: "about", href: "/about", label: t("nav.about") },
    { key: "contact", href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || (pathname.startsWith("/en") && pathname.split("/").length === 2);
    }
    return pathname.includes(href);
  };

  const handleLinkClick = () => {
    onClose();
    setServicesOpen(false);
  };

  const handleLanguageSwitch = (newLocale: string) => {
    const currentPath = pathname.replace(/^\/[a-z]{2}/, "") || "/";
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l bg-background shadow-lg"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b px-6 py-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-serif text-lg font-bold text-foreground">
                    Expert Rock Wealth
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-foreground/60 hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-2 px-4">
                  {navItems.slice(0, 1).map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-accent/10 text-accent"
                          : "text-foreground/70 hover:bg-accent/5 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Services Section */}
                  <div>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        pathname.includes("/services")
                          ? "bg-accent/10 text-accent"
                          : "text-foreground/70 hover:bg-accent/5 hover:text-foreground"
                      )}
                    >
                      {t("nav.services")}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 space-y-1 border-l border-border/50 pl-4 pt-2">
                            {serviceItems.map((service) => (
                              <Link
                                key={service.key}
                                href={service.href}
                                onClick={handleLinkClick}
                                className={cn(
                                  "flex items-center space-x-3 rounded-lg p-2 text-sm transition-colors",
                                  isActive(service.href)
                                    ? "bg-accent/10 text-accent"
                                    : "text-foreground/60 hover:bg-accent/5 hover:text-foreground/80"
                                )}
                              >
                                <service.icon className="h-4 w-4" />
                                <span>{t(`services.${service.key}.title`)}</span>
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              onClick={handleLinkClick}
                              className="flex items-center space-x-3 rounded-lg p-2 text-sm font-medium text-primary hover:bg-accent/5"
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {navItems.slice(1).map((item) => (
                    <Link
                      key={item.key}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "bg-accent/10 text-accent"
                          : "text-foreground/70 hover:bg-accent/5 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Language Switcher */}
                <div className="mx-4 mt-6 border-t pt-6">
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                      Language
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleLanguageSwitch("en")}
                        className={cn(
                          "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          locale === "en"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent/5 text-foreground/70 hover:bg-accent/10"
                        )}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageSwitch("ar")}
                        className={cn(
                          "flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                          locale === "ar"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent/5 text-foreground/70 hover:bg-accent/10"
                        )}
                      >
                        العربية
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="border-t p-4 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  onClick={handleLinkClick}
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    {t("cta.book-call")}
                  </Link>
                </Button>
                <Button asChild className="w-full" onClick={handleLinkClick}>
                  <Link href="/calculator">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("cta.get-quote")}
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}