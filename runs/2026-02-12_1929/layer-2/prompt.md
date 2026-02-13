You are running Layer 2 of the SplitLease Design Stack v2.

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

# Layer 2: Information Architect

You are the Information Architect. You extract information architecture elements — principles about how information should be structured and revealed across the host journey.

## Core Question
What information architecture patterns does this lens reveal about how hosts need information structured?

## Conceptual Shift (v2)
You no longer spec a single layout. You extract **info architecture elements** — reusable principles about information hierarchy, progressive disclosure, and cognitive load that apply across journey phases.

## Your Inputs
- journey-context.json from Layer 0
- works-elements.json from Layer 1
- The lens pair: host call transcript + book extract
- Baseline: usability tests (watch for confusion moments), site screenshots
- Existing element library (library/elements.json)

## Required Output: communicates-elements.json

```json
{
  "lens": {
    "host_call": "<filename>",
    "book_extract": "<filename>"
  },
  "elements": [
    {
      "id": "communicates-001",
      "type": "info_architecture",
      "title": "<clear name — e.g., 'Progressive Price Disclosure'>",
      "journey_phases": ["<phase1>", "<phase2>"],
      "problem": "<what information challenge hosts face>",
      "solution": "<how information should be structured>",
      "evidence": [
        {
          "source": "<filename + location>",
          "type": "host_call|book|usability|heatmap",
          "quote": "<exact quote or paraphrase>",
          "insight": "<what this evidence means>"
        }
      ],
      "priority": "high|medium|low",
      "hierarchy_principle": "<what should be primary/secondary/tertiary and why>",
      "disclosure_pattern": "<when/how to reveal information progressively>",
      "cognitive_load_constraint": "<max data points, max words, or other limits>",
      "scan_order": ["<what the eye should hit first>", "<second>", "<third>"],
      "exclude": ["<information that should NOT be shown at this point>"]
    }
  ]
}
```

## Rules
- The scan order must map to the host's decision tree (from Layer 1's user goals)
- Cognitive load constraints must respect time budgets from Layer 1
- Every piece of information must justify its presence — if it doesn't serve a goal, it goes in `exclude`
- Extract patterns, not layouts. "Show price range before asking for details" is a pattern. "Use a 3-column grid with 16px gaps" is a layout spec.
- Reference usability test moments where hosts were confused — these are gold for info architecture
- Aim for 3-8 elements per run

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
    "lens_summary": "This lens reveals how a host who satisfices through a fast, low-friction phone call will scan and muddle through the platform, and how the platform must be self-evident at every phase to match the effortless conversational pace Drew experienced with Bryant."
  },
  "phases": {
    "discovery": {
      "what_this_lens_reveals": "The Drew call begins mid-journey — Drew was already contacted and agreed to speak with Bryant. The call does not reveal how Drew discovered Split Lease. However, Krug's First Law applies directly: whatever brought Drew to the platform (ad, referral, search result) must be self-evident in under 5 seconds. Krug's observation that 'people tend to spend very little time reading most Web pages' (Ch. 2) and instead scan for trigger words means the discovery touchpoint (landing page, ad, LinkedIn message) must pass the 'billboard at 60 mph' test. Drew's call behavior — short answers, no questions about what Split Lease is — suggests his discovery phase was handled entirely by Bryant's outreach, bypassing the platform altogether.",
      "user_state": {
        "emotional_state": "Neutral-to-open. Drew's tone at 00:06 ('Hello?') is casual, not guarded. He was expecting the call, indicating prior positive contact.",
        "knowledge_level": "Drew knows he has a listing and has been contacted about specific guests. He does not appear to know much about Split Lease as a company or platform — no questions about the business model.",
        "commitment_level": "Past discovery. Drew already agreed to take the call, indicating he has moved beyond initial curiosity.",
        "data_available": "We know Drew's property (Chelsea 1BR/1BA, $2,000/month) was likely found through an external listing. No data on the discovery channel itself."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If Drew had encountered the platform before the call rather than Bryant's direct outreach, Krug's scanning behavior suggests he would have spent seconds, not minutes, evaluating it",
          "The platform's discovery touchpoint must compete with 'the first link that catches their interest' (Krug Ch. 2) — if Split Lease's landing page doesn't immediately say 'list your space, get guaranteed rent,' Drew scans past it"
        ],
        "evidence": "Krug Ch. 2: 'What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for.'"
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "Don't make me think! ... when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "relevance": "The discovery touchpoint — whatever first brings a host like Drew to Split Lease — must pass this self-evidence test. If the value proposition requires even a moment of interpretation, scanning hosts will move on."
        },
        {
          "source": "drew-call.txt, 00:06-00:18",
          "quote": "Hello? Hello. Hey, is this Drew? ... I'm doing well. How are you?",
          "relevance": "Drew's casual opening shows zero friction. Whatever discovery mechanism brought him here (Bryant's direct outreach) created a frictionless entry. The platform's discovery page must achieve the same."
        }
      ]
    },
    "evaluation": {
      "what_this_lens_reveals": "The Drew call IS the evaluation phase. Drew evaluates Split Lease entirely through a 6-minute conversation with Bryant. He asks zero questions about the company, zero questions about the platform, and zero questions about how the service works. His evaluation is mediated entirely by Bryant's credibility. Krug's insight about satisficing (Ch. 2) explains why: Drew doesn't optimize — he accepts the first reasonable option. Bryant's pitch (guaranteed payment, doubled deposit, vetted guests) is 'the first reasonable option,' and Drew clicks the mental equivalent of 'that link seems like it might lead to what I'm looking for.' The entire evaluation operates at conversational speed with zero cognitive friction, which sets a dangerous benchmark for any subsequent platform interaction.",
      "user_state": {
        "emotional_state": "Accommodating and business-like. Drew answers efficiently, volunteers information ('I have more pictures and I can send you,' 04:38), and agrees to terms without pushback. No anxiety, no skepticism.",
        "knowledge_level": "Drew knows his property details intimately but shows no knowledge of Split Lease's platform, fee structure, or business model. He accepts Bryant's verbal guarantees without requesting documentation during the call.",
        "commitment_level": "Evaluating but leaning in. Drew's willingness to share additional photos (04:38), discuss lease terms (05:18-05:32), and exchange email (05:01) shows active evaluation trending toward commitment.",
        "data_available": "Property: Chelsea 1BR/1BA, $2,000/month, $1,000 security deposit. Current tenant moves out on the 6th. Cleaning needed. Open to 4-month lease with extension. Flexible on start date."
      },
      "dropout_risk": {
        "level": "low",
        "reasons": [
          "Drew is accommodating and has not raised objections",
          "The conversational format matches Krug's satisficing pattern — no comparison shopping",
          "Risk exists only if the post-call platform experience creates friction that violates the effortless standard set by this call"
        ],
        "evidence": "drew-call.txt, 04:18: 'Okay. Okay. Okay. Alright.' — Drew accepts the guarantee explanation with minimal processing, classic satisficing behavior matching Krug Ch. 2: 'we choose the first reasonable option.'"
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 03:44-04:18",
          "quote": "Split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "relevance": "Drew satisfices on the guarantee explanation. He doesn't ask for documentation, proof, or details. This is Krug's satisficing in action: the first reasonable option is accepted. But it also means his evaluation is shallow — trust is in Bryant, not the platform."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing. As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "relevance": "Drew's evaluation behavior mirrors satisficing exactly. He doesn't compare Split Lease to other options. Bryant IS the first reasonable option. The platform must not force Drew into an optimization mode he has already skipped."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "There's not much of a penalty for guessing wrong. Unlike firefighting, the penalty for guessing wrong on a Web site is usually only a click or two of the Back button.",
          "relevance": "In Drew's case, the penalty for guessing wrong about Split Lease is also low — he can always find a different tenant. This low-stakes framing enables satisficing but also means the platform must not introduce new perceived risks that raise the stakes."
        }
      ]
    },
    "onboarding": {
      "what_this_lens_reveals": "The call itself is Drew's onboarding — he is being onboarded by Bryant through conversation. The critical Krug insight for this phase is about muddling through (Ch. 2): 'very few people take the time to read instructions. Instead, we forge ahead and muddle through.' When Drew transitions from the call to the platform, he will not read instructions, will not explore the dashboard, will not watch a tutorial. He will scan for something that looks like what Bryant described and click the first thing that resembles it. The call ends with Bryant promising to send 'more information on split lease as well as links to the agreements' (05:01). This means Drew's first platform encounter will likely be through an email link. The landing page for that link must be self-evident (Krug Ch. 1) — Drew must instantly recognize it as 'the thing Bryant told me about.' Any question mark in Drew's head ('Where am I? What do I do here? Is this right?') violates Krug's First Law.",
      "user_state": {
        "emotional_state": "Positive but passive. Drew has been guided through the entire process by Bryant. He expects to continue being guided — not to self-serve.",
        "knowledge_level": "Drew knows Bryant, knows the guests (Ariel and Amber), knows his property terms. He does NOT know the platform, the dashboard, the listing wizard, or the proposal system.",
        "commitment_level": "Committed to the relationship with Bryant. Commitment to the platform is untested.",
        "data_available": "Email exchange promised (05:01). Drew will send photos via text/email. Bryant will send agreements and details."
      },
      "dropout_risk": {
        "level": "high",
        "reasons": [
          "Drew has been fully guided — any self-service requirement is a friction spike",
          "Krug Ch. 2 muddling through: Drew will not read instructions, will not explore — he will scan and click the first thing that seems right, and if it's wrong, he may leave rather than recover",
          "The call set a zero-friction benchmark; the platform must match it or Drew perceives degradation",
          "Drew's passivity ('Sounds good' x3) suggests he expects to be led, not to lead"
        ],
        "evidence": "drew-call.txt, 05:01: 'I can get back to you with more information on split lease as well as links to the agreements' — the next touchpoint is an email from Bryant. If the linked platform requires Drew to figure things out on his own, it violates the guided experience the call promised."
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "relevance": "Drew will muddle through the platform. He will not read onboarding instructions. The platform must be self-evident or Drew's 'vaguely plausible story' about what he's doing may diverge entirely from the intended flow."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "relevance": "Drew's onboarding experience must pass this test. The first screen he sees must communicate 'this is where you manage your Chelsea apartment listing and the guests Bryant told you about.' If it requires even a moment of interpretation, Drew's muddling-through strategy may lead him astray."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "relevance": "Drew's closing language reveals impatience to wrap up efficiently. He is not someone who will invest time in learning a new system. The platform must respect this preference for speed and directness."
        }
      ]
    },
    "listing_creation": {
      "what_this_lens_reveals": "Drew already has a listing that Bryant referenced ('the comfortable one bed, one bath,' 00:45). The call suggests Drew's listing was created elsewhere (possibly a third-party site where Bryant found it) and now needs to be translated to the Split Lease platform. Krug's Billboard Design 101 (Ch. 3) is directly relevant: the listing creation wizard is a series of pages Drew will scan, not read. Krug's visual hierarchy principle means each wizard step must make the most important action the most prominent thing on the page. Drew's call reveals that he thinks of his listing in simple terms — one bedroom, one bath, Chelsea, $2,000/month, cleaning needed. The 6-step wizard (space snapshot, features, lease styles, pricing, rules, photos) is 6 opportunities for Drew to encounter question marks. Each step must be self-evident. Drew's offer to send more pictures (04:38) and openness to a video tour (04:21) shows he has visual assets ready — the photo upload step should be the easiest, not the hardest.",
      "user_state": {
        "emotional_state": "Ready to proceed but not eager to invest time. Drew's efficient call style ('Yep. Yep.' at 00:49-00:52) suggests he values brevity.",
        "knowledge_level": "Drew knows his space intimately. He can describe it in seconds. But he may not know platform-specific categories like 'lease style' or 'space type' dropdowns.",
        "commitment_level": "Willing to share photos and details — actively participating in listing creation, just through a human channel (Bryant/email) rather than the platform.",
        "data_available": "Title: 'comfortable one bed, one bath.' Location: Chelsea. Rent: $2,000/month. Deposit: $1,000. Availability: after the 6th + cleaning. Photos: available, to be sent. Video tour: possible."
      },
      "dropout_risk": {
        "level": "high",
        "reasons": [
          "The 6-step wizard is exactly the kind of multi-page process that Krug warns about — Drew will scan each step and if any step makes him think ('What is lease style? What does nights-of-the-week mean?'), he risks abandoning",
          "Drew is already providing listing data through email/text to Bryant — if the wizard feels harder than texting, Drew will default to the easier channel",
          "Krug Ch. 3: 'Designing pages for scanning, not reading' — every wizard step must be a billboard, not a form"
        ],
        "evidence": "Krug Ch. 3: 'Faced with the fact that your users are whizzing by, there are five important things you can do to make sure they see — and understand — as much of your site as possible: Create a clear visual hierarchy on each page.' The listing wizard's 6 steps must each have a visual hierarchy that makes the primary action instantly obvious."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 00:45-00:52",
          "quote": "the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "relevance": "Drew confirms his listing in under 10 seconds of speech. The listing wizard must capture this same information with comparable speed. If typing 'comfortable one bed one bath' into a title field plus selecting Chelsea as a location takes longer than 10 seconds, the platform is slower than the phone call."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "relevance": "Each listing wizard step must use visual hierarchy to make the primary input field the most prominent element. Secondary options (like 'Load Template' or 'Load Common') should be visually subordinate, not competing for attention."
        },
        {
          "source": "drew-call.txt, 04:38",
          "quote": "Yes. I have more pictures and I can send you.",
          "relevance": "Drew has photos ready. The upload step should capitalize on this readiness with a dead-simple upload flow. Krug's convention principle: the upload pattern should match what Drew has seen on every other site — drag-and-drop or file picker, no surprises."
        }
      ]
    },
    "pricing": {
      "what_this_lens_reveals": "Drew's pricing is established in one sentence: '$2,000 a month' (00:52). Confirmed by Bryant: 'That's right.' Total cognitive cost: 3 seconds. On the platform, the pricing wizard (Step 4) presents 'default values already populated' according to the journey map. Krug's satisficing principle predicts Drew will accept defaults without deliberation — which is exactly the right behavior IF the defaults are correct. But the platform thinks in nightly rates while Drew thinks in monthly rent. Krug's Ch. 1 example of the bookstore search (Author/Title/Keyword dropdown) is directly analogous: Amazon eliminated the distinction and 'did whatever makes the most sense.' The pricing step should accept '$2,000/month' and derive everything else, not force Drew to think about nightly rates or 4-week totals.",
      "user_state": {
        "emotional_state": "Confident. Drew states his price without hesitation or negotiation. This is not a decision point for him — it's a fact.",
        "knowledge_level": "Drew knows his monthly rent. He may not know the nightly rate equivalent, the Split Lease fee structure, or how guaranteed payment affects his take-home.",
        "commitment_level": "High on price — this is non-negotiable for Drew. Low on format — he doesn't care how the platform represents it as long as $2,000/month is the outcome.",
        "data_available": "$2,000/month rent. $1,000 security deposit. No data on Drew's awareness of Split Lease fees or commission structure."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If the pricing step forces Drew to translate $2,000/month into a nightly rate, it introduces a question mark that violates Krug's First Law",
          "Krug Ch. 1: 'you're squandering the limited reservoir of patience and goodwill' — any unnecessary cognitive work on pricing depletes Drew's willingness to continue",
          "If defaults are wrong (e.g., pre-populated with a different rate), Drew may not catch the error due to satisficing, leading to a bad listing rather than dropout"
        ],
        "evidence": "Krug Ch. 1, Amazon search example: 'Amazon.com, on the other hand, doesn't even mention the Author-Title-Keyword distinction. They just look at what you type and do whatever makes the most sense.' The pricing step should do the same — accept Drew's mental model ($2,000/month) and handle the conversion internally."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 00:52",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "relevance": "Drew's entire pricing decision takes 3 seconds. The platform's pricing step must not expand this 3-second decision into a multi-field, multi-format exercise."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "After all, why should I have to think about how I want to search? And even worse, why should I have to think about how the site's search engine wants me to phrase the question, as though it were some ornery troll guarding a bridge?",
          "relevance": "Replace 'search' with 'price.' Why should Drew have to think about how the platform wants him to enter his rent? The platform should accept the obvious input ($2,000/month) and figure out the rest."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "We don't make optimal choices. We satisfice... we choose the first reasonable option.",
          "relevance": "Drew will satisfice on pricing defaults. If the defaults are pre-populated correctly ($2,000/month), he will accept them instantly. If they require translation or interpretation, he faces a forced question mark — exactly what Krug says to eliminate."
        }
      ]
    },
    "proposal_mgmt": {
      "what_this_lens_reveals": "Drew's call reveals how he evaluates proposals: through Bryant's verbal summary. Bryant describes Ariel and Amber in conversational terms — they live in Connecticut, work in Manhattan, need a weekday pied-à-terre, are flexible on dates, want 4 months with extension possibility (05:18-05:32). Drew processes this in real time and agrees. On the platform, proposals will arrive as structured data (dates, rates, durations, totals). Krug's scanning principle (Ch. 2) predicts Drew will not read proposal details carefully — he will scan for the information that matters to him (who, how long, how much) and satisfice. The proposal page must present these three pieces of information as the visual hierarchy's top tier, not buried in a data table. Krug's convention principle (Ch. 3) also applies: the Accept/Decline/Counter interaction should follow conventions Drew has seen elsewhere (Airbnb booking requests, email RSVP patterns), not invent a new interaction model.",
      "user_state": {
        "emotional_state": "Open and accommodating. Drew's response to the 4-month term (05:18-05:32) is immediate agreement with 'ability to extend.' He is not a difficult negotiator.",
        "knowledge_level": "Drew understands the proposal in human terms (who the guests are, what they need, how long). He may not understand platform-specific proposal mechanics (counter-offers, term editing, proposal status).",
        "commitment_level": "High — Drew has already implicitly accepted these specific guests during the call. The platform's proposal step is a formality, not a decision point. The risk is that the platform makes a formality feel like a decision.",
        "data_available": "Guests: Ariel and Amber. Duration: 4 months with extension. Start: early March (flexible). Rate: $2,000/month. Deposit: $1,000 (doubled by Split Lease to $2,000)."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "If the proposal page presents too much information (data tables, legal terms, fee breakdowns), Drew will scan past critical details — Krug Ch. 2: 'There are usually large parts of the page that they don't even look at'",
          "If Accept/Decline/Counter requires multiple clicks or confirmation steps, Drew's satisficing behavior may lead him to stop mid-process",
          "The call set the benchmark: proposal evaluation took 30 seconds of conversation. The platform must not expand this to 5 minutes of form navigation"
        ],
        "evidence": "drew-call.txt, 05:18-05:32: 'they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.' — proposal acceptance in 14 seconds of conversation. The platform must not turn this into a multi-step process."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 01:32-02:02",
          "quote": "Ariel and Amber are both flexible... both have primary residences in Connecticut... they both work in Manhattan... essentially they'd be using this space as a place to come back to after work.",
          "relevance": "Bryant's proposal summary gives Drew exactly the information he needs: who, why, how. The platform's proposal view must prioritize the same information — guest identity, purpose of stay, and schedule — not financial line items."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "quote": "Break up pages into clearly defined areas... users should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!'",
          "relevance": "The proposal page must have clearly defined areas: 'Who these guests are,' 'What they're proposing,' 'What you'll earn,' 'What you can do.' Drew should be able to play the $25,000 Pyramid game with this page."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand.",
          "relevance": "If Drew encounters any question mark on the proposal page — 'What does counter mean? What happens if I decline? Is this the total or per month?' — each one erodes his willingness to complete the action. The proposal page must be question-mark-free."
        }
      ]
    },
    "active_lease": {
      "what_this_lens_reveals": "The Drew call does not directly address the active lease phase. Drew's tenant moves out 'on the 6th' (02:41) and needs cleaning (02:57), suggesting he has experience managing tenants and understands the practical realities of active leases. However, the call provides no evidence about how Drew would interact with the platform during an active lease. Krug's principle about muddling through (Ch. 2) applies predictively: during an active lease, Drew will need to check payment status, communicate about issues, and manage the relationship. He will not learn the platform's tools — he will muddle through with whatever he finds first. If the platform buries payment status behind navigation, Drew will text Bryant instead. Krug's convention principle means payment dashboards should look like what Drew has seen on banking apps or Venmo — not a custom Split Lease design.",
      "user_state": {
        "emotional_state": "Not directly observed. Inferred: Drew is an experienced landlord (current tenant, cleaning routine, deposit structure) who likely has a pragmatic, low-drama approach to active leases.",
        "knowledge_level": "Drew knows landlording. He knows tenants, deposits, cleaning, move-out dates. He does NOT know the Split Lease platform's active lease tools.",
        "commitment_level": "Not yet relevant — this phase is future-state for Drew.",
        "data_available": "Drew has a current tenant moving out on the 6th. He charges $1,000 deposit. He arranges cleaning between tenants. These behavioral patterns will carry into the active lease phase."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "Krug Ch. 2: Drew will muddle through — if the active lease dashboard is not self-evident, he will default to texting/calling Bryant for updates",
          "If payment confirmations are not immediately visible (Krug's billboard test), Drew may lose confidence in the guaranteed payment promise",
          "Drew's existing landlord workflow (likely informal, text/call-based) is the competition — the platform must be easier than Drew's current system"
        ],
        "evidence": "Krug Ch. 2: 'Even technically savvy users often have surprising gaps in their understanding of how things work... I've seen lots of people use software and Web sites effectively in ways that are nothing like what the designers intended.' Drew will use the active lease tools in ways the designers did not intend. The tools must be robust enough to survive this."
      },
      "key_quotes": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "If we find something that works, we stick to it. Once we find something that works — no matter how badly — we tend not to look for a better way.",
          "relevance": "If Drew discovers that texting Bryant works for getting lease updates, he will never learn to use the platform's dashboard. The platform must intercept this pattern by making the dashboard the path of least resistance."
        },
        {
          "source": "drew-call.txt, 02:41-02:57",
          "quote": "after that a tenant moves out? Is that right? Yeah... Cleaning.",
          "relevance": "Drew has a move-out/cleaning/move-in workflow. The active lease phase should integrate with this existing mental model — showing tenant status, upcoming transitions, and maintenance needs in Drew's terms."
        }
      ]
    },
    "retention": {
      "what_this_lens_reveals": "The Drew call hints at retention through the '4 months and then maybe the ability to extend' exchange (05:18-05:32). Drew is open to ongoing engagement but has not committed beyond the initial term. Krug's principle about making pages self-evident (Ch. 1) applies to retention touchpoints: when a lease approaches its end, the renewal prompt must be as obvious as Drew's original acceptance was easy. Krug Ch. 1 warns that 'the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.' If the renewal process introduces friction, Drew's confidence erodes. The book's observation that 'your site may not have been that easy to find in the first place' (Ch. 1) cuts both ways: Drew may not easily find alternatives, but he also may not easily find the renewal path on the platform.",
      "user_state": {
        "emotional_state": "Not directly observed. Inferred: if the active lease went well, Drew will be positively disposed. His accommodating nature ('yep,' 'sounds good') suggests he defaults to continuation rather than active re-evaluation.",
        "knowledge_level": "Drew will know the platform better by this phase (if he used it during active lease). But Krug's muddling-through principle means his knowledge may be patchy and based on incorrect mental models.",
        "commitment_level": "Conditional. Drew's 'ability to extend' language (05:32) shows he frames continuation as an option, not an assumption.",
        "data_available": "4-month initial term. Extension possibility discussed. Drew's retention will depend on active lease experience (payment reliability, guest behavior, platform friction)."
      },
      "dropout_risk": {
        "level": "medium",
        "reasons": [
          "Retention requires Drew to actively choose to continue — satisficing favors the status quo, but only if the status quo is visible and easy to maintain",
          "If the renewal process requires Drew to navigate to a new page, fill out new forms, or make new decisions, Krug's scanning behavior means he may not complete it",
          "Drew's alternatives (Craigslist, word of mouth, doing nothing) are frictionless — the renewal path must be equally frictionless"
        ],
        "evidence": "Krug Ch. 1: 'Making pages self-evident is like having good lighting in a store: it just makes everything seem better. Using a site that doesn't make us think about unimportant things feels effortless.' If the 4-month renewal feels effortless, Drew stays. If it requires thinking, Drew may not renew — not out of dissatisfaction, but out of friction."
      },
      "key_quotes": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "quote": "they'd want to start with a four months... Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "relevance": "Drew's retention signal: 'ability to extend.' The platform must capitalize on this by making extension a one-click action at the right moment, not a multi-step process that forces re-evaluation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "quote": "the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence in the site and its publishers.",
          "relevance": "Cumulative friction across the host journey erodes the confidence that Bryant built in the call. By the retention phase, every prior question mark has compounded. The renewal prompt must overcome any accumulated friction debt."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "quote": "There's also the 'I've waited ten minutes for this bus already, so I may as well hang in a little longer' phenomenon.",
          "relevance": "Sunk cost works in Split Lease's favor for retention — Drew has invested time, shared photos, accepted guests. But Krug notes this only applies 'until someone builds one down the street that makes them feel smart.' The renewal must make Drew feel smart, not trapped."
        }
      ]
    }
  },
  "cross_phase_patterns": [
    {
      "pattern": "The satisficing host: Drew consistently accepts the first reasonable option without deliberation, across every phase observed in the call — he satisfices on the platform explanation (03:44-04:18), on the guest profiles (01:32-02:02), on the lease term (05:18-05:32), and on next steps (05:38). Krug's satisficing principle (Ch. 2) predicts this behavior will carry to the platform: Drew will click the first thing that looks right and will not compare options, read fine print, or explore alternatives. This means defaults must be correct, primary actions must be visually dominant, and secondary options must not compete for attention.",
      "phases_affected": [
        "evaluation",
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "evidence": "drew-call.txt, 04:18: 'Okay. Okay. Okay. Alright.' (accepting guarantee without questions); 05:32: 'Okay. Okay. Sounds good.' (accepting 4-month term). Krug Ch. 2: 'As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.'"
    },
    {
      "pattern": "The billboard standard: Drew's call operates at billboard speed — each topic is covered in under 30 seconds, and Drew scans Bryant's verbal output for the parts that matter to him (price, guests, timeline) while ignoring the rest (company name, vetting process details). Krug Ch. 3 establishes that every page should be designed as a billboard going by at 60 mph. Drew's behavior confirms this: every platform page he encounters must communicate its purpose and primary action within seconds, because Drew does not read — he scans.",
      "phases_affected": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "evidence": "drew-call.txt: The entire 6-minute call covers property confirmation (10 sec), availability (30 sec), guest profiles (30 sec), guarantee (30 sec), photos (15 sec), terms (15 sec). Each topic is a billboard. Krug Ch. 2: 'We're thinking \"great literature\"... while the user's reality is much closer to \"billboard going by at 60 miles an hour.\"'"
    },
    {
      "pattern": "Convention reliance over innovation: Drew shows zero interest in understanding how Split Lease works differently from what he already knows. He maps everything to his existing landlord mental model — monthly rent, security deposit, tenant move-out, cleaning. Krug Ch. 3: 'Conventions are your friends... If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve, or (b) adds so much value that it's worth a small learning curve.' Any Split Lease convention that deviates from Drew's existing landlord conventions (Zillow, StreetEasy, Craigslist posting) must pass this test.",
      "phases_affected": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "evidence": "drew-call.txt, 00:52: '$2,000 a month' (standard monthly rent convention); 02:57: 'security deposit... $1,000' (standard deposit convention). Krug Ch. 3: 'Designers are often reluctant to take advantage of [conventions]... there's a great temptation to reinvent the wheel.'"
    },
    {
      "pattern": "The guided-to-self-service cliff: Drew's entire experience is guided by Bryant. The call is a conversation, not a form. Bryant asks questions, Drew answers, Bryant confirms. The transition to the platform is a cliff from full guidance to full self-service. Krug Ch. 2's muddling-through principle predicts that Drew will attempt to use the platform the way he 'uses' the phone call — expecting it to ask him questions, confirm his answers, and guide him forward. If the platform presents a blank dashboard and waits for Drew to figure out what to do, it fails the self-evidence test at the highest-risk moment in the journey.",
      "phases_affected": [
        "evaluation",
        "onboarding",
        "listing_creation"
      ],
      "evidence": "drew-call.txt: Every piece of information flows from Bryant's questions, not Drew's exploration. Drew never asks 'what do I do next?' because Bryant always tells him. Krug Ch. 2: 'we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.' Drew's plausible story about the platform will be 'it should work like the phone call with Bryant.'"
    },
    {
      "pattern": "Clickability as trust signal: Krug Ch. 3 warns that unclear clickability erodes confidence ('the fact that the people who built the site didn't care enough to make things obvious — and easy — can erode our confidence'). Drew's trust is currently held by Bryant. Every ambiguous button, unclear link, or uncertain interaction on the platform transfers trust debt from the platform to Bryant — Drew will text Bryant rather than guess. The platform's clickability must be absolutely unambiguous at every phase, because each question mark about 'is this clickable?' is a question mark about 'is this platform trustworthy?'",
      "phases_affected": [
        "onboarding",
        "listing_creation",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "evidence": "Krug Ch. 3: 'Since a large part of what people are doing on the Web is looking for the next thing to click, it's important to make it obvious what's clickable and what's not.' Combined with drew-call.txt, 05:38: 'if you have any questions for me, you can feel free to text me or email me' — Bryant explicitly offers himself as the fallback for any platform confusion."
    }
  ],
  "sources_consulted": [
    "drew-call.txt — Full host call transcript analyzed for behavioral patterns across all journey phases. Drew is a Chelsea 1BR owner, $2,000/month, accommodating and efficient communicator. Key behavioral signals: satisficing on every decision, zero questions about platform, zero questions about company, willing to share photos, open to 4-month term with extension.",
    "dontmakemethink-usability-laws.txt — Chapters 1-3 plus Introduction and Preface of Steve Krug's Don't Make Me Think, 2nd Edition. Key principles extracted: (1) Krug's First Law — pages must be self-evident; (2) Scanning not reading — users scan pages like billboards at 60 mph; (3) Satisficing — users choose the first reasonable option, not the best; (4) Muddling through — users don't read instructions, they forge ahead with plausible stories; (5) Visual hierarchy — prominence, grouping, and nesting guide scanning; (6) Conventions — use existing patterns unless you have something clearly better; (7) Clickability — make clickable elements obviously clickable; (8) Clearly defined areas — users should be able to play $25,000 Pyramid with any page.",
    "Journey map (provided inline) — Used to map the 6-step listing wizard, proposal flow, and counter-offer mechanics to Drew's behavioral patterns from the call.",
    "Element library (library/elements.json) — Reviewed all existing elements (works-001 through works-006, communicates-001 through communicates-007, looks-001 through looks-007, behaves-001 through behaves-007, feels-001 through feels-008, tests-001 through tests-037, plus guest elements). Coverage gaps identified: discovery phase has minimal coverage (only works-001), active_lease has weak coverage (only works-005), retention has weak coverage (only works-004). This lens provides new evidence for all three gap phases."
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
      "id": "works-001",
      "type": "process_pattern",
      "title": "Self-Evidence at Every Phase Entry",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease",
        "retention"
      ],
      "problem": "Drew's entire evaluation happens through a 6-minute phone call where every topic is self-evident — Bryant asks, Drew answers, meaning arrives instantly. When Drew transitions to the platform, every new screen demands interpretation: 'Where am I? What do I do here? Is this the thing Bryant told me about?' Krug's First Law states that pages must be self-evident — a user should 'get it' without expending any effort thinking about it. But the platform has no mechanism to ensure that each phase entry point passes this self-evidence test. Drew will not read instructions (Krug Ch. 2: 'very few people take the time to read instructions'). He will scan, form a vaguely plausible story about what he sees, and act on it. If the first screen of any phase makes him think — even for a millisecond — he has encountered a question mark that the phone call never produced. Each question mark compounds across phases, eroding the trust Bryant built.",
      "solution": "Apply Krug's First Law as a gate for every phase entry: no phase should present its first screen until that screen passes the self-evidence test. Concretely: (1) Every phase entry screen must answer three questions within 2 seconds of visual scanning: 'What is this?' 'What can I do here?' 'Why am I here?' — without requiring the user to read body text or instructions. (2) Use the $25,000 Pyramid test (Krug Ch. 3): a user should be able to point at clearly defined areas and name them ('My listing details,' 'Guests interested in my place,' 'What I'll earn'). (3) The page title or primary heading must use language Drew already heard in the call — not platform jargon. If Bryant said 'Ariel and Amber are interested in your space,' the proposal page heading should echo that framing, not say 'Incoming Proposals (2).' (4) Eliminate every element that exists for the platform's benefit but adds a question mark for the host: tracking IDs, internal status labels, system-generated timestamps that mean nothing to Drew.",
      "evidence": [
        {
          "source": "drew-call.txt, 00:40-00:52",
          "type": "host_call",
          "quote": "Which I've got potluck. Exactly. You think it was be too much? Uh, the title of it is the comfortable one bed, one bath. One bedroom, one bath. Yep. In Chelsea. Yep. Yep.",
          "insight": "Drew confirms his listing in under 10 seconds through conversational shorthand. Bryant's question is self-evident — Drew doesn't think about what's being asked. The platform must achieve this same instant recognition: when Drew sees his listing page, it must say 'comfortable one bed, one bath — Chelsea' in a way that requires zero interpretation."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "It means that as far as is humanly possible, when I look at a Web page it should be self-evident. Obvious. Self-explanatory. I should be able to 'get it' — what it is and how to use it — without expending any effort thinking about it.",
          "insight": "Krug's First Law is the governing principle. Every phase entry is a new page Drew encounters. Each one must pass this test independently — you cannot assume that passing the test on one screen carries forward to the next."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Glancing around, they should be able to point at the different areas of the page and say, 'Things I can do on this site!' 'Links to today's top stories!' 'Products this company sells!'",
          "insight": "The $25,000 Pyramid test: every phase entry screen must have clearly defined areas that Drew can name at a glance. If Drew can't play this game with a screen, the screen fails the self-evidence test."
        },
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew's response to the guarantee explanation is pure acceptance without interpretation. He didn't need to think about what Bryant said — it was self-evident in context. The platform must achieve this 'Okay. Okay. Alright.' response at every phase entry, not 'Hmm. What is this? Where do I go?'"
        }
      ],
      "priority": "high",
      "user_goal": "Instantly understand what I'm looking at and what I should do next, at every screen, without reading instructions or figuring out the interface.",
      "company_goal": "Eliminate the invisible dropout that occurs when hosts encounter a platform screen that makes them think, causing them to defer to texting Bryant instead of completing the action on-platform.",
      "time_budget": "2 seconds to scan and understand each phase entry screen. If the host hasn't 'gotten it' in 2 seconds, the screen has failed.",
      "anti_goals": [
        "DO NOT use page titles or headings that describe the system's internal concept rather than the user's task. 'Proposal Management' is a system concept. 'Ariel wants to stay at your Chelsea apartment' is the user's reality.",
        "DO NOT place instructions or explanatory text above the fold as a substitute for self-evident design. If the page needs instructions, the page needs redesigning.",
        "DO NOT assume that passing the self-evidence test once (e.g., at onboarding) carries forward. Each phase entry must independently pass the test.",
        "DO NOT add visual elements (badges, tooltips, help icons) to compensate for a page that isn't self-evident. These are bandaids that add question marks of their own."
      ],
      "success_metric": "5-second usability test: show a new host each phase entry screen for 5 seconds, then ask 'What is this page for?' and 'What would you do first?' Target: 90% of hosts answer both correctly without prompting."
    },
    {
      "id": "works-002",
      "type": "process_pattern",
      "title": "Design for Scanning, Not Reading, at Every Decision Point",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew scans Bryant's verbal output the same way Krug says users scan web pages: he picks out the parts that matter (price, guests, timeline) and ignores the rest (company name, vetting process mechanics). In the call, Bryant covers the guarantee in 23 seconds (03:44-04:18), and Drew absorbs only the conclusion ('I still get paid'). On the platform, the equivalent information will be presented as text, tables, and forms that Drew must read — not scan. Krug Ch. 2 establishes that 'people tend to spend very little time reading most Web pages' and instead scan for 'words or phrases that catch our eye.' But platform decision points (listing wizard steps, pricing fields, proposal details) are typically designed for reading: dense forms, paragraph explanations, multi-option dropdowns. Drew will not read them. He will scan for trigger words ($2,000, Chelsea, Ariel, 4 months) and ignore everything else. If the trigger words are buried in body text or formatted identically to non-essential text, Drew will miss them.",
      "solution": "Restructure every decision point as a scannable billboard, not a readable document. Following Krug Ch. 3: (1) Create a clear visual hierarchy where the most important information (the thing Drew needs to decide) is the most visually prominent element on the page — larger, bolder, or in a distinctive color. (2) Use trigger words Drew already knows from the call as scannable anchors: '$2,000,' 'Chelsea,' 'Ariel & Amber,' '4 months.' These should be visually distinct, not embedded in sentences. (3) Break dense information into clearly defined areas that Drew can scan independently — Krug's '$25,000 Pyramid' principle. A proposal page should have visually distinct zones: 'Who' (guest photo + name), 'When' (dates), 'How much' (total), 'What to do' (Accept/Decline). (4) Use progressive disclosure: show the scannable summary first, and let Drew tap to expand details only if he wants them. Most of the time, he won't.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "What they actually do most of the time (if we're lucky) is glance at each new page, scan some of the text, and click on the first link that catches their interest or vaguely resembles the thing they're looking for. There are usually large parts of the page that they don't even look at.",
          "insight": "This is how Drew will use every platform page. The call proves it: Drew ignores Bryant's company pitch and zeroes in on price, guests, and timeline. The platform must design for this scanning behavior, not against it."
        },
        {
          "source": "drew-call.txt, 03:44-04:18",
          "type": "host_call",
          "quote": "split lease doubled the deposit, and guarantees payments to you as the landlord... in the case that a guest would miss a payment, that doesn't have any effect on you and you still receive the payment... Okay. Okay. Okay. Alright.",
          "insight": "Bryant delivers a dense 30-second pitch covering deposit doubling, payment guarantee, vetting, and income verification. Drew's response ('Okay. Okay. Okay. Alright.') shows he scanned for the conclusion — 'I get paid no matter what' — and accepted it. On the platform, this guarantee information must be equally scannable: a single bold statement ('Your rent is guaranteed'), not a paragraph explaining the mechanism."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "The more important something is, the more prominent it is... Things that are related logically are also related visually... Things are 'nested' visually to show what's part of what.",
          "insight": "Visual hierarchy is the mechanism that makes scanning work. Without it, Drew must read everything to find what matters. With it, the most important element on each page declares itself through size, weight, position, and contrast."
        },
        {
          "source": "drew-call.txt, 01:32-02:02",
          "type": "host_call",
          "quote": "both of them have primary residences in Connecticut, uh, but they both work in Manhattan, which is why they're looking for a place. So essentially they'd be using this space as a place to come back to, uh, after work.",
          "insight": "Bryant's guest summary is a scannable narrative: who (Ariel and Amber), where they live (Connecticut), why they need the space (Manhattan work), how they'll use it (weekday pied-a-terre). The proposal page must present these same four data points as the scannable headline, not a text block."
        }
      ],
      "priority": "high",
      "user_goal": "Find the information that matters to me (who, how long, how much) within seconds of seeing any page, without reading paragraphs or parsing tables.",
      "company_goal": "Increase the rate at which hosts complete actions on platform pages (accept proposals, publish listings, confirm pricing) by ensuring the essential information and primary action are scannable within 3 seconds.",
      "time_budget": "3 seconds to scan and identify the key information. 10 seconds to complete the primary action. If scanning takes longer, the visual hierarchy has failed.",
      "anti_goals": [
        "DO NOT present information as undifferentiated text blocks where all text is the same size, weight, and color. This forces reading, which Drew will not do.",
        "DO NOT rely on users reading explanatory text to understand what a field or option means. If it needs explanation, it needs a better name or a better visual treatment.",
        "DO NOT use data tables as the primary presentation format for proposals or lease terms. Tables are for comparison; Drew is not comparing — he is scanning for acceptance.",
        "DO NOT make secondary information (fee breakdowns, legal terms, system statuses) as visually prominent as primary information (guest name, duration, total rent)."
      ],
      "success_metric": "Heatmap analysis of platform pages: the host's first fixation point should land on the primary information (guest name for proposals, total rent for pricing) within 2 seconds. Target: 80% of hosts fixate on primary information first, not secondary elements."
    },
    {
      "id": "works-003",
      "type": "process_pattern",
      "title": "Satisficing-Safe Defaults Across All Input Steps",
      "journey_phases": [
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "retention"
      ],
      "problem": "Drew is a textbook satisficer. He accepts every offer in the call without deliberation: the guarantee (04:18: 'Okay. Okay. Okay. Alright.'), the lease term (05:32: 'Okay. Okay. Sounds good.'), the next steps (05:50: 'Sounds good.'). Krug Ch. 2 establishes that users 'don't choose the best option — we choose the first reasonable option.' On the platform, this means Drew will accept defaults without examining them. If the listing wizard pre-populates a nightly rate derived from $2,000/month but rounds incorrectly, Drew will accept it. If the proposal page pre-selects a counter-offer template that doesn't match what Bryant discussed, Drew will accept it. Satisficing is efficient and correct when defaults are right. It produces silent errors when defaults are wrong. The danger is not dropout — it's a host who publishes a listing or accepts a proposal with incorrect terms because the defaults were close enough to not trigger scrutiny.",
      "solution": "Make every default the right answer for a satisficing user. (1) Pre-populate all fields with data already known from the phone call and prior phases. Drew's rent is $2,000/month — this should already be the default, not a blank field. His deposit is $1,000 — pre-filled. His listing title is 'comfortable one bed, one bath' — pre-filled from the agent's notes. (2) When defaults require derivation (e.g., nightly rate from monthly rent), show the derivation transparently: '$67/night (based on your $2,000/month rent).' If Drew is satisficing, at least he can verify the math at a glance. (3) For consequential decisions (lease terms, cancellation policies), use Krug's convention of making the recommended option visually prominent and labeling it as recommended — not just listing options equally. (4) Eliminate optional fields that create micro-decisions. Every 'optional' field is a satisficing trap: Drew will either skip it (potentially missing something important) or fill it mindlessly (adding noise). Make fields required with smart defaults, or remove them entirely.",
      "evidence": [
        {
          "source": "drew-call.txt, 04:18",
          "type": "host_call",
          "quote": "Okay. Okay. Okay. Alright.",
          "insight": "Drew accepts the guarantee explanation — a complex financial arrangement involving doubled deposits and payment guarantees — with four words and zero follow-up questions. This is satisficing at its purest. On the platform, Drew will accept whatever the screen presents with the same level of non-scrutiny."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "most of the time we don't choose the best option — we choose the first reasonable option, a strategy known as satisficing. As soon as we find a link that seems like it might lead to what we're looking for, there's a very good chance that we'll click it.",
          "insight": "Satisficing is not a flaw — it's the dominant strategy. The platform must design for it, not against it. Designing for it means making the first reasonable option the correct option."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew confirms his price in 3 seconds. On the platform, if the pricing field is pre-populated with $2,000/month, Drew will scan it, see the right number, and move on. If it's blank, Drew must type it — adding friction. If it shows a derived value ($67/night) without context, Drew may accept a wrong number."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "After all, why should I have to think about how I want to search? And even worse, why should I have to think about how the site's search engine wants me to phrase the question, as though it were some ornery troll guarding a bridge?",
          "insight": "Krug's Amazon example: Amazon eliminated the Author/Title/Keyword distinction and 'did whatever makes the most sense.' Applied to pricing: the platform should accept '$2,000/month' and derive everything else. Drew should never have to think about how the platform wants him to express his rent."
        }
      ],
      "priority": "high",
      "user_goal": "See my information already filled in correctly and confirm it quickly, rather than entering it from scratch or evaluating unfamiliar options.",
      "company_goal": "Reduce listing errors, pricing mismatches, and proposal misunderstandings caused by satisficing hosts who accept incorrect defaults without scrutiny.",
      "time_budget": "Each pre-populated field should take 2 seconds to verify (scan, recognize, move on). Total time for a fully pre-populated step: 15-30 seconds of scanning, not minutes of data entry.",
      "anti_goals": [
        "DO NOT present multiple options with equal visual weight when one option is clearly better or more common. The recommended default must be visually dominant.",
        "DO NOT use blank fields when data is available from prior phases, the phone call, or the agent's notes. A blank field punishes the satisficing user.",
        "DO NOT show derived values without showing the source. '$67/night' means nothing to Drew without '(from your $2,000/month rent)' — and the unsourced number becomes a silent error if the derivation is wrong.",
        "DO NOT add 'optional' fields to forms. They create satisficing traps — users either skip important fields or mindlessly fill irrelevant ones."
      ],
      "success_metric": "Default acceptance rate with correctness: percentage of hosts who accept pre-populated defaults AND whose published listings have zero data errors. Target: 85% of hosts accept defaults, and 95% of accepted defaults are correct."
    },
    {
      "id": "works-004",
      "type": "process_pattern",
      "title": "Convention-First Interaction for Every Platform Pattern",
      "journey_phases": [
        "onboarding",
        "listing_creation",
        "pricing",
        "proposal_mgmt",
        "active_lease"
      ],
      "problem": "Drew maps everything to conventions he already knows: monthly rent (not nightly rates), security deposits (not 'damage waivers'), tenant move-outs (not 'lease transitions'), cleaning (not 'turnover services'). Krug Ch. 3 states that 'conventions only become conventions if they work' and that 'designers are often reluctant to take advantage of them.' The Split Lease platform risks inventing new interaction patterns for processes Drew already knows how to do on other platforms. If Drew has listed on StreetEasy, he knows how a listing form works. If he's used Venmo, he knows how a payment confirmation looks. If he's used Airbnb, he knows how a booking request appears. Every deviation from these conventions adds a question mark. Krug warns: 'If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve, or (b) adds so much value that it's worth a small learning curve.' Most platform deviations meet neither threshold.",
      "solution": "Audit every platform interaction against the convention Drew would expect from the closest analog: (1) Listing creation should follow the convention of StreetEasy/Zillow listing forms — title, address, type, bedrooms, bathrooms, rent, photos. Same field order. Same field names. Same interaction patterns. If Drew has posted a listing before, this form should feel like doing it again, not learning something new. (2) Pricing should follow banking/payment conventions — monthly amount, clear breakdowns, dollar signs, decimals. Not custom sliders or rate calculators. (3) Proposals should follow Airbnb booking request conventions — guest photo, dates, message, Accept/Decline buttons. Drew has seen this pattern. Use it. (4) Payment confirmations should follow Venmo/banking conventions — date, amount, status, from whom. (5) Only deviate from conventions when the Split Lease model genuinely requires it (e.g., the guarantee concept has no direct conventional analog) — and when you do deviate, make the new pattern so self-explanatory that it needs no learning curve.",
      "evidence": [
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "If you're not going to use an existing Web convention, you need to be sure that what you're replacing it with either (a) is so clear and self-explanatory that there's no learning curve — so it's as good as a convention, or (b) adds so much value that it's worth a small learning curve.",
          "insight": "This is the convention test. Every Split Lease platform pattern must either use an existing convention or pass this two-part test. Most 'innovations' in the platform will fail both parts and should be replaced with conventions."
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "2000 a month, I think is what it's listed here. That's right.",
          "insight": "Drew's price is stated as a monthly rent — the universal convention for apartment listings. The platform must accept and display pricing in this convention. Forcing a nightly rate is a convention violation that adds a question mark."
        },
        {
          "source": "drew-call.txt, 02:57",
          "type": "host_call",
          "quote": "regarding security deposit or damage deposit. Is that something you charge? ... 1000.",
          "insight": "Drew uses standard landlord vocabulary: 'security deposit,' '$1,000.' The platform must use this same vocabulary, not 'damage waiver,' 'refundable guarantee,' or any other non-conventional term."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 3",
          "type": "book",
          "quote": "Faced with the prospect of using a convention, there's a great temptation for designers to reinvent the wheel instead, largely because they feel (not incorrectly) that they've been hired to do something new and different, and not the same old thing.",
          "insight": "This is the core risk: the Split Lease team may feel compelled to design a unique listing wizard, a novel pricing interface, a distinctive proposal flow. Krug warns that this temptation is usually wrong. Drew doesn't want new and different — he wants 'the same thing I've done before, but with guaranteed rent.'"
        }
      ],
      "priority": "high",
      "user_goal": "Use the platform the way I already use similar tools — same patterns, same vocabulary, same expectations — without learning a new system.",
      "company_goal": "Reduce the learning curve to near-zero for hosts who have used any real estate or rental platform before, thereby increasing first-session completion rates.",
      "time_budget": "Zero learning time for conventional patterns. If a host who has used StreetEasy or Airbnb needs more than 5 seconds to understand how a Split Lease form works, the convention has been violated.",
      "anti_goals": [
        "DO NOT rename conventional concepts to sound more 'branded.' 'Security deposit' is a convention. 'SplitShield Deposit' is a branded term that adds a question mark.",
        "DO NOT rearrange conventional field orders for aesthetic reasons. If every listing site puts bedrooms before bathrooms, Split Lease must do the same.",
        "DO NOT use custom interaction widgets (novel sliders, drag-to-set, gesture-based inputs) when standard form elements (text fields, dropdowns, checkboxes) follow convention.",
        "DO NOT innovate on layout patterns that are universally understood — Accept/Decline buttons go below the proposal summary, not in a sidebar or a popup."
      ],
      "success_metric": "First-time-success rate: percentage of hosts who complete a task (submit listing, accept proposal, confirm pricing) on their first attempt without using the back button, help, or contacting Bryant. Target: 75% first-time success for hosts who have used any rental platform before."
    },
    {
      "id": "works-005",
      "type": "process_pattern",
      "title": "Eliminate the Guided-to-Self-Service Cliff",
      "journey_phases": [
        "evaluation",
        "onboarding",
        "listing_creation"
      ],
      "problem": "Drew's entire experience is mediated by Bryant. The call is a guided conversation where Bryant asks questions, Drew answers, and Bryant confirms. Drew never asks 'what do I do next?' because Bryant always tells him. The call ends with Bryant promising to send information and agreements (05:01), maintaining the guided mode. Then Drew encounters the platform — and the guidance stops. This is the guided-to-self-service cliff: a sudden transition from a human who asks questions and confirms answers to a digital interface that presents forms and waits. Krug Ch. 2 describes this precisely: 'Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through.' Drew's muddling-through strategy will be based on his mental model of the call: 'the platform should ask me questions and confirm my answers, the way Bryant did.' If instead the platform presents a blank dashboard with navigation menus and waits for Drew to explore, it violates the mental model the call created.",
      "solution": "Design the post-call platform experience as a continuation of the call, not a separate system. (1) The first platform screen should mirror the call's conversational structure: present one question or confirmation at a time, in sequence, the way Bryant did. Instead of a listing wizard with 6 simultaneous steps visible, present step 1 as a single focused question ('Is this your Chelsea apartment?') with a confirmation button. (2) Use the agent's voice: the platform's microcopy should sound like Bryant. 'Let's confirm your place' not 'Create New Listing.' 'Ariel and Amber are interested — here's what they're proposing' not 'You have 1 new proposal.' (3) Pre-fill everything the call already covered. Drew should not re-enter his rent, his address, or his deposit. The platform should display what Bryant already captured and ask Drew to confirm, not re-enter. (4) Maintain a clear 'what happens next' indicator at every step — Drew is used to Bryant saying 'I'll send you...' and 'I'll get back to you with...' The platform must always show what comes next, not leave Drew on a completed step wondering what to do.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:01-05:18",
          "type": "host_call",
          "quote": "I can get back to you with more information on split lease as well as links to the agreements which are referenced. Um, and I think those about it, any other questions for me major?",
          "insight": "The call ends with Bryant maintaining the guide role: he will send information, he will share agreements, he asks if Drew has questions. Drew expects this guidance to continue. The platform must not break this expectation by switching to a self-service mode without warning."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Faced with any sort of technology, very few people take the time to read instructions. Instead, we forge ahead and muddle through, making up our own vaguely plausible stories about what we're doing and why it works.",
          "insight": "Drew's 'vaguely plausible story' about the platform will be: 'it should work like the phone call with Bryant — it asks me things, I answer, it confirms, we move on.' If the platform violates this story, Drew muddles through incorrectly or abandons."
        },
        {
          "source": "drew-call.txt, 05:52-06:14",
          "type": "host_call",
          "quote": "Sounds good. Okay. No, that'll be all... let me just send you pictures and, um, did you do a, so we can maybe move on?",
          "insight": "Drew's closing reveals impatience and a desire to be led. 'Can we maybe move on?' is a request for the next guided step, not an offer to self-navigate. The platform must continue this pacing — always showing the next step, never leaving Drew on a page without a clear forward path."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "We don't figure out how things work. We muddle through... very few people take the time to read instructions.",
          "insight": "Drew will not explore the platform. He will not read a 'Getting Started' guide. He will click the first thing that looks like what Bryant described and hope it works. The first thing must be the right thing."
        }
      ],
      "priority": "high",
      "user_goal": "Continue the experience Bryant started — being guided through the process step by step — without having to figure out a new system on my own.",
      "company_goal": "Prevent the post-call dropout that occurs when guided hosts encounter a self-service platform and defer to texting Bryant instead of using the platform, which creates agent bottlenecks and delays the listing-to-proposal pipeline.",
      "time_budget": "The transition from call to platform should feel like a continuation, not a restart. The host should complete their first platform action (confirming their listing details) within 60 seconds of clicking the link Bryant sends.",
      "anti_goals": [
        "DO NOT present a blank dashboard as the first platform experience. A dashboard is for returning users who know the system. Drew has never seen the system.",
        "DO NOT use 'Getting Started' guides, tutorial overlays, or onboarding tooltips as a substitute for a self-evident first screen. These are instructions, and Drew will not read them.",
        "DO NOT require Drew to navigate to find his listing. His listing should be the first thing he sees, pre-filled with the details from the call.",
        "DO NOT switch voice. If Bryant's call was warm and conversational, the platform's microcopy must match. 'Hey Drew, let's get your Chelsea place ready' not 'Complete Listing Setup.'"
      ],
      "success_metric": "Post-call platform activation rate: percentage of hosts who click the agent's follow-up link and complete at least one confirmation action on the platform within the same session. Target: 70% activation within 24 hours of the call."
    },
    {
      "id": "works-006",
      "type": "process_pattern",
      "title": "One-Click Actions for Pre-Decided Outcomes",
      "journey_phases": [
        "proposal_mgmt",
        "pricing",
        "retention"
      ],
      "problem": "Drew's call reveals that many platform 'decisions' are actually pre-decided by the time Drew encounters the platform. The price is $2,000/month (decided before the call). The guests are Ariel and Amber (accepted during the call). The term is 4 months with extension (agreed during the call). The deposit is $1,000 (established). Yet the platform presents these as open decisions requiring multi-step interaction: a pricing wizard with blank or editable fields, a proposal review with Accept/Decline/Counter options and details to evaluate, a lease term configurator. Krug Ch. 2 explains why this is wasteful: 'There's not much of a penalty for guessing wrong on a Web site is usually only a click or two of the Back button, making satisficing an effective strategy.' But there's a cost to making Drew re-decide things he's already decided: it introduces question marks ('Wait, should I reconsider? Is $2,000 still right? Should I counter?') that the phone call already resolved. The platform is creating artificial decision points for decisions that are already made.",
      "solution": "When the outcome is pre-decided (by the phone call, by prior confirmation, by obvious context), reduce the interaction to a single confirmation click. (1) If Bryant already discussed pricing and Drew confirmed $2,000/month, the pricing step should show '$2,000/month — confirmed on your call with Bryant' and a single 'Confirm' button. Not a form. Not a wizard step. A confirmation. (2) If Drew already accepted Ariel and Amber during the call, the proposal should arrive as 'Ariel & Amber — 4 months starting early March — $2,000/month — Confirm this proposal' with a single prominent button. The Counter and Decline options can exist but should be visually subordinate — they are edge cases, not the primary path. (3) If the lease is approaching renewal and Drew has expressed interest in extending, the renewal prompt should be 'Extend for another 4 months? [Yes, extend]' — not a form asking Drew to re-specify terms. (4) Distinguish between genuine decisions (where the host needs to evaluate options) and ceremonial confirmations (where the host is rubber-stamping something already decided). Design each accordingly.",
      "evidence": [
        {
          "source": "drew-call.txt, 05:18-05:32",
          "type": "host_call",
          "quote": "they'd want to start with a four months is what they indicated to me. Is that something that would work yep. Four months and then maybe the ability to extend. Okay. Okay. Sounds good.",
          "insight": "Drew decides on 4 months with extension in 14 seconds of conversation. This decision is done. The platform should not reopen it as a multi-field form. It should present it as a confirmation: '4 months, March start, with option to extend — Confirm.'"
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 2",
          "type": "book",
          "quote": "Weighing options may not improve our chances. On poorly designed sites, putting effort into making the best choice doesn't really help. You're usually better off going with your first guess and using the Back button if it doesn't work out.",
          "insight": "Krug observes that forcing option-weighing on users who have already decided is pure friction. It does not improve outcomes — it just adds cognitive cost. The platform must distinguish between 'this is a real choice' and 'this is a formality.'"
        },
        {
          "source": "drew-call.txt, 00:52",
          "type": "host_call",
          "quote": "To confirm that would be a 2000 a month, I think is what it's listed here. That's right.",
          "insight": "Even Bryant treats the price as a confirmation, not a negotiation: 'To confirm that would be...' The platform should use the same pattern — confirm what's known, don't re-ask."
        },
        {
          "source": "dontmakemethink-usability-laws.txt, Ch. 1",
          "type": "book",
          "quote": "every question mark adds to our cognitive workload, distracting our attention from the task at hand. The distractions may be slight but they add up.",
          "insight": "Each re-opened decision is an unnecessary question mark. Drew has already decided. Each 'Are you sure?' or 'Would you like to change?' adds cognitive load without adding value."
        }
      ],
      "priority": "medium",
      "user_goal": "Confirm what I've already decided with a single tap, without being forced to re-evaluate options I've already chosen.",
      "company_goal": "Accelerate the pipeline from call-to-published-listing and call-to-accepted-proposal by eliminating artificial decision points that slow pre-decided hosts.",
      "time_budget": "A pre-decided confirmation should take 5 seconds: scan the summary (3 sec), click Confirm (2 sec). If it takes longer, the platform is treating a confirmation as a decision.",
      "anti_goals": [
        "DO NOT present pre-decided items as open-ended forms with editable fields. Show them as read-only summaries with a Confirm button.",
        "DO NOT give Counter/Decline equal visual weight as Accept when the call has already established acceptance. Counter and Decline should be available but visually recessive.",
        "DO NOT add confirmation dialogs ('Are you sure?') to confirmations. A confirmation of a confirmation is the opposite of 'don't make me think.'",
        "DO NOT force the host to re-enter or re-specify terms that were already agreed upon in the call."
      ],
      "success_metric": "Time-to-confirmation for pre-decided actions: median time from page load to confirmation click. Target: under 10 seconds for proposals where terms were pre-discussed with the agent, under 5 seconds for pricing confirmations."
    }
  ]
}
## Output Instructions
Output ONLY the valid JSON object matching the communicates-elements schema from your agent instructions above. No markdown fences, no commentary. Just the raw JSON.
