"use client"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import "./audio-player.css"

enum SoundType {
  Rain,
  Fire,
  Bartending, 
}

// 模拟音频数据
const audios = [
  {
    id: 1,
    title: "窗外 - 连绵思绪",
    type: SoundType.Rain,
    src: "/audios/rain.mp3"
  },
  {
    id: 2,
    title: "壁炉 - 柔焰低语",
    type: SoundType.Fire,
    src: "/audios/fire.mp3"
  },
  {
    id: 3,
    title: "吧台 - 叮当合奏",
    type: SoundType.Bartending,
    src: "/audios/bartending.mp3"
  }, 
]

export default function RainPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  useEffect(() => {
    // 根据音频类型设置不同的默认音量
    Object.entries(audioRefs.current).forEach(([id, audioEl]) => {
      if (!audioEl) return;
      
      const audioId = Number(id);
      const audio = audios.find(a => a.id === audioId);
      
      if (!audio) return;
      
      switch(audio.type) {
        case SoundType.Rain:
          audioEl.volume = 0.2;
          break;
        case SoundType.Fire:
          audioEl.volume = 1;
          break;
        case SoundType.Bartending:
          audioEl.volume = 0.6;
          break;
        default:
          audioEl.volume = 0.5;
      }
    });
  }, [])

  return (
    <div className="container max-w-4xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center mb-4 mt-8 text-primary">
        欢迎来到小酒馆
      </h1>
      <p className="text-base text-center mb-12 text-card-foreground">
        暂时没有小二
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <section>
            <div className="grid grid-cols-1 gap-4">
            {audios.map((audio) => (
              <Card
                key={audio.id} 
                className={`card max-w-[300px] justify-self-center w-full hover:shadow-lg transition-shadow cursor-pointer mb-2.5 ${selectedIds.includes(audio.id) ? 'text-primary bg-primary/10 border-primary' : ''}`}
                onClick={() => {
                  setSelectedIds(prev => 
                    prev.includes(audio.id)
                      ? prev.filter(id => id !== audio.id)
                      : [...prev, audio.id]
                  );
                }}
              >
                <CardHeader>
                  <CardTitle className="text-base">{audio.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                  <audio
                    ref={el => {
                      audioRefs.current[audio.id] = el
                    }}
                    loop
                    controls
                    controlsList="nodownload noplaybackrate"
                    className="audio-player"
                    src={audio.src}
                    preload="metadata"
                  />
                </CardContent>
              </Card>
            ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}