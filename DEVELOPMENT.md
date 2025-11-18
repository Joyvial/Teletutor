# Teletutor Development Guide

## Project Overview
Build a mock tutoring website for **Calculus** with three user types: Students, Tutors, and Guardians.

---

## Required Pages & Features

### 1. Homepage (`index.html`)
- **Hero section** with Teletutor branding and slogan
- **Brief description** of the service
- **Login/Sign Up buttons** for all three user types
- **Featured subjects** section (focus on Calculus)
- **Pricing tiers** display (Free, Standard, Premium)

### 2. Login System (`login.html`)
Create a simple login page with:
- **User type selector** (Student / Tutor / Guardian dropdown or tabs)
- **Username/Email field**
- **Password field**
- **"Forgot Password?" link** (can be non-functional)
- **"Sign Up" link**

### 3. Student Dashboard (`student-dashboard.html`)
- **Welcome message** with student name
- **Active questions** section (questions they've posted)
- **"Ask a Question" button** → opens question form
- **Available tutors** list with availability status
- **Recent answers** from tutors
- **Subscription status** (Free/Standard/Premium badge)

### 4. Tutor Dashboard (`tutor-dashboard.html`)
- **Welcome message** with tutor name
- **Availability toggle** (Online/Offline button)
- **Pending questions** from students
- **"Answer Question" interface**
- **Earnings summary** (mock data)
- **Subject expertise badge** (Calculus)

### 5. Guardian Dashboard (`guardian-dashboard.html`)
- **Welcome message** with guardian name
- **Linked student(s)** section
- **Student activity overview:**
  - Questions asked this week
  - Time spent with tutors
  - Progress indicators
- **Payment/subscription management** section
- **Notification settings**

### 6. Question Board (`questions.html`)
- **List of student questions** (free tier community board)
- **Each question shows:**
  - Subject tag (Calculus)
  - Time posted
  - Number of responses
  - Student name (or anonymous)
- **Filter options** (All / Answered / Unanswered)
- **"Ask Question" button**

### 7. Ask Question Form (`ask-question.html`)
- **Question title** field
- **Detailed description** textarea
- **Subject selector** (default: Calculus)
- **Urgency level** (Low / Medium / High)
- **Attach file** option (can be non-functional)
- **Submit button**

### 8. Tutor Profile (`tutor-profile.html`)
- **Tutor photo** and name
- **Rating/reviews** (mock data)
- **Subjects taught** (Calculus)
- **Availability schedule**
- **Bio/expertise description**
- **"Request Session" button**

---

## Recommended Project Structure

```
Teletutor/
├── index.html                 # Homepage
├── login.html                 # Login page
├── signup.html               # Sign up page
├── student-dashboard.html    # Student view
├── tutor-dashboard.html      # Tutor view
├── guardian-dashboard.html   # Guardian view
├── questions.html            # Community question board
├── ask-question.html         # Question submission form
├── tutor-profile.html        # Individual tutor page
├── css/
│   └── style.css             # Main stylesheet
├── js/
│   └── script.js             # JavaScript for interactivity
└── images/
    ├── logo.png
    ├── hero-background.jpg
    └── tutor-photos/
```

---

## Task Breakdown (Assign to Team Members)

### Task 1: Homepage & Login System
**Assignee:** _______
- Create `index.html` with hero section and feature highlights
- Create `login.html` with user type selection
- Create `signup.html` with registration forms
- Link all pages together

### Task 2: Student Dashboard & Question Flow
**Assignee:** _______
- Create `student-dashboard.html` with active questions
- Create `ask-question.html` form
- Create `questions.html` community board
- Add mock data for sample questions

### Task 3: Tutor Dashboard & Profile
**Assignee:** _______
- Create `tutor-dashboard.html` with availability toggle
- Create `tutor-profile.html` with ratings/bio
- Add sample tutor data (at least 3 tutors)
- Implement answer question interface

### Task 4: Guardian Dashboard
**Assignee:** _______
- Create `guardian-dashboard.html` with student overview
- Display mock student activity data
- Add subscription management section
- Create notification preferences mockup

### Task 5: CSS Styling & Design
**Assignee:** _______
- Create `style.css` with consistent color scheme
- Style all pages with responsive design
- Add hover effects and transitions
- Create navigation menu (shared across pages)

---

## Design Guidelines

### Color Scheme (Suggestions)
- **Primary:** #4A90E2 (Blue - trust, learning)
- **Secondary:** #50E3C2 (Teal - energy, growth)
- **Accent:** #F5A623 (Orange - warmth, engagement)
- **Background:** #F8F9FA (Light gray)
- **Text:** #333333 (Dark gray)

### Typography
- **Headers:** Use sans-serif fonts (e.g., Arial, Helvetica, Roboto)
- **Body text:** 16px minimum for readability
- **Buttons:** Bold text with clear call-to-action

### Components to Include
- **Navigation bar** (sticky header with logo + links)
- **Cards** for questions, tutors, dashboard sections
- **Buttons** with consistent styling across pages
- **Forms** with clear labels and validation styling
- **Modal/popup** for quick interactions (optional)

---

## Mock Data Examples

### Sample Students
1. **Emily Chen** - Premium subscriber, active in Calculus
2. **Marcus Johnson** - Free tier user
3. **Sarah Williams** - Standard subscriber

### Sample Tutors
1. **Dr. Alex Rivera** - Calculus expert, 5-year experience, 4.9★ rating
2. **Jennifer Park** - Graduate student, 4.7★ rating
3. **Michael Thompson** - Professional tutor, 4.8★ rating

### Sample Questions
1. "How do I solve limits with L'Hôpital's Rule?" - Posted 2 hours ago
2. "Chain rule vs. product rule - when to use which?" - Posted 5 hours ago
3. "Help with integration by parts!" - Posted 1 day ago

### Sample Guardian
**Parent:** Robert Williams
**Student:** Sarah Williams
**Activity:** 5 questions this week, 3 hours tutoring time

---

## JavaScript Functionality (Optional but Recommended)

### Basic Interactivity
```javascript
// Login form validation
function validateLogin() {
    // Check if fields are filled
    // Display error messages
    // Redirect to appropriate dashboard
}

// Toggle tutor availability
function toggleAvailability() {
    // Switch between Online/Offline status
    // Update button color and text
}

// Filter questions
function filterQuestions(status) {
    // Show/hide questions based on status
    // "All" / "Answered" / "Unanswered"
}

// Ask question form submission
function submitQuestion() {
    // Validate form fields
    // Display confirmation message
    // Redirect to dashboard
}
```

---

## Implementation Timeline

### Week 1: Foundation
- Set up project structure
- Create homepage and login system
- Establish CSS framework and styling guide

### Week 2: Core Features
- Build all three dashboard types
- Implement question board and forms
- Add tutor profiles

### Week 3: Polish & Testing
- Refine CSS styling across all pages
- Add JavaScript interactivity
- Test all navigation links
- Ensure responsive design works

---

## Testing Checklist

### Navigation
- [ ] All links work correctly
- [ ] Can navigate between all pages
- [ ] Back button functionality

### User Flows
- [ ] Student can "ask a question" (form appears/submits)
- [ ] Tutor can see questions and toggle availability
- [ ] Guardian can view student activity
- [ ] Login page routes to correct dashboard

### Design
- [ ] Consistent styling across all pages
- [ ] Readable fonts and appropriate sizes
- [ ] Hover effects work on buttons/links
- [ ] Responsive on mobile/tablet/desktop

### Content
- [ ] All mock data is present
- [ ] No placeholder text remains ("Lorem ipsum")
- [ ] Images load correctly
- [ ] No broken links

---

## Collaboration Best Practices

### Git Workflow
1. **Create branches** for each feature
   ```bash
   git checkout -b feature/student-dashboard
   ```
2. **Commit frequently** with clear messages
   ```bash
   git commit -m "Add student dashboard with question feed"
   ```
3. **Pull before pushing** to avoid conflicts
   ```bash
   git pull origin main
   git push origin feature/student-dashboard
   ```
4. **Create pull requests** for review before merging

### File Naming
- Use **lowercase** with hyphens: `student-dashboard.html`
- Be **consistent** across all files
- Use **descriptive names**: `tutor-availability.js` not `script2.js`

### Code Comments
```html
<!-- Student Dashboard: Active Questions Section -->
<section class="active-questions">
    <!-- Question cards will be displayed here -->
</section>
```

---

## Resources & References

### HTML/CSS Tutorials
- W3Schools HTML Tutorial
- MDN Web Docs CSS Guide
- CSS-Tricks Flexbox Guide

### Inspiration (Educational Platforms)
- Khan Academy (clean, simple design)
- Chegg Tutors (dashboard layouts)
- Course Hero (question board interface)

### Tools
- **VS Code** - Code editor
- **Chrome DevTools** - Testing/debugging
- **GitHub Desktop** - Version control (if needed)

---

## Final Deliverables

By project completion, you should have:
- ✅ **9 interconnected HTML pages**
- ✅ **1 CSS file** with complete styling
- ✅ **1 JavaScript file** with basic interactivity
- ✅ **Mock data** for 3+ tutors, students, questions
- ✅ **Responsive design** that works on mobile
- ✅ **Complete navigation** between all pages
- ✅ **Professional appearance** suitable for presentation

---

## Questions?

Document any blockers or questions here:
-

---

**Last Updated:** November 18, 2025
