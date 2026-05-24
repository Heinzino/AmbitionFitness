# SEO Audit & Implementation Tracker

## Executive Summary

| Category | Score | Priority |
|----------|-------|----------|
| **Overall SEO Health** | **9/10** | Excellent |
| Technical SEO | 9/10 | Good |
| On-Page SEO | 9/10 | Good |
| Content Structure | 8/10 | Good |
| Performance | 9/10 | Good |
| Local SEO | 9/10 | Good |

**Last Updated:** 2026-05-22

---

## Critical Priority Issues (COMPLETED)

### 1. Missing `robots.txt`
- [x] Create `public/robots.txt` with sitemap reference
- **Status:** COMPLETED
- **File:** `public/robots.txt`

### 2. Missing `sitemap.xml`
- [x] Install `@astrojs/sitemap` package
- [x] Configure in `astro.config.mjs`
- [x] Set site URL to `https://www.ambitionfitness.ca`
- **Status:** COMPLETED
- **Files:** `astro.config.mjs`, auto-generated `sitemap-index.xml`

### 3. Missing Meta Descriptions
- [x] `index.astro` - Add meta description
- [x] `personal-training.astro` - Add meta description
- [x] `memberships.astro` - Add meta description
- [x] `group-sessions.astro` - Add meta description
- [x] `contact.astro` - Add meta description
- [x] `get-in-touch.astro` - Add meta description
- [x] `virtual-tour.astro` - Already has description
- **Status:** COMPLETED

### 4. Open Graph / Social Meta Tags
- [x] Create reusable SEO component (`src/components/SEO.astro`)
- [x] Add `og:title` to all pages
- [x] Add `og:description` to all pages
- [x] Add `og:image` to all pages
- [x] Add `og:url` to all pages
- [x] Add `og:type` to all pages
- [x] Add `og:site_name` to all pages
- **Status:** COMPLETED

### 5. Canonical URLs
- [x] Add `<link rel="canonical">` to all pages
- **Status:** COMPLETED (via SEO component)

### 6. LocalBusiness Schema (JSON-LD)
- [x] Create JSON-LD structured data component (`src/components/LocalBusinessSchema.astro`)
- [x] Add LocalBusiness schema to all pages
- [x] Add Organization schema
- [x] Add BreadcrumbList schema support
- **Status:** COMPLETED

---

## High Priority Issues (COMPLETED)

### 7. Contact Page H1 Tag
- [x] Add proper H1 to `contact.astro`
- [x] Add proper H1 to `get-in-touch.astro`
- **Status:** COMPLETED

### 8. Analytics Integration
- [x] Create `Analytics.astro` component
- [x] Add Google Analytics 4 support (via environment variable)
- [x] Add Google Search Console verification support (via environment variable)
- [x] Update `.env` with placeholder variables
- **Status:** COMPLETED
- **Note:** Add your GA4 Measurement ID and GSC verification code to `.env`

### 9. Images Lazy Loading
- [x] Add `loading="lazy"` to decorative images on index page
- [x] Add `loading="lazy"` to ClientTransformationsSection
- [x] Add `loading="lazy"` to TestimonialsSection
- [x] Add `loading="lazy"` to personal-training testimonials
- [x] Add `loading="lazy"` to personal-training transformations gallery
- [x] Add `loading="lazy"` to virtual-tour carousel (except first image)
- [x] Add `loading="lazy"` to virtual-tour thumbnails
- **Status:** COMPLETED

### 10. Image Optimization (WebP Conversion)
- [x] Installed sharp for image processing
- [x] Converted hero image to WebP (2,126 KB → 110 KB, **95% reduction**)
- [x] Converted transformation images to WebP (~500 KB each → ~10 KB each, **98% reduction**)
- [x] Converted service section images to WebP (5,979 KB total → 230 KB total)
- [x] Updated index.astro with `<picture>` element for hero image
- [x] Updated ClientTransformationsSection to use WebP images
- [x] Updated WhyChooseUsSection to use WebP images
- [x] Added lazy loading to service images
- **Total Image Savings:** ~5.7 MB → ~350 KB (**94% reduction**)
- **Status:** COMPLETED

### 11. Redirect Pages Review
- [x] Verified `clients.astro` → 301 redirect to `/personal-training`
- [x] Verified `contact-us.astro` → 301 redirect to `/contact`
- [x] Verified `private-facility.astro` → 301 redirect to `/virtual-tour`
- [x] Converted `get-in-touch.astro` → 301 redirect to `/contact`
- **Status:** COMPLETED - All redirects properly configured

---

## Medium Priority Issues

### 12. Twitter Card Meta Tags
- [x] Add `twitter:card` to all pages
- [x] Add `twitter:title` to all pages
- [x] Add `twitter:description` to all pages
- [x] Add `twitter:image` to all pages
- **Status:** COMPLETED (via SEO component)

### 13. Breadcrumb Schema
- [x] Add BreadcrumbList structured data support
- **Status:** COMPLETED (via LocalBusinessSchema component - ready to use)

### 14. Font Loading Not Optimized
- [ ] Add `font-display: swap` to font loading
- [ ] Consider subsetting fonts
- **Effort:** 30 min

### 15. External CSS Reset
- [ ] Bundle Meyer Reset locally or remove (Tailwind includes reset)
- **Location:** All pages load from CDN
- **Effort:** 10 min

---

## Low Priority / Nice-to-Have

### 16. No PWA Manifest
- [ ] Create `manifest.json`
- **Impact:** Cannot be installed as app on mobile

### 17. No security.txt
- [ ] Create `.well-known/security.txt`

### 18. No hreflang Tags
- [ ] Add if multi-language site planned

### 19. URL Structure - Apex Domain
- [x] Updated site URL to apex domain (`https://ambitionfitness.ca` instead of `www`)
- [x] Updated `astro.config.mjs` site property
- [x] Updated `SEO.astro` siteUrl constant
- [x] Updated `LocalBusinessSchema.astro` all URLs
- [x] Updated `robots.txt` sitemap URL
- **Status:** COMPLETED
- **Note:** Configure DNS/hosting to redirect `www.ambitionfitness.ca` → `ambitionfitness.ca` (301 redirect)

### 20. Create Open Graph Image
- [ ] Create a proper OG image at `public/img/og-image.png` (1200x630px recommended)
- **Impact:** Better social media sharing appearance

---

## Business Information for Schema

| Field | Value |
|-------|-------|
| Name | Ambition Fitness |
| Location | Calgary, Alberta |
| Phone | 825-479-2977 |
| Email | info@ambitionfitness.ca |
| Instagram | @ambitionfitness.ca |
| Google Place ID | ChIJkVH-mdV6cVMR4AVhyOPuTYw |
| Service Areas | Mayland Heights, Meridian, Raddison Heights, Bridgeland-Riverside |

---

## Files Created

- [x] `public/robots.txt` - Search engine crawler instructions
- [x] `src/components/SEO.astro` - Reusable SEO meta tags component
- [x] `src/components/LocalBusinessSchema.astro` - JSON-LD structured data
- [x] `src/components/Analytics.astro` - Google Analytics & Search Console integration

## Files Modified

- [x] `astro.config.mjs` - Added sitemap integration, set site URL
- [x] `src/pages/index.astro` - Added SEO component
- [x] `src/pages/personal-training.astro` - Added SEO component
- [x] `src/pages/memberships.astro` - Added SEO component
- [x] `src/pages/group-sessions.astro` - Added SEO component
- [x] `src/pages/contact.astro` - Added SEO component
- [x] `src/pages/get-in-touch.astro` - Added SEO component
- [x] `src/pages/virtual-tour.astro` - Added SEO component

---

## Progress Log

| Date | Task | Status |
|------|------|--------|
| 2025-11-29 | Created robots.txt | Completed |
| 2025-11-29 | Installed @astrojs/sitemap | Completed |
| 2025-11-29 | Created SEO.astro component | Completed |
| 2025-11-29 | Created LocalBusinessSchema.astro | Completed |
| 2025-11-29 | Added meta descriptions to all pages | Completed |
| 2025-11-29 | Added Open Graph tags to all pages | Completed |
| 2025-11-29 | Added Twitter Card tags to all pages | Completed |
| 2025-11-29 | Added canonical URLs to all pages | Completed |
| 2025-11-29 | Added LocalBusiness JSON-LD schema | Completed |
| 2025-11-29 | Created Analytics.astro component | Completed |
| 2025-11-29 | Added H1 tags to contact and get-in-touch pages | Completed |
| 2025-11-29 | Added lazy loading to images across site | Completed |
| 2025-11-29 | Verified redirect pages are properly configured | Completed |
| 2025-11-29 | Converted get-in-touch to redirect to /contact | Completed |
| 2025-11-29 | Updated all URLs to apex domain (no www) | Completed |
| 2025-11-29 | Verified build succeeds | Completed |
| 2025-11-29 | Installed sharp for image optimization | Completed |
| 2025-11-29 | Converted images to WebP format (~94% size reduction) | Completed |
| 2025-11-29 | Updated components to use optimized WebP images | Completed |

---

## Meta Descriptions Applied

### Home Page
"Calgary's elite personal training facility. Private 1-on-1 coaching, proven transformations, and state-of-the-art equipment. Book your free consultation today!"

### Personal Training
"Transform your body with Calgary's top personal trainers. Customized programs, dedicated coaching, and real results. See our client success stories."

### Memberships
"Flexible membership options at Ambition Fitness Calgary. Access elite equipment and expert coaching. Find the perfect plan for your fitness goals."

### Group Sessions
"Join our energizing group fitness classes in Calgary. Senior fitness, boot camps, and more. Build strength and community together."

### Contact
"Get in touch with Ambition Fitness Calgary. Book a consultation, schedule a tour, or ask questions. Located in NE Calgary, serving Bridgeland and surrounding areas."

### Get In Touch
"Contact Ambition Fitness for personalized training inquiries. Call 825-479-2977 or book online. Your fitness journey starts here."

### Virtual Tour
"Take a virtual tour of Ambition Fitness Calgary. Explore our state-of-the-art private training facility from the comfort of your home."

---

## Next Steps

1. **Create OG Image** - Design a 1200x630px image for social sharing at `public/img/og-image.png`
2. **Configure Google Analytics** - Add your GA4 Measurement ID to `.env` (`PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`)
3. **Configure Google Search Console** - Add your verification code to `.env` (`PUBLIC_GSC_VERIFICATION=your-code`)
4. ~~**Optimize images** - Migrate to Astro's `<Image>` component for automatic WebP/AVIF conversion~~ ✅ **COMPLETED** - Images converted to WebP with 94% size reduction
5. **Consider removing Meyer Reset** - Tailwind already includes a CSS reset

---

# SEO Content Plan - Phase 2

## Overview
Comprehensive SEO content strategy to expand Ambition Fitness's search visibility in Calgary. This includes improving existing pages and creating new keyword-targeted landing pages.

---

## Part A: Existing Page Improvements

### 1. Personal Training Page ✅ COMPLETED
**File:** `src/pages/personal-training.astro`

**SEO Updates:**
- Title: "Personal Trainer Calgary | 1-on-1 Personal Training | Ambition Fitness"
- Meta Description: "Calgary's top personal trainers for weight loss, strength training, and body transformations. Certified coaches, customized 1-on-1 programs, proven results. Book your free consultation."

**New Sections Added:**
- Calgary Personal Training Programs section with 3 program cards:
  - 1-on-1 Personal Training
  - Weight Loss Coaching
  - Strength & Conditioning
- FAQ Section with schema markup (5 FAQs)
- Video Testimonials section (commented out for later)

**FAQ Questions:**
1. How much does a personal trainer cost in Calgary?
2. How many personal training sessions per week do I need?
3. Is personal training good for beginners?
4. Do you offer personal training for women?
5. What results can I expect from personal training?

---

### 2. Memberships Page ✅ COMPLETED
**File:** `src/pages/memberships.astro`

**SEO Updates:**
- Title: "Gym Membership Calgary | Flexible Fitness Plans | Ambition Fitness"
- Meta Description: "Affordable gym memberships in Calgary with 24/7 access, no contracts, and premium equipment. Private facility, limited spots, never crowded. Book your free tour today."

**Existing Sections (Already Present):**
- Membership benefits cards (6 benefits)
- "Why Ambition Fitness?" section
- "What's Included" checklist

**New Section Added:**
- FAQ Section with schema markup (5 FAQs)

**FAQ Questions:**
1. How much is a gym membership in Calgary?
2. Do you offer month-to-month memberships?
3. What's included in the membership?
4. Can I freeze my membership?
5. Do you have a free trial or tour?

---

### 3. Group Sessions Page ✅ COMPLETED
**File:** `src/pages/group-sessions.astro`

**SEO Updates:**
- Title: "Group Fitness Classes Calgary | Small Group Training | Ambition Fitness"
- Meta Description: "Join Calgary's most effective small group fitness classes. Senior fitness programs, boot camps, limited class sizes, expert coaching. Try your first class free."

**Existing Sections (Already Present):**
- Group session cards (Senior Fitness, Boot Camp)
- Class schedule section
- "Why Choose Group Sessions?" benefits

**New Section Added:**
- FAQ Section with schema markup (5 FAQs)

**FAQ Questions:**
1. How many people are in a group class?
2. What fitness level do I need for group classes?
3. How do I book a group session?
4. What types of group classes do you offer?
5. Can I try a class before committing?

---

## Part B: New Landing Pages

### 1. Personal Trainer Calgary ⏳ PENDING
**File:** `src/pages/personal-trainer-calgary.astro`
**Target Keywords:** "personal trainer calgary", "calgary personal trainer", "best personal trainer calgary"

**Page Structure:**
- Hero: "Calgary's Premier Personal Training Studio"
- Why choose a Calgary personal trainer section
- Our training approach
- Trainer credentials/certifications
- Client transformations gallery
- Testimonials
- FAQ section (5 questions)
- CTA

---

### 2. Weight Loss Personal Trainer Calgary ⏳ PENDING
**File:** `src/pages/weight-loss-personal-trainer-calgary.astro`
**Target Keywords:** "weight loss personal trainer calgary", "weight loss coach calgary", "fat loss trainer calgary"

**Page Structure:**
- Hero: "Proven Weight Loss Programs in Calgary"
- Our weight loss methodology
- Nutrition guidance overview
- Success stories/transformations
- Program options
- FAQ section (5 questions)
- CTA

---

### 3. Personal Training for Women Calgary ⏳ PENDING
**File:** `src/pages/personal-training-women-calgary.astro`
**Target Keywords:** "personal training for women calgary", "female personal trainer calgary", "women's fitness calgary"

**Page Structure:**
- Hero: "Women's Personal Training in Calgary"
- Why women choose Ambition Fitness
- Women-specific training programs
- Safe, comfortable environment
- Success stories from female clients
- FAQ section (5 questions)
- CTA

---

### 4. Small Group Training Calgary ⏳ PENDING
**File:** `src/pages/small-group-training-calgary.astro`
**Target Keywords:** "small group training calgary", "group fitness calgary", "semi-private training calgary"

**Page Structure:**
- Hero: "Small Group Training in Calgary"
- Benefits of small group vs large classes
- Class types and schedule
- Community/atmosphere
- Pricing comparison
- FAQ section (5 questions)
- CTA

---

### 5. Strength Training Calgary ⏳ PENDING
**File:** `src/pages/strength-training-calgary.astro`
**Target Keywords:** "strength training calgary", "weightlifting gym calgary", "strength coach calgary"

**Page Structure:**
- Hero: "Build Real Strength in Calgary"
- Our strength training philosophy
- Equipment and facilities
- Programs for all levels
- Athlete success stories
- FAQ section (5 questions)
- CTA

---

### 6. Body Transformation Calgary ⏳ PENDING
**File:** `src/pages/body-transformation-calgary.astro`
**Target Keywords:** "body transformation calgary", "fitness transformation calgary", "12 week transformation calgary"

**Page Structure:**
- Hero: "Complete Body Transformation Programs"
- The transformation process
- Before/after gallery
- What's included in program
- Timeline expectations
- FAQ section (5 questions)
- CTA

---

### 7. Beginner Personal Training Calgary ⏳ PENDING
**File:** `src/pages/beginner-personal-training-calgary.astro`
**Target Keywords:** "beginner personal training calgary", "new to fitness calgary", "fitness for beginners calgary"

**Page Structure:**
- Hero: "Start Your Fitness Journey Right"
- Why beginners need personal training
- Our beginner-friendly approach
- What to expect in first session
- Beginner success stories
- FAQ section (5 questions)
- CTA

---

### 8. Online Personal Training Calgary ⏳ PENDING
**File:** `src/pages/online-personal-training-calgary.astro`
**Target Keywords:** "online personal training calgary", "virtual personal trainer calgary", "remote fitness coaching calgary"

**Page Structure:**
- Hero: "Online Personal Training from Calgary's Best"
- How online training works
- Technology/app overview
- Program options
- Who online training is for
- FAQ section (5 questions)
- CTA

---

## Part C: Local SEO Neighborhood Pages ⏳ PENDING

Target neighborhoods for local landing pages:
1. Beltline
2. Kensington
3. Inglewood
4. Bridgeland
5. Mission
6. Eau Claire
7. Downtown Calgary
8. Victoria Park

**Template Structure for Each:**
- Hero: "Personal Training in [Neighborhood]"
- Location-specific content
- Distance/accessibility info
- Local testimonials if available
- Map embed
- FAQ section
- CTA

---

## Part D: Blog Articles ⏳ PENDING

### Planned Blog Topics:

1. **"How to Choose a Personal Trainer in Calgary: Complete Guide"**
   - Target: "how to choose personal trainer calgary"
   - Content: Credentials to look for, questions to ask, red flags

2. **"Personal Training vs Gym Membership: What's Right for You?"**
   - Target: "personal training vs gym membership"
   - Content: Cost comparison, results comparison, time investment

3. **"10 Benefits of Hiring a Personal Trainer"**
   - Target: "benefits of personal trainer"
   - Content: Accountability, form correction, customization, etc.

4. **"What to Expect in Your First Personal Training Session"**
   - Target: "first personal training session"
   - Content: Assessment, goal setting, sample workout

5. **"How Long Does It Take to See Results from Personal Training?"**
   - Target: "personal training results timeline"
   - Content: Realistic expectations, factors affecting results

6. **"Calgary's Best Gyms for Personal Training [2025 Guide]"**
   - Target: "best gyms calgary personal training"
   - Content: Comparison guide featuring Ambition Fitness

---

## Part E: Content Plan Progress Tracker

| Task | Status | Date Completed |
|------|--------|----------------|
| Personal Training page improvements | ✅ Complete | Dec 2024 |
| Memberships page improvements | ✅ Complete | Dec 2024 |
| Group Sessions page improvements | ✅ Complete | Dec 2024 |
| Personal Trainer Calgary page | ⏳ Pending | - |
| Weight Loss PT page | ⏳ Pending | - |
| Women's PT page | ⏳ Pending | - |
| Small Group Training page | ⏳ Pending | - |
| Strength Training page | ⏳ Pending | - |
| Body Transformation page | ⏳ Pending | - |
| Beginner PT page | ⏳ Pending | - |
| Online PT page | ⏳ Pending | - |
| Local SEO neighborhood pages | ⏳ Pending | - |
| Blog articles | ⏳ Pending | - |

---

## Implementation Notes

- All new pages should follow existing design patterns from `personal-training.astro`
- Reuse components: SEO, LocalBusinessSchema, navigation, footer
- Each page should have unique, valuable content (no thin content)
- Target 1,500+ words per landing page for SEO value
- Include internal links between related pages
- Add FAQ schema markup to all new pages
