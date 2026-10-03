"use client";

import { useState } from "react";
import {
  Code2,
  FileCode2,
  FileJson,
  FileText,
  X,
  Play,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  FolderOpen,
  Terminal,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

type FileTab = "developer.tsx" | "projects.json" | "skills.ts" | "contact.ts";

export function VsCodeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<FileTab>("developer.tsx");
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTabMode, setActiveTabMode] = useState<"code" | "preview">("code");

  if (!isOpen) return null;

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeFiles: Record<FileTab, { language: string; icon: typeof FileCode2; color: string; content: string }> = {
    "developer.tsx": {
      language: "typescript",
      icon: FileCode2,
      color: "text-blue-400",
      content: `import { Developer } from "@portfolio/core";

export const developer: Developer = {
  name: "${siteConfig.name}",
  role: "${siteConfig.title}",
  location: "${siteConfig.location}",
  status: "Available for full-time & freelance projects 🚀",
  bio: "${siteConfig.description}",
  interests: ["Full Stack Web", "AI Apps", "UI/UX Architecture", "Open Source"],
  getContact: () => "nikesh.sharma@example.com"
};

export default function RenderProfile() {
  return (
    <div className="profile-container">
      <h1>{developer.name}</h1>
      <p>{developer.role}</p>
    </div>
  );
}`,
    },
    "projects.json": {
      language: "json",
      icon: FileJson,
      color: "text-amber-400",
      content: JSON.stringify(
        projects.slice(0, 3).map((p) => ({
          title: p.name,
          description: p.description,
          techStack: p.techStack,
          link: p.liveDemo || p.github,
        })),
        null,
        2
      ),
    },
    "skills.ts": {
      language: "typescript",
      icon: FileCode2,
      color: "text-sky-400",
      content: `export const techStack = ${JSON.stringify(
        skillGroups.map((group) => ({
          category: group.title,
          skills: group.skills,
        })),
        null,
        2
      )};`,
    },
    "contact.ts": {
      language: "typescript",
      icon: FileText,
      color: "text-emerald-400",
      content: `export const contactInformation = {
  email: "nikesh@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  availableForHire: true
};`,
    },
  };

  const currentFile = codeFiles[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`w-full max-w-5xl rounded-xl border border-border/80 bg-[#1e1e1e] text-slate-200 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMaximized ? "h-[96vh] max-w-[98vw]" : "h-[80vh]"
        }`}
      >
        {/* Titlebar / Header */}
        <div className="flex h-10 items-center justify-between border-b border-[#2b2b2b] bg-[#181818] px-4 select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="size-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
              title="Close VS Code View"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="size-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
              title="Resize Window"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="size-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
              title="Maximize"
            />
            <span className="ml-3 text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
              <Code2 className="size-3.5 text-blue-400" />
              portfolio-ide — {activeTab}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTabMode(activeTabMode === "code" ? "preview" : "code")}
              className="h-7 text-xs gap-1.5 text-slate-300 hover:bg-[#2d2d2d]"
            >
              <Play className="size-3 text-emerald-400" />
              {activeTabMode === "code" ? "Live Preview" : "View Code"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMaximized(!isMaximized)}
              className="size-7 text-slate-300 hover:bg-[#2d2d2d]"
            >
              {isMaximized ? <Minimize2 className="size-3.5" /> : <Maximize2 className="size-3.5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="size-7 text-slate-300 hover:bg-red-500/20 hover:text-red-400"
            >
              <X className="size-4" />
            </Button>
          </div>
        </div>

        {/* Main Workspace Body */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar - File Explorer */}
          <div
            className={`border-r border-[#2b2b2b] bg-[#181818] flex flex-col transition-all duration-200 ${
              sidebarOpen ? "w-56" : "w-12"
            }`}
          >
            <div className="flex h-9 items-center justify-between px-3 border-b border-[#2b2b2b] text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {sidebarOpen && <span className="flex items-center gap-1.5"><FolderOpen className="size-3.5 text-amber-400" /> Explorer</span>}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-1 hover:bg-[#2b2b2b] rounded text-slate-400"
              >
                {sidebarOpen ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
              </button>
            </div>

            {sidebarOpen && (
              <div className="p-2 space-y-1 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-slate-400 pb-1">
                  <ChevronDown className="size-3" />
                  <span>SRC / DATA</span>
                </div>
                {(Object.keys(codeFiles) as FileTab[]).map((fileName) => {
                  const file = codeFiles[fileName];
                  const Icon = file.icon;
                  const isActive = activeTab === fileName;
                  return (
                    <button
                      key={fileName}
                      onClick={() => {
                        setActiveTab(fileName);
                        setActiveTabMode("code");
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-1.5 rounded transition-colors ${
                        isActive
                          ? "bg-[#37373d] text-white font-semibold"
                          : "hover:bg-[#2a2d2e] text-slate-400"
                      }`}
                    >
                      <Icon className={`size-3.5 ${file.color}`} />
                      <span>{fileName}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Code Editor Window */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e] overflow-hidden">
            {/* Active File Tabs */}
            <div className="flex h-9 bg-[#252526] border-b border-[#2b2b2b] overflow-x-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-t-2 border-blue-500 border-r border-[#2b2b2b] text-xs font-mono font-medium text-white">
                <currentFile.icon className={`size-3.5 ${currentFile.color}`} />
                <span>{activeTab}</span>
              </div>
            </div>

            {/* Code / Preview Area */}
            {activeTabMode === "code" ? (
              <div className="flex-1 relative flex overflow-auto p-4 font-mono text-xs sm:text-sm leading-relaxed select-text">
                <button
                  onClick={() => handleCopy(currentFile.content)}
                  className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded bg-[#2d2d2d] px-2.5 py-1 text-xs text-slate-300 hover:bg-[#3d3d3d] border border-slate-700"
                >
                  {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>

                {/* Line numbers */}
                <div className="pr-4 text-right text-slate-600 select-none font-mono">
                  {currentFile.content.split("\n").map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Code syntax display */}
                <pre className="text-slate-200 overflow-x-auto font-mono">
                  <code>{currentFile.content}</code>
                </pre>
              </div>
            ) : (
              <div className="flex-1 p-6 bg-[#181818] overflow-auto text-slate-200">
                <div className="p-4 rounded-lg border border-slate-700 bg-[#1e1e1e] max-w-2xl">
                  <h3 className="text-lg font-bold text-emerald-400 mb-2 font-mono">
                    ⚡ Live Output Preview ({activeTab})
                  </h3>
                  <p className="text-xs text-slate-400 mb-4">
                    Rendered data output directly from portfolio components.
                  </p>
                  <pre className="p-3 rounded bg-black/60 font-mono text-xs text-blue-300 overflow-x-auto">
                    {activeTab === "developer.tsx" && `Full Name: ${siteConfig.name}\nRole: ${siteConfig.title}\nLocation: ${siteConfig.location}`}
                    {activeTab === "projects.json" && currentFile.content}
                    {activeTab === "skills.ts" && currentFile.content}
                    {activeTab === "contact.ts" && currentFile.content}
                  </pre>
                </div>
              </div>
            )}

            {/* Bottom Status bar */}
            <div className="h-6 bg-[#007acc] text-white text-[11px] px-3 flex items-center justify-between font-mono select-none">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Terminal className="size-3" /> UTF-8
                </span>
                <span>TypeScript 5.7</span>
                <span>Next.js 15</span>
              </div>
              <div>Ready • Line {currentFile.content.split("\n").length}, Col 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
