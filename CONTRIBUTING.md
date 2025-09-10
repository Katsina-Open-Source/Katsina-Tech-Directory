# Contributing to Katsina Tech Directory

Thank you for your interest in contributing to the Katsina Tech Directory! This guide will help you add your profile, company, or community to our directory. Don't worry if you're new to GitHub – we'll walk you through every step.

## 🎯 Who Can Contribute?

- **Developers** working or living in Katsina State
- **Companies** based in or serving Katsina State
- **Tech Communities** active in Katsina State
- **Anyone** who wants to help improve the directory

## 🚀 Quick Start (For Beginners)

If you're new to GitHub, don't worry! Follow these step-by-step instructions:

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your free account
3. Verify your email address

### Step 2: Fork the Repository

1. Go to [github.com/katsinatech/directory](https://github.com/katsinatech/directory)
2. Click the "Fork" button in the top-right corner
3. This creates your own copy of the project

### Step 3: Edit the Appropriate File

Choose the file that matches what you want to add:

- **Developers**: Edit `data/developers.json`
- **Companies**: Edit `data/companies.json`  
- **Communities**: Edit `data/communities.json`

#### To Edit a File:

1. In your forked repository, navigate to the `data` folder
2. Click on the file you want to edit (e.g., `developers.json`)
3. Click the pencil icon (✏️) to edit the file
4. Add your information following the format below

### Step 4: Add Your Information

#### For Developers (`developers.json`):

\`\`\`json
{
  "id": 999,
  "name": "Your Full Name",
  "career": "Your Career Title (e.g., Full Stack Developer)",
  "company": "Your Current Company",
  "role": "Your Role at Company",
  "profile_photo": "/placeholder.svg?height=200&width=200",
  "email": "your.email@example.com",
  "website": "https://yourwebsite.com",
  "github": "https://github.com/yourusername",
  "twitter": "https://twitter.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername"
}
\`\`\`

#### For Companies (`companies.json`):

\`\`\`json
{
  "id": 999,
  "company_name": "Your Company Name",
  "type": "Your Business Type (e.g., Software Development, Digital Agency)",
  "logo": "/placeholder.svg?height=100&width=100",
  "website": "https://yourcompany.com",
  "location": "Your Location in Katsina State",
  "email": "contact@yourcompany.com",
  "twitter": "https://twitter.com/yourcompany",
  "linkedin": "https://linkedin.com/company/yourcompany"
}
\`\`\`

#### For Communities (`communities.json`):

\`\`\`json
{
  "id": 999,
  "community_name": "Your Community Name",
  "focus": "What your community focuses on",
  "logo": "/placeholder.svg?height=100&width=100",
  "website": "https://yourcommunity.com",
  "email": "info@yourcommunity.com",
  "twitter": "https://twitter.com/yourcommunity"
}
\`\`\`

**Important Notes:**
- Replace `999` with the next available ID number
- Add your entry to the end of the array (before the closing `]`)
- Don't forget to add a comma after the previous entry
- All fields with `?` are optional – you can remove them if not applicable

### Step 5: Commit Your Changes

1. Scroll down to the "Commit changes" section
2. Add a descriptive title like "Add [Your Name] to developers directory"
3. Optionally add a description
4. Click "Commit changes"

### Step 6: Create a Pull Request

1. Go to your forked repository
2. Click "Contribute" then "Open pull request"
3. Add a clear title describing your changes
4. Click "Create pull request"

## 🔍 Review Process

1. **Automated Checks**: Our system will automatically check your submission
2. **Community Review**: Other contributors may review your changes
3. **Approval**: Once approved, your changes will be merged
4. **Live Update**: Your profile will appear on the website within minutes!

## 📝 Guidelines

### Content Guidelines

- **Be Accurate**: Ensure all information is current and correct
- **Be Professional**: Use appropriate language and descriptions
- **Be Respectful**: Follow our community standards
- **Be Relevant**: Focus on tech-related activities and roles

### Technical Guidelines

- **JSON Format**: Ensure your JSON is properly formatted
- **Unique IDs**: Use the next available ID number
- **Valid URLs**: Make sure all links work correctly
- **Email Format**: Use valid email addresses

## 🆘 Need Help?

### Common Issues

**Q: I made a mistake in my submission. How do I fix it?**
A: You can edit your pull request by pushing new commits to your fork, or create a new pull request with the corrections.

**Q: My pull request was rejected. What should I do?**
A: Check the feedback provided and make the requested changes. Don't hesitate to ask questions in the comments.

**Q: I don't have a website/GitHub/social media. Can I still contribute?**
A: Just omit the optional fields you don't have.

### Getting Support

- **GitHub Issues**: [Create an issue](https://github.com/katsinatech/directory/issues) for bugs or questions
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: Contact us at [community@katsinatech.directory](mailto:community@katsinatech.directory)

## 🎉 After Your Contribution

Once your pull request is merged:

1. **Share**: Tell others about the directory and encourage them to contribute
2. **Update**: Keep your information current by submitting updates when needed
3. **Engage**: Participate in community discussions and help review other contributions
4. **Promote**: Help spread the word about Katsina's growing tech community

## 🏆 Recognition

All contributors are recognized on our website and in our repository. Thank you for helping build the Katsina tech community!

---

**Questions?** Don't hesitate to ask! We're here to help you contribute successfully.

**First time using GitHub?** That's perfect! This is a great way to learn. The Katsina tech community is here to support you.
