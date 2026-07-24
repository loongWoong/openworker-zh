// English translations — the canonical key set.
// Every key here must have a matching entry in zh.ts.

export interface Translations {
  // ── Common / Shared ──
  common: {
    cancel: string;
    save: string;
    delete: string;
    rename: string;
    archive: string;
    unarchive: string;
    pin: string;
    unpin: string;
    search: string;
    filter: string;
    clear: string;
    back: string;
    next: string;
    done: string;
    close: string;
    dismiss: string;
    loading: string;
    error: string;
    noResults: string;
    showMore: string;
    showLess: string;
    confirm: string;
    copy: string;
    copied: string;
    send: string;
    approve: string;
    deny: string;
    allow: string;
    allowOnce: string;
    enable: string;
    disable: string;
    connect: string;
    disconnect: string;
    connected: string;
    notConnected: string;
    comingSoon: string;
    signIn: string;
    signOut: string;
    settings: string;
    new_: string;
    open: string;
    create: string;
    browse: string;
    choose: string;
    none: string;
    all: string;
    yes: string;
    no: string;
    on: string;
    off: string;
    beta: string;
    _count: (n: number) => string;
  };

  // ── Sidebar ──
  sidebar: {
    pinned: string;
    scheduled: string;
    recent: string;
    chronological: string;
    persona: string;
    filterByCoworker: string;
    clearFilter: string;
    noneCheckedShowsAll: string;
    groupBy: string;
    groupAndFilter: string;
    searchPlaceholder: string;
    automations: string;
    newSession: string;
    sessionActions: string;
    expand: string;
    collapse: string;
    dockSidebar: string;
    collapseSidebar: string;
    projects: string;
    newProject: string;
    noProjects: string;
    noConversations: string;
    noMatchingConversations: string;
    noConversationsInProject: string;
    archived: string;
    managedPersonas: string;
    showSidebar: string;
    hideSidebar: string;
    awaitingAttention: string;
    newRun: string;
    newRuns: string;
    latestFailed: string;
    workingNow: string;
    sleeping: string;
    fromSlack: string;
  };

  // ── Composer ──
  composer: {
    discuss: string;
    discussDesc: string;
    askForApproval: string;
    askForApprovalDesc: string;
    fullAccess: string;
    fullAccessDesc: string;
    loadingModels: string;
    noModelConnected: string;
    connectAModel: string;
    sendApprovalsToInbox: string;
    attach: string;
    photoOrImage: string;
    otherFiles: string;
    stopRecording: string;
    transcribing: string;
    startingMicrophone: string;
    voiceUnavailable: string;
    placeholder: string;
    chatPlaceholder: string;
    codePlaceholder: string;
    recordingStarted: string;
    dragFilesHere: string;
    maxFiles: string;
    fileTooLarge: string;
    unsupportedType: string;
    configureVoiceInput: string;
    modelRunning: string;
    pickAModel: string;
    insertFiles: string;
    processingPdf: string;
    pdfNotSupported: string;
    dictationModelNeeded: string;
  };

  // ── Onboarding ──
  onboarding: {
    welcome: string;
    pickModelProvider: string;
    skipSetup: string;
    nothingWorksWithoutModel: string;
    skipAnyway: string;
    checking: string;
    modelsSettingsHint: string;
    connectEverydayTools: string;
    connectEverydayToolsSub: string;
    signInForOneClick: string;
    signInForOneClickSub: string;
    openingBrowser: string;
    waiting: string;
    youAreSignedIn: string;
    youAreSignedInSub: string;
    continueWithoutSignIn: string;
    connectedChip: string;
    checkYourBrowser: string;
    gmailCalendar: string;
    gmailCalendarSub: string;
    moreToolsHint: string;
    youAreSetUp: string;
    twoWaysToStart: string;
    createFirstAutomation: string;
    createFirstAutomationSub: string;
    startWorking: string;
    startWorkingSub: string;
    replaySetup: string;
    // Tool benefit rows
    outlookBenefit: string;
    outlookDetail: string;
    slackBenefit: string;
    slackDetail: string;
    githubBenefit: string;
    githubDetail: string;
    notionBenefit: string;
    notionDetail: string;
    hubspotBenefit: string;
    hubspotDetail: string;
    attioBenefit: string;
    attioDetail: string;
  };

  // ── Settings ──
  settings: {
    general: string;
    models: string;
    voiceInput: string;
    personas: string;
    appearance: string;
    files: string;
    scratchBase: string;
    scratchBaseHelp: string;
    sessionsPeek: string;
    sessionsPeekHelp: string;
    navLayout: string;
    navLayoutFlat: string;
    navLayoutGrouped: string;
    sidebarSection: string;
    updateAvailable: string;
    installUpdate: string;
    upToDate: string;
    checkingForUpdate: string;
    appVersion: string;
    runSetupAgain: string;
    keepAwake: string;
    keepAwakeHelp: string;
    launchAtLogin: string;
    launchAtLoginHelp: string;
    theme: string;
    themeSystem: string;
    themeLight: string;
    themeDark: string;
    // Voice tab
    dictationSetup: string;
    dictationSetupHelp: string;
    dictationModelDownloading: string;
    dictationModelReady: string;
    dictationModelNotDownloaded: string;
    downloadModel: string;
    deleteModel: string;
    testMicrophone: string;
    testMicrophoneHelp: string;
    // Models tab
    providerKey: string;
    providerKeyHelp: string;
    testKey: string;
    removeKey: string;
    modelsHelp: string;
    keyVerified: string;
    testing: string;
    pasteKey: string;
    getKeyAt: string;
    noProviderKey: string;
    addProvider: string;
  };

  // ── Connectors / Integrations ──
  connectors: {
    title: string;
    subtitle: string;
    mcpServers: string;
    mcpServersSub: string;
    connectedGroup: string;
    availableGroup: string;
    search: string;
    showAll: string;
    // connector detail
    access: string;
    about: string;
    tools: string;
    toolsHelp: string;
    keysStoredLocally: string;
    // Slack
    slackWorkspaces: string;
    slackAddWorkspace: string;
    slackDisconnect: string;
    slackPeople: string;
    slackWaiting: string;
    slackListening: string;
    slackHowItWorks: string;
    slackAllowUser: string;
    slackBlockUser: string;
    slackNoWaiting: string;
    slackNoPeople: string;
    slackRelayLive: string;
    slackRelayOffline: string;
    slackRelayReconnecting: string;
    slackSignInNeeded: string;
    // GitHub
    githubInstallations: string;
    githubAddInstallation: string;
    githubDisconnect: string;
    githubListening: string;
    githubWaiting: string;
    githubPeople: string;
    githubRelayLive: string;
    githubRelayOffline: string;
    githubRelayReconnecting: string;
    githubSignInNeeded: string;
    // Gmail
    gmailAccounts: string;
    gmailAddAccount: string;
    gmailDefault: string;
    gmailDisconnect: string;
    gmailPrivacyFilters: string;
    gmailNeverShowAgents: string;
    gmailSenders: string;
    gmailLabels: string;
    gmailSendersHelp: string;
    gmailLabelsHelp: string;
    // Google Calendar
    gcalAccounts: string;
    gcalAddAccount: string;
    gcalDefault: string;
    gcalDisconnect: string;
    gcalComingSoon: string;
    signInForCloudFirst: string;
    // HubSpot
    hubspotPortals: string;
    hubspotAddPortal: string;
    hubspotDefault: string;
    hubspotDisconnect: string;
    hubspotHiddenFields: string;
    hubspotHiddenFieldsHelp: string;
    hubspotConnectHint: string;
    // Accounts (notion, attio, etc.)
    accountsAccounts: string;
    accountsAdd: string;
    accountsDefault: string;
    accountsDisconnect: string;
    // MCP
    mcpAdd: string;
    mcpRunning: string;
    mcpStopped: string;
    mcpError: string;
    mcpNoServers: string;
    // AddConnectionModal
    addConnection: string;
    oneClick: string;
    manual: string;
    pasteCredentials: string;
    name: string;
    apiKey: string;
    apiKeyHelp: string;
    submit: string;
    // Generic
    unauthenticated: string;
    unauthorizedHelp: string;
    resolve: string;
    noSubscriptions: string;
  };

  // ── Automations / Scheduled ──
  automations: {
    title: string;
    subtitle: string;
    newAutomation: string;
    noAutomations: string;
    noRuns: string;
    runs: string;
    runNow: string;
    backToRuns: string;
    runHistory: string;
    schedule: string;
    edit: string;
    deleteAutomation: string;
    deleteConfirm: string;
    creating: string;
    createAutomation: string;
    titlePlaceholder: string;
    instructionsPlaceholder: string;
    // templates
    templates: string;
    startFromTemplate: string;
    // day labels
    mondays: string;
    tuesdays: string;
    wednesdays: string;
    thursdays: string;
    fridays: string;
    saturdays: string;
    sundays: string;
    weekdays: string;
    everyDay: string;
    daily: string;
    weekly: string;
    pickChannel: string;
    pickTime: string;
    deliverySchedule: string;
    deliverTo: string;
    inTheApp: string;
    slackDm: string;
    connectionsDelivery: string;
    configureConnections: string;
    connectAndCreate: string;
    createWithoutConnections: string;
    // Template blurbs
    githubDigest: string;
    githubDigestBlurb: string;
    pipelineDigest: string;
    pipelineDigestBlurb: string;
    morningBrief: string;
    morningBriefBlurb: string;
    morningNewsBriefing: string;
    morningNewsBriefingBlurb: string;
    inboxDigest: string;
    inboxDigestBlurb: string;
    folderCleanup: string;
    folderCleanupBlurb: string;
  };

  // ── Inbox ──
  inbox: {
    title: string;
    pending: string;
    configure: string;
    all: string;
    approvals: string;
    questions: string;
    noItems: string;
    noItemsSub: string;
    resolve: string;
    answer: string;
    sendAnswer: string;
    reply: string;
    from: string;
    sessionDeleted: string;
    // Configure
    inboxRouting: string;
    inboxRoutingHelp: string;
    mirrorChannel: string;
    mirrorChannelHelp: string;
    dmRoute: string;
    dmRouteHelp: string;
    subscriptions: string;
    subscriptionsHelp: string;
    unrouted: string;
    unroutedHelp: string;
    noUnrouted: string;
    saving: string;
    saved: string;
    // Approvals
    allowEveryTime: string;
    allowEveryTimeDesc: string;
    standingApproval: string;
    approveAndContinue: string;
  };

  // ── Transcript / Chat ──
  transcript: {
    copyMessage: string;
    thinking: string;
    thoughtProcess: string;
    toolCall: string;
    toolResult: string;
    modelSwitched: string;
    interrupted: string;
    maxIterations: string;
    errorOccurred: string;
    stopped: string;
    retry: string;
    showRaw: string;
    hideRaw: string;
    runShell: string;
    writeFile: string;
    editFile: string;
    applyPatch: string;
    sendMessage: string;
    sendFile: string;
    readFile: string;
    searchFiles: string;
    unknownTool: string;
  };

  // ── Approval Cards ──
  approval: {
    staysOnMac: string;
    overwritesExisting: string;
    actsOnConnected: string;
    leavesMac: string;
    withTheMessage: string;
    // standing permissions
    permissionRead: string;
    permissionWrite: string;
    permissionReadDesc: string;
    permissionWriteDesc: string;
    alwaysAllowCommand: string;
    allowEveryTimeTitle: string;
    approveAndRun: string;
    allowAndContinue: string;
    denyAndContinue: string;
  };

  // ── Personas ──
  personas: {
    title: string;
    about: string;
    capabilities: string;
    builtIn: string;
    connections: string;
    connectionsForFull: string;
    newSessionsDefault: string;
    defaults: string;
    recommendedModels: string;
    defaultMode: string;
    workspace: string;
    enablePersona: string;
    disablePersona: string;
    installPersona: string;
    deletePersona: string;
    deletePersonaConfirm: string;
    disablePersonaConfirm: string;
    conversationsWillBeArchived: string;
    installFromGit: string;
    installFromFolder: string;
    repoUrl: string;
    folderPath: string;
    install: string;
    installing: string;
    installError: string;
    installed: string;
    noPersonas: string;
    core: string;
    mcp: string;
    surfaced: string;
    notSurfaced: string;
    setDefault: string;
  };

  // ── Session / Folder Gate ──
  session: {
    chooseProjectFolder: string;
    chooseProjectFolderSub: string;
    newProject: string;
    newProjectSub: string;
    openFolder: string;
    createProject: string;
    recentFolders: string;
    pathPlaceholder: string;
    couldNotOpen: string;
    // Session Intro
    whatShouldWeProduce: string;
    pickTaskToStart: string;
    analyzeFiles: string;
    analyzeFilesSub: string;
    pickAFolder: string;
    hubspotReport: string;
    hubspotReportSub: string;
    weeklyProgressReport: string;
    weeklyProgressReportSub: string;
    configureConnectors: string;
    startAction: string;
    // connection dots
    needGithub: string;
    needSlack: string;
    needHubspot: string;
    // Artifacts (right rail)
    progress: string;
    artifacts: string;
    noArtifacts: string;
    showFiles: string;
    hideFiles: string;
    showSidePanel: string;
    hideSidePanel: string;
    noTasks: string;
  };

  // ── Audit / Activity ──
  audit: {
    title: string;
    subtitle: string;
    noEvents: string;
    filterLabel: string;
    sessionId: string;
    connector: string;
    tool: string;
    event: string;
    resource: string;
    approval: string;
    canned: string;
  };

  // ── Update Banner ──
  update: {
    available: string;
    install: string;
    downloading: string;
    restart: string;
    dismissed: string;
    releaseNotes: string;
  };

  // ── App-level ──
  app: {
    restoringSession: string;
    starting: string;
    howCanIHelp: string;
    letsBuild: string;
    newSessionAria: string;
    searchAria: string;
    showSidebarAria: string;
    // suggestions
    runTests: string;
    projectOverview: string;
    findAndFix: string;
    // Error boundaries
    somethingWentWrong: string;
    tryAgain: string;
  };

  // ── Provider Setup ──
  providers: {
    pasteYourKey: string;
    saveAndTest: string;
    saved: string;
    keyVerified: string;
    verificationFailed: string;
    testConnection: string;
    testingConnection: string;
    lastUsed: string;
    neverUsed: string;
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
    enabled: string;
    disabled: string;
    showDisabled: string;
    hideDisabled: string;
  };

  // ── Markdown ──
  markdown: {
    openArtifact: string;
    openLink: string;
    download: string;
    preview: string;
    filePreview: string;
    filePreviewUnavailable: string;
  };
}

// ─── Default helpers ───
const count = (n: number, one: string, other: string) => (n === 1 ? one : other);

export const en: Translations = {
  common: {
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    rename: "Rename",
    archive: "Archive",
    unarchive: "Unarchive",
    pin: "Pin",
    unpin: "Unpin",
    search: "Search",
    filter: "Filter",
    clear: "Clear",
    back: "Back",
    next: "Next",
    done: "Done",
    close: "Close",
    dismiss: "Dismiss",
    loading: "Loading…",
    error: "Error",
    noResults: "No results",
    showMore: "Show more",
    showLess: "Show less",
    confirm: "Confirm",
    copy: "Copy",
    copied: "Copied",
    send: "Send",
    approve: "Approve",
    deny: "Deny",
    allow: "Allow",
    allowOnce: "Allow once",
    enable: "Enable",
    disable: "Disable",
    connect: "Connect",
    disconnect: "Disconnect",
    connected: "Connected",
    notConnected: "Not connected",
    comingSoon: "Coming soon",
    signIn: "Sign in",
    signOut: "Sign out",
    settings: "Settings",
    new_: "New",
    open: "Open",
    create: "Create",
    browse: "Browse…",
    choose: "Choose",
    none: "None",
    all: "All",
    yes: "Yes",
    no: "No",
    on: "On",
    off: "Off",
    beta: "BETA",
    _count: (n: number) => String(n),
  },

  sidebar: {
    pinned: "Pinned",
    scheduled: "Scheduled",
    recent: "Recent",
    chronological: "Chronological",
    persona: "Persona",
    filterByCoworker: "Filter by coworker",
    clearFilter: "Clear",
    noneCheckedShowsAll: "None checked shows all.",
    groupBy: "Group by",
    groupAndFilter: "Group & filter conversations",
    searchPlaceholder: "Search",
    automations: "Automations",
    newSession: "New session",
    sessionActions: "Session actions",
    expand: "Expand",
    collapse: "Collapse",
    dockSidebar: "Dock sidebar",
    collapseSidebar: "Collapse sidebar",
    projects: "Projects",
    newProject: "New project",
    noProjects: "No projects yet — start one with the + above.",
    noConversations: "No conversations yet.",
    noMatchingConversations: "No matching conversations.",
    noConversationsInProject: "No conversations in this project yet.",
    archived: "Archived",
    managedPersonas: "Manage personas…",
    showSidebar: "Show sidebar",
    hideSidebar: "Hide sidebar",
    awaitingAttention: "awaiting your attention",
    newRun: "new run",
    newRuns: "new runs",
    latestFailed: "the latest failed",
    workingNow: "Working now",
    sleeping: "Sleeping (will wake itself)",
    fromSlack: "From Slack",
  },

  composer: {
    discuss: "Discuss",
    discussDesc: "Chat and explore — no edits or commands",
    askForApproval: "Ask for approval",
    askForApprovalDesc: "Ask before edits and commands",
    fullAccess: "Full access",
    fullAccessDesc: "Run everything without asking",
    loadingModels: "Loading models…",
    noModelConnected: "No model connected",
    connectAModel: "Connect a model",
    sendApprovalsToInbox: "Send approvals to Inbox",
    attach: "Attach",
    photoOrImage: "Photo or image",
    otherFiles: "Other files",
    stopRecording: "Stop recording and transcribe",
    transcribing: "Transcribing…",
    startingMicrophone: "Starting microphone…",
    voiceUnavailable: "Voice dictation is unavailable.",
    placeholder: "Ask the coworker…  (drop or paste files)",
    chatPlaceholder: "How can I help?",
    codePlaceholder: "Ask the coder to build, fix, or explain…  (drop or paste files)",
    recordingStarted: "Recording…",
    dragFilesHere: "Drop files here",
    maxFiles: "Maximum 8 files",
    fileTooLarge: "File too large",
    unsupportedType: "Unsupported file type",
    configureVoiceInput: "Configure voice input",
    modelRunning: "Model is running",
    pickAModel: "Pick a model",
    insertFiles: "Insert files",
    processingPdf: "Processing PDF…",
    pdfNotSupported: "PDF processing not supported in this browser",
    dictationModelNeeded: "Download the dictation model in Settings ▸ Voice input first",
  },

  onboarding: {
    welcome: "Welcome to OpenWorker",
    pickModelProvider: "Pick a model provider to get started — OpenWorker runs on your own key, and your key and your data stay on this Mac.",
    skipSetup: "Skip setup",
    nothingWorksWithoutModel: "Nothing works without a model —",
    skipAnyway: "skip anyway",
    checking: "Checking…",
    modelsSettingsHint: "Models can be enabled or hidden anytime in Settings ▸ Models.",
    connectEverydayTools: "Connect your everyday tools",
    connectEverydayToolsSub: "Chat can only advise. Connected, your coworker does the actual work:",
    signInForOneClick: "Sign in for one-click connections",
    signInForOneClickSub: "OpenWorker handles the OAuth for 20+ tools — no dev consoles, no pasted keys. Tokens stay on this Mac.",
    openingBrowser: "Opening browser…",
    waiting: "Waiting…",
    youAreSignedIn: "🎉 You're signed in",
    youAreSignedInSub: "Connect a tool above with one click — or add them anytime later from the Connectors page.",
    continueWithoutSignIn: "Continue without sign-in",
    connectedChip: "✓ Connected",
    checkYourBrowser: "Check your browser…",
    gmailCalendar: "Gmail & Google Calendar",
    gmailCalendarSub: "Coming soon — pending Google's app verification.",
    moreToolsHint: "30+ more tools on the Connectors page — add or remove anytime. Tokens stay on this Mac.",
    youAreSetUp: "You're set up",
    twoWaysToStart: "Two good ways to start:",
    createFirstAutomation: "Create your first automation",
    createFirstAutomationSub: "A weekly digest, a morning brief — pick a template, running in two minutes.",
    startWorking: "Start working with Coworker",
    startWorkingSub: "Open a session and just ask — analyze files, draft, research, build.",
    replaySetup: "Replay this setup anytime: Settings ▸ Appearance ▸ Run setup again.",
    outlookBenefit: "Stay on top of email",
    outlookDetail: "Outlook — triage mail, draft replies, run your calendar.",
    slackBenefit: "Keep up with Slack",
    slackDetail: "Slack — catch up, answer mentions, post updates.",
    githubBenefit: "Ship code",
    githubDetail: "GitHub — review PRs, watch issues, reply to @mentions.",
    notionBenefit: "Keep your notes in reach",
    notionDetail: "Notion — search pages, query databases, draft docs.",
    hubspotBenefit: "Keep the CRM current",
    hubspotDetail: "HubSpot — update deals, log notes, prep calls.",
    attioBenefit: "Track every relationship",
    attioDetail: "Attio — search records, read timelines, log notes.",
  },

  settings: {
    general: "General",
    models: "Models",
    voiceInput: "Voice input",
    personas: "Personas",
    appearance: "Appearance",
    files: "Files",
    scratchBase: "Scratch folder base",
    scratchBaseHelp: "Default location for new conversation scratch directories.",
    sessionsPeek: "Sessions shown before \"Show more\"",
    sessionsPeekHelp: "How many session rows to show per group in the sidebar before the \"Show more\" toggle (1–50).",
    navLayout: "Sidebar layout",
    navLayoutFlat: "Chronological list",
    navLayoutGrouped: "Grouped by Persona",
    sidebarSection: "Sidebar",
    updateAvailable: "Update available",
    installUpdate: "Install update",
    upToDate: "Up to date",
    checkingForUpdate: "Checking for update…",
    appVersion: "App version",
    runSetupAgain: "Run setup again",
    keepAwake: "Keep screen awake during sessions",
    keepAwakeHelp: "Prevents your display from sleeping while OpenWorker is the frontmost app.",
    launchAtLogin: "Launch at login",
    launchAtLoginHelp: "Open OpenWorker when you log in to your computer.",
    theme: "Theme",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    dictationSetup: "Voice dictation model",
    dictationSetupHelp: "Download the local speech-to-text model for voice input. Runs entirely on your machine.",
    dictationModelDownloading: "Downloading…",
    dictationModelReady: "Ready",
    dictationModelNotDownloaded: "Not downloaded",
    downloadModel: "Download model",
    deleteModel: "Delete model",
    testMicrophone: "Test microphone",
    testMicrophoneHelp: "Speak a sentence to verify the microphone works with the dictation model.",
    providerKey: "Provider key",
    providerKeyHelp: "Paste an API key from your provider. Keys are stored locally and never sent to OpenWorker servers.",
    testKey: "Test key",
    removeKey: "Remove key",
    modelsHelp: "Models can be enabled or hidden from the composer picker.",
    keyVerified: "Key verified",
    testing: "Testing…",
    pasteKey: "Paste your API key",
    getKeyAt: "Get a key at",
    noProviderKey: "No key configured",
    addProvider: "Add provider",
  },

  connectors: {
    title: "Connectors",
    subtitle: "Apps and tools your coworkers can use. Connected ones come first.",
    mcpServers: "MCP servers",
    mcpServersSub: "External tool servers (stdio or HTTP), shared across all agents.",
    connectedGroup: "Connected",
    availableGroup: "Available",
    search: "Search",
    showAll: "Show all",
    access: "Access",
    about: "About",
    tools: "Tools",
    toolsHelp: "Tools available to your coworkers when this connector is connected.",
    keysStoredLocally: "Keys and tokens are stored only on this computer. Disconnect anytime.",
    slackWorkspaces: "Workspaces",
    slackAddWorkspace: "Add workspace",
    slackDisconnect: "Disconnect",
    slackPeople: "People",
    slackWaiting: "Waiting",
    slackListening: "Listening",
    slackHowItWorks: "How it works",
    slackAllowUser: "Allow",
    slackBlockUser: "Block",
    slackNoWaiting: "No parked senders.",
    slackNoPeople: "No people on the allow-list — anyone can trigger.",
    slackRelayLive: "Live · managed relay",
    slackRelayOffline: "Offline — can't reach the relay",
    slackRelayReconnecting: "Reconnecting to the relay…",
    slackSignInNeeded: "Sign-in needed — relaying is paused",
    githubInstallations: "Installations",
    githubAddInstallation: "Add installation",
    githubDisconnect: "Disconnect",
    githubListening: "Listening",
    githubWaiting: "Waiting",
    githubPeople: "People",
    githubRelayLive: "Live · managed relay",
    githubRelayOffline: "Offline — can't reach the relay",
    githubRelayReconnecting: "Reconnecting to the relay…",
    githubSignInNeeded: "Sign-in needed — relaying is paused",
    gmailAccounts: "Accounts",
    gmailAddAccount: "Add account",
    gmailDefault: "Default",
    gmailDisconnect: "Disconnect",
    gmailPrivacyFilters: "Privacy filters",
    gmailNeverShowAgents: "Never show agents",
    gmailSenders: "Senders",
    gmailLabels: "Labels",
    gmailSendersHelp: "Email addresses or domains to hide from the agent.",
    gmailLabelsHelp: "Gmail labels whose threads the agent should ignore.",
    gcalAccounts: "Accounts",
    gcalAddAccount: "Add account",
    gcalDefault: "Default",
    gcalDisconnect: "Disconnect",
    gcalComingSoon: "One-click Google sign-in is coming soon",
    signInForCloudFirst: "Sign in to OpenWorker Cloud first",
    hubspotPortals: "Portals",
    hubspotAddPortal: "Add portal",
    hubspotDefault: "Default",
    hubspotDisconnect: "Disconnect",
    hubspotHiddenFields: "Hidden fields",
    hubspotHiddenFieldsHelp: "Fields to hide from the model. Data still reaches the server, but the agent never sees it.",
    hubspotConnectHint: "Connect a portal — read-only or read & write is chosen at consent; there are no delete tools either way.",
    accountsAccounts: "Accounts",
    accountsAdd: "Add account",
    accountsDefault: "Default",
    accountsDisconnect: "Disconnect",
    mcpAdd: "Add server",
    mcpRunning: "Running",
    mcpStopped: "Stopped",
    mcpError: "Error",
    mcpNoServers: "No MCP servers configured.",
    addConnection: "Add connection",
    oneClick: "One click",
    manual: "Manual",
    pasteCredentials: "Paste credentials",
    name: "Name",
    apiKey: "API key",
    apiKeyHelp: "Paste your API key or token.",
    submit: "Submit",
    unauthenticated: "Unauthenticated",
    unauthorizedHelp: "A user tried to trigger work from outside your allow-list.",
    resolve: "Resolve",
    noSubscriptions: "No channel subscriptions.",
  },

  automations: {
    title: "Automations",
    subtitle: "Recurring tasks that run on your schedule. Each run lands as a full session with transcript.",
    newAutomation: "New automation",
    noAutomations: "No automations yet.",
    noRuns: "No runs yet.",
    runs: "Runs",
    runNow: "Run now",
    backToRuns: "Back to runs",
    runHistory: "Run history",
    schedule: "Schedule",
    edit: "Edit",
    deleteAutomation: "Delete automation",
    deleteConfirm: "Are you sure you want to delete this automation?",
    creating: "Creating…",
    createAutomation: "Create automation",
    titlePlaceholder: "What should this automation do?",
    instructionsPlaceholder: "Instructions for the agent…",
    templates: "Templates",
    startFromTemplate: "Start from a template",
    mondays: "Mondays",
    tuesdays: "Tuesdays",
    wednesdays: "Wednesdays",
    thursdays: "Thursdays",
    fridays: "Fridays",
    saturdays: "Saturdays",
    sundays: "Sundays",
    weekdays: "Weekdays",
    everyDay: "Every day",
    daily: "Daily",
    weekly: "Weekly",
    pickChannel: "Pick a channel to post to first",
    pickTime: "Pick a time",
    deliverySchedule: "Delivery & schedule",
    deliverTo: "Deliver to",
    inTheApp: "In the app",
    slackDm: "Slack DM (connect Slack later)",
    connectionsDelivery: "Connections, delivery & schedule",
    configureConnections: "Configure connections",
    connectAndCreate: "Connect and create",
    createWithoutConnections: "Create without connections",
    githubDigest: "GitHub digest",
    githubDigestBlurb: "Merged PRs and commits, posted to your team's Slack.",
    pipelineDigest: "Pipeline digest",
    pipelineDigestBlurb: "Deals that moved — and deals going quiet — posted to Slack.",
    morningBrief: "Morning brief",
    morningBriefBlurb: "Calendar and unread email, summarized before your day starts.",
    morningNewsBriefing: "Morning news briefing",
    morningNewsBriefingBlurb: "Summary of websites and news you care about, ready before you start.",
    inboxDigest: "Inbox digest",
    inboxDigestBlurb: "One short digest of your unread email.",
    folderCleanup: "Folder cleanup",
    folderCleanupBlurb: "Archive and tidy a folder — stale downloads and old files, gone.",
  },

  inbox: {
    title: "Inbox",
    pending: "Pending",
    configure: "Configure",
    all: "All",
    approvals: "Approvals",
    questions: "Questions",
    noItems: "No pending items",
    noItemsSub: "Approvals, questions, and notifications from your sessions will appear here.",
    resolve: "Resolve",
    answer: "Answer",
    sendAnswer: "Send",
    reply: "Reply",
    from: "From",
    sessionDeleted: "Session deleted",
    inboxRouting: "Inbox routing",
    inboxRoutingHelp: "Where Unattended session approvals and questions appear.",
    mirrorChannel: "Mirror channel",
    mirrorChannelHelp: "Send clickable approval buttons to this channel.",
    dmRoute: "DM route",
    dmRouteHelp: "Inbound DMs open a session in this persona.",
    subscriptions: "Subscriptions",
    subscriptionsHelp: "Channels your coworkers listen to for mentions.",
    unrouted: "Unrouted",
    unroutedHelp: "Inbound messages and background-turn failures nothing claimed — nothing vanishes silently.",
    noUnrouted: "No unrouted messages.",
    saving: "Saving…",
    saved: "Saved",
    allowEveryTime: "Allow every time",
    allowEveryTimeDesc: "Create a standing approval so this task can repeat unattended.",
    standingApproval: "Standing approval",
    approveAndContinue: "Approve and continue",
  },

  transcript: {
    copyMessage: "Copy message",
    thinking: "Thinking…",
    thoughtProcess: "Thought process",
    toolCall: "Tool call",
    toolResult: "Tool result",
    modelSwitched: "Model switched",
    interrupted: "Interrupted.",
    maxIterations: "Stopped: max iterations reached.",
    errorOccurred: "Error: unknown",
    stopped: "Stopped",
    retry: "Retry",
    showRaw: "Show raw",
    hideRaw: "Hide raw",
    runShell: "Run a command",
    writeFile: "Write a file",
    editFile: "Edit a file",
    applyPatch: "Apply a patch",
    sendMessage: "Send a message",
    sendFile: "Send a file",
    readFile: "Read a file",
    searchFiles: "Search files",
    unknownTool: "Unknown tool",
  },

  approval: {
    staysOnMac: "stays on this Mac",
    overwritesExisting: "stays on this Mac · overwrites the existing file",
    actsOnConnected: "acts on a connected service",
    leavesMac: "leaves this Mac →",
    withTheMessage: "With the message",
    permissionRead: "Read-only",
    permissionWrite: "Read & write",
    permissionReadDesc: "Can read data from this target",
    permissionWriteDesc: "Can read and modify data",
    alwaysAllowCommand: "Always allow this command",
    allowEveryTimeTitle: "Allow every time",
    approveAndRun: "Approve & run",
    allowAndContinue: "Allow and continue",
    denyAndContinue: "Deny and continue",
  },

  personas: {
    title: "Personas",
    about: "About",
    capabilities: "Built-in capabilities",
    builtIn: "Built-in",
    connections: "Connections",
    connectionsForFull: "Connections for full benefit",
    newSessionsDefault: "New sessions get by default",
    defaults: "Defaults",
    recommendedModels: "Recommended models",
    defaultMode: "Default mode",
    workspace: "Workspace",
    enablePersona: "Enable persona",
    disablePersona: "Disable persona",
    installPersona: "Install persona",
    deletePersona: "Delete persona",
    deletePersonaConfirm: "Delete this persona permanently?",
    disablePersonaConfirm: "This persona has active conversations. Disabling will archive them.",
    conversationsWillBeArchived: "conversations will be archived",
    installFromGit: "Install from GitHub",
    installFromFolder: "Install from folder",
    repoUrl: "Repository URL",
    folderPath: "Folder path",
    install: "Install",
    installing: "Installing…",
    installError: "Could not install persona.",
    installed: "Installed",
    noPersonas: "No personas installed.",
    core: "Core",
    mcp: "MCP",
    surfaced: "Shown in picker",
    notSurfaced: "Hidden from picker",
    setDefault: "Set as default",
  },

  session: {
    chooseProjectFolder: "Choose a project folder",
    chooseProjectFolderSub: "This coworker needs a workspace to read, edit, and run in.",
    newProject: "New project",
    newProjectSub: "Pick a folder or enter a path. If the path doesn't exist, it will be created.",
    openFolder: "Open",
    createProject: "Create",
    recentFolders: "Recent",
    pathPlaceholder: "/path/to/your/project",
    couldNotOpen: "could not open that folder",
    whatShouldWeProduce: "What should we produce?",
    pickTaskToStart: "Pick a task to start — I'll do the work and save the result. Or just type what you need below.",
    analyzeFiles: "Analyze the files in a directory",
    analyzeFilesSub: "I'll read them and summarize what matters",
    pickAFolder: "Pick a folder →",
    hubspotReport: "Create a HubSpot lead report",
    hubspotReportSub: "Sources, stages, and who needs follow-up",
    weeklyProgressReport: "Weekly progress report",
    weeklyProgressReportSub: "GitHub activity summarized to Slack every Friday",
    configureConnectors: "Configure ›",
    startAction: "Start →",
    needGithub: "Connect GitHub",
    needSlack: "Connect Slack",
    needHubspot: "Connect HubSpot",
    progress: "Progress",
    artifacts: "Artifacts",
    noArtifacts: "No artifacts yet.",
    showFiles: "Show files this conversation produced",
    hideFiles: "Hide files",
    showSidePanel: "Show side panel",
    hideSidePanel: "Hide side panel",
    noTasks: "No tasks yet.",
  },

  audit: {
    title: "Activity",
    subtitle: "Recent connector and browser tool activity. Arguments are sanitized before storage.",
    noEvents: "No audit events yet.",
    filterLabel: "Filter",
    sessionId: "session id",
    connector: "connector",
    tool: "tool",
    event: "event",
    resource: "resource",
    approval: "Approved",
    canned: "Canned",
  },

  update: {
    available: "Update available",
    install: "Install update",
    downloading: "Downloading…",
    restart: "Restart to install",
    dismissed: "Dismissed",
    releaseNotes: "Release notes",
  },

  app: {
    restoringSession: "Restoring your session…",
    starting: "Starting OpenWorker…",
    howCanIHelp: "How can I help?",
    letsBuild: "Let's build something.",
    newSessionAria: "New session",
    searchAria: "Search",
    showSidebarAria: "Show sidebar",
    runTests: "Run the test suite and summarize any failures.",
    projectOverview: "Read the project and give me a 5-bullet overview.",
    findAndFix: "Find and fix the failing build.",
    somethingWentWrong: "Something went wrong",
    tryAgain: "Try again",
  },

  providers: {
    pasteYourKey: "Paste your API key",
    saveAndTest: "Save & test",
    saved: "Saved",
    keyVerified: "Key verified",
    verificationFailed: "Verification failed",
    testConnection: "Test connection",
    testingConnection: "Testing…",
    lastUsed: "Last used",
    neverUsed: "Never used",
    justNow: "just now",
    minutesAgo: (n: number) => `${n}m ago`,
    hoursAgo: (n: number) => `${n}h ago`,
    enabled: "Enabled",
    disabled: "Disabled",
    showDisabled: "Show disabled",
    hideDisabled: "Hide disabled",
  },

  markdown: {
    openArtifact: "Open artifact",
    openLink: "Open link",
    download: "Download",
    preview: "Preview",
    filePreview: "File preview",
    filePreviewUnavailable: "Preview not available for this file type",
  },
};
