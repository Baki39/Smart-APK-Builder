import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Github, Activity, Wrench, CheckCircle, Smartphone, AlertOctagon, History, Settings, Play, Folder, FileCode, Shield, Zap, Cpu, Loader2, UploadCloud, Search, Clock, Download, Trash2, Link, Plus, GitBranch, GitCommit, Star, RefreshCw, ExternalLink, MoreVertical, CheckCircle2, AlertCircle, Filter, ShieldAlert, Wand2, FileSearch, Code2, Layers, Lightbulb, AlertTriangle, Bug, TrendingUp, BarChart3, TestTube, PlayCircle, XCircle, TerminalSquare, ChevronRight, ArrowLeft, Eye, DownloadCloud, Save, ToggleLeft, ToggleRight, Home, User, Menu, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [apkReady, setApkReady] = useState(false);
  const [logs, setLogs] = useState<string[]>(['[SYSTEM] Initializing Openclaw Build Engine v9.2.1...']);
  const [progress, setProgress] = useState({ frontend: 0, backend: 0, security: 0, apk: 0 });
  const [liveCode, setLiveCode] = useState('// Awaiting injection target...');
  const logsEndRef = useRef<HTMLDivElement>(null);
  
  // New States
  const [workspacePath, setWorkspacePath] = useState('/Desktop/Openclaw_Builds');
  const [mockupScreen, setMockupScreen] = useState('Home');
  const [autoSave, setAutoSave] = useState(true);
  const [scheduleBuilds, setScheduleBuilds] = useState(false);
  const [techStack, setTechStack] = useState('React Native + Expo');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: 'Welcome to Direct Chat mode. I am Openclaw v2.3, your autonomous AI agent. How can I assist you with your APK build today?' }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [githubSync, setGithubSync] = useState(false);

  const [analysisIssues, setAnalysisIssues] = useState({
    apiKeys: false,
    jwt: false,
    rateLimit: false
  });

  const [analysisFeatures, setAnalysisFeatures] = useState({
    offline: false,
    push: false,
    e2e: false
  });

  const [errors, setErrors] = useState([
    {
      id: 1,
      title: 'NullPointerException in CheckoutFlow',
      severity: 'Critical',
      desc: 'Application crashes when user attempts to submit an order without a selected payment method. The state variable paymentMethodId is undefined.',
      file: 'src/screens/CheckoutScreen.tsx:142:25',
      errorMsg: "TypeError: Cannot read properties of undefined (reading 'id')",
      fixed: false
    },
    {
      id: 2,
      title: 'Memory Leak in Image Carousel',
      severity: 'Major',
      desc: 'Event listeners are not being properly removed when the ProductDetails component unmounts, causing memory accumulation over time.',
      fixed: false
    },
    {
      id: 3,
      title: 'Deprecated API Usage',
      severity: 'Minor',
      desc: 'Using deprecated AsyncStorage from react-native core. It should be imported from @react-native-async-storage/async-storage.',
      fixed: false
    }
  ]);

  const fixError = (id: number) => {
    setErrors(prev => prev.map(err => err.id === id ? { ...err, fixed: true } : err));
  };

  const handleExportAPK = () => {
    setIsExporting(true);
    setExportProgress(0);
    
    const interval = setInterval(() => {
      setExportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExporting(false);
          setApkReady(true);
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  // Auto-scroll logs and chat
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "I've received your command. Processing...";
      if (userMsg.toLowerCase().includes('auto full openclaw run')) {
        aiResponse = "Initiating AUTO FULL OPENCLAW RUN. Transitioning to Analysis phase...";
        setTimeout(() => setActiveTab('Analysis'), 1500);
      } else if (userMsg.toLowerCase().includes('build')) {
        aiResponse = "Starting the build process now.";
        setTimeout(() => setActiveTab('Build'), 1500);
      }
      setChatMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }, 1000);
  };

  // Simulate build process
  useEffect(() => {
    if (activeTab !== 'Build') return;

    setLogs(['[SYSTEM] Initializing Openclaw Build Engine v9.2.1...']);
    setProgress({ frontend: 0, backend: 0, security: 0, apk: 0 });
    setLiveCode('// Awaiting injection target...');

    const buildSequence = [
      { log: 'Injecting dark mode theme provider...', code: 'export const ThemeProvider = ({ children }) => {\n  return <ThemeContext.Provider value={darkTheme}>{children}</ThemeContext.Provider>;\n};', p: { frontend: 15 } },
      { log: 'Upgrading navigation to React Navigation v6...', code: 'import { NavigationContainer, DarkTheme } from "@react-navigation/native";\n\nconst AppNavigator = () => (\n  <NavigationContainer theme={DarkTheme}>\n    <Stack.Navigator>\n      <Stack.Screen name="Home" component={HomeScreen} />\n    </Stack.Navigator>\n  </NavigationContainer>\n);', p: { frontend: 45 } },
      { log: 'SUCCESS: Frontend components modernized.', code: '// Frontend optimization complete.\n// 42 components refactored.', p: { frontend: 100 } },
      { log: 'Hardening API endpoints...', code: 'const secureFetch = async (url, options) => {\n  const token = await SecureStore.getItemAsync("secure_token");\n  return fetch(url, {\n    ...options,\n    headers: { Authorization: `Bearer ${token}` }\n  });\n};', p: { backend: 30 } },
      { log: 'Implementing global error boundaries...', code: 'class GlobalErrorBoundary extends React.Component {\n  componentDidCatch(error, info) {\n    logErrorToService(error, info);\n  }\n  render() { return this.props.children; }\n}', p: { backend: 70, security: 40 } },
      { log: 'SUCCESS: Backend logic secured.', code: '// Backend hardening complete.\n// 0 vulnerabilities detected.', p: { backend: 100, security: 80 } },
      { log: 'Encrypting local storage...', code: 'import * as Crypto from "expo-crypto";\n\nconst encryptData = async (data) => {\n  const digest = await Crypto.digestStringAsync(\n    Crypto.CryptoDigestAlgorithm.SHA256,\n    data\n  );\n  return digest;\n};', p: { security: 100 } },
      { log: 'Generating Android Keystore...', code: 'keytool -genkey -v -keystore release.keystore -alias openclaw -keyalg RSA -keysize 2048 -validity 10000', p: { apk: 20 } },
      { log: 'Configuring build.gradle for release...', code: 'android {\n  buildTypes {\n    release {\n      minifyEnabled true\n      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"\n    }\n  }\n}', p: { apk: 50 } },
      { log: 'Running Gradle assembleRelease...', code: '> Task :app:assembleRelease\n> Task :app:bundleReleaseJsAndAssets\n> Task :app:processReleaseResources', p: { apk: 80 } },
      { log: 'SUCCESS: APK Compiled successfully. (app-release.apk)', code: '// BUILD SUCCESSFUL in 42s\n// APK saved to /Desktop/Openclaw_Builds/Baki39_App.apk', p: { apk: 100 } },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < buildSequence.length) {
        const current = buildSequence[step];
        setLogs(prev => [...prev, current.log]);
        setLiveCode(current.code);
        setProgress(prev => ({ ...prev, ...current.p }));
        step++;
      } else {
        clearInterval(interval);
        setTimeout(() => setActiveTab('Testing'), 2000); // Move to testing phase automatically
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans flex selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0a0a0a] border-r border-gray-800/50 flex flex-col z-20">
        <div className="p-6 border-b border-gray-800/50">
          <h1 className="text-xl font-bold flex items-center gap-2 text-blue-400 tracking-tight">
            <Terminal className="w-6 h-6" />
            Openclaw
          </h1>
          <p className="text-xs text-gray-500 mt-1 font-mono uppercase tracking-wider">Smart APK Builder v2.3</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <NavItem icon={<Activity />} label="Dashboard" onClick={() => setActiveTab('Dashboard')} active={activeTab === 'Dashboard'} />
          <NavItem icon={<Github />} label="GitHub Projects" onClick={() => setActiveTab('GitHub')} active={activeTab === 'GitHub'} />
          <NavItem icon={<Activity />} label="Analysis" onClick={() => setActiveTab('Analysis')} active={activeTab === 'Analysis'} />
          <NavItem icon={<Wrench />} label="Build Progress" onClick={() => setActiveTab('Build')} active={activeTab === 'Build'} />
          <NavItem icon={<CheckCircle />} label="Testing Suite" onClick={() => setActiveTab('Testing')} active={activeTab === 'Testing'} />
          <NavItem icon={<Smartphone />} label="Mockup Phone" onClick={() => setActiveTab('Mockup')} active={activeTab === 'Mockup'} />
          <NavItem icon={<AlertOctagon />} label="Error Log" onClick={() => setActiveTab('Errors')} active={activeTab === 'Errors'} />
          <NavItem icon={<History />} label="History" onClick={() => setActiveTab('History')} active={activeTab === 'History'} />
          <NavItem icon={<DownloadCloud />} label="Export APK" onClick={() => setActiveTab('Export')} active={activeTab === 'Export'} />
          <NavItem icon={<Settings />} label="Settings" onClick={() => setActiveTab('Settings')} active={activeTab === 'Settings'} />
          <NavItem icon={<MessageSquare />} label="Direct Chat" onClick={() => setActiveTab('Chat')} active={activeTab === 'Chat'} />
        </nav>
        <div className="p-4 border-t border-gray-800/50">
          <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-800/50">
            <div className="text-xs text-gray-400 font-mono mb-1">WORKSPACE</div>
            <div className="text-sm text-gray-200 truncate">{workspacePath}</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden h-screen">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <header className="h-16 border-b border-gray-800/50 flex items-center px-8 justify-between bg-[#050505]/80 backdrop-blur-md z-10 shrink-0">
          <div className="flex items-center gap-4">
            {activeTab !== 'Dashboard' && (
              <button onClick={() => setActiveTab('Dashboard')} className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-gray-700">
                <ArrowLeft className="w-4 h-4" /> Back to Dashboard
              </button>
            )}
            <div className="flex items-center gap-2 text-sm font-mono text-gray-400 bg-gray-900/50 px-3 py-1.5 rounded-lg border border-gray-800">
              <Folder className="w-4 h-4 text-blue-400" />
              {workspacePath}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-green-500 tracking-widest uppercase">Status: ● Autonomous</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 z-10">
          {activeTab === 'Dashboard' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              {/* Header */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0">
                <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <Activity className="w-6 h-6 text-blue-500" /> DASHBOARD
                </h2>
                <p className="text-gray-400 mt-1">Welcome back, Master. Openclaw is fully connected and ready.</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 flex-1 min-h-0">
                {/* Left Content (Actions, Stats, Table) */}
                <div className="xl:col-span-2 space-y-6">
                  
                  {/* Quick Action Section */}
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Access</h3>
                    <div className="space-y-5">
                      {/* GitHub */}
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-2"><Github className="w-3.5 h-3.5"/> GitHub Repository URL</label>
                        <div className="flex gap-3">
                          <input type="text" placeholder="https://github.com/username/repo" className="flex-1 bg-[#111] border border-gray-700 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500 text-gray-200 transition-colors" />
                          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shadow-lg shadow-blue-900/20">CONNECT</button>
                        </div>
                      </div>
                      {/* Gem Link */}
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-2"><Link className="w-3.5 h-3.5"/> Google AI Studio Gem Link</label>
                        <div className="flex gap-3">
                          <input type="text" placeholder="https://aistudio.google.com/gem/..." className="flex-1 bg-[#111] border border-gray-700 rounded-lg py-2.5 px-4 text-sm focus:outline-none focus:border-purple-500 text-gray-200 transition-colors" />
                          <button className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shadow-lg shadow-purple-900/20">CONNECT GEM</button>
                        </div>
                      </div>
                      {/* Upload */}
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1.5 flex items-center gap-2"><UploadCloud className="w-3.5 h-3.5"/> Upload Local Project</label>
                        <div className="border-2 border-dashed border-gray-700 hover:border-blue-500 bg-[#111]/50 rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group">
                          <UploadCloud className="w-10 h-10 text-gray-500 group-hover:text-blue-400 mb-3 transition-colors" />
                          <p className="text-sm font-bold text-gray-300 group-hover:text-blue-400 transition-colors">UPLOAD ZIP / FOLDER</p>
                          <p className="text-xs text-gray-500 mt-1">Drag & drop simulation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button onClick={() => setActiveTab('Analysis')} className="flex flex-col items-center justify-center gap-3 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700 rounded-xl p-5 transition-colors text-blue-400 group">
                      <Search className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold tracking-wider text-center">MANUAL DEEP ANALYSIS</span>
                    </button>
                    <button onClick={() => setActiveTab('Analysis')} className="flex flex-col items-center justify-center gap-3 bg-green-900/20 hover:bg-green-800/40 border border-green-800/50 rounded-xl p-5 transition-colors text-green-400 group shadow-lg shadow-green-900/10">
                      <Play className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold tracking-wider text-center">AUTO FULL OPENCLAW RUN</span>
                    </button>
                    <button onClick={() => setActiveTab('Settings')} className="flex flex-col items-center justify-center gap-3 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700 rounded-xl p-5 transition-colors text-yellow-400 group">
                      <Clock className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold tracking-wider text-center">SCHEDULE</span>
                    </button>
                    <button onClick={() => setActiveTab('GitHub')} className="flex flex-col items-center justify-center gap-3 bg-gray-800/40 hover:bg-gray-700/60 border border-gray-700 rounded-xl p-5 transition-colors text-gray-300 group">
                      <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold tracking-wider text-center">PUSH TO GITHUB</span>
                    </button>
                  </div>

                  {/* START ANALYZING BUTTON */}
                  <button 
                    onClick={() => {
                      setActiveTab('Analysis');
                      // In a real app, this would trigger the actual autonomous workflow
                    }}
                    className="w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-1 shadow-2xl shadow-blue-900/30 transition-all hover:scale-[1.01]"
                  >
                    <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-1000 ease-in-out -skew-x-12 -ml-10 w-20"></div>
                    <div className="bg-[#050505]/40 backdrop-blur-sm rounded-xl py-6 px-8 flex items-center justify-center gap-4 border border-white/10">
                      <div className="bg-white/10 p-3 rounded-full">
                        <Zap className="w-8 h-8 text-white animate-pulse" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-2xl font-black text-white tracking-widest uppercase mb-1">Start Analyzing</h2>
                        <p className="text-blue-200 text-sm font-medium">Launch full autonomous workflow</p>
                      </div>
                    </div>
                  </button>

                  {/* Quick Stats Cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg">
                      <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><Folder className="w-3.5 h-3.5"/> Projects Built</p>
                      <p className="text-2xl font-bold text-white mt-2">0</p>
                    </div>
                    <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg">
                      <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><History className="w-3.5 h-3.5"/> Last Build</p>
                      <p className="text-lg font-bold text-white mt-2">2 hours ago</p>
                    </div>
                    <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg">
                      <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><Smartphone className="w-3.5 h-3.5"/> APK Size</p>
                      <p className="text-2xl font-bold text-white mt-2">— MB</p>
                    </div>
                    <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg">
                      <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5"/> Success Rate</p>
                      <p className="text-2xl font-bold text-green-400 mt-2">100%</p>
                    </div>
                  </div>

                  {/* Recent Projects Table */}
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Recent Projects</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-gray-400">
                        <thead className="text-xs text-gray-500 uppercase bg-gray-900/50 border-b border-gray-800">
                          <tr>
                            <th className="px-4 py-3 font-medium rounded-tl-lg">Project Name</th>
                            <th className="px-4 py-3 font-medium">Status</th>
                            <th className="px-4 py-3 font-medium">Last Modified</th>
                            <th className="px-4 py-3 font-medium rounded-tr-lg">APK Ready</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-200">Baki39/Main-Project</td>
                            <td className="px-4 py-4"><span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Completed</span></td>
                            <td className="px-4 py-4">3h ago</td>
                            <td className="px-4 py-4 text-gray-300">Yes</td>
                          </tr>
                          <tr className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                            <td className="px-4 py-4 font-medium text-gray-200">Openclaw-Demo</td>
                            <td className="px-4 py-4"><span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Building</span></td>
                            <td className="px-4 py-4">Just now</td>
                            <td className="px-4 py-4 text-gray-500">No</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

                {/* Right Content (Live App Preview) */}
                <div className="xl:col-span-1">
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl h-full flex flex-col items-center sticky top-0">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-8 w-full text-left flex items-center gap-2">
                      <Smartphone className="w-4 h-4" /> LIVE APP PREVIEW
                    </h3>
                    
                    {/* Phone Mockup */}
                    <div className="relative w-[280px] h-[580px] bg-black border-[8px] border-gray-800 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col ring-1 ring-gray-900">
                      {/* Notch */}
                      <div className="absolute top-0 inset-x-0 h-7 bg-gray-800 rounded-b-3xl w-[140px] mx-auto z-20 flex justify-center items-end pb-1.5">
                        <div className="w-12 h-1.5 bg-gray-900 rounded-full"></div>
                      </div>
                      
                      {/* Screen Content */}
                      <div className="flex-1 bg-gradient-to-b from-gray-900 to-[#050505] flex flex-col items-center justify-center p-6 text-center relative z-10">
                        <Smartphone className="w-16 h-16 text-gray-700 mb-6" />
                        <p className="text-gray-500 font-mono text-sm">No project loaded yet</p>
                        <div className="mt-8 w-full max-w-[180px] h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500/30 w-1/3 animate-pulse rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Status Info */}
                    <div className="mt-8 w-full space-y-3 bg-[#111] p-5 rounded-xl border border-gray-800 shadow-inner">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Current project:</span>
                        <span className="text-gray-200 font-medium truncate max-w-[140px]">None</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Status:</span>
                        <span className="flex items-center gap-2 text-blue-400 font-medium bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                          Ready
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'GitHub' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              {/* Header */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <Github className="w-6 h-6 text-blue-500" /> GITHUB PROJECTS
                  </h2>
                  <p className="text-gray-400 mt-1">Manage your connected repositories and load them into the workspace.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add New Repo
                </button>
              </div>

              {/* Toolbar */}
              <div className="flex gap-4 items-center shrink-0">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search repositories..." 
                    className="w-full bg-[#0a0a0a]/80 border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 text-gray-200 transition-colors shadow-sm"
                  />
                </div>
                <button className="bg-[#0a0a0a]/80 border border-gray-800 hover:border-gray-700 text-gray-300 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
                  <RefreshCw className="w-4 h-4" />
                  Last synced: Just now
                </div>
              </div>

              {/* Repositories Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto pb-4">
                {/* Repo Card 1 */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 hover:border-blue-500/50 rounded-2xl p-6 shadow-xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                        <Github className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
                          Baki39/Openclaw-App
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800/50 uppercase tracking-wider font-semibold">Private</span>
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 12</span>
                          <span className="flex items-center gap-1"><GitCommit className="w-3 h-3" /> 10 mins ago</span>
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-6 flex-1">
                    The main application repository for Openclaw APK builder. Includes full frontend and backend configuration.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        TypeScript
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                        main
                      </div>
                      <div className="flex items-center gap-1.5 text-green-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Synced
                      </div>
                    </div>
                    <button onClick={() => setActiveTab('Analysis')} className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      LOAD INTO WORKSPACE
                    </button>
                  </div>
                </div>

                {/* Repo Card 2 */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 hover:border-gray-700 rounded-2xl p-6 shadow-xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                        <Github className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
                          Baki39/React-Native-Template
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800/50 uppercase tracking-wider font-semibold">Public</span>
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 45</span>
                          <span className="flex items-center gap-1"><GitCommit className="w-3 h-3" /> 2 days ago</span>
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-6 flex-1">
                    Starter template for React Native projects with pre-configured CI/CD, navigation, and state management.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                        JavaScript
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                        master
                      </div>
                      <div className="flex items-center gap-1.5 text-green-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Synced
                      </div>
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      LOAD INTO WORKSPACE
                    </button>
                  </div>
                </div>

                {/* Repo Card 3 */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 hover:border-gray-700 rounded-2xl p-6 shadow-xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                        <Github className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
                          Baki39/Backend-API
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800/50 uppercase tracking-wider font-semibold">Private</span>
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 8</span>
                          <span className="flex items-center gap-1"><GitCommit className="w-3 h-3" /> 5 hours ago</span>
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-6 flex-1">
                    Node.js backend services for the Openclaw ecosystem. Includes authentication and build queue management.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        TypeScript
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                        dev
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-400">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        Syncing...
                      </div>
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" />
                      LOAD INTO WORKSPACE
                    </button>
                  </div>
                </div>

                {/* Repo Card 4 */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 hover:border-red-900/50 rounded-2xl p-6 shadow-xl transition-all group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                        <Github className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-100 flex items-center gap-2 hover:text-blue-400 cursor-pointer transition-colors">
                          Baki39/UI-Components
                          <span className="text-[10px] px-2 py-0.5 rounded-full border border-gray-700 text-gray-400 bg-gray-800/50 uppercase tracking-wider font-semibold">Public</span>
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Star className="w-3 h-3" /> 128</span>
                          <span className="flex items-center gap-1"><GitCommit className="w-3 h-3" /> 1 week ago</span>
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-300 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-6 flex-1">
                    Shared UI component library using TailwindCSS and Radix. Used across multiple internal tools.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        TypeScript
                      </div>
                      <div className="flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5 text-gray-500" />
                        main
                      </div>
                      <div className={`flex items-center gap-1.5 ${githubSync ? 'text-green-400' : 'text-red-400'}`}>
                        {githubSync ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                        {githubSync ? 'Synced' : 'Sync Failed'}
                      </div>
                    </div>
                    <button 
                      onClick={() => setGithubSync(true)}
                      disabled={githubSync}
                      className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-colors flex items-center gap-2 ${githubSync ? 'bg-green-900/20 text-green-400 border border-green-800/50' : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'}`}
                    >
                      {githubSync ? <CheckCircle2 className="w-3.5 h-3.5" /> : <RefreshCw className="w-3.5 h-3.5" />}
                      {githubSync ? 'SYNCED' : 'RETRY SYNC'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
          {activeTab === 'Analysis' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              {/* Header */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <FileSearch className="w-6 h-6 text-blue-500" /> DEEP CODE ANALYSIS
                  </h2>
                  <p className="text-gray-400 mt-1">Comprehensive report on tech stack, security, and missing features.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setActiveTab('Analysis')} className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Start New Analysis
                  </button>
                  <button onClick={() => setActiveTab('Build')} className="bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-purple-900/20 flex items-center gap-2">
                    <Wand2 className="w-4 h-4" />
                    Auto Improve
                  </button>
                  <button onClick={() => setActiveTab('Build')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                    Next: Build <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-y-auto pb-4">
                
                {/* Purpose & Overview */}
                <div className="lg:col-span-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" /> Project Purpose & Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This repository contains a modern React Native application designed for e-commerce and retail. 
                    It includes user authentication, a dynamic product catalog, shopping cart functionality, and Stripe payment integration. 
                    The architecture follows a standard Redux state management pattern with a Node.js/Express backend API.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Total Files</p>
                      <p className="text-xl font-bold text-gray-200">248</p>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Lines of Code</p>
                      <p className="text-xl font-bold text-gray-200">14.2k</p>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Dependencies</p>
                      <p className="text-xl font-bold text-gray-200">42</p>
                    </div>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                      <p className="text-xs text-gray-500 mb-1">Complexity</p>
                      <p className="text-xl font-bold text-yellow-500">Medium</p>
                    </div>
                  </div>
                </div>

                {/* Overall Score */}
                <div className="lg:col-span-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 w-full text-left flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" /> Health Score
                  </h3>
                  
                  <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-gray-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="text-blue-500" strokeWidth="3" strokeDasharray="78, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-3xl font-bold text-white">78</span>
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest">/ 100</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400">Codebase is generally healthy but requires security patches and test coverage improvements.</p>
                </div>

                {/* Tech Stack */}
                <div className="lg:col-span-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Detected Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium rounded-lg">React Native</span>
                    <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium rounded-lg">TypeScript</span>
                    <span className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium rounded-lg">Redux Toolkit</span>
                    <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-lg">Node.js</span>
                    <span className="px-3 py-1.5 bg-gray-500/10 border border-gray-500/20 text-gray-300 text-xs font-medium rounded-lg">Express</span>
                    <span className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium rounded-lg">Firebase Auth</span>
                    <span className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium rounded-lg">Stripe SDK</span>
                    <span className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium rounded-lg">TailwindCSS</span>
                  </div>
                </div>

                {/* Security Issues */}
                <div className="lg:col-span-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Security Vulnerabilities
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-950/20 border border-red-900/30 rounded-xl">
                      <AlertOctagon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-red-400">Hardcoded API Keys Detected</h4>
                        <p className="text-xs text-gray-400 mt-1">Found Stripe secret key and Firebase config hardcoded in <code className="text-red-300 bg-red-950/50 px-1 py-0.5 rounded">src/config/api.ts</code>. Move to .env immediately.</p>
                      </div>
                      <button 
                        onClick={() => setAnalysisIssues(prev => ({ ...prev, apiKeys: true }))}
                        disabled={analysisIssues.apiKeys}
                        className={`ml-auto text-xs px-3 py-1.5 rounded-lg transition-colors border whitespace-nowrap ${analysisIssues.apiKeys ? 'bg-green-900/40 text-green-400 border-green-800/50' : 'bg-red-900/40 hover:bg-red-900/60 text-red-300 border-red-800/50'}`}
                      >
                        {analysisIssues.apiKeys ? 'Fixed' : 'Fix Issue'}
                      </button>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-orange-950/20 border border-orange-900/30 rounded-xl">
                      <AlertTriangle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-orange-400">Outdated JWT Library</h4>
                        <p className="text-xs text-gray-400 mt-1">The package <code className="text-orange-300 bg-orange-950/50 px-1 py-0.5 rounded">jsonwebtoken v8.5.0</code> is susceptible to timing attacks. Upgrade to v9.0.0+.</p>
                      </div>
                      <button 
                        onClick={() => setAnalysisIssues(prev => ({ ...prev, jwt: true }))}
                        disabled={analysisIssues.jwt}
                        className={`ml-auto text-xs px-3 py-1.5 rounded-lg transition-colors border whitespace-nowrap ${analysisIssues.jwt ? 'bg-green-900/40 text-green-400 border-green-800/50' : 'bg-orange-900/40 hover:bg-orange-900/60 text-orange-300 border-orange-800/50'}`}
                      >
                        {analysisIssues.jwt ? 'Updated' : 'Update'}
                      </button>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-950/20 border border-yellow-900/30 rounded-xl">
                      <Bug className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-yellow-400">Missing Rate Limiting</h4>
                        <p className="text-xs text-gray-400 mt-1">The <code className="text-yellow-300 bg-yellow-950/50 px-1 py-0.5 rounded">/api/login</code> endpoint lacks rate limiting, making it vulnerable to brute-force attacks.</p>
                      </div>
                      <button 
                        onClick={() => setAnalysisIssues(prev => ({ ...prev, rateLimit: true }))}
                        disabled={analysisIssues.rateLimit}
                        className={`ml-auto text-xs px-3 py-1.5 rounded-lg transition-colors border whitespace-nowrap ${analysisIssues.rateLimit ? 'bg-green-900/40 text-green-400 border-green-800/50' : 'bg-yellow-900/40 hover:bg-yellow-900/60 text-yellow-300 border-yellow-800/50'}`}
                      >
                        {analysisIssues.rateLimit ? 'Added' : 'Add Limiter'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Missing Features & Recommendations */}
                <div className="lg:col-span-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" /> Missing Features & Recommendations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/30 transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                        <Zap className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-200 mb-1">Offline Mode Support</h4>
                      <p className="text-xs text-gray-500 mb-4">Implement AsyncStorage or WatermelonDB to cache product catalog and cart data for offline usage.</p>
                      <button 
                        onClick={() => setAnalysisFeatures(prev => ({ ...prev, offline: true }))}
                        disabled={analysisFeatures.offline}
                        className={`text-xs font-medium flex items-center gap-1 transition-colors ${analysisFeatures.offline ? 'text-green-400' : 'text-blue-400 group-hover:text-blue-300'}`}
                      >
                        {analysisFeatures.offline ? <CheckCircle2 className="w-3 h-3" /> : <Plus className="w-3 h-3" />} 
                        {analysisFeatures.offline ? 'Added' : 'Add Feature'}
                      </button>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-purple-500/30 transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center mb-3">
                        <Smartphone className="w-4 h-4 text-purple-400" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-200 mb-1">Push Notifications</h4>
                      <p className="text-xs text-gray-500 mb-4">Integrate Firebase Cloud Messaging (FCM) to send order status updates and promotional alerts.</p>
                      <button 
                        onClick={() => setAnalysisFeatures(prev => ({ ...prev, push: true }))}
                        disabled={analysisFeatures.push}
                        className={`text-xs font-medium flex items-center gap-1 transition-colors ${analysisFeatures.push ? 'text-green-400' : 'text-purple-400 group-hover:text-purple-300'}`}
                      >
                        {analysisFeatures.push ? <CheckCircle2 className="w-3 h-3" /> : <Plus className="w-3 h-3" />} 
                        {analysisFeatures.push ? 'Added' : 'Add Feature'}
                      </button>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/30 transition-colors group">
                      <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-200 mb-1">E2E Testing Suite</h4>
                      <p className="text-xs text-gray-500 mb-4">Current test coverage is 24%. Add Detox or Appium for comprehensive end-to-end testing flows.</p>
                      <button 
                        onClick={() => setAnalysisFeatures(prev => ({ ...prev, e2e: true }))}
                        disabled={analysisFeatures.e2e}
                        className={`text-xs font-medium flex items-center gap-1 transition-colors ${analysisFeatures.e2e ? 'text-green-400' : 'text-green-400 group-hover:text-green-300'}`}
                      >
                        {analysisFeatures.e2e ? <CheckCircle2 className="w-3 h-3" /> : <Plus className="w-3 h-3" />} 
                        {analysisFeatures.e2e ? 'Added' : 'Add Feature'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
          {activeTab === 'Testing' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              {/* Header */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <TestTube className="w-6 h-6 text-green-500" /> TESTING SUITE
                  </h2>
                  <p className="text-gray-400 mt-1">Automated component validation, E2E flows, and error tracking.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setActiveTab('Mockup')} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-green-900/20 flex items-center gap-2">
                    <PlayCircle className="w-5 h-5" />
                    RUN FULL USER TEST
                  </button>
                  <button onClick={() => setActiveTab('Mockup')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                    Next: Mockup <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 shrink-0">
                <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Total Tests</p>
                    <p className="text-2xl font-bold text-white">142</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Layers className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Passed</p>
                    <p className="text-2xl font-bold text-green-400">138</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Failed</p>
                    <p className="text-2xl font-bold text-red-400">4</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <div className="bg-[#0a0a0a]/80 border border-gray-800 rounded-xl p-5 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Coverage</p>
                    <p className="text-2xl font-bold text-yellow-400">84%</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <Shield className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Main Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0">
                
                {/* Left: Component Pass/Fail List */}
                <div className="lg:col-span-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-xl">
                  <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
                    <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                      <FileCode className="w-4 h-4" /> Component Test Status
                    </h3>
                    <div className="flex gap-2">
                      <span className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs font-medium rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors">All</span>
                      <span className="px-2.5 py-1 bg-red-900/20 text-red-400 text-xs font-medium rounded-md border border-red-900/50 cursor-pointer hover:bg-red-900/40 transition-colors">Failed (2)</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {/* Component Item 1 */}
                    <div className="group flex items-center justify-between p-4 hover:bg-gray-800/40 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-700/50">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition-colors">Authentication Module</h4>
                          <p className="text-xs text-gray-500 mt-0.5">24/24 tests passed • 1.2s execution</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>

                    {/* Component Item 2 (Failed) */}
                    <div className="group flex items-center justify-between p-4 bg-red-950/10 hover:bg-red-950/20 rounded-xl transition-colors cursor-pointer border border-red-900/20 hover:border-red-800/40">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                          <XCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-red-400">Payment Gateway Integration</h4>
                          <p className="text-xs text-red-500/70 mt-0.5">12/14 tests passed • 2 failed • 4.5s execution</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-red-900/40 hover:bg-red-900/60 text-red-300 text-xs font-medium rounded-lg border border-red-800/50 transition-colors">
                        View Errors
                      </button>
                    </div>

                    {/* Component Item 3 */}
                    <div className="group flex items-center justify-between p-4 hover:bg-gray-800/40 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-700/50">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition-colors">Product Catalog & Search</h4>
                          <p className="text-xs text-gray-500 mt-0.5">45/45 tests passed • 2.8s execution</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>

                    {/* Component Item 4 */}
                    <div className="group flex items-center justify-between p-4 hover:bg-gray-800/40 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-700/50">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-200 group-hover:text-blue-400 transition-colors">User Profile & Settings</h4>
                          <p className="text-xs text-gray-500 mt-0.5">18/18 tests passed • 0.9s execution</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </div>

                    {/* Component Item 5 (Failed) */}
                    <div className="group flex items-center justify-between p-4 bg-red-950/10 hover:bg-red-950/20 rounded-xl transition-colors cursor-pointer border border-red-900/20 hover:border-red-800/40">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                          <XCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-red-400">Checkout Flow (E2E)</h4>
                          <p className="text-xs text-red-500/70 mt-0.5">1 timeout error • 15.2s execution</p>
                        </div>
                      </div>
                      <button className="px-3 py-1.5 bg-red-900/40 hover:bg-red-900/60 text-red-300 text-xs font-medium rounded-lg border border-red-800/50 transition-colors">
                        View Errors
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Error Log Integration */}
                <div className="lg:col-span-1 bg-[#111] border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-xl">
                  <div className="p-5 border-b border-gray-800 flex justify-between items-center bg-gray-900/30">
                    <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                      <TerminalSquare className="w-4 h-4" /> Live Error Log
                    </h3>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] leading-relaxed space-y-3 bg-[#050505]">
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:22]</span> Starting test suite execution...
                    </div>
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:23]</span> Running Authentication Module tests... <span className="text-green-400">PASS</span>
                    </div>
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:24]</span> Running Payment Gateway tests...
                    </div>
                    <div className="text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50">
                      <span className="font-bold">[FAIL]</span> PaymentGateway.test.tsx<br/>
                      <span className="text-red-300">Error: Stripe API timeout after 5000ms. Expected 200 OK, received 504 Gateway Timeout.</span><br/>
                      <span className="text-gray-500 mt-1 block">  at validatePayment (src/services/stripe.ts:42:15)</span>
                      <span className="text-gray-500 block">  at Object.&lt;anonymous&gt; (tests/PaymentGateway.test.tsx:118:7)</span>
                    </div>
                    <div className="text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50">
                      <span className="font-bold">[FAIL]</span> PaymentGateway.test.tsx<br/>
                      <span className="text-red-300">Error: Invalid mock token format.</span><br/>
                      <span className="text-gray-500 mt-1 block">  at Object.&lt;anonymous&gt; (tests/PaymentGateway.test.tsx:142:12)</span>
                    </div>
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:29]</span> Running Product Catalog tests... <span className="text-green-400">PASS</span>
                    </div>
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:32]</span> Running Checkout Flow (E2E)...
                    </div>
                    <div className="text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50">
                      <span className="font-bold">[TIMEOUT]</span> CheckoutFlow.e2e.ts<br/>
                      <span className="text-red-300">Error: Element &lt;button id="submit-order"&gt; not found on screen within 10000ms.</span><br/>
                      <span className="text-gray-500 mt-1 block">  at page.waitForSelector (e2e/CheckoutFlow.e2e.ts:55:20)</span>
                    </div>
                    <div className="text-gray-500">
                      <span className="text-blue-400">[10:45:47]</span> Test suite execution completed.
                    </div>
                  </div>
                  
                  <div className="p-3 border-t border-gray-800 bg-gray-900/30 flex justify-end">
                    <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
                      <Download className="w-3 h-3" /> Export Logs
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}
          {activeTab === 'Mockup' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              {/* Header */}
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-pink-500" /> LIVE MOCKUP PREVIEW
                  </h2>
                  <p className="text-gray-400 mt-1">Interactive simulation of the compiled application.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => setMockupScreen('Home')} className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" /> Reload App
                  </button>
                  <button className="bg-pink-600 hover:bg-pink-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-pink-900/20 flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Open in Browser
                  </button>
                  <button onClick={() => setActiveTab('Errors')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                    Next: Error Log <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 min-h-0 flex gap-8 justify-center items-center">
                {/* Phone Frame */}
                <div className="relative w-[320px] h-[650px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl shadow-pink-500/10 flex flex-col overflow-hidden shrink-0">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20"></div>
                  
                  {/* App Content Simulation */}
                  <div className="flex-1 bg-white relative overflow-hidden flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 bg-blue-600 w-full flex justify-between items-center px-4 text-[10px] text-white font-medium z-10">
                      <span>10:57</span>
                      <div className="flex items-center gap-1">
                        <Activity className="w-3 h-3" />
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App Header */}
                    <div className="h-14 bg-blue-600 w-full flex items-center px-4 text-white shadow-md z-10">
                      <Menu className="w-5 h-5 mr-3" />
                      <span className="font-bold text-lg">{mockupScreen}</span>
                      <Search className="w-5 h-5 ml-auto" />
                    </div>

                    {/* App Body */}
                    <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                      {mockupScreen === 'Home' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                          <div className="w-full h-32 bg-blue-100 rounded-xl flex items-center justify-center border border-blue-200">
                            <span className="text-blue-500 font-bold">Featured Banner</span>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
                              <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
                              <div className="w-8 h-8 bg-green-100 rounded-full"></div>
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
                              <div className="w-8 h-8 bg-orange-100 rounded-full"></div>
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-24 bg-white rounded-xl shadow-sm border border-gray-100 p-3 flex flex-col justify-between">
                              <div className="w-8 h-8 bg-pink-100 rounded-full"></div>
                              <div className="h-2 w-16 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      )}
                      {mockupScreen === 'Login' && (
                        <div className="h-full flex flex-col items-center justify-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                          <div className="w-20 h-20 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center">
                            <Shield className="w-10 h-10 text-white" />
                          </div>
                          <div className="w-full space-y-3">
                            <div className="h-12 w-full bg-white border border-gray-200 rounded-lg px-4 flex items-center text-gray-400 text-sm">Email Address</div>
                            <div className="h-12 w-full bg-white border border-gray-200 rounded-lg px-4 flex items-center text-gray-400 text-sm">Password</div>
                            <button className="h-12 w-full bg-blue-600 rounded-lg text-white font-bold shadow-md mt-2">Sign In</button>
                          </div>
                        </div>
                      )}
                      {mockupScreen === 'Settings' && (
                        <div className="space-y-2 animate-in fade-in slide-in-from-right-8 duration-500">
                          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-4">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-gray-500" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-800">John Doe</div>
                              <div className="text-xs text-gray-500">john@example.com</div>
                            </div>
                          </div>
                          <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 justify-between">
                            <span className="text-gray-700 font-medium">Push Notifications</span>
                            <div className="w-10 h-6 bg-blue-500 rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                          </div>
                          <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 justify-between">
                            <span className="text-gray-700 font-medium">Dark Mode</span>
                            <div className="w-10 h-6 bg-gray-300 rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                          </div>
                          <div className="h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 justify-between text-red-500 font-medium mt-4">
                            Log Out
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Nav */}
                    <div className="h-16 bg-white border-t border-gray-200 flex justify-around items-center pb-2 z-10">
                      <div className="flex flex-col items-center gap-1 text-blue-600">
                        <Home className="w-5 h-5" />
                        <span className="text-[9px] font-medium">Home</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-gray-400">
                        <Search className="w-5 h-5" />
                        <span className="text-[9px] font-medium">Search</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-gray-400">
                        <User className="w-5 h-5" />
                        <span className="text-[9px] font-medium">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col gap-4 w-64">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Screen Navigation</h3>
                  <button 
                    onClick={() => setMockupScreen('Home')}
                    className={`p-4 rounded-xl border text-left transition-all ${mockupScreen === 'Home' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800'}`}
                  >
                    <div className="font-bold mb-1">Home Screen</div>
                    <div className="text-xs opacity-70">Main dashboard view</div>
                  </button>
                  <button 
                    onClick={() => setMockupScreen('Login')}
                    className={`p-4 rounded-xl border text-left transition-all ${mockupScreen === 'Login' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800'}`}
                  >
                    <div className="font-bold mb-1">Login Screen</div>
                    <div className="text-xs opacity-70">Authentication flow</div>
                  </button>
                  <button 
                    onClick={() => setMockupScreen('Settings')}
                    className={`p-4 rounded-xl border text-left transition-all ${mockupScreen === 'Settings' ? 'bg-blue-500/10 border-blue-500/50 text-blue-400' : 'bg-gray-900/50 border-gray-800 text-gray-400 hover:bg-gray-800'}`}
                  >
                    <div className="font-bold mb-1">Settings</div>
                    <div className="text-xs opacity-70">User preferences</div>
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Errors' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <AlertOctagon className="w-6 h-6 text-red-500" /> SYSTEM ERROR LOG
                  </h2>
                  <p className="text-gray-400 mt-1">Detailed list of all issues found during analysis and build.</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2">
                    <DownloadCloud className="w-4 h-4" /> Export Logs
                  </button>
                  <button onClick={() => setActiveTab('History')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                    Next: History <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-4">
                {errors.length === 0 || errors.every(e => e.fixed) ? (
                  <div className="bg-green-950/20 border border-green-900/50 rounded-2xl p-10 shadow-lg flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">All Errors Fixed!</h3>
                    <p className="text-gray-400">Your application is now stable and ready for production.</p>
                  </div>
                ) : (
                  errors.filter(e => !e.fixed).map(error => (
                    <div key={error.id} className={`bg-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-950/20 border border-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-900/50 rounded-2xl p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start`}>
                      <div className={`w-12 h-12 rounded-full bg-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-500/10 flex items-center justify-center shrink-0 border border-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-500/20`}>
                        {error.severity === 'Critical' ? <AlertOctagon className="w-6 h-6 text-red-500" /> : error.severity === 'Major' ? <AlertTriangle className="w-6 h-6 text-orange-500" /> : <Bug className="w-6 h-6 text-yellow-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-lg font-bold text-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-400`}>{error.title}</h3>
                          <span className={`px-2.5 py-1 bg-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-500/20 text-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-500/30`}>{error.severity}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {error.desc}
                        </p>
                        {error.file && (
                          <div className="bg-black/50 p-3 rounded-lg border border-gray-800 font-mono text-xs text-gray-500 mb-4">
                            {error.file}<br/>
                            <span className="text-red-400">{error.errorMsg}</span>
                          </div>
                        )}
                        <button onClick={() => fixError(error.id)} className={`bg-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-600 hover:bg-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-500 text-${error.severity === 'Minor' ? 'black' : 'white'} px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-${error.severity === 'Critical' ? 'red' : error.severity === 'Major' ? 'orange' : 'yellow'}-900/20 flex items-center gap-2`}>
                          <Wrench className="w-4 h-4" /> Fix This Error
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
          {activeTab === 'History' && (
            <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col pb-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <History className="w-6 h-6 text-indigo-500" /> BUILD HISTORY
                  </h2>
                  <p className="text-gray-400 mt-1">All previous versions, builds, and changelogs.</p>
                </div>
                <button onClick={() => setActiveTab('Export')} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                  Next: Export APK <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-900/50 border-b border-gray-800 text-xs uppercase tracking-wider text-gray-500">
                        <th className="p-4 font-medium">Version</th>
                        <th className="p-4 font-medium">Date</th>
                        <th className="p-4 font-medium">Changelog</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="hover:bg-gray-800/30 transition-colors group">
                        <td className="p-4">
                          <div className="font-bold text-gray-200">v1.2.4</div>
                          <div className="text-xs text-gray-500 font-mono">b8f3a2c</div>
                        </td>
                        <td className="p-4 text-sm text-gray-400">Today, 10:45 AM</td>
                        <td className="p-4 text-sm text-gray-300 max-w-md">
                          Fixed NullPointerException in checkout flow. Updated dependencies.
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Success
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 ml-auto transition-colors">
                            <Download className="w-4 h-4" /> APK
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800/30 transition-colors group">
                        <td className="p-4">
                          <div className="font-bold text-gray-200">v1.2.3</div>
                          <div className="text-xs text-gray-500 font-mono">a7d9e1f</div>
                        </td>
                        <td className="p-4 text-sm text-gray-400">Yesterday, 14:20 PM</td>
                        <td className="p-4 text-sm text-gray-300 max-w-md">
                          Added dark mode support. Refactored navigation stack.
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Success
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 ml-auto transition-colors">
                            <Download className="w-4 h-4" /> APK
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-800/30 transition-colors group">
                        <td className="p-4">
                          <div className="font-bold text-gray-200">v1.2.2</div>
                          <div className="text-xs text-gray-500 font-mono">c4b2a9d</div>
                        </td>
                        <td className="p-4 text-sm text-gray-400">Mar 24, 09:15 AM</td>
                        <td className="p-4 text-sm text-gray-300 max-w-md">
                          Attempted to upgrade React Native. Build failed due to incompatible reanimated version.
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                            <XCircle className="w-3.5 h-3.5" /> Failed
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="text-gray-500 hover:text-gray-400 text-sm font-medium flex items-center gap-1 ml-auto transition-colors">
                            <Download className="w-4 h-4" /> Logs
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Export' && (
            <div className="max-w-4xl mx-auto space-y-6 h-full flex flex-col pb-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                    <DownloadCloud className="w-6 h-6 text-blue-500" /> EXPORT APK
                  </h2>
                  <p className="text-gray-400 mt-1">Finalize and download your compiled Android application.</p>
                </div>
              </div>

              <div className="flex-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl shadow-blue-900/40 mb-8 relative z-10">
                  <div className="w-full h-full bg-[#050505] rounded-[22px] flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-blue-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Baki39_App_v1.2.4.apk</h3>
                <p className="text-gray-400 mb-8 max-w-md relative z-10">
                  Your application has successfully passed all build phases, security checks, and automated tests. It is now ready for deployment.
                </p>

                <div className="w-full max-w-md bg-gray-900/50 border border-gray-800 rounded-xl p-5 mb-8 text-left relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">File Size</span>
                    <span className="text-sm font-bold text-gray-200">42.8 MB</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Target SDK</span>
                    <span className="text-sm font-bold text-gray-200">Android 13 (API 33)</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-400">Architecture</span>
                    <span className="text-sm font-bold text-gray-200">arm64-v8a, armeabi-v7a</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Signature</span>
                    <span className="text-sm font-bold text-green-400 flex items-center gap-1"><Shield className="w-3 h-3" /> Verified V2</span>
                  </div>
                </div>

                {isExporting ? (
                  <div className="w-full max-w-md relative z-10">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-400 font-medium">Packaging APK...</span>
                      <span className="text-blue-400 font-mono">{exportProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded-full h-2 border border-gray-800 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full transition-all duration-200 ease-out"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>
                  </div>
                ) : apkReady ? (
                  <div className="flex flex-col items-center gap-4 relative z-10">
                    <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-green-900/30 flex items-center gap-3 hover:scale-105">
                      <Download className="w-5 h-5" />
                      DOWNLOAD APK
                    </button>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Ready for installation
                    </p>
                  </div>
                ) : (
                  <button 
                    onClick={handleExportAPK}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/30 flex items-center gap-3 hover:scale-105 relative z-10"
                  >
                    <Layers className="w-5 h-5" />
                    GENERATE FINAL APK
                  </button>
                )}
              </div>
            </div>
          )}
          {activeTab === 'Settings' && (
            <div className="max-w-3xl mx-auto space-y-6 h-full flex flex-col pb-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0">
                <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 mb-1">
                  <Settings className="w-6 h-6 text-gray-400" /> SYSTEM SETTINGS
                </h2>
                <p className="text-gray-400">Configure Openclaw workspace and preferences.</p>
              </div>

              <div className="flex-1 overflow-y-auto space-y-6">
                {/* General Settings */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider border-b border-gray-800 pb-3">General</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Workspace Path</label>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={workspacePath}
                        onChange={(e) => setWorkspacePath(e.target.value)}
                        className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                      />
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-lg border border-gray-700 transition-colors">
                        Browse
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">GitHub Personal Access Token</label>
                    <input 
                      type="password" 
                      defaultValue="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-2">Required for private repositories and increased API limits.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Tech Stack</label>
                    <select 
                      value={techStack}
                      onChange={(e) => setTechStack(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                    >
                      <option>React Native + Expo</option>
                      <option>React Native (CLI)</option>
                      <option>Flutter</option>
                      <option>Kotlin (Native)</option>
                    </select>
                  </div>
                </div>

                {/* Preferences */}
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider border-b border-gray-800 pb-3">Preferences</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Auto-Save Workspace</h4>
                      <p className="text-sm text-gray-500">Automatically save changes before running builds.</p>
                    </div>
                    <button onClick={() => setAutoSave(!autoSave)} className="text-blue-500">
                      {autoSave ? <ToggleRight className="w-10 h-10" /> : <ToggleLeft className="w-10 h-10 text-gray-600" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Dark Mode</h4>
                      <p className="text-sm text-gray-500">Openclaw operates exclusively in dark mode.</p>
                    </div>
                    <button className="text-blue-500 cursor-not-allowed opacity-50">
                      <ToggleRight className="w-10 h-10" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-medium">Schedule Automated Builds</h4>
                      <p className="text-sm text-gray-500">Run tests and builds nightly.</p>
                    </div>
                    <button onClick={() => setScheduleBuilds(!scheduleBuilds)} className={scheduleBuilds ? "text-blue-500" : "text-gray-600"}>
                      {scheduleBuilds ? <ToggleRight className="w-10 h-10" /> : <ToggleLeft className="w-10 h-10" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button onClick={() => setActiveTab('Dashboard')} className="bg-gray-800 hover:bg-gray-700 text-gray-200 px-6 py-3 rounded-xl text-sm font-medium transition-colors border border-gray-700">
                    Cancel
                  </button>
                  <button onClick={() => setActiveTab('Dashboard')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Build' && (
            <div className="max-w-6xl mx-auto space-y-6 h-full flex flex-col">
              <div className="flex items-end justify-between shrink-0">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                    <Wrench className="w-8 h-8 text-blue-500" />
                    Autonomous Build Engine
                  </h2>
                  <p className="text-gray-400">Compiling and upgrading: <span className="text-gray-200 font-mono">Baki39/Main-Project</span></p>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/20">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="font-mono text-sm">BUILDING_IN_PROGRESS</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 flex-1 min-h-0">
                {/* Terminal Logs */}
                <div className="col-span-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-xl">
                  <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex items-center gap-2 shrink-0">
                    <Terminal className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-mono text-gray-400">openclaw-compiler.log</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-gray-300 overflow-y-auto flex-1 space-y-2">
                    {logs.map((log, i) => (
                      <div key={i} className={`${log.includes('ERROR') ? 'text-red-400' : log.includes('SUCCESS') ? 'text-green-400' : log.includes('WARN') ? 'text-yellow-400' : 'text-gray-300'}`}>
                        <span className="text-gray-600">[{new Date().toISOString().split('T')[1].slice(0,-1)}]</span> {log}
                      </div>
                    ))}
                    <div ref={logsEndRef} />
                  </div>
                </div>

                {/* Progress & Live Code */}
                <div className="col-span-1 space-y-6 flex flex-col">
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Sub-System Status</h3>
                    <div className="space-y-4">
                      <ProgressBar label="Frontend (React Native)" progress={progress.frontend} />
                      <ProgressBar label="Backend & Logic" progress={progress.backend} />
                      <ProgressBar label="Security Hardening" progress={progress.security} />
                      <ProgressBar label="APK Compilation" progress={progress.apk} />
                    </div>
                  </div>

                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-xl flex-1 min-h-0">
                    <div className="bg-[#111] px-4 py-2 border-b border-gray-800 flex items-center gap-2 shrink-0">
                      <FileCode className="w-4 h-4 text-gray-400" />
                      <span className="text-xs font-mono text-gray-400">Live Code Injection</span>
                    </div>
                    <div className="p-4 font-mono text-xs text-blue-300 overflow-y-auto flex-1 whitespace-pre-wrap">
                      {liveCode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'Chat' && (
            <div className="max-w-5xl mx-auto space-y-6 h-full flex flex-col pb-10">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 shadow-xl shrink-0">
                <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-blue-500" /> DIRECT CHAT
                </h2>
                <p className="text-gray-400 mt-1">Communicate directly with Openclaw Smart APK Builder.</p>
              </div>

              <div className="flex-1 bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-2xl flex flex-col overflow-hidden shadow-xl">
                <div className="flex-1 p-6 overflow-y-auto space-y-6">
                  {chatMessages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-indigo-600 shadow-indigo-900/20' : 'bg-blue-600 shadow-blue-900/20'}`}>
                        {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Terminal className="w-5 h-5 text-white" />}
                      </div>
                      <div className={`border rounded-2xl p-4 text-gray-200 max-w-[80%] ${msg.role === 'user' ? 'bg-indigo-900/30 border-indigo-700/50 rounded-tr-none' : 'bg-gray-800/50 border-gray-700 rounded-tl-none'}`}>
                        <p>{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                
                {/* Input Area */}
                <div className="p-4 bg-gray-900/50 border-t border-gray-800">
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your command or message here..." 
                      className="flex-1 bg-[#111] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
                      Send <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${active ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-200 border border-transparent'}`}>
      <span className="w-5 h-5">{icon}</span>
      {label}
    </button>
  );
}

function ProgressBar({ label, progress }: { label: string, progress: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-blue-400 font-mono">{progress}%</span>
      </div>
      <div className="w-full bg-gray-900 rounded-full h-1.5 border border-gray-800 overflow-hidden">
        <div 
          className="bg-blue-500 h-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

