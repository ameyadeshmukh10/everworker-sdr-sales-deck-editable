# AI SDR — Data Compliance & Security Overview

**EverWorker · Pipeline Generation AI Solution - SDR AI Worker**

Purpose: Technical review & sign-off · Date: September 2026 · Version: 1.0

The AI SDR is an autonomous sales prospecting AI worker. It is designed around data minimization: it holds only the contact fields required to send outreach, builds campaign content exclusively from publicly available information, and runs as a fully isolated single-tenant deployment per client. This document summarizes what data the system touches, where it lives, and the controls around it.

## 1. Data minimization — what is stored

The AI SDR stores only the contact information required to personalize and deliver outreach. All contact records originate from the client's own CRM for inbound or from b2b data enrichment providers for outbound. The CRM remains the system of record throughout.

| Field | Source | Why it's needed |
|---|---|---|
| Full name | Client CRM | Addressing the recipient |
| Business email | Client CRM | Email delivery |
| Job title / position | Client CRM | Persona-appropriate messaging |
| Company & domain | Client CRM | Account research (public sources) |
| LinkedIn profile URL | Client CRM | LinkedIn outreach delivery |
| Country | Client CRM | Email scheduling |
| *Marketing Fields* | Client CRM | Fields that indicate a marketing touchpoint. E.g. downloaded whitepaper, webinar registration |

**Not collected or stored:**

- Phone numbers, home or personal addresses, or personal (non-business) email accounts
- Sensitive or special-category personal data of any kind

## 2. Campaign content — public sources only

Outreach copy is generated from publicly available information gathered through web search:

1. The account level: company news, the company's public website, public DNS records, and publicly posted job openings.
2. Client provided: Client provided messaging and positioning, case studies, referenceable customer stories, standard marketing materials that are shared publicly.
3. The contact level: Inferences made based on the contact's job title, LinkedIn profile information (only if the contact has a profile set to public visibility), publicly posted information (e.g. statements in press releases or publications directly attributable to the contact. Most relevant for C-Level.)

Where a third-party enrichment service is used for company-level signals (e.g. hiring activity), it receives the **company domain only**. No personal data is ever sent to enrichment providers.

## 3. LLM usage — private endpoints, no training

- Each client deployment uses its own private LLM API endpoint with dedicated, client-specific credentials. Prompts and outputs are never shared across clients.
- Data submitted to the LLM API is **not used to train models**, per the commercial API terms in effect.
- LLM calls are transient processing: the model receives the minimal contact fields plus public research, returns the drafted copy, and the copy is stored only within the client's own deployment.
- LLM endpoint procurement, security, billing, and operation is managed entirely by EverWorker. We do not require access to your LLMs.

## 4. Deployment — single tenant, isolated data

Every client runs as a dedicated single-tenant deployment on Railway. There is no shared application, database, or storage layer between clients.

- **Isolated stack per client:** a dedicated application service, dedicated databases, and a dedicated storage volume, provisioned in the client's own Railway project.
- **Private networking:** the application reaches its databases over the project's private network; databases are not exposed publicly.
- **Per-client credentials everywhere:** every integration (CRM, sending platforms, LLM API) uses private single tenant isolated API keys, unique to each client, scoped only to that client's accounts.
- **No cross-client data plane:** there is no shared pipeline, queue, or analytics store; one client's data cannot appear in another client's deployment by construction.
- **No requirements from clients:** EverWorker manages the entire infrastructure layer for our clients. We do not require access to your email accounts or sequencing tool.

## 5. Access & security controls

- All traffic to third-party APIs and between services is encrypted in transit (TLS/HTTPS).
- The operations console is gated behind authenticated login; credentials are stored as salted hashes and sessions use signed tokens.
- Inbound webhooks are authenticated with a shared secret and rejected without it.
- API secrets live in the deployment platform's service configuration — never in source code or repositories.
- CRM access uses a scoped private-app token limited to the properties and objects the pipeline needs (least privilege). The private-app token is set up for clients during onboarding.
- The web console reads the pipeline database in read-only mode; writes go through controlled pipeline jobs only.

## 6. Opt-out & suppression

Do-not-contact status is enforced automatically and continuously. Contacts can opt-out via links and/or written replies via LinkedIn and/or Email. They are automatically tagged, suppressed, and flagged. Any contact that is flagged in the client's CRM (opted out, booked a meeting, became an opportunity) is also excluded at every stage:

- Flagged contacts are dropped when contacts are pulled from the CRM and re-checked again at enrollment time.
- A background sweep runs every 30 minutes and stops any in-flight email or LinkedIn sequence for newly flagged contacts, across all channels.
- Every suppression action is recorded in an audit ledger and logged back to the contact's CRM timeline. Suppression of active sequences is one-way — a stopped sequence for a contact that has opted-out stays stopped and is not able to resume for that contact.

## 7. Summary of commitments

- ✓ Only outreach-essential contact fields are stored; no additional personal data is collected.
- ✓ Campaign content is built solely from publicly available, company-level information and basic marketing touchpoint activity.
- ✓ LLM endpoints are private and client-specific; client data is never used for model training.
- ✓ Each client is a single-tenant deployment with fully isolated data — no shared infrastructure.
- ✓ Opt-outs and do-not-contact flags are enforced automatically, continuously, and auditably.

---

*Questions on any item above can be answered with a walkthrough of the deployment and its data stores. Prepared by EverWorker for client technical review.*

*One-page render: `sdr-compliance-one-pager.html` (print-ready, Letter/A4).*
