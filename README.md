# EDYC Website - Static Archive

This branch (`archive-old-site`) contains a complete static HTML archive of the East Down Yacht Club website as it appeared at [edyc.co.uk](https://edyc.co.uk/).

## What's included

- All main pages: Home, About, Sailing, Training, Gallery, Contact, Downloads, Events
- **All 50 pages of Club News** with individual post pages
- All downloadable documents (PDFs, sailing instructions, race notices) from the Members/Downloads section
- All CSS, JavaScript, fonts and images from the original WordPress theme
- All uploaded images from 2015–2026

## Structure

The archive preserves the original WordPress URL structure:

```
index.html                    → Home page
news/index.html               → Club News listing
news/page/2/index.html        → Club News page 2 (through page 50)
2026/03/03/post-slug/         → Individual news posts
about-edyc/index.html         → About page
sailing/index.html            → Sailing section
members/index.html            → Downloads page
training/index.html           → Training page
contact/index.html            → Contact page
photo-gallery/index.html      → Photo Gallery
events/index.html             → Events/Calendar
wp-content/uploads/           → All uploaded images and documents
wp-content/themes/edyc/       → Theme CSS, JS and fonts
```

## Deployment

This branch is configured for GitHub Pages. All internal links have been converted to relative paths by `wget --convert-links` so the site works as a static archive.

## How the archive was created

```bash
wget --mirror --convert-links --adjust-extension --page-requisites \
     --no-parent --wait=0.3 --timeout=30 --tries=3 \
     -e robots=off --domains=edyc.co.uk \
     https://edyc.co.uk/
```

Archived on: March 12, 2026

