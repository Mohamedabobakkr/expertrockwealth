'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calculator } from 'lucide-react';

interface CalculatorState {
  businessType: string;
  jurisdiction: string;
  visaCount: number;
  banking: string[];
  additionalServices: string[];
}

const businessTypes = [
  { value: 'trading', label: 'Trading Company', basePrice: 15000 },
  { value: 'consulting', label: 'Consulting Services', basePrice: 12000 },
  { value: 'it', label: 'IT Services', basePrice: 14000 },
  { value: 'manufacturing', label: 'Manufacturing', basePrice: 25000 },
  { value: 'ecommerce', label: 'E-commerce', basePrice: 16000 },
  { value: 'investment', label: 'Investment Company', basePrice: 20000 }
];

const jurisdictions = [
  { value: 'dmcc', label: 'DMCC (Dubai Multi Commodities Centre)', multiplier: 1.0, popular: true },
  { value: 'difc', label: 'DIFC (Dubai International Financial Centre)', multiplier: 1.8 },
  { value: 'adgm', label: 'ADGM (Abu Dhabi Global Market)', multiplier: 1.6 },
  { value: 'dubai_mainland', label: 'Dubai Mainland', multiplier: 1.4 },
  { value: 'sharjah', label: 'Sharjah Free Zone', multiplier: 0.8 },
  { value: 'ajman', label: 'Ajman Free Zone', multiplier: 0.7 }
];

const bankingOptions = [
  { value: 'emirates_nbd', label: 'Emirates NBD', price: 3000 },
  { value: 'adcb', label: 'Abu Dhabi Commercial Bank', price: 2500 },
  { value: 'mashreq', label: 'Mashreq Bank', price: 3500 },
  { value: 'hsbc', label: 'HSBC UAE', price: 5000 },
  { value: 'cbd', label: 'Commercial Bank of Dubai', price: 2000 }
];

const additionalServices = [
  { value: 'office_space', label: 'Flexi Office Space (12 months)', price: 8000 },
  { value: 'accounting', label: 'Accounting Services (12 months)', price: 12000 },
  { value: 'audit', label: 'Annual Audit', price: 15000 },
  { value: 'tax_advisory', label: 'Tax Advisory Services', price: 8000 },
  { value: 'legal_advisory', label: 'Legal Advisory Package', price: 10000 },
  { value: 'vat_registration', label: 'VAT Registration', price: 3000 }
];

export function CalculatorForm() {
  const [state, setState] = useState<CalculatorState>({
    businessType: '',
    jurisdiction: '',
    visaCount: 2,
    banking: [],
    additionalServices: []
  });

  const [showResults, setShowResults] = useState(false);

  const calculateTotal = () => {
    let total = 0;
    
    // Base business setup cost
    const businessType = businessTypes.find(bt => bt.value === state.businessType);
    const jurisdiction = jurisdictions.find(j => j.value === state.jurisdiction);
    
    if (businessType && jurisdiction) {
      total += businessType.basePrice * jurisdiction.multiplier;
    }

    // Visa costs (AED 3,000 per visa)
    total += state.visaCount * 3000;

    // Banking costs
    state.banking.forEach(bankId => {
      const bank = bankingOptions.find(b => b.value === bankId);
      if (bank) total += bank.price;
    });

    // Additional services
    state.additionalServices.forEach(serviceId => {
      const service = additionalServices.find(s => s.value === serviceId);
      if (service) total += service.price;
    });

    return Math.round(total);
  };

  const handleCalculate = () => {
    if (state.businessType && state.jurisdiction) {
      setShowResults(true);
    }
  };

  const formatPrice = (price: number) => {
    return `AED ${price.toLocaleString()}`;
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Business Setup Calculator
                </CardTitle>
                <CardDescription>
                  Configure your business requirements to get accurate pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Business Type */}
                <div className="space-y-2">
                  <Label>Business Type *</Label>
                  <Select value={state.businessType} onValueChange={(value) => setState(prev => ({ ...prev, businessType: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label} - {formatPrice(type.basePrice)}+
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Jurisdiction */}
                <div className="space-y-2">
                  <Label>Jurisdiction *</Label>
                  <Select value={state.jurisdiction} onValueChange={(value) => setState(prev => ({ ...prev, jurisdiction: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select jurisdiction" />
                    </SelectTrigger>
                    <SelectContent>
                      {jurisdictions.map(jurisdiction => (
                        <SelectItem key={jurisdiction.value} value={jurisdiction.value}>
                          <div className="flex items-center gap-2">
                            {jurisdiction.label}
                            {jurisdiction.popular && <Badge variant="secondary">Popular</Badge>}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Visa Count */}
                <div className="space-y-2">
                  <Label>Number of Visas</Label>
                  <Select value={state.visaCount.toString()} onValueChange={(value) => setState(prev => ({ ...prev, visaCount: parseInt(value) }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map(count => (
                        <SelectItem key={count} value={count.toString()}>
                          {count} visa{count > 1 ? 's' : ''} - {formatPrice(count * 3000)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Banking Options */}
                <div className="space-y-3">
                  <Label>Banking Setup (Optional)</Label>
                  {bankingOptions.map(bank => (
                    <div key={bank.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={bank.value}
                        checked={state.banking.includes(bank.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setState(prev => ({ ...prev, banking: [...prev.banking, bank.value] }));
                          } else {
                            setState(prev => ({ ...prev, banking: prev.banking.filter(b => b !== bank.value) }));
                          }
                        }}
                      />
                      <label htmlFor={bank.value} className="text-sm flex-1 cursor-pointer">
                        {bank.label} - {formatPrice(bank.price)}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Additional Services */}
                <div className="space-y-3">
                  <Label>Additional Services (Optional)</Label>
                  {additionalServices.map(service => (
                    <div key={service.value} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.value}
                        checked={state.additionalServices.includes(service.value)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setState(prev => ({ ...prev, additionalServices: [...prev.additionalServices, service.value] }));
                          } else {
                            setState(prev => ({ ...prev, additionalServices: prev.additionalServices.filter(s => s !== service.value) }));
                          }
                        }}
                      />
                      <label htmlFor={service.value} className="text-sm flex-1 cursor-pointer">
                        {service.label} - {formatPrice(service.price)}
                      </label>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={handleCalculate}
                  className="w-full"
                  size="lg"
                  disabled={!state.businessType || !state.jurisdiction}
                >
                  Calculate Total Cost
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Cost Breakdown</CardTitle>
                <CardDescription>
                  {showResults ? 'Your customized pricing estimate' : 'Complete the form to see your pricing'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showResults ? (
                  <div className="space-y-4">
                    {/* Base Cost */}
                    <div className="flex justify-between items-center">
                      <span>Business Setup</span>
                      <span className="font-semibold">
                        {formatPrice(Math.round((businessTypes.find(bt => bt.value === state.businessType)?.basePrice || 0) * 
                          (jurisdictions.find(j => j.value === state.jurisdiction)?.multiplier || 1)))}
                      </span>
                    </div>
                    
                    <Separator />
                    
                    {/* Visas */}
                    <div className="flex justify-between items-center">
                      <span>Visas ({state.visaCount})</span>
                      <span className="font-semibold">{formatPrice(state.visaCount * 3000)}</span>
                    </div>

                    {/* Banking */}
                    {state.banking.length > 0 && (
                      <>
                        <Separator />
                        {state.banking.map(bankId => {
                          const bank = bankingOptions.find(b => b.value === bankId);
                          return bank ? (
                            <div key={bankId} className="flex justify-between items-center">
                              <span>{bank.label}</span>
                              <span className="font-semibold">{formatPrice(bank.price)}</span>
                            </div>
                          ) : null;
                        })}
                      </>
                    )}

                    {/* Additional Services */}
                    {state.additionalServices.length > 0 && (
                      <>
                        <Separator />
                        {state.additionalServices.map(serviceId => {
                          const service = additionalServices.find(s => s.value === serviceId);
                          return service ? (
                            <div key={serviceId} className="flex justify-between items-center">
                              <span>{service.label}</span>
                              <span className="font-semibold">{formatPrice(service.price)}</span>
                            </div>
                          ) : null;
                        })}
                      </>
                    )}

                    <Separator />
                    
                    {/* Total */}
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Estimated Cost</span>
                      <span className="text-primary">{formatPrice(calculateTotal())}</span>
                    </div>

                    <div className="pt-4 space-y-3">
                      <Button className="w-full" asChild>
                        <a href="/contact">
                          Get Detailed Quote
                          <FileText className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full">
                        Download PDF Report
                        <Download className="ml-2 w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-xs text-muted-foreground mt-4">
                      * Prices are estimates based on current government fees. Final costs may vary based on specific requirements and current regulations.
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Fill out the form to calculate your business setup costs</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}