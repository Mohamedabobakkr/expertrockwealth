'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'Business Setup', href: '/services/business-setup' },
    { name: 'Golden Visa', href: '/services/golden-visa' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const servicesDropdown = [
    { name: 'UAE Residency', href: '/services/uae-residency' },
    { name: 'Business Startup', href: '/services/business-startup' },
    { name: 'Freezone vs Mainland', href: '/services/freezone-mainland' },
    { name: 'Banking', href: '/services/banking' },
    { name: 'Tax Efficiency', href: '/services/tax-efficiency' },
    { name: 'Wealth Management', href: '/services/wealth-management' },
    { name: 'Business Development', href: '/services/business-development' },
    { name: 'Property Search', href: '/services/property-search' },
    { name: 'Turn-key Setup', href: '/services/turnkey-setup' },
  ];

  return (
    <header className="ultra-glass sticky top-0 z-50 w-full border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-24 items-center justify-between">
          {/* Refined Wealth-Focused Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="duration-400 text-2xl tracking-tight transition-all hover:scale-[1.02] lg:text-3xl"
            >
              <span className="font-garamond font-light italic text-foreground">
                Expert Rock
              </span>
              <span className="ml-2 font-sans font-semibold text-heritage-gold">
                WEALTH
              </span>
            </a>
          </div>

          {/* Sophisticated Navigation */}
          <nav className="hidden items-center space-x-8 md:flex lg:space-x-10">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() =>
                  item.hasDropdown && setIsServicesOpen(false)
                }
              >
                {item.hasDropdown ? (
                  <>
                    <a
                      href={item.href}
                      className="body-sm group relative cursor-pointer font-medium text-foreground/70 transition-all duration-300 hover:text-foreground"
                    >
                      {item.name}
                      <span className="duration-400 absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-heritage-gold to-heritage-bronze transition-all group-hover:w-full"></span>
                    </a>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2">
                        <div className="w-[800px] rounded-lg border border-border/60 bg-background px-6 py-6 shadow-2xl">
                          <div className="grid grid-cols-3 gap-4">
                            {servicesDropdown.map((service) => (
                              <a
                                key={service.name}
                                href={service.href}
                                className="body-sm block rounded-lg border border-transparent px-4 py-3.5 font-medium text-foreground transition-all duration-300 hover:border-heritage-gold/30 hover:bg-heritage-gold/10 hover:text-heritage-gold"
                              >
                                {service.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="body-sm group relative font-medium text-foreground/70 transition-all duration-300 hover:text-foreground"
                  >
                    {item.name}
                    <span className="duration-400 absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-heritage-gold to-heritage-bronze transition-all group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Refined CTA Buttons */}
          <div className="hidden items-center space-x-5 md:flex">
            <Button
              variant="outline"
              size="sm"
              className="pinterest-card body-sm magnetic-hover border-border/60 px-5 py-2.5 font-medium hover:border-heritage-gold/40"
              asChild
            >
              <a href="/contact">Book Now</a>
            </Button>
            <Button
              size="sm"
              className="elegant-button body-sm px-5 py-2.5 font-medium text-primary-foreground"
              asChild
            >
              <a href="/contact">Get Quote</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Refined Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="ultra-glass space-y-2 border-t border-border/30 px-4 pb-6 pt-4 backdrop-blur-2xl">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="body-sm block rounded-lg px-4 py-3 font-medium text-foreground/70 transition-all duration-300 hover:bg-surface/50 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="space-y-3 px-4 py-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="pinterest-card w-full border-border/60 py-3 hover:border-heritage-gold/40"
                >
                  Book Call
                </Button>
                <Button
                  size="sm"
                  className="elegant-button w-full py-3 text-primary-foreground"
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
