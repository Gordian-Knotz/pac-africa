'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createBrowserClient } from '@supabase/ssr';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { cn } from '@/lib/utils';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            service_interest: formData.service,
            message: formData.message,
          },
        ]);
      
      if (error) throw error;
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };
  
  const services = [
    { value: '', label: 'Select a service (optional)' },
    { value: 'innovation', label: 'Innovation' },
    { value: 'organization-development', label: 'Organization Development' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'hr-support', label: 'HR Support' },
    { value: 'transformation', label: 'Transformation' },
    { value: 'mobility', label: 'Mobility' },
    { value: 'other', label: 'Other' },
  ];
  
  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)} noValidate>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            aria-required="true"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            aria-required="true"
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="company">Company / Organization</Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Acme Corporation"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 700 000 000"
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'submitting'}
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="service">Service of Interest</Label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          disabled={status === 'submitting'}
          className="input"
          aria-label="Service of interest"
        >
          {services.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your needs, challenges, or project..."
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          rows={5}
          aria-required="true"
        />
      </div>
      
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
            role="alert"
          >
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <p>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</p>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
            role="alert"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <p>{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button type="submit" size="xl" className="w-full md:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
      
      <p className="text-sm text-muted-foreground text-center">
        By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a> and <a href="#" className="underline hover:text-primary">Terms of Service</a>.
      </p>
    </form>
  );
}
