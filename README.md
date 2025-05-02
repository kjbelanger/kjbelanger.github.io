# Kevin Belanger's Personal Website

A modern, responsive personal website built with Jekyll and hosted on GitHub Pages.

## Features

- Modern, responsive design
- Clean and professional layout
- Easy to customize
- Fast loading times
- SEO optimized
- Contact form integration
- Project showcase
- Resume/CV section

## Setup

1. Install Ruby and Bundler:
   ```bash
   # Windows
   # Download and install Ruby from https://rubyinstaller.org/
   # Make sure to check "Add Ruby executables to your PATH" during installation

   # macOS
   brew install ruby

   # Linux
   sudo apt-get install ruby-full
   ```

2. Install Jekyll and other dependencies:
   ```bash
   gem install bundler
   bundle install
   ```

3. Run the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser.

## Customization

### Site Settings

Edit `_config.yml` to customize:
- Site title and description
- Navigation links
- Social media links
- Contact information

### Styling

The site uses a custom CSS file located at `assets/css/custom.css`. You can modify:
- Colors
- Typography
- Layout
- Spacing
- Animations

### Content

- Home page: `index.html`
- Resume: `_pages/resume.html`
- Projects: `_pages/projects.html`
- Contact: `_pages/contact.html`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `master` branch.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 