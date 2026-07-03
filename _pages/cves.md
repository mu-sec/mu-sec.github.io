---
layout: archive
title: "Discovered CVEs"
permalink: /cves/
author_profile: true
seo_title: "Discovered CVEs - Yilin Li"
description: "Discovered CVEs by Yilin Li, including CVE-2026-0081 in Android NFC and a USD 7,000 vulnerability reward."
---

<style>
.cve-list {
  display: grid;
  gap: 1rem;
}

.cve-card {
  border: 1px solid #d9e2ec;
  border-left: 5px solid #52adc8;
  border-radius: 6px;
  padding: 1rem 1.1rem;
  background: #fff;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
}

.cve-card__head {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.45rem;
}

.cve-card__status {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.cve-card h2 {
  margin: 0;
  font-size: 1.05rem;
}

.cve-card p {
  margin: 0.55rem 0;
}

.cve-summary {
  color: #475569;
}

.cve-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin: 0.75rem 0;
}

.cve-badge {
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  padding: 0.12rem 0.5rem;
  background: #f8fafc;
  color: #475569;
  font-size: 0.74rem;
  font-weight: 700;
}

.cve-badge--severity {
  border-color: #f0c85a;
  background: #fff7d6;
  color: #7a4d00;
}

.cve-badge--critical {
  border-color: #f4a8a8;
  background: #fff1f1;
  color: #9b1c1c;
}

.cve-badge--reward {
  border-color: #86efac;
  background: #f0fdf4;
  color: #166534;
}

.cve-meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  gap: 0.55rem 1rem;
  margin: 0.85rem 0;
}

.cve-meta div {
  min-width: 0;
}

.cve-meta dt {
  color: #64748b;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
}

.cve-meta dd {
  margin: 0.08rem 0 0;
  color: #334155;
}

.cve-links a {
  font-weight: 700;
}
</style>

<div class="cve-list">
  <article class="cve-card">
    <div class="cve-card__head">
      <h2><a href="https://nvd.nist.gov/vuln/detail/CVE-2026-0081">CVE-2026-0081</a></h2>
      <div class="cve-card__status">
        <span class="cve-badge cve-badge--severity">Android Severity: High</span>
        <span class="cve-badge cve-badge--reward">USD 7,000 Reward</span>
      </div>
    </div>

    <p class="cve-summary"><strong>Android NFC event spoofing vulnerability.</strong> A missing permission check in Android NFC could allow spoofing an NFC event, leading to local escalation of privilege without additional execution privileges or user interaction. The issue is listed as High severity in Android's security release notes and assigned a CVSS v4.0 base score of 10.0 (Critical).</p>

    <div class="cve-badges">
      <span class="cve-badge">Android</span>
      <span class="cve-badge">NFC</span>
      <span class="cve-badge">EoP</span>
      <span class="cve-badge">CWE-862</span>
      <span class="cve-badge cve-badge--critical">CVSS v4.0: 10.0 Critical</span>
    </div>

    <dl class="cve-meta">
      <div>
        <dt>Component</dt>
        <dd>System / NFC</dd>
      </div>
      <div>
        <dt>Android Reference</dt>
        <dd>A-449367527</dd>
      </div>
      <div>
        <dt>Weakness</dt>
        <dd>CWE-862: Missing Authorization</dd>
      </div>
      <div>
        <dt>Published</dt>
        <dd>June 17, 2026</dd>
      </div>
    </dl>

    <p class="cve-links">[<a href="https://nvd.nist.gov/vuln/detail/CVE-2026-0081">NVD</a>] [<a href="https://source.android.com/docs/security/bulletin/android-17">Android Security Release Notes</a>] [<a href="https://www.cve.org/CVERecord?id=CVE-2026-0081">CVE Record</a>]</p>
  </article>
</div>
