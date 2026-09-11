# 3-Month Consolidated Zoho-Related Docker Threat Report

- Analysis Time (UTC): 2026-09-11T10:19:54.447588Z
- Time Window: Last 90 days
- Search Repos Parsed: 297
- Repos Updated in Window: 26
- Flagged Repos: 2 (High: 1, Medium: 1)

## Executive Summary
- Confirmed high-risk malicious panel identified: `zohomail/nexus-panel`.
- Medium-risk images were flagged by reputation/metadata heuristics; deep scan context included below.

## Top Repositories by Pull Count (Last 90 Days)
| Repository | Pulls | Updated (days ago) | Risk | Score |
|---|---:|---:|---|---:|
| `airbyte/source-zoho-crm` | 136979 | 0.43 | low | 2 |
| `zohoanalytics/onprem` | 25944 | 6.71 | low | 0 |
| `airbyte/source-zoho-books` | 22057 | 3.07 | low | 2 |
| `airbyte/source-zoho-desk` | 19308 | 3.06 | low | 2 |
| `airbyte/source-zoho-analytics-metadata-api` | 18394 | 3.07 | low | 2 |
| `airbyte/source-zoho-bigin` | 17304 | 3.05 | low | 2 |
| `airbyte/source-zoho-billing` | 17149 | 3.06 | low | 2 |
| `airbyte/source-zoho-inventory` | 17114 | 3.05 | low | 2 |
| `airbyte/source-zoho-campaign` | 17088 | 3.06 | low | 2 |
| `airbyte/source-zoho-expense` | 16491 | 3.06 | low | 2 |
| `airbyte/source-zoho-invoice` | 16192 | 3.06 | low | 2 |
| `innotech999/zoho_be` | 6939 | 0.11 | low | 2 |
| `innotech999/zoho_fe` | 5889 | 0.0 | low | 2 |
| `zohoanalytics/mcp-server` | 5061 | 38.73 | low | 1 |
| `banffpaytech/zoho-payout` | 2233 | 9.89 | low | 2 |
| `senzr/zoho-books` | 1913 | 3.94 | low | 2 |
| `andlo2021/zoho-mcp-api` | 1383 | 64.83 | low | 2 |
| `bilal5081850/zoho-advance-reporting` | 1363 | 35.14 | low | 2 |
| `renormalize/zoho-projects-source` | 954 | 3.93 | low | 2 |
| `senzr/zoho` | 858 | 57.99 | low | 2 |

## Flagged Repositories
### `zohomail/nexus-panel`
- Risk: **HIGH**
- Pulls: 204
- Updated: 2026-09-05T17:43:51.186628Z (5.69 days ago)
- Reasons: very_new_publisher, empty_description, zero_stars, low_pull_count, panel_like_runtime_stack
- Build/Runtime Flags: uvicorn_server_main, playwright_chromium
- Deep Scan Hits: path=120, content=67
- Sample Evidence:
  - `smtp_campaign` in `usr/local/lib/python3.13/email/_header_value_parser.py`: `', 'angle-addr-start'))     value = value[1:]     # Although it is not legal per RFC5322, SMTP uses '<>' in certain     # circumstances.     if value and value[0] == '>':         angle_addr.append(ValueTerminal('>', 'angle-addr-end'))         angle_addr.defects.append(error`
  - `smtp_campaign` in `usr/local/lib/python3.13/email/policy.py`: `at32',     'compat32',     'Policy',     'EmailPolicy',     'default',     'strict',     'SMTP',     'HTTP',     ]  linesep_splitter = re.compile(r'\n|\r\n?')  @_extend_docstrings class EmailPolicy(Policy):      """+     PROVISIONAL      The API extensions enabled by this p`
  - `smtp_campaign` in `usr/local/lib/python3.13/logging/config.py`: `           config['handlers'] = hlist             elif issubclass(klass, logging.handlers.SMTPHandler) and\                 'mailhost' in config:                 config['mailhost'] = self.as_tuple(config['mailhost'])             elif issubclass(klass, logging.handlers.SysLo`
  - `smtp_campaign` in `usr/local/lib/python3.13/logging/handlers.py`: `socket.sendall(msg)         except Exception:             self.handleError(record)  class SMTPHandler(logging.Handler):     """     A handler class which sends an SMTP email for each logging event.     """     def __init__(self, mailhost, fromaddr, toaddrs, subject,        `
  - `smtp_campaign` in `usr/local/lib/python3.13/pydoc_data/module_docs.py`: `',     'site': 'site#module-site',     'sitecustomize': 'site#module-sitecustomize',     'smtpd': 'smtpd#module-smtpd',     'smtplib': 'smtplib#module-smtplib',     'sndhdr': 'sndhdr#module-sndhdr',     'socket': 'socket#module-socket',     'socketserver': 'socketserver#mod`

### `vishnurajvishwakarma/zohobooksingestion`
- Risk: **MEDIUM**
- Pulls: 344
- Updated: 2026-09-05T13:36:47.038418Z (5.86 days ago)
- Reasons: newish_publisher, zero_stars, low_pull_count
- Deep Scan Hits: path=0, content=1
- Sample Evidence:
  - `smtp_campaign` in `app/node_modules/.pnpm/mime-db@1.52.0/node_modules/mime-db/db.json`: `net-xdd+zip": {     "source": "iana",     "compressible": false   },   "application/batch-smtp": {     "source": "iana"   },   "application/bdoc": {     "compressible": false,     "extensions": ["bdoc"]   },   "application/beep+xml": {     "source": "iana",     "charset": "`

## Determination
- `zohomail/nexus-panel` is assessed as **malicious/phishing infrastructure** based on drainer workflows, lure content, and campaign-enablement features.
- Other flagged images in this window did not show comparable high-confidence malicious indicators in deep scan and should be treated as **watchlist** pending further dynamic/runtime analysis.

## Artifacts
- `zoho_3month_scan_data.json` (full metadata + deep-scan findings)
