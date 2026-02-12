# Split Lease - Host & Guest Journey Map

## Overview

This document describes the complete end-to-end user journey on **Split Lease** (`app.split.lease`), covering the negotiation lifecycle between two users: a **Host** who lists a shared living space, and a **Guest** who finds it and negotiates terms. The flow spans four phases across multiple pages and interaction points.

---

## Phase 1: Host Creates a Listing

### Page: Homepage
The Host arrives at the Split Lease landing page. They see a **"Sign In | Sign Up"** option in the navigation area.

### Page: Authentication Modal
The Host clicks to sign in and is presented with a modal. They select **"Log into my account"**, which reveals the login form with email and password fields. After entering credentials and clicking **"Login"**, the system authenticates them and the page refreshes to a logged-in state.

### Page: Host Dashboard (Listings & Proposals)
The Host opens their **avatar dropdown menu** from the top navigation and selects **"Listings & Proposals"**. This brings them to their personal dashboard where they can manage all their listings and view incoming proposals.

### Page: New Listing Modal
From the dashboard, the Host clicks **"+ Create New Listing"**. A modal appears asking them to name their listing. They type a title and click **"Create New"**, which launches the multi-step listing creation wizard.

### Page: Listing Wizard - Step 1: Space Snapshot (Address & Details)
The first section of the wizard asks the Host to describe the physical space. They fill out:

- **Type of Space** (e.g., Private Room)
- **Bedrooms** (e.g., Studio)
- **Kitchen Type** (e.g., Full Kitchen)
- **Parking** (e.g., Street Parking)
- **Bathrooms** (e.g., 2)
- **Address** field with Google Places autocomplete - the Host types an address and selects from the dropdown suggestions

They click **"Next"** to proceed.

### Page: Listing Wizard - Step 2: Features
The Host selects amenities and features for the space. There are convenience options to **"Load Common"** features and **"Load Template"** to quickly populate standard amenities. After reviewing, they click **"Save"** and then **"Next"**.

### Page: Listing Wizard - Step 3: Lease Styles
The Host chooses how the space will be rented. In this case, they select **"Nights-of-the-week"**, indicating the listing is available on a per-night basis across specific days. They click **"Next"**.

### Page: Listing Wizard - Step 4: Pricing
The pricing section appears with default values already populated. The Host reviews and accepts the defaults, clicking **"Next"** to continue.

### Page: Listing Wizard - Step 5: Rules
The Host defines house rules and policies:

- **Cancellation Policy** (selected from a dropdown)
- **Number of Guests** allowed
- **Secure Storage** availability

They click **"Next"** after filling these in.

### Page: Listing Wizard - Step 6: Photos
The Host clicks **"Upload Photos"** to add images of the space. They select their photo files and click **"Submit Images"** to upload them.

### Page: Listing Submission Confirmation
After all wizard steps are complete, the Host clicks **"Submit Listing"**. The system confirms the listing has been created.

### Page: Manage Listing
The Host is taken to (or clicks into) the **Manage Listing** page for their newly created listing. A **"Title and Description Suggestions"** modal may appear, which the Host dismisses. This page shows the full listing details and has a **"Copy Listing Link"** button so the Host can share the listing URL. The Host signs out via the **avatar dropdown > "Sign Out"**.

---

## Phase 2: Guest Creates a Proposal

### Page: Homepage (Signed Out)
The Guest arrives at the homepage and goes through the same **Sign In** flow - clicking "Sign In | Sign Up", then "Log into my account", and entering their credentials.

### Page: Listing Detail Page
The Guest navigates to the Host's listing. This page displays the full listing information including:

- **Nightly rate** (e.g., "$XX / night")
- **4-Week Rent** total
- Space details, photos, rules, and features
- A **duration selector** dropdown (the Guest changes this to 16 weeks)
- Day-of-the-week selection showing which nights are included

After reviewing the listing and configuring their desired terms, the Guest clicks **"Create Proposal"**.

### Page: Proposal Summary / Confirmation Modal
A modal or summary view appears showing the calculated pricing:

- **Price per night**
- **Total price for the reservation**
- **Price for the first 4 weeks**

The Guest reviews these figures and clicks **"Submit Proposal"** to send their proposal to the Host. A confirmation is displayed. The Guest then signs out via the **avatar dropdown > "Sign Out"**.

---

## Phase 3: Host Counters the Proposal

### Page: Homepage (Signed Out)
The Host returns to the platform and signs in again through the authentication flow.

### Page: Host Dashboard (Listings & Proposals)
The Host navigates back to their dashboard via **avatar dropdown > "Listings & Proposals"**.

### Page: Notifications
The Host notices a **notification icon** (envelope/letter icon) in the navigation area. They click it to reveal a dropdown of recent activity. They see a notification that reads **"Related to: [Listing Name]"** - indicating the Guest's proposal has arrived. They click the notification and then click **"View this proposal"**.

### Page: Proposal Detail Page
The Host lands on the proposal detail page, which shows the Guest's submitted terms (days, duration, pricing). The Host clicks **"Review / Modify"** to begin the negotiation process.

### Page: Edit Proposal Terms
An editing interface expands, with the option to **"Edit Proposal Terms (Nights, Duration...)"**. The Host clicks this, and the term fields become editable. The Host changes the **duration from 16 weeks to 10 weeks** using the duration dropdown. They click **"Update Proposal"**.

### Page: Counter Confirmation Dialog
A confirmation dialog appears asking the Host to confirm: **"Yes, Proceed"**. After confirming, the system saves the counter-offer. A summary is shown with:

- **Compensation per night**
- **Updated duration** (10 weeks)
- **New total price**

The Host signs out via the avatar dropdown.

---

## Phase 4: Guest Accepts the Host's Counter-Terms

### Page: Homepage (Signed Out)
The Guest returns to the platform and signs in again.

### Page: My Proposals
After logging in, the Guest navigates to **"My Proposals"** (accessible from the navigation or their profile area). This page lists all proposals the Guest has submitted, along with their current status.

The Guest sees the updated proposal reflecting the Host's counter-offer:

- **Updated nightly rate**
- **Updated duration** (now 10 weeks)
- **Updated total price**

### Page: Acceptance Confirmation
The Guest clicks **"Accept Host Terms"**. A confirmation dialog appears: **"Yes, Proceed"**. After confirming, the proposal status updates to reflect mutual agreement. Both parties have now reached agreed-upon terms.

---

## Journey Summary

| Phase | Actor | Action | Key Pages |
|-------|-------|--------|-----------|
| 1 | Host | Creates a listing through a 6-step wizard | Homepage, Auth Modal, Dashboard, Listing Wizard (6 steps), Manage Listing |
| 2 | Guest | Finds the listing and submits a proposal | Homepage, Auth Modal, Listing Detail, Proposal Summary |
| 3 | Host | Reviews and counters with modified terms | Homepage, Auth Modal, Dashboard, Notifications, Proposal Detail, Edit Terms |
| 4 | Guest | Reviews counter-offer and accepts | Homepage, Auth Modal, My Proposals, Acceptance Confirmation |

---

## Key Interaction Patterns

- **Authentication**: Both users go through the same sign-in modal flow. Each phase requires a full sign-out / sign-in cycle as users take turns.
- **Navigation hub**: The avatar dropdown menu serves as the primary navigation point for accessing the dashboard, proposals, and signing out.
- **Notifications**: The Host discovers new proposals through a notification icon and dropdown, which links directly to the relevant proposal.
- **Confirmation dialogs**: All critical actions (submitting proposals, countering, accepting) require a **"Yes, Proceed"** confirmation step to prevent accidental submissions.
- **Price transparency**: Pricing details (nightly rate, total, first 4 weeks) are surfaced at every decision point - on the listing page, during proposal creation, after the counter-offer, and before acceptance.
