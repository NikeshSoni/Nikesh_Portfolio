"use client";

import { useMemo } from "react";
import { GitCommit, GitPullRequest, Star, Trophy, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function GitHubWidget() {
  // Generate 16 weeks * 7 days contribution grid mock matching real GitHub activity
  const gridDays = useMemo(() => {
    const days = [];
    const intensityLevels = [0, 1, 2, 3, 4];
    for (let i = 0; i < 112; i++) {
      // Create random realistic commit density
      const randomLevel = Math.random() > 0.35 ? intensityLevels[Math.floor(Math.random() * intensityLevels.length)] : 0;
      days.push({ id: i, count: randomLevel * 3, level: randomLevel });
    }
    return days;
  }, []);

  const stats = [
    { label: "Total Contributions", value: "1,420+", icon: GitCommit, color: "text-purple-500" },
    { label: "Current Streak", value: "48 Days", icon: Flame, color: "text-amber-500" },
    { label: "Pull Requests", value: "180+", icon: GitPullRequest, color: "text-blue-500" },
    { label: "GitHub Stars", value: "95+", icon: Star, color: "text-yellow-500" },
  ];

  const getColorClass = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-900/40 dark:bg-emerald-950";
      case 2:
        return "bg-emerald-700/60 dark:bg-emerald-700";
      case 3:
        return "bg-emerald-500/80 dark:bg-emerald-500";
      case 4:
        return "bg-emerald-400 dark:bg-emerald-400 shadow-sm shadow-emerald-400/50";
      default:
        return "bg-muted/40 border border-border/30";
    }
  };

  return (
    <Card className="relative overflow-hidden border-border/60 bg-background/80 backdrop-blur-md shadow-md hover:border-purple-500/40 transition-all duration-300">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-border/40">
          <div className="flex items-center gap-2">
            <Trophy className="size-4 text-purple-500" />
            <h3 className="font-heading text-sm font-bold text-foreground">
              GitHub Developer Matrix
            </h3>
          </div>
          <Badge className="font-mono text-[11px] gap-1">
            <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            Active Contributor
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-2.5 rounded-lg border border-border/40 bg-muted/20 flex items-center gap-3"
              >
                <div className={`p-1.5 rounded-md bg-background border border-border/40 ${s.color}`}>
                  <Icon className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground font-mono">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Heatmap */}
        <div>
          <div className="flex items-center justify-between mb-2 text-[11px] font-mono text-muted-foreground">
            <span>Recent Contributions (Last 4 Months)</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <span className="size-2.5 rounded-sm bg-muted/40 inline-block" />
              <span className="size-2.5 rounded-sm bg-emerald-900/40 inline-block" />
              <span className="size-2.5 rounded-sm bg-emerald-700/60 inline-block" />
              <span className="size-2.5 rounded-sm bg-emerald-500 inline-block" />
              <span className="size-2.5 rounded-sm bg-emerald-400 inline-block" />
              <span>More</span>
            </div>
          </div>

          <div className="grid grid-rows-7 grid-flow-col gap-1 overflow-x-auto pb-1 pt-1">
            {gridDays.map((day) => (
              <div
                key={day.id}
                title={`${day.count} commits on this day`}
                className={`size-3 rounded-sm transition-transform hover:scale-125 hover:z-10 ${getColorClass(
                  day.level
                )}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
