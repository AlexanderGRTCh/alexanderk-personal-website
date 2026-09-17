# Portfolio editorial guide

Updated September 14, 2026.

The portfolio presents Alexander as an AI engineer and founder of Ktisis Arc. Flagship project pages are layered technical case studies. A regular reader should understand the problem and value in the opening minute. A technical reader should then be able to inspect the actual architecture, implementation choices, operating behavior, evidence, and limits without opening hidden sections.

## Flagship case study protocol

Do not impose a short universal word limit. Let the complexity of the system determine the length. A five minute read, usually about 1,200 to 1,700 words, is appropriate for the flagship projects.

Open with the real problem, Alexander's role, and a compact evidence snapshot. Follow with a system diagram. Then explain the engineering in layers:

1. The operating journey or end to end workflow.
2. The main subsystems and their boundaries.
3. The difficult design decisions and rejected shortcuts.
4. State, recovery, observability, and failure behavior.
5. Concrete evidence with a verification date.
6. Current limits and claims the evidence does not establish.
7. The implementation stack and what Alexander personally built.

Keep technical content visible in the main reading path. Do not move the core architecture into expandable details. Remove repetition and unsupported claims rather than removing whole subsystems.

Use plain language first, followed immediately by precise implementation detail. Explain why each technology or algorithm exists. A tool list without the design reason is incomplete.

Homepage selection remains Theophonia, Agentic System, StreakUp, and Hippocampus. Cloud Security and Tennis remain in the project archive. The earlier infrastructure URLs redirect to the current Agentic System story.

## Evidence and accuracy

New articles receive their real publication date. Existing articles show the date of substantive revision. Measurements include their verification date and scope. Updating the article does not create a new performance result.

Theophonia uses the inspected manifest totals and traceable repair record in **portfolio evidence 2026 09 14.json**. A completed pipeline stage does not certify publication. No public audio demo is presented.

Agentic System uses current database and tool counts only when directly inspected. Historical review costs and boot measurements keep their original snapshot dates. The site does not claim unattended autonomy, zero cloud dependency, universal recall, or a measured advantage over one provider at equal cost.

Hippocampus follows the current retrieval implementation. Brain and Echo use separate tables and retrieval paths in one SQLite database. FTS5 and exact vector results are fused and diversified. Decay constants are not described as mathematical half lives. Query embeddings can use a cloud service. Optional model reranking is dormant.

StreakUp uses the live source repository and public store destinations. Test declaration counts are source counts unless a full test run is explicitly recorded. Revenue, retention, conversion, and user growth are not inferred.

Visible public copy uses no dash punctuation. Do not use arrow glyphs, arrow entities, or decorative arrowheads anywhere on the site, including links, diagrams, generated CSS content, and error pages. Technical identifiers are rewritten in readable form where possible.

## Release workflow

Requested site changes include commit, push, and production verification unless Alexander explicitly says local only or asks not to deploy.

Build with **npm run build**. Inspect desktop and mobile pixels in the real browser. Verify dates, diagrams, image loads, internal links, and rendered copy. Preserve the contact form without submitting a test message.

Production uses the GitHub main branch and Cloudflare Pages integration. Verify the deployed commit and the custom domain after pushing. An independent reviewer assesses what a business reader and an engineering hiring manager can learn from the finished pages.
