document.documentElement.classList.add('js');
let currentLanguage = 'en';
let activeDemoStep = 0;
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
const mobileQuery = window.matchMedia('(max-width: 620px)');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
function updateMenu() {
  menuButton.hidden = !mobileQuery.matches;
  closeMenu();
}
updateMenu();
mobileQuery.addEventListener('change', updateMenu);
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
// Public descriptions are generalised; no private records or internal names belong here.
const cases = {
  "office": {
    "category": "SHARED AI FOUNDATION",
    "title": "The shared foundation behind every AI colleague.",
    "description": "Virtual Office is the top-level project behind these tools. It provides the virtual-colleague framework and shared knowledge that the other apps draw on, bringing a consistent AI coworker into each working context.",
    "input": "Shared knowledge and task context",
    "work": "Connect the colleague framework",
    "result": "AI colleagues across the apps",
    "agent": "Each app embeds an AI colleague that draws on the Virtual Office framework and knowledge, alongside the records and task in front of the user.",
    "review": "People review the evidence, maintain the knowledge and decide which proposed actions to take."
  },
  "data": {
    "category": "ERP DATA & ANALYSIS",
    "title": "One place to explore the ERP picture.",
    "description": "Data Explorer brings ERP data sources into one front-end workspace, with an analysis layer over the records. It gives people a single place to view connected information and investigate the questions behind it.",
    "input": "ERP data sources",
    "work": "Bring together, explore, analyse",
    "result": "One workspace for the ERP view",
    "agent": "The embedded colleague draws on Virtual Office knowledge and the selected data to help explain records and support analysis.",
    "review": "People check the underlying ERP records and interpret the analysis in its operational context."
  },
  "planning": {
    "category": "VISUAL PROJECT MANAGEMENT",
    "title": "A visual timeline, with the to-dos connected.",
    "description": "Project management brings the visual timeline, project information and to-dos into one app. The timeline makes the overall plan easier to see, while the connected task list keeps the day-to-day work close to it.",
    "input": "Projects, timelines and to-dos",
    "work": "Connect the plan and the tasks",
    "result": "One view of progress and next steps",
    "agent": "A colleague built on Virtual Office helps people understand the project context, discuss progress and prepare next steps.",
    "review": "People set priorities, confirm dates and own the decisions that shape the project."
  },
  "onboarding": {
    "category": "PRODUCT-TO-WEBSITE WORKFLOW",
    "title": "Bridge product data and website asset release.",
    "description": "The product onboarding assistant connects product-database automation with the release of website assets. It brings preparation, checks and release readiness into one workflow, helping product information move through to the website.",
    "input": "Product database information",
    "work": "Prepare, check and coordinate",
    "result": "Website assets ready for release",
    "agent": "The embedded colleague uses Virtual Office knowledge to support product-information preparation and help identify outstanding work.",
    "review": "People review the product information and assets, then decide what is ready to release."
  },
  "documents": {
    "category": "LEGAL DOCUMENT WORKFLOW",
    "title": "Bring outstanding document work into view.",
    "description": "The document assistant supports legal-document review and the follow-up work around outstanding items. It connects documents, review findings and next actions so the process can move through a clearer automated workflow.",
    "input": "Legal documents and review items",
    "work": "Review, flag and follow up",
    "result": "Clear outstanding items and next actions",
    "agent": "The colleague draws on Virtual Office knowledge to help explain the document context, organise findings and prepare follow-up work.",
    "review": "People review the original documents and conclusions, and decide how outstanding matters should be resolved."
  },
  "fulfilment": {
    "category": "ERP PURCHASING & LOGISTICS",
    "title": "Connect purchase orders and the logistics work.",
    "description": "The fulfilment assistant supports ERP processes around purchase orders and logistics. It helps connect the records, preparation and handovers involved, so people can follow the work through with less repeated handling.",
    "input": "Purchase orders and logistics records",
    "work": "Prepare, reconcile and coordinate",
    "result": "Clearer ERP handovers",
    "agent": "The embedded colleague combines Virtual Office knowledge with the current purchasing or logistics task to help explain records and prepare follow-up.",
    "review": "People confirm quantities, purchasing details and logistics outputs before applying them to the next ERP step."
  },
  "social": {
    "category": "SOCIAL MONITORING & REPORTING",
    "title": "Track the response. Bring the report together.",
    "description": "Social intelligence uses an AI agent to track social-media responses and automate reporting. It connects the monitoring work with organised findings and recurring reports, reducing the manual effort of gathering updates.",
    "input": "Social-media responses and activity",
    "work": "Track, organise and report",
    "result": "Automated social reporting",
    "agent": "The agent draws on Virtual Office knowledge to interpret the reporting context and help turn observed responses into useful commentary.",
    "review": "People check source observations and reporting context before relying on the conclusions."
  },
  "hybrid": {
    "category": "BACKEND DATA FOUNDATION",
    "title": "A dependable base for serious data entry.",
    "description": "FileMaker and APIs provide the backend data foundation supporting the apps. Carefully crafted data-entry interfaces keep structured records practical to maintain, while API integration connects them to the task-focused front ends.",
    "input": "Structured records and data entry",
    "work": "Maintain the core, connect through APIs",
    "result": "A connected backend for the apps",
    "agent": "The front-end colleague brings Virtual Office knowledge to the task while FileMaker and APIs support the underlying records.",
    "review": "People maintain the core data and review the intended changes and API exchange results."
  }
};
const tabs = [...document.querySelectorAll('.case-tab')];
const panel = document.querySelector('#case-panel');
function selectCase(tab) {
  const entry = SITE_TRANSLATIONS[currentLanguage]?.cases[tab.dataset.case] || cases[tab.dataset.case];
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tab.id);
  const fields = {'case-category':entry.category, 'case-title':entry.title, 'case-description':entry.description, 'flow-input':entry.input, 'flow-work':entry.work, 'flow-result':entry.result, 'case-agent':entry.agent, 'case-review':entry.review};
  Object.entries(fields).forEach(([id,value]) => {document.getElementById(id).textContent = value;});
}
tabs.forEach((tab,index) => {
  tab.addEventListener('click', () => selectCase(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (['ArrowDown','ArrowRight'].includes(event.key)) next=(index+1)%tabs.length;
    if (['ArrowUp','ArrowLeft'].includes(event.key)) next=(index-1+tabs.length)%tabs.length;
    if (event.key==='Home') next=0;
    if (event.key==='End') next=tabs.length-1;
    if (next===undefined) return;
    event.preventDefault(); selectCase(tabs[next]); tabs[next].focus();
  });
});
const demoMessages = [
  'One quantity is missing. I’d flag it for review rather than treat it as zero.',
  'My proposal: keep DEMO-01 as supplied and set DEMO-02 aside until its quantity is confirmed. Nothing has been changed.',
  'Your review comes next: check the original record, supply the missing quantity, then approve the export. This illustration does not edit or send any data.'
];
document.querySelectorAll('.demo-step').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.demo-step').forEach(step => {step.classList.toggle('active',step===button);step.setAttribute('aria-pressed',String(step===button));});
    activeDemoStep = Number(button.dataset.step);
    renderDemo();
  });
});
document.querySelector('#year').textContent=new Date().getFullYear();

function renderDemo() {
  const messages = SITE_TRANSLATIONS[currentLanguage]?.demoMessages || demoMessages;
  document.querySelector('#demo-message').textContent = messages[activeDemoStep];
}

// Bind original text nodes once, preserving links, emphasis, icons and listeners.
// Translation values are always assigned as text, never interpreted as HTML.
const languageControl = document.querySelector('#site-language');
const dynamicText = '#case-category, #case-title, #case-description, #flow-input, #flow-work, #flow-result, #case-agent, #case-review, #demo-message';
const textBindings = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  const parent = textNode.parentElement;
  if (!parent || parent.closest(`script, style, code, noscript, option, ${dynamicText}`)) continue;
  const original = textNode.nodeValue;
  const key = original.trim().replace(/\s+/g, ' ');
  if (Object.hasOwn(SITE_TRANSLATIONS['zh-Hant'].strings, key)) {
    textBindings.push({node: textNode, original, key});
  }
}
const attributeBindings = [];
document.querySelectorAll('[alt], [aria-label], meta[content]').forEach(element => {
  ['alt', 'aria-label', 'content'].forEach(attribute => {
    const original = element.getAttribute(attribute);
    if (original && Object.hasOwn(SITE_TRANSLATIONS['zh-Hant'].strings, original)) {
      attributeBindings.push({element, attribute, original});
    }
  });
});
const englishTitle = document.title;
function applyLanguage(language, remember = false) {
  currentLanguage = ['en', 'zh-Hant', 'zh-Hans'].includes(language) ? language : 'en';
  const strings = SITE_TRANSLATIONS[currentLanguage]?.strings;
  textBindings.forEach(({node, original, key}) => {
    const translation = strings?.[key];
    node.nodeValue = translation
      ? original.match(/^\s*/)[0] + translation + original.match(/\s*$/)[0]
      : original;
  });
  attributeBindings.forEach(({element, attribute, original}) => {
    element.setAttribute(attribute, strings?.[original] || original);
  });
  document.documentElement.lang = currentLanguage;
  document.title = strings?.[englishTitle] || englishTitle;
  languageControl.value = currentLanguage;
  selectCase(tabs.find(tab => tab.getAttribute('aria-selected') === 'true') || tabs[0]);
  renderDemo();
  if (remember) {
    try { localStorage.setItem('sckc-site-language', currentLanguage); }
    catch { /* Language switching still works if browser storage is unavailable. */ }
  }
}
languageControl.addEventListener('change', () => applyLanguage(languageControl.value, true));
document.querySelector('.language-switch').hidden = false;
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('sckc-site-language') || 'en'; }
catch { /* First visits and restricted browsers start in English. */ }
applyLanguage(savedLanguage);
