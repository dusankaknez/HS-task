# HS-task

# SauceDemo Cypress Test Suite

This project contains automated end-to-end tests for [SauceDemo](https://www.saucedemo.com) using [Cypress](https://www.cypress.io/). The tests are structured using the **Page Object Model (POM)** for maintainability and scalability.

---

##  Test Cases


### Core Test Scenarios

1. **Login as standard user and check URL**  
   Logs in with valid credentials and verifies that the user is redirected to the inventory page.

2. **Login as standard user, add to cart and validate remove button**  
   Logs in, adds the "Sauce Labs Backpack" to the cart, and checks that the "Remove" button appears.

3. **Login as problem user and validate image for item** -**FAIL** as per the task requirements 
   Logs in as the `problem_user` and checks the image for "Sauce Labs Onesie".  

4. **Login as locked user and validate error**  
   Attempts login with `locked_out_user` and verifies that the correct error message is displayed.

5. **Login as error user and validate error**-**FAIL** as per the task requirements  
   Logs in as `error_user` and tries to add "Sauce Labs Fleece Jacket" to the cart.  

---

##  Additional Test Scenarios

#### I wasn’t able to implement all the test cases I had in mind due to time constraints, but here are some important areas I would prioritize if I had more time:

---
- **Product Sorting**  
  I planned to test sorting functionality (e.g., by price or name) to ensure products are displayed in the correct order when users change the sort option.

- **Other User Types**  
  I would have liked to explore how other user roles like `performance_glitch_user` behave, especially to catch UI delays or inconsistencies that might affect the user experience.

- **Testing the Cart**  
  I intended to add more detailed cart tests — such as adding multiple items, removing them, verifying cart badge updates, and ensuring the cart state persists across navigation.

- **Logout Functionality**  
  I wanted to include a test to verify that users can log out successfully and are redirected back to the login page. It’s a simple but important check for session handling.

- **Responsive Layout**  
  Testing how the application behaves on different screen sizes (mobile, tablet, desktop) was on my list to ensure a consistent experience across devices.

- **Invalid Login Handling**  
  I wanted to include negative test cases for incorrect credentials and verify that appropriate error messages are shown.

- **Cart Persistence**  
  Another area I would have explored is whether the cart retains its contents after navigating between pages or refreshing the browser.


---

## Secure Credential Management

User credentials are stored securely in `cypress.env.json` (excluded from version control):

```json
{
  "users": {
    "standard": { "username": "standard_user", "password": "secret_sauce" },
    "problem": { "username": "problem_user", "password": "secret_sauce" },
    "locked": { "username": "locked_out_user", "password": "secret_sauce" },
    "error": { "username": "error_user", "password": "secret_sauce" }
  }
}
