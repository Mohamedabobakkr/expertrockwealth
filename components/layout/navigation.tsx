"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

const serviceItems = [
  {
    key: "company-formation",
    href: "/services/company-formation",
    icon: Building2,
    description: "Complete business setup in UAE",
  },
  {
    key: "business-licensing",
    href: "/services/business-licensing",
    icon: Award,
    description: "Professional and commercial licenses",
  },
  {
    key: "visa-services",
    href: "/services/visa-services",
    icon: Globe,
    description: "Investor and employment visas",
  },
  {
    key: "banking-assistance",
    href: "/services/banking-assistance",
    icon: Banknote,
    description: "Corporate banking solutions",
  },
  {
    key: "legal-services",
    href: "/services/legal-services",
    icon: Shield,
    description: "Legal consultation and support",
  },
  {
    key: "accounting-services",
    href: "/services/accounting-services",
    icon: Calculator,
    description: "Bookkeeping and tax services",
  },
];

export function Navigation({ className, onItemClick }: NavigationProps) {
  const t = useTranslations();
  const pathname = usePathname();

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
      return pathname === "/" || pathname.startsWith("/en") && pathname.split("/").length === 2;
    }
    return pathname.includes(href);
  };

  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="space-x-2">
        {navItems.slice(0, 1).map((item) => (
          <NavigationMenuItem key={item.key}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={cn(
                navigationMenuTriggerStyle(),
                "text-foreground/80 hover:text-foreground transition-colors",
                isActive(item.href) && "text-accent bg-accent/10"
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}

        {/* Services Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground data-[state=open]:text-accent">
            {t("nav.services")}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[600px] p-6">
              <div className="grid grid-cols-2 gap-4">
                {serviceItems.map((service, index) => (
                  <motion.div
                    key={service.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={service.href}
                      onClick={onItemClick}
                      className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-accent/5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                        <service.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {t(`services.${service.key}.title`)}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 border-t pt-4">
                <Link
                  href="/services"
                  onClick={onItemClick}
                  className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {navItems.slice(1).map((item) => (
          <NavigationMenuItem key={item.key}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={cn(
                navigationMenuTriggerStyle(),
                "text-foreground/80 hover:text-foreground transition-colors",
                isActive(item.href) && "text-accent bg-accent/10"
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}