"use client";

import { useState } from "react";
import { Play, Pause, Music2, Radio, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SpotifyWidget() {
  const [isPlaying, setIsPlaying] = useState(true);

  const song = {
    title: "Midnight Coding Lofi Beats",
    artist: "ChilledCow & Developer Vibes",
    album: "Deep Work Sessions 2026",
    duration: "2:45",
    progress: "1:18",
    spotifyUrl: "https://open.spotify.com",
  };

  return (
    <Card className="relative overflow-hidden border-border/60 bg-gradient-to-br from-emerald-950/20 via-background to-background backdrop-blur-md shadow-md hover:border-emerald-500/40 transition-all duration-300">
      <CardContent className="p-5">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-border/40">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-500">
              Live Spotify Activity
            </span>
          </div>
          <Badge className="border-emerald-500/30 text-emerald-600 dark:text-emerald-400 gap-1 text-[11px]">
            <Radio className="size-3 animate-pulse" />
            Live Status
          </Badge>
        </div>

        {/* Music Player Body */}
        <div className="flex items-center gap-4">
          {/* Vinyl / Cover Art */}
          <div className="relative group shrink-0">
            <div
              className={`size-16 rounded-xl bg-gradient-to-tr from-emerald-600 to-indigo-600 flex items-center justify-center shadow-lg transition-transform ${
                isPlaying ? "animate-[spin_10s_linear_infinite]" : ""
              }`}
            >
              <Music2 className="size-8 text-white" />
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause track" : "Play track"}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl text-white"
            >
              {isPlaying ? <Pause className="size-6" /> : <Play className="size-6 fill-current" />}
            </button>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h4 className="font-heading text-sm font-bold text-foreground truncate">
              {song.title}
            </h4>
            <p className="text-xs text-muted-foreground truncate mt-0.5">
              {song.artist}
            </p>
            <p className="text-[11px] text-muted-foreground/70 truncate">
              {song.album}
            </p>
          </div>

          {/* Equalizer Visualizer */}
          <div className="flex items-end gap-0.5 h-6 px-1">
            {[40, 80, 50, 90, 60, 100, 70, 45].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-emerald-500/80 transition-all"
                style={{
                  height: isPlaying ? `${h}%` : "20%",
                  animation: isPlaying
                    ? `pulse ${0.6 + (i % 3) * 0.2}s ease-in-out infinite alternate`
                    : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Playbar */}
        <div className="mt-4 pt-2 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
          <span>{song.progress}</span>
          <div className="relative flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[45%] bg-emerald-500 rounded-full" />
          </div>
          <span>{song.duration}</span>
          <Volume2 className="size-3.5 text-emerald-500 ml-1" />
        </div>
      </CardContent>
    </Card>
  );
}
