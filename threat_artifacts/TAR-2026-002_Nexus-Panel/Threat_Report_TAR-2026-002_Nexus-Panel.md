# Threat Analysis Report (TAR-2026-002)

## 1) Executive Summary
- **Analyzed Object:** Docker image `zohomail/nexus-panel:latest`
- **Analysis Type:** Remote-only static analysis (registry metadata + streamed layer inspection in memory)
- **Conclusion:** **Malicious / phishing infrastructure toolkit** (high confidence)
- **Primary Risk:** Credential theft, wallet draining, phishing campaign hosting and delivery

## 2) Scope and Constraints
- No local container execution was performed.
- No malware artifacts were persisted from image layers; analysis was done via streamed remote blob inspection.
- Assessment is based on static indicators and source-level evidence extracted from image contents.

## 3) Target Identification
- Registry repo: `zohomail/nexus-panel`
- Tag: `latest`
- amd64 manifest digest: `sha256:ec883e693d95d27423b19e71a56b6ab74395d1a2f18cdd03fcc2daba25e1c9b4`
- Config digest: `sha256:0fb15a8fef1cf1d1c8dc83b37ba1feb88d9a2970cf4773c85f99d621fca3d93e`
- Layer count: `13`

## 4) Key Technical Findings
1. **Explicit drainer functionality**
   - File: `app/server/routes/serve/drainer.py`
   - Contains route handlers for `/drainer/connect`, `/drainer/approve`, `/drainer/done`.
   - Docstring indicates wallet connection and token approval capture behavior.

2. **Trust wallet drain workflow**
   - File: `app/server/routes/serve/trust_drainer.py`
   - Includes workflows and API endpoints for trust-drainer operations, including drain operations for victim records.

3. **Phishing lure template generation**
   - File: `app/server/routes/lure.py`
   - Contains lure templates and wallet verification/transfer confirmation messaging.
   - Brand impersonation style templates include crypto and financial themes.

4. **Bulk SMTP sending capabilities**
   - File: `app/server/routes/nfa_mailer.py`
   - Implements SMTP account configuration/testing and send endpoints suitable for campaign delivery.

5. **Threat-intel feed integrations for phishing ecosystem workflows**
   - File: `app/server/routes/monitor.py`
   - References OpenPhish, PhishStats, and URLhaus endpoints.

6. **Asset proxying path**
   - File: `app/server/routes/serve/assets_proxy.py`
   - Provides encoded URL proxy route (`/__nexus_proxy/.../{encoded_url}`), consistent with traffic relay/obfuscation usage.

## 5) Indicator Summary
- Detailed evidence lines: `evidence_lines.json`
- URL/network indicators: `ioc_urls.txt`
- Remote image metadata: `remote_image_metadata.json`

## 6) Risk Assessment
- **Severity:** Critical
- **Confidence:** High
- **Likely Use Case:** Phishing panel and wallet-drainer operations with lure hosting, SMTP sending, and campaign monitoring.

## 7) Recommended Actions
1. Block image digest and repository in container registries and CI allowlists.
2. Add IOC URLs/domains to detection pipelines where appropriate.
3. Hunt for internal usage of matching route patterns/endpoints and phishing lures.
4. Preserve this report and evidence package for incident response and legal review.

## 8) Chain of Custody Notes
- Analysis timestamp (UTC): 2026-09-11T08:58:57.642112Z
- Method: Remote registry API access and streamed in-memory static parsing.
- No local execution of container payload.
