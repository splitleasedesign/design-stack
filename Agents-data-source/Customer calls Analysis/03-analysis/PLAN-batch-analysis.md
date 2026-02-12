# Plan: Batch-Based Host Transcript Re-Analysis

## Problem
The previous analysis of 46 host transcripts was done in bulk, leading to data errors. Need to re-analyze in smaller batches with verification at each step.

---

## Methodology

### Batch Size: 5-6 transcripts per batch
- Small enough to read carefully
- Large enough to be efficient
- Each batch produces verified coding before moving to next

### Coding Variables (Simplified to 10 core variables)

| Variable | Code | Definition | How to Determine |
|----------|------|------------|------------------|
| `host_type` | OO/INV/OTH | Owner-Occupant / Investor / Other | Do they live there? Own multiple properties? |
| `ghost_accept` | Y/N/U | Accepts multiple rotating guests | Explicit statement only |
| `ghost_reject` | Y/N | Explicitly rejects multiple guests | Explicit statement only |
| `single_pref` | Y/N | Prefers one guest | Explicit statement only |
| `long_term` | Y/N | Wants 3+ months | Explicit statement only |
| `payment_concern` | Y/N | Questions payment timing/security | Mentioned in call |
| `trust_concern` | Y/N | Mentions vetting/scams/verification | Mentioned in call |
| `platform_resist` | Y/N | Prefers direct, resists platform | Explicit resistance |
| `blocker` | Text | What blocks them (co-op, etc) | Specific reason stated |
| `conversion` | L/C/D | Likely / Conditional / Declined | End state of call |

### Evidence Requirement
For each coding decision, must include:
- Quote or timestamp from transcript
- Reasoning for code assignment

---

## Batch Schedule

### Batch 1 (6 transcripts) - A names
1. andreas-call.txt
2. anthony-call.txt
3. chantel-call.txt
4. cristina-call.txt
5. dana-call.txt
6. david-call.txt

### Batch 2 (6 transcripts) - D-G names
7. deedra-call.txt
8. diane-kaufhold-call.txt
9. dimitri-call.txt
10. drew-call.txt
11. gale-grant-call.txt
12. gregory-stanford-call.txt

### Batch 3 (6 transcripts) - H-J names
13. hemeden-call.txt
14. herbert-call.txt
15. jason-call.txt
16. jessica-filomeno-call.txt
17. joie-coelho-call.txt
18. joie-james-call.txt

### Batch 4 (6 transcripts) - J-K names
19. john-call.txt
20. jonathan-kim-call.txt
21. june-call.txt
22. keah-call.txt
23. kelly-call.txt
24. ken-chang-call.txt

### Batch 5 (6 transcripts) - K-L names
25. kent-call.txt
26. kris-call.txt
27. lilly-call.txt
28. louise-call.txt
29. luci-chambers-call.txt
30. mahesh-call.txt

### Batch 6 (6 transcripts) - M-P names
31. malvern-call.txt
32. michael-spear-call.txt
33. nakoley-renville-call.txt
34. nneka-call.txt
35. patricia-call-1.txt
36. patricia-call-2.txt

### Batch 7 (6 transcripts) - P-S names
37. paul-call.txt
38. rami-call.txt
39. ramsey-call.txt
40. robbie-call.txt
41. scott-white-call.txt
42. sherene-call.txt

### Batch 8 (6 transcripts) - S-Z names
43. shirley-call.txt
44. stephanie-call.txt
45. tag-call.txt
46. tammy-call.txt
47. toni-call.txt
48. ZEIN-call.txt

---

## Process Per Batch

1. **Read** each transcript in full
2. **Code** each variable with evidence (quote + reasoning)
3. **Output** batch coding table with evidence column
4. **Verify** counts before proceeding to next batch
5. **Checkpoint** - save batch results to file

---

## Output Format Per Batch

```
## Batch X Results

| Host | host_type | ghost_accept | ghost_reject | single_pref | long_term | payment | trust | platform_resist | blocker | conversion |
|------|-----------|--------------|--------------|-------------|-----------|---------|-------|-----------------|---------|------------|
| Name | OO/INV/OTH | Y/N/U | Y/N | Y/N | Y/N | Y/N | Y/N | Y/N | text | L/C/D |

### Evidence Log

**Host Name:**
- host_type: [code] - "[quote]" (timestamp)
- ghost_accept: [code] - "[quote]" (timestamp)
- ...
```

---

## Final Aggregation

After all 8 batches complete:
1. Merge all batch tables into master dataset
2. Run statistical counts
3. Cross-verify totals
4. Generate new quantitative report with full traceability

---

## Quality Checks

- [ ] Each host appears exactly once
- [ ] No missing transcripts
- [ ] Every code has evidence
- [ ] Totals add up correctly
- [ ] Batch sums = final totals

---

*Plan created: November 28, 2025*
*Total transcripts: 48 files (some hosts may have multiple calls)*
