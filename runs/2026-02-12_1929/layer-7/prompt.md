You are running Layer 7 of the SplitLease Design Stack v2.

IMPORTANT: Output ONLY valid JSON. No commentary, no markdown code fences, no explanation. Your entire response must be a single valid JSON object matching the schema in your agent instructions.

## Journey Context
- **Journey type**: host
- **User role**: You are analyzing the HOST journey — the perspective of a property owner or leaseholder who lists their space on Split Lease to find guests for shared living arrangements.
- **Call type**: Host call transcript
- **Journey phases** (fixed vocabulary for this run):
  discovery → evaluation → onboarding → listing_creation → pricing → proposal_mgmt → active_lease → retention
- **Phase definitions**:
  - discovery: Host first hears about Split Lease (referral, ad, search). Deciding whether to explore.
  - evaluation: Host researches the platform. Compares to Craigslist, Airbnb, roommate apps. Reads about guarantees.
  - onboarding: Host signs up, verifies identity, connects with their assigned agent (e.g., Bryant). First call happens here.
  - listing_creation: Host creates their listing: photos, description, amenities, house rules, availability calendar.
  - pricing: Host sets nightly/weekly rates. Understands the payment model, guaranteed income, Split Lease fee structure.
  - proposal_mgmt: Host receives guest proposals, reviews them, counters terms, accepts or declines.
  - active_lease: Guest is living in the space. Host manages the ongoing relationship, payments, and any issues.
  - retention: Lease ends or renews. Host decides whether to list again, refer others, or leave the platform.

## Your Agent Instructions

# Layer 7: Test Designer

You are the Test Designer. You produce element validation strategies — ways to verify that design elements, once implemented, actually work.

## Core Question
How do we validate that each element from this run achieves its stated goal?

## Conceptual Shift (v2)
You no longer write tests for a single component. You produce **validation strategies for design elements** — ways to verify that the principles discovered by this run actually work when implemented. These are higher-level than component tests.

## Your Inputs
- All element outputs from this run (Layers 1-5)
- coherence-report.json from Layer 6
- journey-context.json from Layer 0
- Existing element library (library/elements.json)

## Required Output: tests-elements.json

```json
{
  "lens": {
    "host_call": "<filename>",
    "book_extract": "<filename>"
  },
  "elements": [
    {
      "id": "tests-001",
      "type": "validation_strategy",
      "title": "<clear name — e.g., 'Guarantee Visibility Validation'>",
      "validates_element": "<id of the element this tests — e.g., 'works-001'>",
      "journey_phases": ["<phase1>", "<phase2>"],
      "problem": "<what could go wrong if this element is poorly implemented>",
      "solution": "<how to verify it's working>",
      "evidence": [
        {
          "source": "<filename + location>",
          "type": "host_call|book|usability|data",
          "quote": "<what evidence suggests this validation matters>",
          "insight": "<why>"
        }
      ],
      "priority": "high|medium|low",
      "validation_method": "usability_test|analytics|a_b_test|automated|manual_review",
      "test_description": "<human-readable description of what to test>",
      "success_criteria": "<what 'passing' looks like>",
      "failure_meaning": "<what a failure tells us about the design>",
      "implementation_hint": "<practical guidance for running this validation — could be a Playwright hint, an analytics event, or a usability test script>"
    }
  ]
}
```

## Rules
- Every element from Layers 1-5 should have at least one validation strategy
- Validation methods should match the element type: process patterns need analytics, visual patterns need usability tests, emotional elements need qualitative feedback
- Success criteria must be specific enough to be actionable — "users like it" is not a criterion
- Failure meaning is critical — it tells us what to fix if the test fails
- Include at least one journey-level validation (does the overall arc work, not just individual elements?)
- Aim for 1 validation per element from Layers 1-5, plus 1-2 journey-level validations

## Lens
Host call: drew-call.txt
Book extract: dontmakemethink-usability-laws.txt

## Source Materials

### Host Call Transcript
HOST CALL TRANSCRIPT: DREW
Date: [From original data]
Duration: ~6 minutes
Agent: Bryant
Host Type: Chelsea 1BR Owner / Flexible Host

---

00:06 Hello? Hello. Hey, is this Drew? I ain't going to be talking to you. Thanks for taking the time to chat. How you doing?

00:18 I'm doing well. How are you? I'm good.

00:21 Good. Um, yeah, so like I had mentioned a shared Ariel and Amber and their LinkedIn's with you, and they're both interested in your space. I wanted to, um, chat a little about your space and then maybe ask you some questions. And if you had any questions for me, I'd be happy to answer those things,

00:40 Um, which I've got potluck. Exactly. You think it was be too much?

00:45 Uh, the title of it is the comfortable one bed, one bath.

00:49 One bedroom, one bath. Yep.

00:52 Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.

01:03 Got it. And this is an entire apartment, is that right?

01:08 They had found one bedroom, one bath.

01:14 Okay. Got it. Um, and then is the space available now going to be available?

01:25 Okay. Do you know when this,

01:32 So Ariel and Amber are both flexible? Um, they're actually both, uh, if I can tell you a little bit about them, they're both in similar situations. So both of them have primary residences in Connecticut, uh, but they both work in Manhattan, which is why they're looking for a place. So essentially they'd be using this space as a place to come back to, uh, after work for when they're in the city. And then, um, there are other time will be spent, uh, at their primary residences in Connecticut.

02:02 Um, so they have, they have flexibility like right now they're currently just commuting to the city so they can really start, have a lot of flexibility when they could start. Um, I think ideally they want to start early March is what they had, let me know. But again, that's something that they can be flexible with.

02:22 Yeah.

02:27 Uh, do you have an idea of when the space. Okay, got it. Okay.

02:33 And um, so

02:41 Okay. The sixth. Okay. Got it. And then I'm guessing you have, um, is there maybe cleaning or things that need to happen after that, after that a tenant moves out? Is that right? Yeah. Okay.

02:57 Cleaning. Okay. Um, another question I had would be, uh, regarding security deposit or damage deposit. Is that something you charge? Uh, do you have a damage deposit? 1000. Okay. Got it. Um,

03:17 Got it. Uh, and I wanted to mention as well, so I know I mentioned Ariel and Amber and they were, so they originally came to me and the company that I worked for, which is called split lease individually, I, we match them as roommates. Uh, and a lot of the guests that we help are in similar situations to Ariel and Amber basically needing a place in the city for, um, when they're in the city for work and basically to come back to.

03:44 Uh, so basically we, uh, split lease doubled the deposit, um, and guarantees payments to you as the landlord. Uh, so that's all within our rental agreement, which I'd be happy to share with you. Um, but basically in the case that a guest would miss a payment, uh, that doesn't have any effect on you and you still receive, uh, the payment, uh, as well as we've vetted, both Ariel and Amber had been vetted and have, um, verified employment and income with us as well.

04:18 Okay. Okay. Okay. Alright.

04:21 Uh, one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that.

04:38 Yes. I have more pictures and I can send you

04:46 Awesome. Yeah, that would be great. Um, okay. I think that was, Um, so yes, if you can text me your email address, I will send you pictures.

05:01 Sounds good. I'll do that. And then I can get back to you with more information on split lease as well as links to the, to the agreements which are referenced. Um, and I think those about it, any other questions for me major?

05:18 Uh, Uh, so they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep.

05:32 Four months and then maybe the ability to extend. Okay. Okay. Sounds good.

05:38 I'll be sure to get back to you with, uh, with more details as well. And if you have any questions for me, you can feel free to text me or email me on. I'll share my email right after this call. Alright.

05:50 Sounds good. Anything else for me? Drew

05:52 Sounds good. Okay. No, that'll be all. Doug and moving data. And though, let me just send you pictures and, um, did you do a, so we can maybe move on?

06:14 Yeah, that would be great. I'll send over my email so you will see.

---

KEY BEHAVIORAL OBSERVATIONS:
- CHELSEA location - 1BR/1BA apartment
- $2,000/month rent
- $1,000 security deposit
- Current tenant moves out on the 6th
- Cleaning needed after tenant moves
- Has MORE PICTURES to share
- Open to VIDEO TOUR
- 4 months minimum - with ability to extend
- Flexible, accommodating host
- Will send additional photos
- Quick, efficient call
- Ready to proceed with guests

### Book Extract
Don't Make Me Think!
a common sense approach to web usability SECOND EDITION
Steve Krug
New Riders Publishing Berkeley, California USA

Don't Make Me Think! A Common Sense Approach to Web Usability, Second Edition � 2006 Steve Krug
New Riders 1249 Eighth Street Berkeley, CA 94710 510/524-2178 800/283-9444 510/524-2221 (fax)
Find us on the Web at www.peachpit.com To report errors, please send a note to errata@peachpit.com
New Riders is an imprint of Peachpit, a division of Pearson Education.
Editor: Karen Whitehouse Production Editor: Lisa Brazieal Interior Design and Composition: Allison D. Cecil Illustrations by Mark Matcho Farnham fonts provided by The Font Bureau, Inc. (www.fontbureau.com)
Notice of Rights All rights reserved. No part of this book may be reproduced or transmitted in any form by any means, electronic, mechanical, photocopying, recording, or otherwise, without the prior written permission of the publisher. For information on getting permission for reprints and excerpts, contact permissions@peachpit.com.
Notice of Liability The information in this book is distributed on an "As Is" basis, without warranty. While every precaution has been taken in the preparation of the book, neither the author nor Peachpit shall have any liability to any person or entity with respect to any loss or damage caused or alleged to be caused directly or indirectly by the instructions contained in this book or by the computer software and hardware products described in it.
Trademarks Throughout this book, trademarks are used. Rather than put a trademark symbol in every occurrence of a trademarked name, we state that we are using the names in an editorial fashion only and to the benefit of the trademark owner with no intention of infringement of the trademark. No such use, or the use of any trade name is intended to convey endorsement or other affiliation with this book.
ISBN 0-321-34475-8
9
Printed and bound in the United States of America
[ ii ]

First Edition To my father, who always wanted me to write a book,
My mother, who always made me feel like I could, Melanie, who married me--the greatest stroke of good fortune of my life, and my son Harry, who will surely write books much better than this one
whenever he wants to.
Second Edition To my big brother, Phil, who was a mensch his whole life.
[ iii ]

contents

PREFACE

About the Second Edition

vi

FOREWORD

By Roger Black

xii

I NTRODUCTION Read me first

2

Throat clearing and disclaimers

guiding principles

CHAPTER 1

Don't make me think!

10

Krug's First Law of Usability

CHAPTER 2

How we really use the Web

20

Scanning, satisficing, and muddling through

CHAPTER 3

Billboard Design 101

30

Designing pages for scanning, not reading

CHAPTER 4

Animal, vegetable, or mineral?

40

Why users like mindless choices

CHAPTER 5

Omit needless words

44

The art of not writing for the Web

things you need to get right

CHAPTER 6

Street signs and Breadcrumbs

50

Designing navigation

[ iv ]

contents

CHAPTE R 7 The first step in recovery is admitting that

94

the Home page is beyond your control

Designing the Home page

making sure you got them right

CHAPTER 8

"The Farmer and the Cowman

122

Should Be Friends"

Why most Web design team arguments about usability are a waste of

time, and how to avoid them

CHAPTER 9

Usability testing on 10 cents a day

130

Why user testing--done simply enough--is the cure

for all your site's ills

larger concerns and outside influences

CHAPTE R 10 Usability as common courtesy

160

Why your Web site should be a mensch

CHAPTER 11

Accessibility, Cascading Style Sheets, and you 168
Just when you think you're done, a cat floats by with buttered toast strapped to its back

CHAPTE R 12 Help! My boss wants me to ________.

180

When bad design decisions happen to good people

Recommended reading

186

Acknowledgments

192

Index

198

[v]

preface
About the Second Edition

"Just when I thought I was out, they pull me back in."
--michael corleone, in the godfather, part III
Since Don't Make Me Think was first published nearly five years ago, people
have been wonderful about the book. I get lots of lovely email. You can't imagine how nice it is to start your morning with someone you've never met telling you that they enjoyed something that you did. (I recommend it highly.) Even nicer is the fact that people seem to like the book for the same reasons I do. For instance: > Many people appreciate the fact that it's short. (Some have told me that they
actually read it on a plane ride, which was one of my stated objectives for the first edition; the record for "fastest read" seems to be about two hours.) > A gratifying number of people have said that they liked the book because it practices what it preaches, in the writing and the design. > Some people said it made them laugh out loud, which I really appreciated. (One reader said that I made her laugh so hard that milk came out of her nose. How can something like that help but make you feel that your time has been well spent?) But the most satisfying thing has been people saying that it helped them get their job done better.
But what have you done for us lately?
It only took about a year after the book appeared for people to start asking me when I was going to do a second edition. For a long time, I really resisted the idea. I liked the book the way it was and thought it worked well, and since it was about design principles and not technology, I didn't think it was likely to be out of date anytime soon.
[ vii ]

preface
Usually I'd pull the consultant/therapist trick of asking them what they would change, and the answer was almost always, "Well, I guess you could update the examples." Some people would point out that some of the sites in the examples didn't even exist anymore. But the fact is, many of the sites in the book were already gone by the time it hit the bookstores. (Remember, it came out right before the Internet bubble burst.) The fact that the sites weren't around didn't make the examples any less clear. Other people would say, "Well, you could talk about the things about the Web that have changed." It's true; some things about the Web have changed in the last few years. Some of the changes were good: > More good sites to copy from > Cascading Style Sheets (CSS) that actually work > Useful conventions like printer-friendly pages and Amazon.com's What's this? > Google as the starting point for all actions > The swing in business models from banner ads (for things I don't want) to
Google ads (for things I actually might want) > Hardly anyone uses frames anymore ...and some not so good: > Pop-ups > Phishing But these changes didn't make me feel a need to update the book, which is about design principles, not specifics of technology or implementation. And there was one other problem: I was very proud of how short the book was. It took a lot of work, but it was an important part of the "practices what it preaches" business. If I was going to add any new material, I'd have to throw some of the existing stuff overboard, and I thought it all worked pretty well.
[ viii ]

about the second edition
So, what are we doing here?
One of the nicest fringe benefits of the book for me is that I've been able to spend time teaching workshops. In the workshops, I try to do the same thing I did in the book: show people what I think about when I do a usability review of a Web site. And since everyone who comes to the workshops has already read the book, naturally I had to come up with different examples to make the same points, and different ways of explaining the same things. I also get to do a lot of reviews of different kinds of sites, because everyone who comes to the workshop can submit a URL, and during the day I do 12-minute "expert mini-reviews" of some of them, and a live user test of one or two others. And as anyone who's ever taught anything knows, teaching something is the best way to learn more about it. So when my publisher started asking about a second edition again last year, I actually thought about what a second edition might be like. And while I still felt there wasn't much I'd change or delete from the first edition, I realized I did have some other things I could write about that might be helpful.
Like what?
The new material mostly falls into three categories: > Oh, now I get it. Teaching the workshops has given me many chances to think
through what's in the book. There are a few things that I've rewritten slightly because I think I understand them a little better now, or I have a better way to explain them. > Help! My boss wants me to ______. A lot of the questions people ask in my workshops amount to "I know the right thing to do in this case, but my boss/client/stakeholders insist that I do the wrong thing. How can I convince them otherwise?"
[ ix ]

preface
Since many people seem to spend a lot of time trying to fight the same design issues, I thought it might be good to give them some ammunition. So I added Chapter 12, which covers problems like
My marketing manager insists that we make people provide a lot of unnecessary personal information before they can subscribe to our newsletter, and it doesn't seem to matter to him that 10% of our subscribers now happen to be named "Barney Rubble." > The "lost" chapters. There were two chapters I wanted to include in the first book, but didn't, mostly in the interest of keeping it short. One, Chapter 10, is about the importance of treating users well, and the other, Chapter 11, is about Web accessibility.
I also wanted to update and expand my recommended reading list, since some great books have come out in the past five years.
Five pounds of crackers in a four-pound box
Even though I'd gone from thinking the book was fine just the way it was, thank you, to feeling like I had a lot I wanted to add, I still had one major dilemma: If there wasn't anything I wanted to throw overboard, how could I add new material and still keep the book short enough for an airplane ride read?
Fortunately, at this point, I took my own advice and did a form of user testing: I set up a discussion board and asked readers of the first edition to tell me what I could leave out. And fortunately, the testing did what user testing always does: > Confirmed some things I already knew > Taught me some things I didn't know about how people were using the book,
and what they valued about it > Whacked me over the head with a big surprise that let me improve it
significantly
The big surprise was the large number of people who suggested moving the chapters on user testing to another book. (Some of them had heard that I was
[ x]

about the second edition
planning to do another book that would cover low-cost/no-cost do-it-yourself user testing in detail, and some said they wouldn't miss the chapters because they didn't plan on doing any testing themselves.) I'd thought of doing this, but I didn't want to because (a) I thought people would miss them, and (b) I thought it would feel like I was trying to force people to buy the second book. But as soon as I started reading what the users had to say, the solution became obvious: By compressing the three user testing chapters into one slightly shorter one that covers the important points everyone should know about, I could gain twenty more pages to use for new material. And for anyone who wanted the older, longer version, I could make the original chapters available for free on my Web site.1 Problem solved.
Finally, a few housekeeping notes: > The links. If you want to visit any of the URLs mentioned in the book,
you'll find up-to-date links on my site, too. (Just in case any of the sites, well, you know...disappear.) > Still not present at time of photo. The one thing people have asked me about that you still won't find in here is any discussion of Web applications. While a lot of the principles are the same as for Web sites, it's really a topic for a whole other book, and I'm not the person to write it.2 Anyway, thanks for all the fish. I hope you find the new bits useful. See you in five years.
Steve Krug July 2005
1 http://www.sensible.com/secondedition 2 If that's your area, you might want to take a look at Web Application Design Handbook:
Best Practices for Web-Based Software by Susan Fowler and Victor Stanwick.
[ xi ]

Foreword >
don't make me think again
Considering how much has changed since 2000, when the first edition of this book was printed, it's amazing that the basic design of the Web has stayed so much the same. In the early years the platform was volatile. It seemed like features changed every week. We had the browser wars, with Netscape squaring off against all comers and the WC3 bringing out new HTML standards every six months. But then, with the predictable victory of the Redmond wehrmacht, everything settled down. This was a relief for Web designers, who were nearly driven out of their minds by the constant changes in code--and by the fact that we were making it up as we went along. But relief slowly faded into frustration. The inflexibility of HTML, the lack of fonts, the adjustability of Web pages that makes design so imprecise, the confusing array of screen resolutions and target browsers (even if they're mostly Explorer)--these factors are all annoying. Designers' aggravation is compounded by the slow coagulation of a number of restrictive conventions, like the use of banner ads. Not all conventions are bad
[ xii ]

of course. In fact, users like conventions--even if designers find them constraining. For most people, it's hard enough just to get the computer to work.
And while these conventions may change, there is one constant that never changes: human nature. As radical and disruptive a social and commercial force as the Internet has been, it has not yet caused a noticeable mutation in the species.
And since we designers do not, as a rule, come into contact with actual human beings, it is very helpful to know Steve Krug--or at least to have this book--because Steve does know users. After more than a decade of this work he continues to look at each Web site like it's the first one. You'll find no buzz words here: just common sense and a friendly understanding of the way we see, the way we think, and the way we read.
The principles Steve shares here are going to stay the same, no matter what happens with the Internet--with web conventions, or the operating system, or bandwidth, or computer power. So pull up a chair and relax.
Roger Bl ack New York, July 2005
[ xiii ]

introduction
Read me first
throat clearing and disclaimers

Is this trip really necessary?
--slogan on world war ii posters encouraging gas rationing
W hen i started telling people that i was writing a book about how to do what I do, they all asked the same thing: "Aren't you afraid of putting yourself out of a job?" It's true, I have a great job. > People ("clients") send me proposed page designs for the new Web site they're
building or the URL of the existing site that they're redesigning.

New Home page design A

New Home page design B

Existing site

> I look at the designs or use the site and figure out whether they're easy enough to
use (an "expert usability review"). Sometimes I pay other people to try to use the site while I watch ("usability testing").1

> I write a report describing the problems that I found that are likely to cause users grief ("usability issues") and suggesting possible solutions.2

A usability report

1 ...not to be confused with "voyeurism." 2 Actually, this is one thing that has changed since the first edition. See Chapter 9 for the
reason why I've pretty much stopped writing what I now refer to as the "big honking report."
[ 3]

introduction

> I work with the client's Web design team to help them figure out how to fix the problems.

...maybe if we put the top stories under the personalization promo...
Hey, look! Somebody brought donuts.

I wonder if there are any donuts left...

We could do it that way, but...

Sometimes we work by phone...
> They pay me.

...and sometimes in person

Being a consultant, I get to work on interesting projects with a lot of nice, smart people, and when we're finished, the sites are better than when we started. I get to work at home most of the time and I don't have to sit in mind-numbing meetings every day or deal with office politics. I get to say what I think, and people usually appreciate it. And I get paid well.
Believe me, I would not lightly jeopardize this way of life.3

But the reality is there are so many Web sites in need of help--and so few people who do what I do--that barring a total collapse of the Internet boom,4 there's
very little chance of my running out of work for years.

Suddenly a lot of people with little or no previous experience have been made responsible for big-budget projects that may determine the future of their companies, and they're looking for people to tell them that they're doing it right.

3 I have an even cushier job now. Since the book came out, I spend a lot of my time teaching workshops, where, unlike consulting, there's no opportuntiy to procrastinate and no homework. At the end of the day, you're done.
4 The boom obviously turned to bust not long after I wrote this (late in 2000). Even so, there are probably more people working on usability now than there were then.

[ 4]

read me first
Graphic designers and developers find themselves responsible for designing interfaces--things like interaction design (what happens next when the user clicks) and information architecture (how everything is organized). And most people don't have the budget to hire a usability consultant to review their work--let alone have one around all the time. I'm writing this book for people who can't afford to hire (or rent) someone like me. I would hope that it's also of value to people who work with a usability professional. At the very least, I hope it can help you avoid some of the endless, circular religious Web design debates that seem to eat up so much time.
It's not rocket surgeryTM
The good news is that much of what I do is just common sense, and anyone with some interest can learn to do it. After all, usability really just means making sure that something works well: that a person of average (or even below average) ability and experience can use the thing--whether it's a Web site, a fighter jet, or a revolving door--for its intended purpose without getting hopelessly frustrated. Like a lot of common sense, though, it's not necessarily obvious until after someone's pointed it out to you.5 No question: if you can afford to, hire someone like me. But if you can't, I hope this book will enable you to do it yourself (in your copious spare time).
5 ...which is one reason why my consulting business (actually just me and a few well-placed mirrors) is called Advanced Common Sense. "It's not rocket surgery" is my corporate motto.
[ 5]

introduction

Yes, it's a thin book

I've worked hard to keep this book short--hopefully short enough you can read it on a long plane ride. I did this for two reasons:

> If it's short, it's more likely to actually be used.6 I'm writing for the people who are in the trenches--the designers, the developers, the site producers, the project managers, the marketing people, and the people who sign the checks, and for the one-man-band people who are doing it all themselves. Usability isn't your life's work, and you don't have time for a long book.

Tagline
Welcome blurb

> You don't need to know everything. As with any field, there's a lot you could learn about usability. But unless you're a usability professional, there's a limit to how much is useful to learn.7

6 There's a good usability principle right there: if something requires a large investment of time--or looks like it will--it's less likely to be used.
7 I've always liked the passage in A Study in Scarlet where Dr. Watson is shocked to learn that Sherlock Holmes doesn't know that the earth travels around the sun. Given the finite capacity of the human brain, Holmes explains, he can't afford to have useless facts elbowing out the useful ones: "What the deuce is it to me? You say that we go round the sun. If we went round the moon it would not make a pennyworth of difference to me or to my work."
[ 6]

read me first
I find that the most valuable contributions I make to each project always come from keeping just a few key usability principles in mind. I think there's a lot more leverage for most people in understanding these principles than in another laundry list of specific do's and don'ts. I've tried to boil down the few things I think everybody involved in building Web sites should know.
Not present at time of photo
Just so you don't waste your time looking for them, here are a few things you won't find in this book: > "The truth" about the right way to design Web sites. I've been at this for a
long time, long enough to know that there is no one "right" way to design Web sites. It's a complicated process and the real answer to most of the questions that people ask me is "It depends."8 But I do think that there are a few useful guiding principles it always helps to have in mind, and those are what I'm trying to convey. > Discussion of business models. If history has taught us anything, it's that Internet business models are like buses: If you miss one, all you have to do is wait a little while and another one will come along. I'm no expert when it comes to making money on the Web, and even if I were, whatever I had to say would probably be pass� by the time you read it. > Predictions for the future of the Web. Your guess is as good as mine. The only thing I'm sure of is that (a) most of the predictions I hear are almost certainly wrong, and (b) the things that will turn out to be important will come as a surprise, even though in hindsight they'll seem perfectly obvious.
> Bad-mouthing of poorly designed sites. If you enjoy people poking fun at sites with obvious flaws, you're reading the wrong book. Designing, building, and maintaining a great Web site isn't easy. It's like golf: a handful of ways to get the ball in the hole, a million ways not to. Anyone who gets it even half right has my admiration.
8 Jared Spool and his usability consulting cohorts at User Interface Engineering (www.uie.com) even have "It depends" T-shirts.
[ 7]

introduction
As a result, you'll find that the sites I use as examples tend to be excellent sites with minor flaws. I think you can learn more from looking at good sites than bad ones. > Examples from all kinds of sites. Most of the examples in the book are from e-commerce sites, but the principles I'm describing apply just as well to my next-door neighbor's vanity page, your daughter's soccer team's site, or your company's intranet. Including illustrations from all the different genres would have resulted in a much larger--and less useful book.
Who's on first?
Throughout the book, I've tried to avoid constant references to "the user" and "users." This is partly because of the tedium factor, but also to try to get you to think about your own experience as a Web user while you're reading--something most of us tend to forget when we've got our Web design hats on. This has led to the following use of pronouns in this book: > "I" is me, the author. Sometimes it's me the usability professional ("I tell my
clients...") and sometimes it's me speaking as a Web user ("If I can't find a Search button..."), but it's always me. > "You" is you, the reader--someone who designs, builds, publishes, or pays the bills for a Web site. > "We" ("How we really use the Web") is all Web users, which includes "you" and "I." I may sidestep these rules occasionally, but hopefully the context will always make it clear who I'm talking about.
[ 8]

read me first
Is this trip really necessary?
I could recite some of the usual awe-inspiring statistics about how many umpteen gazillion dollars will be left on the table this year by sites that don't mind their usability P's and Q's. But given that you're already holding a book about usability in your hands, you probably don't need me to tell you that usability matters. You know from your own experience as a Web user that paying attention to usability means less frustration and more satisfaction for your visitors, and a better chance that you'll see them again. I think my wife put her finger on the essence of it better than any statistic I've seen:
If something is hard to use, I just
don't use it as much.
I hope this book will help you build a better site and--if you can skip a few design arguments--maybe even get home in time for dinner once in a while.
[ 9]

chapter
1
Don't make me think!
krug's first law of usability

Michael, why are the drapes open?
--kay corleone in the godfather, part ii
People often ask me:
"What's the most important thing I should do if I want to make sure my Web site is easy to use?" The answer is simple. It's not "Nothing important should ever be more than two clicks away," or "Speak the user's language," or even "Be consistent." It's...
"Don't make me think!"
I've been telling people for years that this is my first law of usability. And the more Web pages I look at, the more convinced I become. It's the overriding principle--the ultimate tie breaker when deciding whether something works or doesn't in a Web design. If you have room in your head for only one usability rule, make this the one.1 It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to "get it"--what it is and how to use it--without expending any effort thinking about it. Just how self-evident are we talking about? Well, self-evident enough, for instance, that your next door neighbor, who has no interest in the subject of your site and who barely knows how to use the Back button, could look at your site's Home page and say, "Oh, it's a _____." (With any luck, she'll say, "Oh, it's a _____. Neat." But that's another subject.)
1 Actually, there is a close contender: "Get rid of half the words on each page, then get rid of half of what's left." But that one gets its own chapter later.
[ 11 ]

chapter 1
Think of it this way: When I'm looking at a page that doesn't make me think, all the thought balloons over my head say things like "OK, there's the _____. And that's a _____. And there's the thing that I want."
NOT THINKING

OK. This looks like the product
categories...
Memory, Modems... There it is: Monitors.
Click

...and these are today's special deals.

[ 12 ]

don't make me think!

But when I'm looking at a page that makes me think, all the thought balloons over my head have question marks in them.
THINKING

Hmm. Pretty busy. Where should I start?
Hmm. Why did they call it that?
Can I click on that?

Is that the navigation? Or is that it over there?
Why did they put that there?
Those two links seem like they're the same thing. Are they really?

When you're creating a site, your job is to get rid of the question marks.

[ 13 ]

chapter 1

Things that make us think
All kinds of things on a Web page can make us stop and think unnecessarily. Take names of things, for example. Typical culprits are cute or clever names, marketinginduced names, company-specific names, and unfamiliar technical names.

For instance, suppose a friend tells me that XYZ Corp is looking to hire someone with my exact qualifications, so I head off to their Web site. As I scan the page for something to click, the name they've chosen for their job listings section makes a difference.

< OBVIOUS

REQUIRES THOUGHT >

Jobs! Click

Hmm. [Milliseconds of thought] Jobs. Click

Hmm. Could be Jobs. But it sounds like more than that. Should I click or keep looking?

Note that these things are always on a continuum somewhere between "Obvious to everybody" and "Truly obscure," and there are always tradeoffs involved.
For instance, "Jobs" may sound too undignified for XYZ Corp, or they may be locked into "Job-o-Rama" because of some complicated internal politics, or because that's what it's always been called in their company newsletter. My main point is that the tradeoffs should usually be skewed further in the direction of "Obvious" than we care to think.
Another needless source of question marks over people's heads is links and buttons that aren't obviously clickable. As a user, I should never have to devote a millisecond of thought to whether things are clickable--or not.

[ 14 ]

< OBVIOUSLY CLICKABLE

Hmm.

[Milliseconds of thought]

I guess that's a button.

Click

Click

don't make me think!
REQUIRES THOUGHT >
Hmm. Is that a button?
Results

You may be thinking, "Well, it doesn't take much effort to figure out whether something's clickable. If you point the cursor at it, it'll change from an arrow to a pointing hand. What's the big deal?"
The point is, when we're using the Web every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up, and sometimes it doesn't take much to throw us.
And as a rule, people don't like to puzzle over how to do things. The fact that the people who built the site didn't care enough to make things obvious--and easy--can erode our confidence in the site and its publishers.

[ 15 ]

chapter 1

Another example: On most bookstore sites, before I search for a book I first have to think about how I want to search.2

MOST BOOKSTORE SITES

Let's see. "Quick Search." That must be the same as "Search," right?

Do I have to click on that drop-down menu thing?
All I know about the book is that it's by Tom Clancy. Is Clancy a keyword?
(What is a keyword, anyway?)

I guess I have to use the menu. Clicks on the arrow

"Title. Author. Keyword." OK. I want "Author." Clicks "Author"

Types "Tom Clancy" Clicks "Search"
Granted, most of this "mental chatter" takes place in a fraction of a second, but you can see that it's a pretty noisy process. Even something as apparently innocent as jazzing up a well-known name (from "Search" to "Quick Search") can generate another question mark.
2 This was still true when I checked about a year ago. Only now, in 2005, have most of them finally improved.
[ 16 ]

don't make me think!

Amazon.com, on the other hand, doesn't even mention the Author-Title-Keyword distinction. They just look at what you type and do whatever makes the most sense.

AMAZON.COM

OK. "Search books
for _____."

Types "Tom Clancy" Clicks "Go"
After all, why should I have to think about how I want to search? And even worse, why should I have to think about how the site's search engine wants me to phrase the question, as though it were some ornery troll guarding a bridge? ("You forgot to say `May I?'")
I could list dozens of other things that visitors to a site shouldn't spend their time thinking about, like:
> Where am I? > Where should I begin? > Where did they put _____? > What are the most important things on this page? > Why did they call it that?
But the last thing you need is another checklist to add to your stack of Web design checklists. The most important thing you can do is to just understand the basic principle of eliminating question marks. If you do, you'll begin to notice all the things that make you think while you're using the Web, and eventually you'll learn to recognize and avoid them in the pages you're building.

[ 17 ]

chapter 1
You can't make everything self-evident
Your goal should be for each page to be self-evident, so that just by looking at it the average user3 will know what it is and how to use it. Sometimes, though, particularly if you're doing something original or groundbreaking or something very complicated, you have to settle for self-explanatory. On a self-explanatory page, it takes a little thought to "get it"--but only a little. The appearance of things, their well-chosen names, the layout of the page, and the small amounts of carefully crafted text should all work together to create near-instantaneous recognition. If you can't make a page self-evident, you at least need to make it self-explanatory.
Why is this so important?
Oddly enough, not for the reason you usually hear cited:
On the Internet, the competition is always just one click away,
so if you frustrate users they'll head somewhere else.
This is sometimes true, but you'd be surprised at how long some people will tough it out at sites that frustrate them. Many people who encounter problems with a site tend to blame themselves and not the site.
3 The actual Average User is kept in a hermetically sealed vault at the International Bureau of Standards in Geneva. We'll get around to talking about the best way to think about the "average user" eventually.
[ 18 ]

don't make me think!
The fact is, your site may not have been that easy to find in the first place and visitors may not know of an alternative. The prospect of starting over isn't always that attractive. And there's also the "I've waited ten minutes for this bus already, so I may as well hang in a little longer" phenomenon. Besides, who's to say that the competition will be any less frustrating?
So why, then?
Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless, whereas puzzling over things that don't matter to us tends to sap our energy and enthusiasm--and time. But as you'll see in the next chapter when we examine how we really use the Web, the main reason why it's important not to make me think is that most people are going to spend far less time looking at the pages we design than we'd like to think. As a result, if Web pages are going to be effective, they have to work most of their magic at a glance. And the best way to do this is to create pages that are selfevident, or at least self-explanatory.
[ 19 ]

chapter
2
How we really use the Web
scanning, satisficing, and muddling through

Why are things always in the last place you look for them? Because you stop looking when you find them.
--children's riddle

In the past ten years i've spent a lot of time watching people use the Web, and the thing that has struck me most is the difference between how we think people use Web sites and how they actually use them.
When we're creating sites, we act as though people are going to pore over each page, reading our finely crafted text, figuring out how we've organized things, and weighing their options before deciding which link to click.
What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for. There are usually large parts of the page that they don't even look at.
We're thinking "great literature" (or at least "product brochure"), while the user's reality is much closer to "billboard going by at 60 miles an hour."

WHAT WE DESIGN FOR... THE REALITY...
Read
Read
Read
Read
[Pause for reflection]
Finally, click on a carefully
chosen link

Look around feverishly for anything that
a) is interesting, or vaguely resembles what you're looking for, and
b) is clickable.
As soon as you find a halfway-decent match, click.
If it doesn't pan out, click the Back button and try again.

[ 21 ]

chapter 2
As you might imagine, it's a little more complicated than this, and it depends on the kind of page, what the user is trying to do, how much of a hurry she's in, and so on. But this simplistic view is much closer to reality than most of us imagine.
It makes sense that we picture a more rational, attentive user when we're designing pages. It's only natural to assume that everyone uses the Web the same way we do, and--like everyone else--we tend to think that our own behavior is much more orderly and sensible than it really is.
If you want to design effective Web pages, though, you have to learn to live with three facts about real-world Web use.
FACT OF LIFE #1:
We don't read pages. We scan them.
One of the very few well-documented facts about Web use is that people tend to spend very little time reading most Web pages.1 Instead, we scan (or skim) them, looking for words or phrases that catch our eye.
The exception, of course, is pages that contain documents like news stories, reports, or product descriptions. But even then, if the document is longer than a few paragraphs, we're likely to print it out because it's easier and faster to read on paper than on a screen.
Why do we scan? > We're usually in a hurry. Much of our Web use is motivated by the desire to
save time. As a result, Web users tend to act like sharks: They have to keep moving, or they'll die. We just don't have the time to read any more than necessary. > We know we don't need to read everything. On most pages, we're really only interested in a fraction of what's on the page. We're just looking for the bits that match our interests or the task at hand, and the rest of it is irrelevant. Scanning is how we find the relevant bits.
1 See Jakob Nielsen's October 1997 Alertbox column, "How Users Read on the Web" available at www.useit.com.
[ 22 ]

how we really use the web
> We're good at it. We've been scanning newspapers, magazines, and books all our lives to find the parts we're interested in, and we know that it works.
The net effect is a lot like Gary Larson's classic Far Side cartoon about the difference between what we say to dogs and what they hear. In the cartoon, the dog (named Ginger) appears to be listening intently as her owner gives her a serious talking-to about staying out of the garbage. But from the dog's point of view, all he's saying is "blah blah GINGER blah blah blah blah GINGER blah blah blah." What we see when we look at a Web page depends on what we have in mind, but it's usually just a fraction of what's on the page.
WHAT DESIGNERS BUILD... WHAT USERS SEE...
I want to buy a ticket.
How do I check my frequent flyer miles?
Like Ginger, we tend to focus on words and phrases that seem to match (a) the task at hand or (b) our current or ongoing personal interests. And of course, (c) the trigger words that are hardwired into our nervous systems, like "Free," Sale," and "Sex," and our own name.
[ 23 ]

chapter 2
FACT OF LIFE #2:
We don't make optimal choices. We satisfice.
When we're designing pages, we tend to assume that users will scan the page, consider all of the available options, and choose the best one. In reality, though, most of the time we don't choose the best option--we choose the first reasonable option, a strategy known as satisficing.2 As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it. I'd observed this behavior for years, but its significance wasn't really clear to me until I read Gary Klein's book Sources of Power: How People Make Decisions.3 Klein has spent many years studying naturalistic decision making: how people like firefighters, pilots, chessmasters, and nuclear power plant operators make high-stakes decisions in real settings with time pressure, vague goals, limited information, and changing conditions. Klein's team of observers went into their first study (of field commanders at fire scenes) with the generally accepted model of rational decision making: Faced with a problem, a person gathers information, identifies the possible solutions, and chooses the best one. They started with the hypothesis that because of the high stakes and extreme time pressure, fire captains would be able to compare only two options, an assumption they thought was conservative. As it turned out, the fire commanders didn't compare any options. They took the first reasonable plan that came to mind and did a quick mental test for problems. If they didn't find any, they had their plan of action.
2 Economist Herbert Simon coined the term (a cross between satisfying and sufficing) in Models of Man: Social and Rational (Wiley, 1957).
3 The MIT Press, 1998.
[ 24 ]

how we really use the web
So why don't Web users look for the best choice? > We're usually in a hurry. And as Klein points out, "Optimizing is hard, and
it takes a long time. Satisficing is more efficient." > There's not much of a penalty for guessing wrong. Unlike firefighting, the
penalty for guessing wrong on a Web site is usually only a click or two of the Back button, making satisficing an effective strategy. (The Back button is the most-used feature of Web browsers.) Of course, this assumes that pages load quickly; when they don't, we have to make our choices more carefully--just one of the many reasons why most Web users don't like slow-loading pages. > Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help. You're usually better off going with your first guess and using the Back button if it doesn't work out. > Guessing is more fun. It's less work than weighing options, and if you guess right, it's faster. And it introduces an element of chance--the pleasant possibility of running into something surprising and good. Of course, this is not to say that users never weigh options before they click. It depends on things like their frame of mind, how pressed they are for time, and how much confidence they have in the site.
[ 25 ]

The Prince and the Pauper (Classics Illustrated)

chapter 2
FACT OF LIFE #3:
We don't figure out how things work. We muddle through.
One of the things that becomes obvious as soon as you do any usability testing-- whether you're testing Web sites, software, or household appliances--is the extent to which people use things all the time without understanding how they work, or with completely wrong-headed ideas about how they work. Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works. It often reminds me of the scene at the end of The Prince and the Pauper where the real prince discovers that the look-alike pauper has been using the Great Seal of England as a nutcracker in his absence. (It makes perfect sense--to him, the seal is just this great big, heavy chunk of metal.) And the fact is, we get things done that way. I've seen lots of people use software and Web sites effectively in ways that are nothing like what the designers intended.
[ 26 ]

how we really use the web
My favorite example is the people (and I've seen at least a dozen of them myself during user tests) who will type a site's entire URL in the Yahoo search box every time they want to go there--not just to find the site for the first time, but every time they want to go there, sometimes several times a day. If you ask them about it, it becomes clear that some of them think that Yahoo is the Internet, and that this is the way you use it.4
Most Web designers would be shocked if they knew how many people type URLs in Yahoo's search box.
And muddling through is not limited to beginners. Even technically savvy users often have surprising gaps in their understanding of how things work. (I wouldn't be surprised if even Bill Gates has some bits of technology in his life that he uses by muddling through.)
4 In the same vein, I've encountered many AOL users who clearly think that AOL is the Internet--good news for Yahoo and AOL.
[ 27 ]

chapter 2
Why does this happen? > It's not important to us. For most of us, it doesn't matter to us whether we
understand how things work, as long as we can use them. It's not for lack of intelligence, but for lack of caring. In the great scheme of things, it's just not important to us.5 > If we find something that works, we stick to it. Once we find something that works--no matter how badly--we tend not to look for a better way. We'll use a better way if we stumble across one, but we seldom look for one. It's always interesting to watch Web designers and developers observe their first usability test. The first time they see a user click on something completely inappropriate, they're surprised. (For instance, when the user ignores a nice big fat "Software" button in the navigation bar, saying something like, "Well, I'm looking for software, so I guess I'd click here on `Cheap Stuff' because cheap is always good.") The user may even find what he's looking for eventually, but by then the people watching don't know whether to be happy or not. The second time it happens, they're yelling "Just click on `Software'!" The third time, you can see them thinking: "Why are we even bothering?" And it's a good question: If people manage to muddle through so much, does it really matter whether they "get it"? The answer is that it matters a great deal because while muddling through may work sometimes, it tends to be inefficient and error-prone.
5 Web developers often have a particularly hard time understanding--or even believing--that people might feel this way, since they themselves are usually keenly interested in how things work.
[ 28 ]

how we really use the web
On the other hand, if users "get it": > There's a much better chance that they'll find what they're looking for, which is
good for them and for you. > There's a better chance that they'll understand the full range of what your site
has to offer--not just the parts that they stumble across. > You have a better chance of steering them to the parts of your site that you
want them to see. > They'll feel smarter and more in control when they're using your site, which
will bring them back. You can get away with a site that people muddle through only until someone builds one down the street that makes them feel smart.
If life gives you lemons...
By now you may be thinking (given this less than rosy picture of the Web audience and how they use the Web), "Why don't I just get a job at the local 7-11? At least there my efforts might be appreciated." So, what's a girl to do? I think the answer is simple: If your audience is going to act like you're designing billboards, then design great billboards.
[ 29 ]

chapter
3
Billboard Design 101
designing pages for scanning, not reading

If you / Don't know / Whose signs / These are You can't have / Driven very far / Burma-Shave
--sequence of billboards promoting shaving cream, circa 1935

Faced with the fact that your users are whizzing by, there are five important things you can do to make sure they see--and understand--as much of your site as possible:
> Create a clear visual hierarchy on each page > Take advantage of conventions > Break pages up into clearly defined areas > Make it obvious what's clickable > Minimize noise.

Create a clear visual hierarchy
One of the best ways to make a page easy to grasp in a hurry is to make sure that the appearance of the things on the page--all of the visual cues--clearly and accurately portray the relationships between the things on the page: which things are related, and which things are part of other things. In other words, each page should have a clear visual hierarchy.

Pages with a clear visual hierarchy have three traits:

> The more important something is, the more prominent it is. For instance, the most important headings are either larger, bolder, in a distinctive color, set off by more white space, or nearer the top of the page--or some combination of the above.

Very important
A little less important
Nowhere near as important

[ 31 ]

chapter 3

> Things that are related logically are also related visually. For instance, you can show that things are similar by grouping them together under a heading, displaying them in a similar visual style, or putting them all in a clearly defined area.

> Things are "nested" visually to show what's part of what. For instance, a section heading ("Computer Books") would appear above the title of a particular book, visually encompassing the whole content area of the page, because the book is part of the section. And the title in turn would span the elements that describe the book.

Computer Books

One Particular Computer Book

Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab Blab

$24.95

There's nothing new about visual hierarchies. Every newspaper page, for instance, uses prominence, grouping, and nesting to give us useful information about the contents of the page before we read a word. This picture goes with this story because they're both spanned by this headline. This story is the most important because it has the biggest headline, the widest column, and a prominent position on the page.

The headline spanning these three columns makes it obvious that they're all part of the same story.

The size of this headline makes it clear at a glance that this is the most important story.

[ 32 ]

billboard design 101

We all parse visual hierarchies--online and on paper--every day, but it happens so quickly that the only time we're even vaguely aware that we're doing it is when we can't do it--when the visual cues (or absence of them) force us to think.

A good visual hierarchy saves us work by preprocessing the page for us, organizing and prioritizing its contents in a way that we can grasp almost instantly.

But when a page doesn't have a clear visual hierarchy--if everything looks equally important, for instance--we're reduced to the much slower process of scanning the page for revealing words and phrases, and then trying to form our own sense of what's important and how things are organized. It's a lot more work.

Besides, we want editorial guidance in Web sites, the same way we want it in other media. The publisher knows better than anyone which pieces of the site's content are most important, valuable, or popular, so why not identify them for me and save me the trouble?

Parsing a page with a visual hierarchy that's even slightly flawed--where a heading spans things that aren't part of it, for instance--is like reading a carelessly constructed sentence ("Bill put the cat on the table for a minute because it was a little wobbly.").

Even though we can usually figure out what the sentence is supposed to mean, it still throws us momentarily and forces us to think when we shouldn't have to.

This flawed visual hierarchy suggests that all of the sections of the site are part of the Computer Books section.

[ 33 ]

chapter 3
Conventions are your friends
At some point in our youth, without ever being taught, we all learned to read a newspaper. Not the words, but the conventions. We learned, for instance, that a phrase in very large type is usually a headline that summarizes the story underneath it, and that text underneath a picture is either a caption that tells me what it's a picture of, or--if it's in very small type--a photo credit that tells me who took the picture. We learned that knowing the various conventions of page layout and formatting made it easier and faster to scan a newspaper and find the stories we were interested in. And when we started traveling to other cities, we learned that all newspapers used the same conventions (with slight variations), so knowing the conventions made it easy to read any newspaper. Every publishing medium develops conventions and continues to refine them and develop new ones over time.1 The Web already has a lot of them, mostly derived from newspaper and magazine conventions, and new ones will continue to appear. All conventions start life as somebody's bright idea. If the idea works well enough, other sites imitate it and eventually enough people have seen it in enough places that it needs no explanation. This adoption process takes time, but it happens pretty quickly on the Internet, like everything else. For instance, enough people are now familiar with the convention of using a metaphorical shopping cart on e-commerce sites that it's safe for designers to use a shopping cart icon without labeling it "Shopping cart."
1 Consider the small semitransparent logos that began appearing in the corner of your TV screen a few years ago to tell you which network you're watching. They're everywhere now, but TV had been around for 50 years before they appeared at all.
[ 34 ]

billboard design 101

There are two important things to know about Web conventions:

> They're very useful. As a rule, conventions only become conventions if they work. Wellapplied conventions make it easier for users to go from site to site without expending a lot of effort figuring out how things work.

There's a reassuring sense of familiarity, for instance, in seeing a list of links to the sections of a site on a colored background down the left side of the page, even if it's sometimes accompanied by a tedious sense of d�j� vu.

Conventions enable users to figure out a lot about a Web page, even if they can't understand a word of it.

> Designers are often reluctant to take advantage of them. Faced with the prospect of using a convention, there's a great temptation for designers to reinvent the wheel instead, largely because they feel (not incorrectly) that they've been hired to do something new and different, and not the same old thing. (Not to mention the fact that praise from peers, awards, and high-profile job offers are rarely based on criteria like "best use of conventions.")

[ 35 ]

chapter 3

Sometimes time spent reinventing the wheel results in a revolutionary new rolling device. But sometimes it just amounts to time spent reinventing the wheel.

WHEEL

If you're not going to use an

existing Web convention, you

need to be sure that what you're

replacing it with either (a) is so clear and self-explanatory that there's no learning curve--so it's

Patent Pending 48,022 B.C., 42,639 B.C., 36,210 B.C., 31,887 B.C., 30,599 B.C., 28,714 B.C., 28,001, B.C., 19,711 B.C., 18,224 B.C., B.C., BC, 15,690 B.C., 15,689 B.C., 15,675 B.C., 15,674 B.C.

as good as a convention, or (b)

adds so much value that it's

worth a small learning curve. If you're going to innovate, you have to

understand the value of what you're replacing, and many designers tend to

underestimate just how much value conventions provide.

My recommendation: Innovate when you know you have a better idea (and everyone you show it to says "Wow!"), but take advantage of conventions when you don't.

Break up pages into clearly defined areas
Ideally, users should be able to play a version of Dick Clark's old game show $25,000 Pyramid with any well-designed Web page.2 Glancing around, they should be able to point at the different areas of the page and say, "Things I can do on this site!" "Links to today's top stories!" "Products this company sells!" "Things they're eager to sell me!" "Navigation to get to the rest of the site!"
Dividing the page into clearly defined areas is important because it allows users to decide quickly which areas of the page to focus on and which areas they can

2 Given a category like "Things a plumber uses," contestants would have to get their partners to guess the category by giving examples ("a wrench, a pipe cutter, pants that won't stay up...").
[ 36 ]

billboard design 101

safely ignore. Several of the initial eye-tracking studies of Web page scanning suggest that users decide very quickly which parts of the page are likely to have useful information and then almost never look at the other parts--almost as though they weren't there.

Make it obvious what's clickable
Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.

For example, on Senator Orrin Hatch's Home page3 during his unsuccessful 2000 presidential bid, it wasn't clear whether everything was click-able, or nothing was. There were 18 links on the page, but only two of them invited you to click by their appearance: a large button labeled "Click here to contribute!" and an underlined text link ("full story").

The rest of the links were colored text. But the problem was that all of the text on the page was in color, so there was no way to distinguish the links at a glance.

It's not a disastrous flaw. I'm sure it didn't take most users long to just start clicking on things. But when you force users to think about something that should be mindless like what's clickable, you're squandering the limited reservoir of patience and goodwill that each user brings to a new site.

www.orrinhatch.com

3 Orrin Hatch deserves at least a footnote in usability history, since he was--to the best of my knowledge--the first presidential candidate to make Web usability a campaign issue. In the first televised Republican candidates' debate of the 2000 campaign, he told George W. Bush, "I have to say, Governor, in contrast to [your Web site], it's easy to find everything on mine. [Chuckles.] It's pretty tough to use yours! Yours is not user-friendly." (His site was easier to use.)

[ 37 ]


### Element Library (first 200 lines)
{
  "elements": [
    {
      "id": "works-001",
      "type": "process_pattern",
      "title": "System 1 Trust Gate at Every Phase Transition",
      "journey_phases": [
        "discovery",
        "evaluation",
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "Every phase transition in the host journey requires the host to enter a new context: a new screen, a new interaction mode, a new set of decisions. Each transition triggers an automatic System 1 assessment that determines whether the host's System 2 will engage at all. If System 1 flags the new context as unfamiliar, suspicious, or incoherent with the prior phase, the host abandons before deliberate evaluation begins. The platform currently has no mechanism to ensure System 1 approval at these transitions. The result is that hosts who successfully completed the prior phase still drop off at the next one, not because the content is wrong, but because the first impression of the new context fails the automatic legitimacy check.",
      "solution": "Design every phase transition to pass System 1's automatic assessment before demanding System 2 engagement. This means: (1) The first 2 seconds of every new screen or interaction must signal continuity with the prior phase through visual consistency, familiar language, and explicit connection to what just happened. (2) Each transition should open with recognition, not instruction. Show the host what they already provided or accomplished before asking for new input. (3) Remove any element that would trigger System 1 threat detection: unexpected terminology, unfamiliar UI patterns, demands for information that feel premature. (4) Use the same vocabulary the host heard in the phone call or prior interaction. If Bryant said 'roommates who need a space during the week,' the platform should echo that language, not substitute 'periodic tenancy lease style.' The pattern is: anchor first, then advance.",
      "evidence": [
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 0:09-0:50",
          "detail": "Andreas's System 1 had already approved Bryant before the call began. He texted back (0:15) after receiving outreach about his specific property. By 0:09 ('How can I help you?'), his tone is open and business-like, not guarded. He volunteered his property details without hesitation (1:03-1:10). This shows System 1 approved the discovery-to-evaluation transition because the outreach referenced his specific listing, creating associative coherence."
        },
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, Plot Synopsis",
          "detail": "Kahneman: 'System 1 continuously generates suggestions for System 2: impressions, intuitions, intentions, and feelings. If endorsed by System 2, impressions and intuitions turn into beliefs, and impulses turn into voluntary actions.' The key word is 'if endorsed.' System 2 never gets the chance to evaluate if System 1 generates a negative impression. The transition must satisfy System 1 first."
        },
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 5:27-6:11",
          "detail": "The call ends with human-to-human promises: email exchange, follow-up outreach. No mention of a platform. The next touchpoint (the website) has zero System 1 preparation. The host's automatic assessment of the platform will be based on whether it looks like 'the thing Bryant told me about' or 'something I have never seen before.'"
        },
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, The Associative Machine",
          "detail": "Kahneman: 'ideas that have been evoked trigger many other ideas, in a spreading cascade of activity in your brain... yielding a self-reinforcing pattern of cognitive, emotional, and physical responses that is both diverse and integrated -- it has been called associatively coherent.' Phase transitions succeed when they activate the associative network built by the prior phase. They fail when they activate a new, unconnected network."
        }
      ],
      "priority": "high",
      "user_goal": "At every new screen or interaction mode, immediately understand that I am in the right place and that this is a continuation of what I was already doing, not something new I need to figure out.",
      "company_goal": "Eliminate the invisible dropout that occurs between phases, where hosts who completed one phase never begin the next, by ensuring automatic first-impression approval at every transition point.",
      "time_budget": "System 1 assessment happens in under 2 seconds. The transition design must pass this automatic check before any System 2 content (instructions, forms, decisions) is presented.",
      "anti_goals": [
        "DO NOT introduce new vocabulary at phase transitions. If a concept was not used in the prior phase, it should not appear as the first thing in the next phase.",
        "DO NOT open a new phase with an instruction or a demand. Open with recognition of what the host already did or already knows.",
        "DO NOT assume that completing one phase means the host is committed to the next. Each phase must re-earn engagement independently.",
        "DO NOT use generic welcome messages ('Welcome to your dashboard!') that carry no information about what comes next or why the host is here."
      ],
      "success_metric": "Phase-to-phase continuation rate: the percentage of hosts who complete Phase N and begin Phase N+1 within the same session. Target: above 70% for evaluation-to-onboarding, above 80% for onboarding-to-listing-creation.",
      "confidence": {
        "lens_count": 2
      },
      "status": "pending_review",
      "reinforced_by": [
        {
          "source_element": "guest-works-001",
          "lens": {
            "guest_call": "nneka-call.txt",
            "book_extract": "kahneman-part1-two-systems.txt"
          },
          "similarity": "Both address the System 1 trust gate at transitions and critical moments. The existing library element prescribes passing System 1's automatic assessment at every phase transition (visual consistency, familiar language, explicit connection to prior phase). The new guest-run element prescribes self-service date changes at conversational speed within the Stays Manager -- which is itself a System 1 design principle (meet the guest where they already are, in the page they already visit).",
          "combined_evidence": "Library evidence: each phase transition must signal continuity. New evidence: the date change flow must live inside the Stays Manager (the page the guest already visits weekly) to avoid a context-switch that triggers System 1 reassessment. Both use Kahneman's associative coherence principle. The combined insight: System 1 continuity applies not just to phase transitions but to every micro-interaction within a phase -- even tool access points must feel like extensions of the current context, not new contexts."
        }
      ]
    },
    {
      "id": "works-002",
      "type": "process_pattern",
      "title": "Design for the Depleted User at Every Step After the First",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt"
      ],
      "problem": "The host journey is not a single decision but a sequence of cognitively demanding phases. Each phase consumes System 2 resources: the evaluation call requires active listening and mental math (deposit + broker fee + first month = 3 months), onboarding requires navigating a new platform, listing creation demands 6 steps of decisions, and pricing requires format translation. Kahneman's ego depletion research shows that after exerting self-control in one task, people are less willing and less able to exert it in the next. The parole judge study demonstrates that depleted decision-makers default to denial. In the host journey, the equivalent of denial is abandonment or accepting bad defaults. The current design treats each phase as though the user arrives fresh. They do not. They arrive depleted from the prior phase.",
      "solution": "Design every phase after the first under the assumption that the user's System 2 is partially depleted. This means: (1) Reduce the number of decisions per phase. Each decision consumes from the same depleted pool. Combine, eliminate, or defer any decision that is not essential to completing the current phase. (2) Provide smart defaults that produce good outcomes when accepted without deliberation. The parole judge analogy: if the default is denial, depleted judges deny. If the default is approval with safeguards, depleted judges approve with safeguards. Make the default the right answer. (3) Allow saving and resuming. A depleted host who leaves should be able to return to exactly where they stopped, not restart the phase. (4) Front-load the hardest decisions in the journey when the host is least depleted, and place the easiest decisions last. (5) After any high-effort phase, insert a decompression moment: a confirmation screen, a summary of progress, a small reward signal. This is the digital equivalent of the parole judges' meal break.",
      "evidence": [
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, The Busy and Depleted System 2",
          "detail": "Kahneman: 'an effort of will or self-control is tiring; if you have had to force yourself to do something, you are less willing or less able to exert self-control when the next challenge comes around. The phenomenon has been named ego depletion.' And: 'tired and hungry judges tend to fall back on the easier default position of denying requests for parole. The proportion spikes after each meal, when about 65% of requests are granted. During the two hours or so until the judges' next feeding, the approval rate drops steadily, to about zero just before the meal.'"
        },
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 0:15 and 5:44-6:11",
          "detail": "Andreas opens the call mentioning he is 'building a bar in my house' (0:15), indicating he is already cognitively engaged in another project. By the call's end (5:44-6:11), the exchange is brief and logistical: emails, next steps, goodbye. The host's energy has been spent on the evaluation. Anything the platform asks him to do immediately after this call faces a depleted user."
        },
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 3:02-3:16",
          "detail": "Andreas processes pricing as a rapid sequential sum: 'first month... broker's fee? One month. Three months. Okay. Got it.' This shows he handles financial computation efficiently when fresh, but this computation itself consumes System 2 resources, leaving less for subsequent phases."
        },
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, Attention and Effort",
          "detail": "Kahneman: 'We normally avoid mental overload by dividing our tasks into multiple easy steps, committing intermediate results to long-term memory or to paper rather than to an easily overloaded working memory.' The platform must serve as the host's 'paper' by preserving progress, pre-filling known data, and breaking complex decisions into atomic steps."
        }
      ],
      "priority": "high",
      "user_goal": "Complete the necessary steps without feeling overwhelmed, and be able to stop and resume without losing progress or having to redo work.",
      "company_goal": "Increase completion rates for multi-step processes (listing creation, proposal response) by reducing the cognitive cost per step and ensuring that defaults produce quality outcomes even when hosts accept them without deliberation.",
      "time_budget": "Each individual step should require no more than 30-60 seconds of focused attention. Total time across all steps in a phase should not exceed 5 minutes for listing creation and 2 minutes for proposal response.",
      "anti_goals": [
        "DO NOT present all decisions at once. Sequential presentation with clear progress indicators is essential for depleted users.",
        "DO NOT require the host to re-enter information that was already provided in a prior phase or a prior step within the same phase.",
        "DO NOT use 'optional' fields that create decision fatigue about whether to fill them in. Either make fields required (with smart defaults) or remove them entirely.",
        "DO NOT place the most complex decision (lease style, pricing model) at the end of a multi-step process where depletion is highest. Front-load complexity or pre-decide it."
      ],
      "success_metric": "Wizard completion rate: percentage of hosts who begin the listing wizard and complete all 6 steps. Target: above 75%. Secondary: time-to-completion for the listing wizard under 5 minutes for 80% of hosts.",
      "confidence": {
        "lens_count": 2
      },
      "status": "pending_review",
      "reinforced_by": [
        {
          "source_element": "guest-works-003",
          "lens": {
            "guest_call": "nneka-call.txt",
            "book_extract": "kahneman-part1-two-systems.txt"
          },
          "similarity": "Both address ego depletion across multi-step processes. The existing library element (Design for the Depleted User) prescribes smart defaults, save-and-resume, and decompression moments for the host journey. The new guest-run element (Stays Manager as System 1 Dashboard) prescribes restructuring the most-visited page to minimize cognitive load on depleted hybrid workers who visit weekly.",
          "combined_evidence": "Kahneman's parole judge study is cited in both: depleted decision-makers default to denial. The host equivalent is abandoning the listing wizard. The guest equivalent is abandoning the Stays Manager check-in or reverting to off-platform communication. Both elements share the same theoretical foundation but apply it to different journey phases and different user roles, extending the depletion-aware design principle to cover the full lifecycle."
        }
      ]
    },
    {
      "id": "works-003",
      "type": "process_pattern",
      "title": "Match the Platform's Cognitive Speed to the Phone Call's Conversational Speed",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "proposal_mgmt"
      ],
      "problem": "The phone call with Bryant operates at System 2's 'natural speed': conversational, one topic at a time, with immediate feedback. Andreas described two units in 7 seconds (1:03-1:10), asked about furnishing in one sentence (1:29), and processed the 3-month upfront cost in a single exchange (3:02-3:16). The platform, by contrast, requires navigation, form-filling, dropdown selection, and multi-step wizards. This creates a speed mismatch: the call felt fast and efficient, the platform feels slow and laborious. When the platform demands more effort for the same outcome the call achieved easily, the host perceives the platform as inferior to the human interaction. This perception, once formed by System 1, is difficult to override.",
      "solution": "Design platform interactions to match or exceed the conversational efficiency of the phone call. This means: (1) Information that the host conveyed in natural speech during the call (two units, 5th floor, 2nd floor, unfurnished, laundry in building) should be capturable with equivalent speed on the platform. If the host can say it in 7 seconds, they should be able to enter it in under 15 seconds. (2) Use input patterns that mirror conversational flow: structured but not rigid. Quick-select chips, toggle switches, and pre-populated suggestions are faster than dropdown menus and text fields. (3) Provide immediate feedback after each input, mirroring how Bryant acknowledged each point in the conversation ('Yep. Got it.'). (4) Eliminate any step that exists for the platform's benefit but provides no value to the host. If the call did not need it, question whether the platform does.",
      "evidence": [
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 1:03-1:10",
          "detail": "Andreas describes his two units in approximately 7 seconds of natural speech: 'I have two units. One of them is on the fifth floor walk up. And then the other one is a second floor walk up.' This conveys: unit count (2), floor levels (5th and 2nd), building type (walk-up), and availability (both). The listing wizard must capture this same information with comparable speed or the host will perceive the platform as friction."
        },
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, The Lazy Controller",
          "detail": "Kahneman: 'System 2 also has a natural speed. You expend some mental energy in random thoughts and in monitoring what goes on around you even when your mind does nothing in particular, but there is little strain... Just like a stroll.' And: 'Accelerating beyond my strolling speed completely changes the experience... a sharp deterioration in my ability to think coherently.' The phone call operates at System 2's 'stroll.' The platform must not force a 'sprint.'"
        },
        {
          "source_type": "host_call",
          "source": "andreas-call.txt, 3:28-3:51",
          "detail": "Bryant explains the payment guarantee in 23 seconds of continuous speech, covering credit checks, vetting, pre-authorization, and guarantee. The host absorbs this passively. On the platform, the equivalent information must be presented with similar density and clarity, not spread across multiple screens or buried in FAQ pages."
        },
        {
          "source_type": "book",
          "source": "kahneman-part1-two-systems.txt, Attention and Effort",
          "detail": "Kahneman: 'As you become skilled in a task, its demand for energy diminishes.' First-time platform use has maximum cognitive cost. The platform must compensate by reducing the number and complexity of actions required, since the host has no skill-based efficiency to draw on."
        }
      ],
      "priority": "high",
      "user_goal": "Accomplish on the platform what I could accomplish in a phone conversation, without the platform making it feel harder or slower than talking to a person.",
      "company_goal": "Reduce the perceived effort gap between human-mediated and platform-mediated interactions so that hosts do not default to calling Bryant instead of using the platform.",
      "time_budget": "Any task that took under 60 seconds in the phone call (describing units, stating pricing requirements, confirming terms) should take under 90 seconds on the platform. The platform gets a 50% time premium over conversation, not more.",
      "anti_goals": [
        "DO NOT require the host to navigate to a separate page to accomplish what could be done in a single interaction on the current page.",
        "DO NOT use multi-step processes for tasks that are conceptually simple. If the host thinks of it as one thing ('describe my apartment'), the platform should present it as one thing, not 6 sub-steps.",
        "DO NOT substitute platform jargon for the natural language the host uses. If the host says 'walk-up,' the platform should accept and display 'walk-up,' not force a selection from 'Building Type: High-rise / Mid-rise / Low-rise / Walk-up / Brownstone.'",
        "DO NOT remove the human fallback entirely. Some hosts will always prefer talking to Bryant. The platform should make this easy, not punish it."
      ],
      "success_metric": "Time-to-first-listing: the elapsed time from the host's first platform interaction to a published listing. Target: under 10 minutes for hosts who have already had a phone call with an agent.",
      "confidence": {
        "lens_count": 2
      },
      "status": "pending_review",
      "reinforced_by": [
        {
          "source_element": "guest-works-004",
          "lens": {
            "guest_call": "nneka-call.txt",
            "book_extract": "kahneman-part1-two-systems.txt"
          },
          "similarity": "Both address the gap between conversational interaction speed and platform interaction speed. The existing library element prescribes matching the platform's cognitive speed to the phone call. The new element prescribes eliminating off-platform communication by making the platform faster than texting for date changes.",
          "combined_evidence": "Library evidence: Andreas describes two units in 7 seconds of speech; the platform must match this density. New evidence: Brad texts Nneka to reschedule because a text message takes 10 seconds while the platform has no equivalent fast path. Both use Kahneman's law of least effort as the theoretical basis. The combined insight is: the platform must compete on speed not just with the phone call (host-side) but also with text messaging (guest-side) as the benchmark for interaction efficiency."
        }
      ]
    },
    {
      "id": "works-004",
      "type": "process_pattern",
      "title": "Bridge Human Trust to Digital Trust Through Continuity Priming",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "retention"
      ],
      "problem": "The host's trust is built with Bryant (a person), not Split Lease (a platform). The Andreas call ends with human-to-human promises: 'I'll be reaching out shortly after the call' (6:03), 'You can just email me at any time' (5:44). The platform is never mentioned. When the host encounters the platform for the first time, their System 1 must evaluate a new, unfamiliar entity. Kahneman's priming research shows that prior exposure shapes evaluation of subsequent encounters. But the phone call primed the host for human interaction, not digital interaction. The platform arrives as an unprimed stimulus, meaning System 1 has no positive associative network to draw on. It must build one from scratch, which requires effort and creates risk. This is the human-to-digital handoff problem, and it is the highest-risk transition in the entire host journey.",
      "solution": "Explicitly prime the digital experience from within the human interaction, and design the digital experience to echo the human interaction. This requires two-directional bridging: (1) During the phone call, the agent should mention the platform by name, describe what the host will see ('I will send you a link, and when you open it you will see your two apartments already started for you'), and frame the platform as a continuation of the conversation, not a separate thing. (2) On the platform side, the first screen the host sees should reference the call: the agent's name, the properties discussed, the terms mentioned. The platform should feel like opening a letter from someone you just spoke with, not like landing on a stranger's website. (3) Use the agent's name and photo on the platform. If Bryant is the host's contact, Bryant's face should appear on the dashboard. The platform inherits trust from the person. (4) The first email or message from the platform should come FROM the agent (or appear to), not from 'noreply@splitlease.com.'",
      "evidence": [

... (truncated — full library has 400KB+ of elements)

## Previous Layer Outputs

### layer-0/journey-context.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt",
    "lens_summary": "This lens reveals how host Drew's accommodating behavior and the usability principles of cognitive load reduction intersect to show the importance of making platform interactions feel as effortless as the phone call."
  },
  "phases": {
    "discovery": {
      "what_this_lens_reveals": "This lens does not directly address this phase.",
      "user_state": {
        "emotional_state": "Not addressed by this lens",
        "knowledge_level": "Not addressed by this lens", 
        "commitment_level": "Not addressed by this lens",
        "data_available": "Not addressed by this lens"
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": ["Initial platform contact may not match the accommodating tone of agent interaction"],
        "evidence": "No specific evidence from this lens"
      },
      "key_quotes": []
    },
    "evaluation": {
      "what_this_lens_reveals": "Drew's evaluation happens entirely through conversation with Bryant. The call moves efficiently through key data points (location, price, availability, deposit, guest details) without cognitive friction. Krug's usability laws suggest the platform equivalent must match this conversational efficiency.",
      "user_state": {
        "emotional_state": "Accommodating and open - Drew readily shares information and shows flexibility",
        "knowledge_level": "Knows his space details, pricing, and requirements immediately - no hesitation on key facts",
        "commitment_level": "Highly engaged - provides detailed information and commits to next steps",
        "data_available": "Complete property details, pricing, availability timeline, deposit amount, flexibility on terms"
      },
      "dropout_risk": {
        "level": "low",
        "reasons": ["Host is engaged and accommodating during human interaction"],
        "evidence": "Drew provides all requested information readily and commits to sending additional photos and details"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt:01:03",
          "quote": "That's right. Okay. Got it. And this is an entire apartment, is that right?",
          "relevance": "Shows Drew's clear, direct communication style - no confusion or hesitation"
        },
        {
          "source": "dontmakemethink-usability-laws.txt:22",
          "quote": "We're usually in a hurry. Much of our Web use is motivated by the desire to save time. As a result, Web users tend to act like sharks: They have to keep moving, or they'll die.",
          "relevance": "The phone call operates at this efficient pace - platform must match this speed expectation"
        }
      ]
    },
    "onboarding": {
      "what_this_lens_reveals": "The transition from Drew's efficient phone interaction to platform onboarding faces a critical usability challenge. Drew demonstrated he can process information quickly ('1000. Okay. Got it') but Krug's research shows platform interactions inherently create more cognitive load than conversation.",
      "user_state": {
        "emotional_state": "Expects continued efficiency and accommodation",
        "knowledge_level": "Has completed evaluation, knows platform exists, expects continuation of conversation", 
        "commitment_level": "Committed to next steps but hasn't yet engaged with platform",
        "data_available": "All property information from call, Bryant's contact details, expectation of photo exchange"
      },
      "dropout_risk": {
        "level": "high",
        "reasons": ["Platform may feel slower than phone call", "Unfamiliar interface increases cognitive load", "No guarantee of continued accommodation"],
        "evidence": "Krug: 'Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless, whereas puzzling over things that don't matter to us tends to sap our energy and enthusiasm'"
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt:19",
          "quote": "When you're creating a site, your job is to get rid of the question marks.",
          "relevance": "Drew had zero question marks during the call - platform onboarding must maintain this clarity"
        },
        {
          "source": "drew-call.txt:05:01",
          "quote": "Sounds good. I'll do that. And then I can get back to you with more information on split lease as well as links to the agreements",
          "relevance": "Drew expects follow-up information and links - onboarding is the delivery of this promise"
        }
      ]
    },
    "listing_creation": {
      "what_this_lens_reveals": "Drew demonstrated he has all listing information readily available (photos, video tour capability, detailed property specs). Krug's usability principle of 'Don't make me think' suggests the listing wizard must capture this information with the same efficiency Drew showed verbally.",
      "user_state": {
        "emotional_state": "Ready to provide information, demonstrated willingness to share additional assets",
        "knowledge_level": "Complete property knowledge, has additional photos and video tour capability",
        "commitment_level": "High - already committed to providing more detailed property information",
        "data_available": "1BR/1BA Chelsea apartment, $2000/month, $1000 deposit, availability date, cleaning requirements"
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": ["Wizard may be slower than verbal description", "Multiple steps create cognitive load", "Form fields may not match natural description"],
        "evidence": "Krug: 'We don't read pages. We scan them... scanning is how we find the relevant bits.' Drew provided property details in natural speech - platform must accommodate scanning behavior"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt:04:21",
          "quote": "one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that. Yes. I have more pictures and I can send you",
          "relevance": "Drew has assets ready to share - listing creation should make uploading these assets effortless"
        },
        {
          "source": "dontmakemethink-usability-laws.txt:31-32",
          "quote": "Create a clear visual hierarchy... The more important something is, the more prominent it is... Things that are related logically are also related visually",
          "relevance": "Listing wizard must prioritize fields Drew mentioned first (space type, price, deposit) and group related information"
        }
      ]
    },
    "pricing": {
      "what_this_lens_reveals": "Drew has clear, immediate knowledge of his pricing ($2000/month, $1000 deposit) and showed no hesitation. Krug's research suggests pricing interfaces should match this decisiveness rather than creating unnecessary complexity or choice paralysis.",
      "user_state": {
        "emotional_state": "Confident in pricing decisions",
        "knowledge_level": "Knows exact rates, deposit amounts, no calculation needed",
        "commitment_level": "Decided on pricing, no negotiation needed",
        "data_available": "$2000/month rent, $1000 security deposit, 4-month minimum with extension possibility"
      },
      "dropout_risk": {
        "level": "low",
        "reasons": ["Host has clear pricing in mind"],
        "evidence": "Drew answered pricing questions immediately without hesitation"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt:00:52",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.",
          "relevance": "Immediate confirmation - no deliberation needed on pricing"
        },
        {
          "source": "dontmakemethink-usability-laws.txt:24-25",
          "quote": "We don't choose the best option--we choose the first reasonable option, a strategy known as satisficing... There's not much of a penalty for guessing wrong",
          "relevance": "Drew's quick pricing decisions show satisficing behavior - platform should support this with smart defaults"
        }
      ]
    },
    "proposal_mgmt": {
      "what_this_lens_reveals": "Drew demonstrated flexibility and openness to guest requirements (4-month minimum with extension possibility). Krug's usability principles suggest proposal management must feel as conversational and accommodating as Drew's phone manner.",
      "user_state": {
        "emotional_state": "Accommodating and flexible with guest needs",
        "knowledge_level": "Understands guest requirements (4-month minimum, extension possibility)",
        "commitment_level": "Ready to accommodate reasonable requests",
        "data_available": "Guest timing preferences (4 months + extension), Bryant's vetting information"
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": ["Complex proposal interface may discourage accommodating behavior", "Multiple decision points may create fatigue"],
        "evidence": "Krug: 'most people are going to spend far less time looking at the pages we design than we'd like to think. As a result, if Web pages are going to be effective, they have to work most of their magic at a glance'"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt:05:18",
          "quote": "Uh, so they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "relevance": "Shows Drew's accommodating approach - proposal management should maintain this collaborative tone"
        },
        {
          "source": "dontmakemethink-usability-laws.txt:29",
          "quote": "If you can't make a page self-evident, you at least need to make it self-explanatory",
          "relevance": "Proposal terms and decisions must be immediately clear to maintain Drew's cooperative engagement"
        }
      ]
    },
    "active_lease": {
      "what_this_lens_reveals": "This lens does not directly address this phase.",
      "user_state": {
        "emotional_state": "Not addressed by this lens",
        "knowledge_level": "Not addressed by this lens",
        "commitment_level": "Not addressed by this lens", 
        "data_available": "Not addressed by this lens"
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": ["Platform management tools may not match Drew's accommodating communication style"],
        "evidence": "No specific evidence from this lens"
      },
      "key_quotes": []
    },
    "retention": {
      "what_this_lens_reveals": "Drew's willingness to provide additional photos and video tours suggests openness to ongoing platform engagement. Krug's usability principles indicate that retention depends on continued effortless interactions.",
      "user_state": {
        "emotional_state": "Willing to invest time in providing better assets and information",
        "knowledge_level": "Understands platform value proposition through Bryant's explanation",
        "commitment_level": "Open to ongoing relationship",
        "data_available": "Contact information exchanged, additional photo assets available"
      },
      "dropout_risk": {
        "level": "medium", 
        "reasons": ["Platform complexity may discourage continued engagement", "Poor usability may make phone calls seem easier"],
        "evidence": "Krug: 'your site may not have been that easy to find in the first place and visitors may not know of an alternative... who's to say that the competition will be any less frustrating?'"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt:04:38",
          "quote": "Awesome. Yeah, that would be great.",
          "relevance": "Enthusiasm for providing additional assets suggests willingness to engage further with platform"
        },
        {
          "source": "dontmakemethink-usability-laws.txt:19",
          "quote": "Making pages self-evident is like having good lighting in a store: it just makes everything seem better",
          "relevance": "Retention depends on maintaining the positive experience Drew had during the phone call"
        }
      ]
    }
  },
  "cross_phase_patterns": [
    {
      "pattern": "Efficiency-to-Friction Gap",
      "phases_affected": ["evaluation", "onboarding", "listing_creation", "proposal_mgmt"],
      "evidence": "Drew's call operated at conversational speed with zero cognitive load (immediate answers, no hesitation). Krug's research shows platform interactions inherently create more friction. The gap between call efficiency and platform complexity is a consistent dropout risk."
    },
    {
      "pattern": "Accommodation Expectation",
      "phases_affected": ["evaluation", "pricing", "proposal_mgmt", "retention"],
      "evidence": "Drew consistently showed flexibility ('Four months and then maybe the ability to extend. Okay. Okay. Sounds good.'). This accommodating stance must be supported by platform design that makes accommodation feel easy, not burdensome."
    },
    {
      "pattern": "Information Readiness vs Platform Friction",
      "phases_affected": ["evaluation", "listing_creation", "pricing"],
      "evidence": "Drew had all information immediately available (pricing, property details, photos, video capability) but platform interfaces may slow down this information transfer. Krug: 'We're usually in a hurry... We just don't have the time to read any more than necessary.'"
    }
  ],
  "sources_consulted": [
    "drew-call.txt - 6-minute host call with Drew about Chelsea 1BR listing, showing efficient information exchange and accommodating attitude",
    "dontmakemethink-usability-laws.txt - Steve Krug's usability principles about cognitive load, scanning behavior, satisficing, and the importance of effortless user experiences",
    "Existing element library - Previous patterns about System 1 trust gates, depleted users, conversational speed matching, and human-to-digital trust bridging"
  ]
}

### layer-1/works-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "works-005",
      "type": "process_pattern",
      "title": "Conversational Speed Parity for Information Transfer",
      "journey_phases": ["evaluation", "listing_creation", "pricing"],
      "problem": "The host demonstrated complete information readiness during the phone call, providing all essential data within seconds: property type (1BR/1BA), location (Chelsea), pricing ($2000/month), deposit ($1000), availability, and asset availability (more photos, video tour capability). This information transfer happened at natural conversational speed with zero cognitive friction. Platform interfaces traditionally require form-filling, dropdown navigation, and multi-step processes that are inherently slower than speech. When the platform takes longer to capture information the host can provide instantly, it creates a perceived inefficiency that makes the human interaction seem superior to the digital one.",
      "solution": "Design information capture to match or exceed the speed of verbal communication. This means: (1) Use rapid-input patterns for data the host knows immediately: quick-select chips for property types, slider or stepper controls for pricing, toggle switches for amenities. (2) Allow bulk information entry: if the host says 'Chelsea 1BR/1BA $2000/month $1000 deposit' in 3 seconds, they should be able to type or select this information in under 10 seconds. (3) Implement smart parsing: accept natural language input like 'Chelsea 1BR 2000' and auto-structure it into proper fields. (4) Provide immediate visual confirmation after each input, mirroring conversational acknowledgment ('Got it'). (5) Enable asset upload through drag-and-drop or camera integration to match Drew's offer to 'send you pictures' with equivalent platform ease.",
      "evidence": [
        {
          "source": "drew-call.txt:00:45-01:03",
          "type": "host_call",
          "quote": "Uh, the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay. Got it. And this is an entire apartment, is that right?",
          "insight": "Drew confirms all core listing data (type, location, price, apartment vs room) in 18 seconds of efficient back-and-forth. Platform must capture this same data with comparable speed."
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "We're usually in a hurry. Much of our Web use is motivated by the desire to save time. As a result, Web users tend to act like sharks: They have to keep moving, or they'll die. We just don't have the time to read any more than necessary.",
          "insight": "Users expect platform interactions to be faster than alternative methods (phone calls), not slower. Speed is not just preference but expectation."
        }
      ],
      "priority": "high",
      "user_goal": "Enter my property information as quickly as I can say it, without the platform slowing me down with unnecessary steps or complex interfaces",
      "company_goal": "Reduce listing creation time to under 3 minutes for hosts who have all information ready, making the platform demonstrably faster than email or phone-based listing",
      "time_budget": "Core property data entry (type, location, price, deposit) should take under 45 seconds. Complete listing with photos should take under 5 minutes.",
      "anti_goals": [
        "DO NOT require separate pages or steps for related information that the host thinks of as a single unit",
        "DO NOT use dropdown menus for data the host knows exactly (like their own address or rental price)",
        "DO NOT make the host wait for page loads between related inputs",
        "DO NOT require the host to format their information to match platform expectations - accept natural formats and auto-structure them"
      ],
      "success_metric": "Information transfer efficiency ratio: platform input time divided by equivalent verbal communication time. Target ratio: under 3x (if host can say it in 10 seconds, platform should capture it in under 30 seconds)."
    },
    {
      "id": "works-006",
      "type": "process_pattern",
      "title": "Accommodation Interface Design",
      "journey_phases": ["proposal_mgmt", "active_lease", "retention"],
      "problem": "Drew demonstrated a consistently accommodating communication style throughout the call: immediately agreeing to 4-month terms, offering to provide additional photos and video tours, and showing flexibility on extension possibilities. This accommodating behavior is a host strength that drives guest satisfaction and lease success. However, traditional platform interfaces are designed for efficiency and control, not accommodation. They present binary choices (approve/decline), require definitive decisions, and lack the conversational nuance that allows hosts to express flexibility. When the platform makes accommodation feel difficult or rigid, accommodating hosts like Drew will default to off-platform communication, defeating the platform's goal of managing the relationship digitally.",
      "solution": "Design interaction patterns that make accommodation feel natural and easy. This means: (1) Replace binary approve/decline buttons with contextual response options: 'Yes, that works', 'I can make that work if...', 'Let me suggest...', 'Not possible, but here's an alternative'. (2) Provide template responses for common accommodating scenarios: schedule flexibility, minor lease modifications, guest requests. (3) Enable partial acceptance with counter-offers: if a guest requests a 3-month lease but the host prefers 4 months, make it easy to respond 'I'd prefer 4 months but could do 3 if needed'. (4) Include accommodation history in the host's profile to surface and reinforce their flexible approach. (5) Design confirmation flows that acknowledge accommodation rather than just recording decisions.",
      "evidence": [
        {
          "source": "drew-call.txt:05:18-05:32",
          "type": "host_call",
          "quote": "Uh, so they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew shows immediate accommodation without negotiation or resistance. Platform interactions must preserve this collaborative spirit rather than forcing adversarial decision-making."
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book", 
          "quote": "We don't make optimal choices. We satisfice... There's not much of a penalty for guessing wrong on a Web site... making satisficing an effective strategy.",
          "insight": "Accommodating hosts like Drew use satisficing behavior - they'll accept the first reasonable option rather than optimizing. Platform should provide good default accommodations, not force complex negotiations."
        }
      ],
      "priority": "medium",
      "user_goal": "Easily accommodate reasonable guest requests without the platform making me feel like I'm being difficult or creating extra work",
      "company_goal": "Increase guest satisfaction and lease completion rates by enabling host accommodation behaviors that were previously only possible through direct communication",
      "time_budget": "Responding to a guest request with accommodation should take under 60 seconds, including any minor customization or counter-proposal",
      "anti_goals": [
        "DO NOT force hosts into binary approve/decline decisions for requests that could be partially accommodated",
        "DO NOT make accommodation feel like a special case or extra work - it should feel like the natural response option",
        "DO NOT require hosts to write custom responses for common accommodation scenarios",
        "DO NOT hide the host's accommodation history from guests who would appreciate knowing they're working with a flexible host"
      ],
      "success_metric": "Accommodation completion rate: percentage of guest requests that receive accommodating responses (partial or full acceptance) vs rejection. Target: above 75% for hosts who demonstrated accommodation behavior in their initial calls."
    },
    {
      "id": "works-007",
      "type": "process_pattern", 
      "title": "Asset Transfer Friction Elimination",
      "journey_phases": ["listing_creation", "retention"],
      "problem": "Drew demonstrated immediate readiness to share additional visual assets: 'Yes. I have more pictures and I can send you' (04:38) and expressed capability for video tours. This asset sharing happened naturally within the conversation flow - no separate process, no technical barriers, just immediate willingness to provide better information. Platform asset upload typically involves file selection, format checking, upload progress, and approval workflows that create friction where Drew experienced none. This friction gap is particularly problematic because visual assets are critical for listing success, and hosts like Drew who offer additional assets should be encouraged, not discouraged by platform complexity.",
      "solution": "Eliminate all friction between asset availability and asset deployment. This means: (1) Enable instant asset sharing: camera integration for real-time photo capture, drag-and-drop from any source, email-to-upload workflows. (2) Auto-optimize uploaded assets without host intervention: resize, compress, enhance lighting automatically. (3) Allow immediate asset updates: if Drew says 'I have more pictures,' he should be able to add them to his live listing within 2 clicks. (4) Provide asset improvement suggestions: 'Your listing could benefit from a video tour' with one-click recording initiation. (5) Make asset sharing feel collaborative, not transactional: 'Would you like to add these photos to help guests understand your space better?' vs 'Upload additional images (max 10MB, .jpg format only)'.",
      "evidence": [
        {
          "source": "drew-call.txt:04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that. Yes. I have more pictures and I can send you",
          "insight": "Drew's immediate positive response to asset requests shows hosts are willing to provide better materials when the process feels easy and collaborative."
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works--no matter how badly--we tend not to look for a better way.",
          "insight": "If asset upload is friction-filled during listing creation, hosts will stick to minimal assets rather than improving their listings over time. The initial experience determines ongoing behavior."
        }
      ],
      "priority": "medium", 
      "user_goal": "Share additional photos and materials as easily as I can offer to send them in conversation, without technical barriers or complex workflows",
      "company_goal": "Increase listing quality and conversion rates by making high-quality asset sharing effortless for willing hosts, particularly those who demonstrate asset readiness",
      "time_budget": "Adding photos to an existing listing should take under 30 seconds. Creating a video tour should take under 3 minutes from decision to published asset.",
      "anti_goals": [
        "DO NOT require hosts to learn file management, image editing, or upload workflows to improve their listings",
        "DO NOT separate asset management from the main listing workflow - adding photos should feel like part of describing the space, not a separate technical task",
        "DO NOT make hosts wait for approval or processing before seeing their assets live on the listing",
        "DO NOT require hosts to understand technical specifications (file formats, sizes, dimensions) to share assets they already have"
      ],
      "success_metric": "Asset enhancement rate: percentage of hosts who add additional assets (photos, video, virtual tour) after their initial listing is published. Target: above 60% for hosts who indicated additional asset availability during onboarding calls."
    }
  ]
}

### layer-2/communicates-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "communicates-001",
      "type": "info_architecture",
      "title": "Immediate Recognition Before Instruction",
      "journey_phases": ["onboarding", "listing_creation", "proposal_mgmt"],
      "problem": "When Drew transitions from the phone call to the platform, his System 1 must instantly assess whether this digital environment is the continuation of his conversation with Bryant or something entirely new. Traditional platform onboarding opens with instructions ('Welcome! Let's create your listing') rather than recognition ('Here's the Chelsea apartment you discussed with Bryant'). This creates a cognitive gap where the host must mentally bridge the conversation context to the platform context. Krug's research shows that users spend far less time reading than designers expect, so platforms have only seconds to establish continuity before the host's attention moves elsewhere.",
      "solution": "Structure information hierarchy to prioritize recognition over instruction at every phase entry point. The first information the host sees should acknowledge what they already did or provided, then guide toward what comes next. This means: (1) Lead with context, not action: 'Your Chelsea 1BR apartment' before 'Complete your listing'. (2) Reference the conversation: 'As discussed with Bryant' or 'Your $2000/month space'. (3) Show progress made: 'Property details confirmed' before 'Add photos'. (4) Use the host's own words from the call as headings and labels rather than platform terminology.",
      "evidence": [
        {
          "source": "drew-call.txt:05:01",
          "type": "host_call",
          "quote": "I can get back to you with more information on split lease as well as links to the agreements",
          "insight": "Bryant promised specific follow-up, but the platform has no way to reference this promise or show that it's delivering on it, creating a disconnect between conversation and platform"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "When we're creating sites, we act as though people are going to pore over each page, reading our finely crafted text, figuring out how we've organized things, and weighing their options before deciding which link to click. What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest",
          "insight": "Hosts won't read introductory text to understand context - the page hierarchy must communicate continuity through scanning-friendly recognition cues"
        }
      ],
      "priority": "high",
      "hierarchy_principle": "Context recognition always comes before action instruction. Show what the host already provided (property type, location, pricing) before asking for what they need to provide (photos, description, amenities)",
      "disclosure_pattern": "Progressive revelation anchored in prior knowledge: start with confirmed information, then layer new requirements one at a time",
      "cognitive_load_constraint": "First-screen information must be scannable in under 5 seconds. Maximum 3 pieces of new information per screen after recognition anchor",
      "scan_order": ["Property identifier (their own words)", "Conversation reference (Bryant's name)", "Progress indicator", "Next action"],
      "exclude": ["Generic welcome messages", "Platform feature explanations", "Legal disclaimers", "Navigation instructions"]
    },
    {
      "id": "communicates-002", 
      "type": "info_architecture",
      "title": "Efficiency Signal Hierarchy",
      "journey_phases": ["evaluation", "listing_creation", "pricing"],
      "problem": "Drew's phone call demonstrated information efficiency - he confirmed property details, pricing, and availability within 60 seconds of conversation. The platform must communicate that it operates at equal or superior efficiency, but traditional web hierarchies emphasize completeness over speed. When hosts see lengthy forms, multi-step wizards, or detailed field requirements, their System 1 assessment is that the platform will be slower than the conversation they just had. This perception, formed within seconds of the first platform interaction, becomes difficult to overcome even if the actual process is reasonably fast.",
      "solution": "Structure information architecture to signal speed and efficiency through visual hierarchy and progressive disclosure. Essential information should be visually prominent and instantly actionable, while comprehensive options remain accessible but secondary. This means: (1) Lead with the fastest path: one-line property entry before detailed form. (2) Show time estimates: 'Complete in under 2 minutes' prominently displayed. (3) Minimize visible fields initially: show only what Drew provided verbally, expand only when needed. (4) Use action-oriented rather than form-oriented language: 'Publish your Chelsea listing' not 'Complete listing form'.",
      "evidence": [
        {
          "source": "drew-call.txt:00:45-01:03",
          "type": "host_call", 
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.",
          "insight": "Drew confirmed all essential listing data in 18 seconds. Platform hierarchy must signal that this same information can be processed with similar speed"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "We're usually in a hurry. Much of our Web use is motivated by the desire to save time. As a result, Web users tend to act like sharks: They have to keep moving, or they'll die.",
          "insight": "Information architecture must communicate speed through visual cues before hosts begin the actual process"
        }
      ],
      "priority": "high", 
      "hierarchy_principle": "Speed indicators and fast-path options take visual priority over comprehensive options. Essential actions appear larger and more prominent than optional enhancements",
      "disclosure_pattern": "Lead with minimal viable input, expand on demand. Show progress constantly to maintain speed perception",
      "cognitive_load_constraint": "Initial screen should require no more than 3 decisions. Additional complexity revealed only after core path is established",
      "scan_order": ["Time estimate", "Essential input", "Primary action button", "Optional enhancements link"],
      "exclude": ["Detailed field explanations", "Optional information until requested", "Legal requirements until completion", "Advanced configuration options"]
    },
    {
      "id": "communicates-003",
      "type": "info_architecture", 
      "title": "Accommodation Affordance Architecture",
      "journey_phases": ["proposal_mgmt", "active_lease"],
      "problem": "Drew demonstrated immediate accommodation behavior - agreeing to 4-month terms and extension possibilities without hesitation. Traditional platform interfaces for proposal management emphasize control and finality (Approve/Decline buttons), which doesn't match the collaborative, flexible communication style that makes hosts like Drew valuable. The information hierarchy suggests that decisions are binary and permanent, when accommodating hosts think in terms of flexibility and options. This architectural mismatch discourages the very behavior (accommodation) that drives guest satisfaction.",
      "solution": "Structure proposal and lease management interfaces to make accommodation the visually prominent and easiest response option. This means: (1) Replace binary decision hierarchies with collaborative response hierarchies. (2) Make flexibility options more prominent than rigid options: 'I can make that work' appears larger than 'Decline'. (3) Group accommodation tools visually: counter-offers, partial acceptance, and alternative suggestions clustered together. (4) Show accommodation history to reinforce this behavior pattern. (5) Use collaborative language in headers: 'Work together on lease terms' not 'Review proposal'.",
      "evidence": [
        {
          "source": "drew-call.txt:05:18-05:32",
          "type": "host_call",
          "quote": "they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew's immediate positive response shows accommodation as his default mode, but platform interfaces typically present rejection as equally prominent to acceptance"
        },
        {
          "source": "dontmakemethink-usability-laws.txt", 
          "type": "book",
          "quote": "We don't make optimal choices. We satisfice... As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it",
          "insight": "Accommodating hosts will click the first reasonable response option. Platform hierarchy must ensure accommodation options appear first and most prominently"
        }
      ],
      "priority": "medium",
      "hierarchy_principle": "Collaborative responses take visual priority over binary decisions. Accommodation tools grouped prominently, rejection options available but secondary",
      "disclosure_pattern": "Lead with accommodation options, reveal rejection only if accommodation is declined. Show flexibility tools before final decisions",
      "cognitive_load_constraint": "Maximum 2 decision points per proposal response. Accommodation should require only 1 click plus optional customization",
      "scan_order": ["Guest request summary", "Accommodation response options", "Custom counter-offer tools", "Decline option"],
      "exclude": ["Legal warnings until acceptance", "Complex negotiation flows", "Multiple approval steps", "Detailed lease modification tools until needed"]
    }
  ]
}

### layer-3/looks-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "looks-001",
      "type": "visual_pattern",
      "title": "Conversational Speed Visual Confirmation",
      "journey_phases": ["evaluation", "listing_creation", "pricing"],
      "problem": "Drew confirmed all essential listing details (1BR/1BA Chelsea, $2000/month, $1000 deposit) in 18 seconds of rapid conversation with immediate acknowledgments from Bryant ('Yep', 'Got it', 'Okay'). When hosts transition to the platform, they expect the same rapid feedback loop. Traditional form interfaces provide no visual confirmation until submission, creating a speed perception gap where the platform feels slower than conversation despite potentially being faster in total time.",
      "solution": "Design immediate visual acknowledgment that matches conversational confirmation speed. Use real-time visual feedback for each input: green check marks for completed fields, live preview updates as the host types, progress indicators that advance with each input. Typography should emphasize speed through quick visual scanning: use the platform's mono font (IBM Plex Mono) for data confirmation to signal precision and reliability. Color changes should happen within 100ms of input to match conversational response time.",
      "evidence": [
        {
          "source": "drew-call.txt:00:45-01:03",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.",
          "insight": "Six verbal confirmations in 18 seconds - platform must provide equivalent visual confirmation density"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability",
          "quote": "When you're creating a site, your job is to get rid of the question marks... all the thought balloons over my head say things like 'OK, there's the ___. And that's a ___. And there's the thing that I want.'",
          "insight": "Visual hierarchy must eliminate uncertainty about whether inputs were received and processed correctly"
        }
      ],
      "priority": "high",
      "tokens": {
        "colors": ["accent", "accent-light", "ink", "signal-info"],
        "typography": ["IBM Plex Mono 14px 500", "Outfit 16px 400"],
        "spacing": ["sm", "md"],
        "new_tokens_needed": ["confirmation-green: #4B47CE", "input-active-border: #2d5a8a"]
      },
      "contrast_requirements": "WCAG AA minimum 4.5:1 for confirmation text on light backgrounds",
      "visual_hierarchy_rule": "Visual confirmations appear immediately adjacent to inputs with higher visual weight than placeholder text but lower weight than field labels",
      "brand_alignment": "Uses warm, confident colors from taste model. Mono font for data confirmation signals trustworthiness and precision per brand personality."
    },
    {
      "id": "looks-002", 
      "type": "visual_pattern",
      "title": "Accommodation Signal Typography",
      "journey_phases": ["proposal_mgmt", "active_lease"],
      "problem": "Drew demonstrated immediate accommodation ('Four months and then maybe the ability to extend. Okay. Okay. Sounds good.') using collaborative language. Platform proposal interfaces typically present binary options with equal visual weight (Approve/Decline buttons of identical size and color). This visual equality suggests that rejection is as appropriate as accommodation, contradicting the collaborative tone that makes accommodating hosts valuable.",
      "solution": "Use typographic hierarchy to make accommodation feel natural and prominent. Primary accommodation responses should use the platform's serif font (Instrument Serif) at larger sizes to convey personality and warmth. Rejection options should use sans-serif at smaller sizes. Color hierarchy should emphasize accommodation: use the warm accent color for positive responses, neutral colors for alternatives. Button sizing should reflect preference: accommodation actions larger than rejection actions.",
      "evidence": [
        {
          "source": "drew-call.txt:05:18-05:32",
          "type": "host_call", 
          "quote": "they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Immediate positive response with no hesitation - visual design should make this the obvious first choice"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability",
          "quote": "We don't make optimal choices. We satisfice... As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it",
          "insight": "Accommodating hosts will click the first reasonable option - accommodation must be visually prioritized"
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": ["accent", "accent-bright", "ink-soft", "ink-muted"],
        "typography": ["Instrument Serif 18px 600", "Outfit 14px 500"],
        "spacing": ["md", "lg"],
        "new_tokens_needed": ["accommodation-green: #3a7a52", "neutral-response: #8a857e"]
      },
      "contrast_requirements": "WCAG AA for all interactive elements, AAA preferred for primary accommodation actions",
      "visual_hierarchy_rule": "Accommodation options appear first in reading order, use larger font sizes, and occupy more visual space than alternative responses",
      "brand_alignment": "Serif typography adds personality for accommodation responses, maintaining warm and trustworthy brand personality while enabling confident decision-making."
    },
    {
      "id": "looks-003",
      "type": "visual_pattern", 
      "title": "Asset Upload Enthusiasm Visualization",
      "journey_phases": ["listing_creation", "retention"],
      "problem": "Drew immediately offered additional photos and video tours ('Yes. I have more pictures and I can send you') with enthusiasm. Traditional upload interfaces feel technical and transactional, using generic icons and process-oriented language that doesn't match the collaborative spirit hosts show when offering additional assets.",
      "solution": "Design asset upload areas to feel collaborative rather than technical. Use warm background colors and encouraging typography. Show asset previews immediately with soft shadows and rounded corners from the design system. Use the serif font for encouraging messages ('Your photos help guests understand your space') and mono font for technical specifications only when necessary. Progress indicators should feel celebratory, not mechanical.",
      "evidence": [
        {
          "source": "drew-call.txt:04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that. Yes. I have more pictures and I can send you",
          "insight": "Immediate positive response to asset requests - interface should encourage this willingness"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability",
          "quote": "If we find something that works, we stick to it. Once we find something that works--no matter how badly--we tend not to look for a better way",
          "insight": "First asset upload experience determines ongoing behavior - must feel rewarding, not burdensome"
        }
      ],
      "priority": "medium",
      "tokens": {
        "colors": ["surface-warm", "accent-light", "ink", "border"],
        "typography": ["Instrument Serif 16px 500", "Outfit 14px 400", "IBM Plex Mono 12px 400"],
        "spacing": ["md", "lg", "xl"],
        "new_tokens_needed": ["upload-success: #e8f0eb", "upload-progress: #3a7a52"]
      },
      "contrast_requirements": "WCAG AA for all instructional text, with high contrast for upload status indicators",
      "visual_hierarchy_rule": "Upload areas use generous white space and soft shadows to feel welcoming. Success states receive highest visual emphasis through color and typography.",
      "brand_alignment": "Warm colors and serif typography for encouragement align with trustworthy, premium-accessible brand personality. Technical details in mono font maintain precision without overwhelming warmth."
    }
  ]
}

### layer-4/behaves-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "behaves-001",
      "type": "interaction_pattern",
      "title": "Conversational Response Time Matching",
      "journey_phases": ["evaluation", "onboarding", "listing_creation"],
      "problem": "Drew's phone call operated at natural conversational speed with immediate acknowledgments ('Yep', 'Got it', 'Okay') happening within 200-500ms of his statements. When hosts transition to the platform, they expect similar response immediacy. Traditional web interfaces have loading states, form validation delays, and multi-second page transitions that feel sluggish compared to conversation. This response time gap makes the platform feel inferior to human interaction.",
      "solution": "Design all platform interactions to respond within conversational timing windows. Form inputs should acknowledge within 100ms, confirmations within 300ms, and page transitions within 800ms. Use optimistic UI patterns: show success immediately, handle failures gracefully in background.",
      "evidence": [
        {
          "source": "drew-call.txt:00:45-01:03",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.",
          "insight": "Six verbal acknowledgments in 18 seconds demonstrate the expected response cadence - platform must match this rhythm"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability",
          "quote": "We're usually in a hurry. Much of our Web use is motivated by the desire to save time. As a result, Web users tend to act like sharks: They have to keep moving, or they'll die.",
          "insight": "Slow response times violate users' fundamental expectation of web efficiency"
        }
      ],
      "priority": "high",
      "states": {
        "default": "All interactive elements ready to respond immediately, with subtle hover states indicating responsiveness",
        "loading": "Skeleton screens and progressive loading, never blank screens or spinners for under 800ms operations",
        "empty": "Immediate placeholder content with clear next actions, no waiting for data fetch completion",
        "error": "Inline error messages appearing within 300ms, with one-click retry options",
        "success": "Immediate visual confirmation with micro-animations completing within 400ms"
      },
      "transition_principle": "All state changes happen faster than users can perceive as 'slow' - under 300ms for acknowledgments, under 800ms for page changes",
      "timing": {
        "response_target": "100ms for input acknowledgment, 300ms for form validation, 800ms for navigation",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "rationale": "Matches natural conversation timing where acknowledgments are nearly instantaneous"
      },
      "journey_state_awareness": "Response timing becomes more critical as hosts progress through journey - early phases set expectations that later phases must maintain",
      "edge_cases": ["Network latency over 1 second", "Large file uploads", "Complex validation scenarios", "Server errors during peak usage"]
    },
    {
      "id": "behaves-002",
      "type": "interaction_pattern",
      "title": "Accommodation-Biased Response Design",
      "journey_phases": ["proposal_mgmt", "active_lease"],
      "problem": "Drew demonstrated immediate accommodation behavior without deliberation ('Four months and then maybe the ability to extend. Okay. Okay. Sounds good.'). Traditional interfaces present approval and rejection as equal options, forcing accommodating hosts to actively choose accommodation when it should be their natural default response.",
      "solution": "Design interaction flows that make accommodation the path of least resistance. Pre-select accommodating responses, make positive actions require fewer clicks than negative ones, and use progressive disclosure to reveal rejection options only after accommodation is considered.",
      "evidence": [
        {
          "source": "drew-call.txt:05:18-05:32", 
          "type": "host_call",
          "quote": "they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Zero hesitation on accommodation - interface should mirror this immediate positive response"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability", 
          "quote": "We don't make optimal choices. We satisfice... As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it",
          "insight": "Accommodating hosts will click the first reasonable option - design must ensure that option is accommodation"
        }
      ],
      "priority": "medium",
      "states": {
        "default": "Accommodation options pre-selected or prominently displayed, with secondary options available but less prominent",
        "loading": "Progressive enhancement showing accommodation tools first, additional options loading in background",
        "empty": "Encouraging empty states that suggest collaboration: 'When guests send requests, you can easily work together here'",
        "error": "Error recovery focuses on accommodation: 'Let's help you work this out' rather than 'Request denied'", 
        "success": "Celebration of successful accommodation with positive reinforcement and impact metrics"
      },
      "transition_principle": "Accommodation path requires fewer transitions than rejection path - positive responses should be achievable in 1-2 interactions maximum",
      "timing": {
        "response_target": "500ms for accommodation confirmation, 800ms for rejection workflows",
        "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "rationale": "Spring easing for accommodation confirmations feels celebratory and encouraging"
      },
      "journey_state_awareness": "Early accommodation behaviors should be reinforced and made easier over time - platform learns host's accommodation patterns",
      "edge_cases": ["Requests that legally cannot be accommodated", "Conflicting guest requests", "Host capacity limitations", "Platform policy violations"]
    },
    {
      "id": "behaves-003",
      "type": "interaction_pattern",
      "title": "Asset Enhancement Momentum Preservation",
      "journey_phases": ["listing_creation", "retention"],
      "problem": "Drew immediately offered additional visual assets ('Yes. I have more pictures and I can send you') showing strong momentum to improve listing quality. Traditional upload interfaces break this momentum with technical requirements, format restrictions, and multi-step approval processes that discourage the very behavior that improves listing performance.",
      "solution": "Design asset upload to maintain and amplify the host's enthusiasm. Enable immediate drag-and-drop from any source, auto-optimize all formats, provide instant preview, and make improvements visible immediately in the live listing.",
      "evidence": [
        {
          "source": "drew-call.txt:04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that. Yes. I have more pictures and I can send you",
          "insight": "Immediate enthusiastic response to asset requests - platform must capitalize on this momentum without creating friction"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "usability",
          "quote": "If we find something that works, we stick to it. Once we find something that works--no matter how badly--we tend not to look for a better way",
          "insight": "First asset upload experience determines ongoing behavior - must feel rewarding and effortless"
        }
      ],
      "priority": "medium",
      "states": {
        "default": "Drag-and-drop zones always visible and welcoming, with encouraging micro-copy about asset impact",
        "loading": "Optimistic upload with immediate preview while processing happens in background",
        "empty": "Inspiring empty states showing potential: 'Photos help guests choose your space' with example galleries",
        "error": "Automatic retry with format conversion, never requiring host to fix technical issues",
        "success": "Immediate celebration with listing preview showing enhanced appearance and potential impact metrics"
      },
      "transition_principle": "Asset upload should feel like enhancement, not work - each addition should make the host feel more accomplished",
      "timing": {
        "response_target": "200ms for drag recognition, 500ms for upload preview, 1000ms for live listing update",
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "rationale": "Smooth easing maintains flow state during asset enhancement"
      },
      "journey_state_awareness": "Early asset success should trigger suggestions for additional improvements - build momentum rather than one-and-done uploads",
      "edge_cases": ["Very large file uploads", "Poor quality images requiring enhancement", "Video format compatibility", "Storage quota limits"]
    }
  ]
}

### layer-5/feels-elements.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "elements": [
    {
      "id": "feels-001",
      "type": "emotional_element",
      "title": "Conversational Confidence Continuity",
      "journey_phases": ["evaluation", "onboarding", "listing_creation"],
      "problem": "Drew demonstrated complete confidence during the phone call, providing all information immediately without hesitation or uncertainty. When hosts transition to the platform, they expect to maintain this same confident efficiency. Traditional platform interfaces introduce cognitive friction through unfamiliar terminology, multi-step processes, and delayed feedback that undermines the confidence established during human interaction.",
      "solution": "Design every platform interaction to preserve and amplify the confident tone established in the phone call. Use immediate acknowledgment, familiar language patterns, and streamlined flows that make hosts feel as competent digitally as they did conversationally.",
      "evidence": [
        {
          "source": "drew-call.txt:00:45-01:03",
          "type": "host_call",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. Yep. In Chelsea. Yep. Yep. To confirm that would be a 2000 a month, I think is what it's listed here. That's right. Okay.",
          "insight": "Drew provides all core information in 18 seconds with zero hesitation - this confidence must transfer to platform interactions"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless, whereas puzzling over things that don't matter to us tends to sap our energy and enthusiasm",
          "insight": "Platform complexity directly undermines user confidence and enthusiasm"
        }
      ],
      "priority": "high",
      "target_emotion": "confidence",
      "emotion_rationale": "Confidence enables quick decision-making and prevents abandonment during platform transitions.",
      "copy_guidelines": {
        "voice": "direct, confirming, familiar",
        "do": ["Use the host's own words from the call", "Provide immediate acknowledgment", "Reference specific conversation details"],
        "dont": ["Introduce new terminology", "Ask for information already provided", "Use generic platform language"],
        "example_good": "Your Chelsea 1BR apartment - $2000/month",
        "example_bad": "Complete your property listing details"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
        "feel_description": "smooth and immediate, like natural conversation rhythm",
        "duration_range": "100-300ms"
      },
      "tension_relief": {
        "tension_point": "First platform interaction after confident phone call",
        "relief_point": "Immediate recognition of conversation context",
        "timing": "Relief must occur within first 2 seconds of platform interaction"
      },
      "personalization_signals": ["Host's property details from call", "Agent's name (Bryant)", "Specific pricing mentioned", "Timeline discussed"],
      "anti_patterns": [
        {
          "pattern": "Generic welcome screens with no conversation context",
          "reason": "Breaks confidence by ignoring established relationship",
          "example_bad": "Welcome to Split Lease! Let's get started."
        }
      ]
    },
    {
      "id": "feels-002",
      "type": "emotional_element",
      "title": "Accommodation Appreciation",
      "journey_phases": ["proposal_mgmt", "active_lease"],
      "problem": "Drew demonstrated natural accommodation behavior, immediately agreeing to guest terms and offering flexibility. Platform interfaces typically present accommodation as extra work or complexity rather than recognizing it as valuable host behavior that should be celebrated and encouraged.",
      "solution": "Design proposal management interfaces to make hosts feel appreciated for their flexibility rather than burdened by requests. Frame accommodation as a strength and provide positive reinforcement when hosts demonstrate collaborative behavior.",
      "evidence": [
        {
          "source": "drew-call.txt:05:18-05:32",
          "type": "host_call",
          "quote": "they've indicated, ideally they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Immediate positive response with no resistance - this collaborative spirit should be reinforced, not taken for granted"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "We don't make optimal choices. We satisfice... There's not much of a penalty for guessing wrong",
          "insight": "Accommodating hosts will choose the first reasonable response - make accommodation feel like the natural, appreciated choice"
        }
      ],
      "priority": "medium",
      "target_emotion": "appreciation",
      "emotion_rationale": "Feeling appreciated for flexibility encourages continued accommodation behavior that drives guest satisfaction.",
      "copy_guidelines": {
        "voice": "grateful, collaborative, reinforcing",
        "do": ["Acknowledge flexibility as valuable", "Thank hosts for accommodation", "Show positive guest impact"],
        "dont": ["Treat accommodation as expected", "Focus on platform convenience", "Make flexibility feel like work"],
        "example_good": "Thanks for being flexible with Ariel and Amber's timeline",
        "example_bad": "Please review and respond to this proposal"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "feel_description": "celebratory and warm, like positive recognition",
        "duration_range": "400-600ms"
      },
      "tension_relief": {
        "tension_point": "Guest request requiring host decision",
        "relief_point": "Positive acknowledgment of host's accommodating response",
        "timing": "Appreciation should appear immediately after accommodation action"
      },
      "personalization_signals": ["Specific guest names from conversation", "Host's previous flexible behaviors", "Guest satisfaction impact", "Accommodation success stories"],
      "anti_patterns": [
        {
          "pattern": "Treating all proposals identically regardless of host accommodation history",
          "reason": "Misses opportunity to reinforce valuable behavior",
          "example_bad": "New proposal requires your response"
        }
      ]
    },
    {
      "id": "feels-003",
      "type": "emotional_element",
      "title": "Asset Enthusiasm Amplification",
      "journey_phases": ["listing_creation", "retention"],
      "problem": "Drew immediately offered additional photos and video tours with genuine enthusiasm, but traditional upload interfaces feel technical and transactional, dampening the host's natural willingness to improve their listing quality.",
      "solution": "Design asset upload experiences to amplify and celebrate the host's enthusiasm for sharing additional materials. Make improvement feel rewarding and collaborative rather than technical and burdensome.",
      "evidence": [
        {
          "source": "drew-call.txt:04:21-04:38",
          "type": "host_call",
          "quote": "one more question I had was about, uh, pictures of the space and wondered if you had any more, um, that you could share with me or maybe like a video tour or something like that. Yes. I have more pictures and I can send you",
          "insight": "Immediate enthusiastic offer of additional assets - platform should capitalize on this momentum, not create friction"
        },
        {
          "source": "dontmakemethink-usability-laws.txt",
          "type": "book",
          "quote": "If we find something that works, we stick to it. Once we find something that works--no matter how badly--we tend not to look for a better way",
          "insight": "First asset upload experience determines ongoing behavior - must feel rewarding and successful"
        }
      ],
      "priority": "medium",
      "target_emotion": "enthusiasm",
      "emotion_rationale": "Maintaining enthusiasm for asset improvement drives listing quality and host engagement over time.",
      "copy_guidelines": {
        "voice": "encouraging, collaborative, impact-focused",
        "do": ["Celebrate asset contributions", "Show guest impact of improvements", "Make uploading feel valuable"],
        "dont": ["Use technical upload language", "Focus on file requirements", "Treat assets as obligatory"],
        "example_good": "These photos help guests fall in love with your space",
        "example_bad": "Upload additional images (max 10MB, JPG format)"
      },
      "animation_feel": {
        "easing": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "feel_description": "smooth and encouraging, like progress toward a goal",
        "duration_range": "300-500ms"
      },
      "tension_relief": {
        "tension_point": "Host has assets but faces upload interface",
        "relief_point": "Immediate preview and positive feedback",
        "timing": "Success celebration within 200ms of upload completion"
      },
      "personalization_signals": ["Asset quality improvement metrics", "Guest engagement with photos", "Listing performance impact", "Host's upload history"],
      "anti_patterns": [
        {
          "pattern": "Technical error messages for format issues",
          "reason": "Breaks enthusiasm by making host feel they did something wrong",
          "example_bad": "Error: File format not supported. Please use JPG or PNG."
        }
      ]
    }
  ]
}

### layer-6/coherence-report.json
{
  "lens": {
    "host_call": "drew-call.txt",
    "book_extract": "dontmakemethink-usability-laws.txt"
  },
  "reinforcements": [
    {
      "new_element_id": "works-005",
      "existing_element_id": "works-003",
      "similarity": "Both address the speed gap between conversational interaction and platform interaction",
      "combined_evidence": "Library element: Andreas describes two units in 7 seconds; platform must match this density. New element: Drew confirms property details in 18 seconds with immediate acknowledgments. Both use conversational speed as the benchmark for platform design, with Krug's 'sharks must keep moving' principle as theoretical foundation.",
      "recommendation": "merge"
    },
    {
      "new_element_id": "communicates-001",
      "existing_element_id": "works-001", 
      "similarity": "Both prescribe recognition before instruction at phase transitions",
      "combined_evidence": "Library element: each phase transition must signal continuity with prior phase through visual consistency and familiar language. New element: lead with context recognition ('Your Chelsea apartment discussed with Bryant') before action instruction. Both use System 1 trust gate principles.",
      "recommendation": "keep_both"
    },
    {
      "new_element_id": "behaves-001",
      "existing_element_id": "works-003",
      "similarity": "Both specify timing requirements for platform interactions to match conversational speed",
      "combined_evidence": "Library element: platform interactions should match phone call cognitive speed. New element: 100ms input acknowledgment, 300ms validation, 800ms navigation to match conversation timing. Both cite the same Andreas call evidence about rapid confirmation exchanges.",
      "recommendation": "merge"
    },
    {
      "new_element_id": "feels-001",
      "existing_element_id": "works-004",
      "similarity": "Both address maintaining human interaction confidence in digital transitions",
      "combined_evidence": "Library element: bridge human trust to digital trust through continuity priming and agent name/photo on platform. New element: preserve conversational confidence through immediate acknowledgment and familiar language patterns. Both address the human-to-digital handoff problem.",
      "recommendation": "keep_both"
    }
  ],
  "contradictions": [],
  "extensions": [
    {
      "new_element_id": "works-006",
      "gap_filled": "Accommodation interface design for collaborative host behavior",
      "confidence_note": "Single lens shows strong accommodation pattern but needs validation from other accommodating hosts"
    },
    {
      "new_element_id": "works-007", 
      "gap_filled": "Asset transfer friction elimination for hosts with upload enthusiasm",
      "confidence_note": "Drew's immediate asset offer suggests host-side friction is key barrier to listing quality improvement"
    },
    {
      "new_element_id": "communicates-002",
      "gap_filled": "Efficiency signal hierarchy to communicate speed advantages over human interaction",
      "confidence_note": "Information architecture specifically designed to signal speed rather than comprehensiveness"
    },
    {
      "new_element_id": "communicates-003",
      "gap_filled": "Accommodation affordance architecture that makes flexibility visually prominent",
      "confidence_note": "Architecture pattern specifically for collaborative proposal management interfaces"
    },
    {
      "new_element_id": "looks-002",
      "gap_filled": "Typography hierarchy that signals accommodation as preferred response",
      "confidence_note": "Visual design pattern using serif fonts for warmth in accommodation responses"
    },
    {
      "new_element_id": "behaves-002",
      "gap_filled": "Interaction design biased toward accommodation rather than binary approval/rejection",
      "confidence_note": "Path of least resistance design for accommodating host behavior"
    },
    {
      "new_element_id": "feels-002",
      "gap_filled": "Appreciation emotion for host accommodation behavior",
      "confidence_note": "Emotional reinforcement pattern missing from existing library"
    }
  ],
  "token_compliance": {
    "new_tokens_flagged": ["confirmation-green: #4B47CE", "input-active-border: #2d5a8a", "accommodation-green: #3a7a52", "neutral-response: #8a857e", "upload-success: #e8f0eb", "upload-progress: #3a7a52"],
    "recommendation": "add to system - these extend existing color palette for specific interaction states not covered by current tokens"
  },
  "emotional_arc_check": {
    "journey_emotion_map": [
      {"phase": "discovery", "target_emotions": ["curiosity", "interest"]},
      {"phase": "evaluation", "target_emotions": ["confidence", "engagement"]},
      {"phase": "onboarding", "target_emotions": ["confidence", "continuity"]},
      {"phase": "listing_creation", "target_emotions": ["confidence", "efficiency"]},
      {"phase": "pricing", "target_emotions": ["confidence", "decisiveness"]}, 
      {"phase": "proposal_mgmt", "target_emotions": ["appreciation", "collaboration"]},
      {"phase": "active_lease", "target_emotions": ["appreciation", "control"]},
      {"phase": "retention", "target_emotions": ["enthusiasm", "satisfaction"]}
    ],
    "arc_conflicts": [],
    "arc_assessment": "Emotional arc flows logically from confidence establishment through accommodation appreciation to sustained enthusiasm. No contradictions detected."
  },
  "coverage_map": {
    "discovery": {"element_count": 0, "coverage": "none"},
    "evaluation": {"element_count": 3, "coverage": "moderate"},
    "onboarding": {"element_count": 2, "coverage": "thin"},
    "listing_creation": {"element_count": 6, "coverage": "strong"},
    "pricing": {"element_count": 3, "coverage": "moderate"},
    "proposal_mgmt": {"element_count": 4, "coverage": "moderate"},
    "active_lease": {"element_count": 3, "coverage": "thin"},
    "retention": {"element_count": 2, "coverage": "thin"}
  },
  "loop_back_recommendations": [
    {
      "layer": "1",
      "reason": "Works elements focus heavily on efficiency and accommodation but miss discovery phase where hosts first encounter the platform",
      "new_input": "How does the platform's first impression establish the efficiency and accommodation expectations that Drew demonstrated?"
    },
    {
      "layer": "5",
      "reason": "Feels elements emphasize confidence and enthusiasm but could explore tension points where these emotions are at risk",
      "new_input": "What specific platform interactions could undermine Drew's natural confidence and how should emotional recovery be designed?"
    }
  ]
}

## Output Instructions
Output ONLY the valid JSON object matching the tests-elements schema from your agent instructions above. No markdown fences, no commentary. Just the raw JSON.
