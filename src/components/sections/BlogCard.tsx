'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
  image?: string;
  index?: number;
  className?: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  href, 
  image,
  index = 0, 
  className 
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
      className={cn('group', className)}
    >
      <Card className="h-full overflow-hidden group relative">
        {image && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={image}
              alt=""
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
        <CardContent className="p-6">
          {!image && (
            <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {category}
            </span>
          )}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
            <time dateTime={date} className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {readTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            <Link href={href}>{title}</Link>
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            Read More
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </CardContent>
      </Card>
    </motion.article>
  );
}
