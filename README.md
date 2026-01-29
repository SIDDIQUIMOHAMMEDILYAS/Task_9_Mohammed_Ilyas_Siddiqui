# 🚀 Premium Registration Form with Advanced Validation

A visually stunning, highly interactive, and fully functional client-side registration form. This project demonstrates advanced JavaScript validation techniques, modern CSS3 animations (Glassmorphism), and responsive design principles without relying on external frameworks like Bootstrap or jQuery.

## ✨ Features

-   **Modern UI/UX:**
    -   **Glassmorphism Design:** A translucent, frosted-glass effect container.
    -   **Animated Background:** Smooth RGBA gradient animation using CSS keyframes.
    -   **Responsive Layout:** Adapts perfectly to mobile, tablet, and desktop screens using CSS Grid and Flexbox.
-   **Advanced Validation:**
    -   **Real-time Feedback:** Validates fields on `keyup` (for password strength) and `blur` (for immediate error checking) events.
    -   **Regex Logic:** Robust Regular Expressions for Emails, Phone Numbers, and Password complexity.
    -   **Password Strength Meter:** A dynamic visual bar that changes color (Red/Yellow/Green) based on input complexity.
    -   **Date Validation:** Calculates age to ensure the user is at least 18 years old.
    -   **No Native Alerts:** Uses a custom "Toast" notification system for success messages.

## 🛠️ Technologies Used

-   **HTML5:** Semantic markup for accessibility.
-   **CSS3:** Custom animations, Flexbox/Grid layouts, pseudo-elements, and variables.
-   **JavaScript (ES6+):** DOM manipulation, Event Listeners, Arrow Functions, and Control Flow.
-   **Icons:** FontAwesome (CDN) for visual cues.

## 📂 Project Structure

```text
.
├── index.html    # Contains HTML structure, CSS styles, and JS logic
└── README.md     # This file
```

## 🚀 How to Run

1.  **Clone or Download** the project files to your local machine.
2.  Open the `index.html` file in any modern web browser (Chrome, Firefox, Edge, Safari).
3.  **No server is required.** The code runs entirely on the client side.

## 🧪 Validation Rules

The form enforces the following rules before submission:

| Field          | Validation Rule                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **Full Name**  | Must be at least 3 characters long and contain only letters and spaces.                             |
| **Email**      | Must match standard email format (e.g., user@example.com).                                          |
| **Phone**      | Must be exactly 10 digits.                                                                          |
| **Date of Birth** | User must be at least 18 years old based on the current date.                                      |
| **Website**    | Optional field. If entered, must be a valid URL (http/https).                                       |
| **Password**   | Minimum 8 characters. Must contain at least one Uppercase, one Lowercase, one Number, and one Special Character. |
| **Confirm Password** | Must match the Password field exactly.                                                            |
| **Terms**      | Checkbox must be checked to proceed.                                                               |

## 🎨 Visual Features

-   **Gradient Animation:** The background continuously shifts between four colors (Orange, Pink, Blue, Teal) to create a dynamic feel.
-   **Micro-interactions:**
    -   Inputs glow blue on focus.
    -   Success state shows a green checkmark.
    -   Error state shows a red "X" and shakes the input field.
    -   Button hovers lift the element slightly.

## 👤 Author

**Designed & Engineered by**
**Mohammed Ilyas Siddiqui**

*© 2026 All Rights Reserved.*

---

## 📝 License

This project is open for educational purposes. Feel free to use it as a template for your own projects.
