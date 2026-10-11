(function () {
  'use strict';

  /* ---------- Content ---------- */

  var LI = 'https://www.linkedin.com/in/ankitsinghparmar/';

  var PROFILES = [
    { id: 'recruiter', name: 'Recruiter', color: '#2E86DE', face: 'smile' },
    { id: 'architect', name: 'Architect', color: '#8E8E93', face: 'think' },
    { id: 'developer', name: 'Developer', color: '#E50914', face: 'code' },
    { id: 'curious',   name: 'Just curious', color: '#F5A623', face: 'wow' }
  ];

  var ITEMS = {
    about: {
      title: 'About Ankit', art: 'a1', meta: ['SAP BTP Technical Architect', 'Lemongrass', 'London, UK'],
      body: '<p>I help enterprises through their cloud transformation by contributing to cloud architecture, operations, integration and security, and by enabling DevSecOps for SAP BTP solutions.</p>' +
            '<p>Today I act as technical design authority for BTP, AI and analytics programmes at Lemongrass, sitting between enterprise architecture, delivery teams and business stakeholders. Before that I spent six years across ALDI, McKinsey, Rolling Arrays and Unilever, in India, Germany and now the UK.</p>' +
            '<p class="tags"><span>Enterprise Cloud Architecture</span><span>DevSecOps</span><span>Integrations &amp; Extensions</span><span>SAP BTP &amp; AI</span><span>Private &amp; Public Cloud</span></p>'
    },

    /* Experience */
    lemongrass: {
      title: 'Lemongrass', sub: 'BTP Technical Architect', art: 'e1', year: '2026', meta: ['Apr 2026 – Present', 'London, UK', 'NOW SHOWING'],
      body: '<p>End-to-end design of SAP BTP landscapes with a focus on agentic AI, Model Context Protocol and the SAP data &amp; analytics stack.</p><ul>' +
            '<li><b>BTP architecture &amp; governance</b>: global account and subaccount strategy, Cloud Foundry and Kyma, clean-core extensions with CAP, ABAP Cloud, SAP Build and Fiori; ADRs and design-review gates.</li>' +
            '<li><b>AI agents</b>: Joule and Joule Agents, Joule Studio skills, SAP AI Core and Generative AI Hub, RAG on HANA Cloud Vector Engine, with human-in-the-loop guardrails.</li>' +
            '<li><b>MCP &amp; interoperability</b>: MCP servers exposing SAP data and actions as governed tools, routed through API Management.</li>' +
            '<li><b>Integration</b>: Integration Suite across S/4HANA, SuccessFactors, Ariba and third-party systems.</li>' +
            '<li><b>Security</b>: IAS/IPS, XSUAA, principal propagation, Cloud Connector, role design.</li>' +
            '<li><b>Data &amp; analytics</b>: Datasphere in Business Data Cloud and SAP Analytics Cloud planning.</li>' +
            '<li>Roadmaps, estimates and business cases; mentoring developers and leading proofs of concept.</li></ul>'
    },
    aldi: {
      title: 'ALDI DX', sub: 'IT Engineer · BTP Change & Deployment Expert', art: 'e2', year: '2024', meta: ['May 2024 – Mar 2026', 'Mülheim an der Ruhr, Germany', 'Hybrid'],
      body: '<ul><li>Built a change and deployment matrix for every SAP BTP artefact type, from Work Zone content to integrations and applications.</li>' +
            '<li>Ran change management with GitLab CI/CD and Solution Manager + ChaRM across a multi-region, multi-stage architecture, aligned with ServiceNow release management.</li>' +
            '<li>Created scalable GitLab pipelines for Cloud Foundry and Kyma; drafted security and governance policies and quality gates.</li>' +
            '<li>Member of the architecture and governance board for DevSecOps and BTP app architecture.</li></ul>' +
            '<h4>Initiatives</h4><ul><li><b>Flashpipe CI/CD</b>: GitLab pipelines deploying iFlows, value mappings and APIs straight from a central repo.</li>' +
            '<li><b>Cloud ALM for operations</b>: real-user and health monitoring with OpenTelemetry, plus self-hosted Grafana on Kyma.</li>' +
            '<li><b>SAP Frontend application service</b>: flexible versioned deployments as an alternative to HTML5 Repository and app router.</li></ul>'
    },
    mckinsey: {
      title: 'McKinsey & Company', sub: 'Software Engineer', art: 'e3', year: '2022', meta: ['Jun 2022 – Apr 2024', 'Gurugram, India', 'Finance Cloud Transformation'],
      body: '<ul><li>Developed and debugged standard and custom S/4HANA integrations: document compliance, invoices, HR mini-master, payroll and loans outbound; customer and engagement data inbound. Event-driven designs on Event Mesh.</li>' +
            '<li>Administered the Integration and Extension landscape and deployed CAP projects, Fiori apps, HANA schemas and attribute-based roles to QA and production.</li>' +
            '<li>Set up SAP CI/CD and Transport Management, Cloud Connector for on-premise APIs, and Work Zone launchpads with role-based tiles.</li>' +
            '<li>Introduced API Management over custom OData APIs on HANA views, with Splunk logging.</li>' +
            '<li>Co-built a unified CPI monitoring and exception-reprocessing app (CAP, Fiori, CPI, HANA) that went live in production.</li></ul>'
    },
    rolling: {
      title: 'Rolling Arrays', sub: 'Consultant · Associate Consultant', art: 'e4', year: '2020', meta: ['Jul 2020 – Jun 2022', 'Mumbai, India', 'APAC clients'],
      body: '<ul><li><b>The Dairy Farm Group (Hong Kong)</b>: led AMS within SLA, ran requirements workshops, replicated org, cost-centre and employee data between SAP ERP, Employee Central and SFTP with PGP encryption.</li>' +
            '<li><b>Parkway Hospitals (Singapore)</b>: 21 custom integrations between SuccessFactors, ERP HCM and third parties.</li>' +
            '<li><b>PPB Group Berhad (Malaysia)</b>: CPI encryption and payroll file processing; time and attendance integrations.</li>' +
            '<li>IAS/IPS SSO, payroll integrations (ADP, CDP, ECP), data lake, RPA and analytics work.</li>' +
            '<li>Groovy, XSLT, splitter/gather, multicast, ProcessDirect, value mappings; SuccessFactors, OData, SOAP, REST, IDoc, SFTP adapters.</li></ul>'
    },
    unilever: {
      title: 'Unilever', sub: 'R&D IT Associate', art: 'e5', year: '2019', meta: ['Sep 2019 – Apr 2020', 'Bengaluru, India'],
      body: '<p>Custom SAP Fiori/UI5 development and OData services, SAP PLM, a BRF+ framework implementation and a proof of concept on costing structures.</p>'
    },
    uxindia: {
      title: 'UX India', sub: 'UX Developer · Internship', art: 'e6', year: '2019', meta: ['May – Sep 2019', 'Remote'],
      body: '<p>Built and maintained ux-india.org and umo.design, with Adobe XD wireframes, graphic design and SEO.</p>'
    },

    /* Skills */
    s_platform: { title: 'Platform', art: 's1', meta: ['Skills'], body: tags(['SAP BTP', 'Cloud Foundry', 'Kyma', 'Clean core', 'S/4HANA', 'HANA Cloud', 'Basis']) },
    s_ai:       { title: 'AI & Agents', art: 's2', meta: ['Skills'], body: tags(['Joule & Joule Studio', 'SAP AI Core', 'Generative AI Hub', 'RAG & Vector Engine', 'Model Context Protocol']) },
    s_int:      { title: 'Integration', art: 's3', meta: ['Skills'], body: tags(['Cloud Integration (CPI)', 'API Management', 'Event Mesh', 'SuccessFactors', 'Groovy', 'XSLT', 'Cloud Connector']) },
    s_dev:      { title: 'Development', art: 's4', meta: ['Skills'], body: tags(['CAP', 'Fiori / UI5', 'OData', 'SAP Build', 'Work Zone', 'JavaScript']) },
    s_ops:      { title: 'DevSecOps', art: 's5', meta: ['Skills'], body: tags(['GitLab CI/CD', 'Flashpipe', 'SAP CI/CD & TMS', 'Cloud ALM', 'Focused Run / SolMan', 'OpenTelemetry', 'Grafana']) },
    s_sec:      { title: 'Security & Data', art: 's6', meta: ['Skills'], body: tags(['IAS / IPS', 'XSUAA', 'SSO', 'Principal propagation', 'Datasphere', 'SAP Analytics Cloud']) },

    /* Certifications */
    c_cap:  { title: 'CAP Backend Developer', sub: 'SAP Certified', art: 'c1', year: '2026', meta: ['SAP', 'Issued Oct 2026', 'NEW'], body: '<p>SAP Certified – Backend Developer – SAP Cloud Application Programming Model.</p>' },
    c_ai:   { title: 'Generative AI Developer', sub: 'SAP Certified', art: 'c2', year: '2026', meta: ['SAP', 'Issued Oct 2026', 'NEW'], body: '<p>SAP Certified – SAP Generative AI Developer.</p>' },
    c_int:  { title: 'Integration Developer', sub: 'SAP Certified Associate', art: 'c3', year: '2025', meta: ['SAP', 'Issued Apr 2025'], body: '<p>SAP Certified Associate – Integration Developer.</p>' },
    c_hrta: { title: 'HRTA Professional', sub: 'Rolling Arrays', art: 'c4', year: '2022', meta: ['Rolling Arrays', 'Issued Mar 2022'], body: '<p>Rolling Arrays HRTA Certified Professional, and the Rolling Arrays "Unsung Heroes" award (2022).</p>' },
    edu:    { title: 'B.E. Computer Science', sub: 'BIST Bhopal', art: 'c5', year: '2016', meta: ['2016 – 2020', 'Major in Cloud Computing'], body: '<p>Bachelor of Engineering in Computer Science &amp; Engineering, BIST Bhopal, with a major in cloud computing.</p>' },

    /* Projects */
    p_mcp: {
      title: 'BTP Admin MCP Server', sub: 'Side project', art: 'p1', year: '2026', meta: ['MCP', 'SAP BTP', 'AI'],
      body: '<p>A Model Context Protocol server that lets an AI assistant handle routine BTP administration conversationally instead of clicking through the cockpit.</p>' +
            '<h4>What it can do</h4><ul class="checks"><li>Manage entitlements and assign them across multiple subaccounts</li><li>Full CRUD for users and role collections</li><li>Enable the Cloud Foundry environment</li><li>Manage subaccount trust configuration</li><li>Audit users and analyse the global account</li><li>Discover and report on entitlements</li></ul>' +
            '<h4>Not yet</h4><p class="dim">Cloud Foundry spaces and users, directories, service instances, Kyma enablement and role variations from templates. Knowing where the gaps are matters as much as what it automates.</p>'
    },
    p_cpi: {
      title: 'CPI Monitor & Reprocess', sub: 'McKinsey', art: 'p2', year: '2023', meta: ['CAP', 'Fiori', 'CPI', 'HANA'],
      body: '<p>A unified CPI message monitoring and exception-logging app, built and hosted on the SAP landscape, that went live in production.</p><ul><li>Exception reprocessing from a UI</li><li>Per-iFlow characteristics and business keys captured from payloads</li><li>Unified custom email alerts</li></ul><p class="dim">Follow-up proposal: Fiori screens for bulk end-to-end integration testing.</p>'
    },
    p_flash: {
      title: 'Flashpipe CI/CD', sub: 'ALDI', art: 'p3', year: '2025', meta: ['GitLab', 'Integration Suite'],
      body: '<p>GitLab CI/CD pipelines that deploy Integration Suite artefacts (iFlows, value mappings, APIs and their dependencies) straight from a central Git repository.</p>'
    },
    p_alm: {
      title: 'Cloud ALM + Grafana', sub: 'ALDI', art: 'p4', year: '2025', meta: ['OpenTelemetry', 'Kyma'],
      body: '<p>Real-user and health monitoring for BTP apps with Cloud ALM and OpenTelemetry, extended with usage analytics on self-hosted Grafana running on Kyma.</p>'
    },
    p_apim: {
      title: 'API Management Layer', sub: 'McKinsey', art: 'p5', year: '2023', meta: ['APIM', 'OData', 'Splunk'],
      body: '<p>An API Management layer hosting custom OData APIs built over HANA DB views, with proxy endpoints, added security and Splunk logging of every external API interaction.</p>'
    },

    /* Quick-pick tiles */
    q_exp: { jump: 'row-experience' }, q_skills: { jump: 'row-skills' }, q_certs: { jump: 'row-certs' }, q_proj: { jump: 'row-projects' }, q_contact: { jump: 'contact' }
  };

  var PICKS = [
    { id: 'q_exp', title: 'Experience', art: 'q1' },
    { id: 'q_skills', title: 'Skills', art: 'q2' },
    { id: 'q_certs', title: 'Certifications', art: 'q3' },
    { id: 'q_proj', title: 'Projects', art: 'q4' },
    { id: 'about', title: 'About me', art: 'q5' },
    { id: 'q_contact', title: 'Hire me', art: 'q6' }
  ];

  var ROWS = {
    picks: { title: function (p) { return "Today's top picks for " + p; }, items: PICKS },
    experience: { id: 'row-experience', title: 'Experience', items: ['lemongrass', 'aldi', 'mckinsey', 'rolling', 'unilever', 'uxindia'], numbered: true },
    projects: { id: 'row-projects', title: 'Projects & initiatives', items: ['p_mcp', 'p_cpi', 'p_flash', 'p_alm', 'p_apim'] },
    skills: { id: 'row-skills', title: 'Skills', items: ['s_platform', 's_ai', 's_int', 's_dev', 's_ops', 's_sec'] },
    certs: { id: 'row-certs', title: 'Certifications & education', items: ['c_cap', 'c_ai', 'c_int', 'c_hrta', 'edu'] }
  };

  var ORDER = {
    recruiter: ['picks', 'experience', 'certs', 'skills', 'projects'],
    architect: ['picks', 'projects', 'experience', 'skills', 'certs'],
    developer: ['picks', 'projects', 'skills', 'certs', 'experience'],
    curious:   ['picks', 'experience', 'projects', 'skills', 'certs']
  };

  function tags(list) { return '<p class="tags">' + list.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</p>'; }

  /* ---------- Helpers ---------- */

  var $ = function (s) { return document.querySelector(s); };
  var store = {
    get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function avatar(p, size) {
    var faces = {
      smile: '<circle cx="35" cy="42" r="5"/><circle cx="65" cy="42" r="5"/><path d="M30 62 Q50 78 70 62" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>',
      think: '<rect x="28" y="38" width="14" height="6" rx="3"/><rect x="58" y="38" width="14" height="6" rx="3"/><path d="M36 66 H64" stroke="#fff" stroke-width="6" stroke-linecap="round"/>',
      code:  '<path d="M34 36 L24 46 L34 56 M66 36 L76 46 L66 56" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 70 Q50 78 62 70" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/>',
      wow:   '<circle cx="35" cy="40" r="6"/><circle cx="65" cy="40" r="6"/><circle cx="50" cy="66" r="8" fill="none" stroke="#fff" stroke-width="6"/>'
    };
    return '<svg class="avatar" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" style="--c:' + p.color + '"><rect width="100" height="100" rx="8" fill="var(--c)"/><rect width="100" height="100" rx="8" fill="url(#gloss)"/><g fill="#fff">' + faces[p.face] + '</g></svg>';
  }

  /* ---------- Screens ---------- */

  var intro = $('#intro'), profiles = $('#profiles'), browse = $('#browse');
  var current = null;

  function showProfiles() {
    intro.hidden = true; browse.hidden = true; profiles.hidden = false;
    document.body.classList.remove('browsing');
    window.scrollTo(0, 0);
  }

  function showBrowse(pid) {
    current = PROFILES.filter(function (p) { return p.id === pid; })[0] || PROFILES[0];
    store.set('profile', current.id);
    intro.hidden = true; profiles.hidden = true; browse.hidden = false;
    document.body.classList.add('browsing');
    $('#switchProfile').innerHTML = avatar(current, 32);
    renderRows();
    window.scrollTo(0, 0);
  }

  function renderProfiles() {
    $('#profileGrid').innerHTML = PROFILES.map(function (p) {
      return '<button class="profile" data-profile="' + p.id + '">' + avatar(p, 140) + '<span>' + p.name + '</span></button>';
    }).join('');
  }

  function tile(id, override) {
    var it = override || ITEMS[id];
    var t = override ? override.title : it.title;
    return '<button class="tile art-' + (it.art) + '" data-open="' + id + '">' +
      '<span class="tile-mark">AKS</span>' +
      (it.year ? '<span class="tile-year">' + it.year + '</span>' : '') +
      '<span class="tile-title">' + t + '</span>' +
      (it.sub ? '<span class="tile-sub">' + it.sub + '</span>' : '') +
      '</button>';
  }

  function renderRows() {
    var html = ORDER[current.id].map(function (key) {
      var r = ROWS[key];
      var title = typeof r.title === 'function' ? r.title(current.name.toLowerCase()) : r.title;
      var tiles = r.items.map(function (x, i) {
        var t = typeof x === 'string' ? tile(x) : tile(x.id, x);
        return r.numbered ? '<div class="ranked"><span class="rank">' + (i + 1) + '</span>' + t + '</div>' : t;
      }).join('');
      return '<section class="row"' + (r.id ? ' id="' + r.id + '"' : '') + '><h3>' + title + '</h3>' +
        '<div class="row-wrap"><button class="arrow left" aria-label="Scroll left">‹</button>' +
        '<div class="track' + (r.numbered ? ' numbered' : '') + '">' + tiles + '</div>' +
        '<button class="arrow right" aria-label="Scroll right">›</button></div></section>';
    }).join('');
    $('#rows').innerHTML = html;
  }

  /* ---------- Modal ---------- */

  var modal = $('#modal'), lastFocus = null;

  function openItem(id) {
    var it = ITEMS[id];
    if (!it) return;
    if (it.jump) { var el = document.getElementById(it.jump); if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); return; }
    lastFocus = document.activeElement;
    $('#mArt').className = 'modal-art art-' + it.art;
    $('#mTitle').innerHTML = it.title + (it.sub ? '<small>' + it.sub + '</small>' : '');
    $('#mMeta').innerHTML = (it.meta || []).map(function (m, i) { return i === 0 ? '<span class="match">' + m + '</span>' : '<span>' + m + '</span>'; }).join('');
    $('#mBody').innerHTML = it.body;
    modal.hidden = false;
    document.body.classList.add('locked');
    modal.querySelector('.modal-x').focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('locked');
    if (lastFocus) lastFocus.focus();
  }

  /* ---------- Events ---------- */

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-profile],[data-open],[data-close],[data-home],#switchProfile,.arrow');
    if (!t) return;
    if (t.dataset.profile) return showBrowse(t.dataset.profile);
    if (t.dataset.open) return openItem(t.dataset.open);
    if (t.hasAttribute('data-close')) return closeModal();
    if (t.hasAttribute('data-home')) { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }); return; }
    if (t.id === 'switchProfile') return showProfiles();
    if (t.classList.contains('arrow')) {
      var track = t.parentNode.querySelector('.track');
      track.scrollBy({ left: (t.classList.contains('left') ? -1 : 1) * track.clientWidth * 0.85, behavior: 'smooth' });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
    if ((e.key === 'Enter' || e.key === ' ') && !intro.hidden) { e.preventDefault(); enter(); }
  });

  window.addEventListener('scroll', function () {
    document.getElementById('topbar').classList.toggle('solid', window.scrollY > 40);
  }, { passive: true });

  /* ---------- Intro sound (synthesised, no audio file) ---------- */

  function playBoom() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      var ctx = new AC(), t = ctx.currentTime + 0.05;
      var master = ctx.createGain(); master.gain.value = 0.9;
      var comp = ctx.createDynamicsCompressor();
      master.connect(comp); comp.connect(ctx.destination);

      // 1. Two deep hits: "ba-DUM"
      [[0, 0.55, 110], [0.32, 1, 82]].forEach(function (h) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(h[2] * 2.2, t + h[0]);
        o.frequency.exponentialRampToValueAtTime(h[2] * 0.5, t + h[0] + 0.5);
        g.gain.setValueAtTime(0.0001, t + h[0]);
        g.gain.exponentialRampToValueAtTime(h[1], t + h[0] + 0.015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + h[0] + 0.9);
        o.connect(g); g.connect(master); o.start(t + h[0]); o.stop(t + h[0] + 1);
      });

      // 2. Short filtered-noise thump on each hit
      var len = Math.floor(ctx.sampleRate * 0.25), buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
      [0, 0.32].forEach(function (at, k) {
        var n = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
        n.buffer = buf; f.type = 'lowpass'; f.frequency.value = 900; g.gain.value = k ? 0.6 : 0.35;
        n.connect(f); f.connect(g); g.connect(master); n.start(t + at);
      });

      // 3. Warm swelling chord that fades out under the zoom
      [55, 82.4, 110, 164.8, 220].forEach(function (fq, k) {
        var o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
        o.type = 'sawtooth'; o.frequency.value = fq; o.detune.value = (k % 2 ? 7 : -7);
        f.type = 'lowpass'; f.frequency.setValueAtTime(300, t + 0.32); f.frequency.exponentialRampToValueAtTime(1800, t + 1.4); f.frequency.exponentialRampToValueAtTime(400, t + 2.8);
        g.gain.setValueAtTime(0.0001, t + 0.32); g.gain.exponentialRampToValueAtTime(0.06, t + 0.9); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.9);
        o.connect(f); f.connect(g); g.connect(master); o.start(t + 0.32); o.stop(t + 3);
      });

      setTimeout(function () { try { ctx.close(); } catch (e) {} }, 3500);
    } catch (e) {}
  }

  var entering = false;
  function enter() {
    if (entering) return; entering = true;
    playBoom();
    intro.classList.add('go');
    setTimeout(showProfiles, reduceMotion ? 300 : 2500);
  }

  /* ---------- Boot ---------- */

  renderProfiles();
  document.getElementById('y').textContent = new Date().getFullYear();

  intro.addEventListener('click', enter);
})();
