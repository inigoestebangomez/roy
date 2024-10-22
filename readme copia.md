# North - Web developer, Technical test
Thank you for taking the time to complete this assessment.

## Steps & requirements
### Setup
1. Create a new public repository on Github, Bitbucket, or any similar platform. You will send us the link to this repository for review.
2. Inside this repository, create a new, empty Nuxt.js app yourself. This is where you'll develop the full test.
3. All produced code **must** be written in valid TypeScript.
4. All repository packages **must** be installed using [pnpm](https://pnpm.io/installation).

### Implementation
You will recreate the design provided in the included Figma file within your Nuxt.js app, for both desktop and mobile versions. The Figma file contains some comments with implementation details.

The main feature of the design is a **product grid**. This grid must be populated by making a fetch call to the following API endpoint (do not populate it manually):

https://royaloceanyachts.com/api/yachts?buy=true&page=1

> **IMPORTANT**: You must include a `"CORS: Access-Control-Allow-Origin"` header in the request; otherwise it will fail.

The API call must be **proxied behind a Nuxt server route**. Please **do not** call the API directly from a Vue component.

#### API Response Details
I highly recommend analyzing the API response to understand how it fits the design. You should create a **TypeScript type** for it and use that throughout your code.

> **Note**: Ignore all properties in the API response that begin with the word "charter"

### Design & code quality
At North, we prioritize creating beautiful visual and user experiences. Please pay close attention to design details such as:
- Colors
- Spacing
- Font size & weight

> **Note**: Fonts are also included with this test

We also value **efficiency** and **clean, reusable code**. Where appropriate, the use of **advanced Nuxt features** (like composables) will be positively valued.

### Bonus (optional)
This part is **not mandatory**, but if you feel comfortable, we will positively value the use of [GSAP](https://greensock.com/gsap/) —a JS animation library— for adding smooth animations or transitions in the UI (e.g., reveal animation for grid products). You have creative freedom here.

Again, this part is optional and should only be done if you're comfortable with it.


## Questions & doubts
If you have any questions about the test instructions, the API endpoint, or technical issues with the Figma file, feel free to reach out to me at `victor.navarro@thenorthstudio.com`, and I’ll be happy to assist.

For questions regarding the **implementation of the design itself**, please use your knowledge and intuition to solve them. Some functional aspects of this test have been **purposefully** left ambiguous to test your instincts.


## Delivery
Once you've completed the test, please send us an email with the link to the public repository you created for review.
