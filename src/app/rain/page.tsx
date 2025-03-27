"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import "./audio-player.css"

export default function RainPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  // 模拟音频数据
  const rainSounds = [
    {
      id: 1,
      title: "雨声 - 轻柔细雨",
      src: "/audios/rains/rain-gentle.mp3"
    },
    {
      id: 2,
      title: "雨声 - 暴雨",
      src: "/audios/rains/heavy-rain-144282.mp3"
    },
    {
      id: 3,
      title: "雨声 - 雷雨",
      src: "/audios/rains/rain-thunder.mp3"
    },
    {
      id: 7,
      title: "雨声 - 屋檐滴水",
      src: "/audios/rains/rain-drip.mp3"
    },
  ];

  const fireSounds = [
    {
      id: 4,
      title: "篝火 - 木柴燃烧",
      src: "/audio/fire-wood.mp3"
    },
    {
      id: 5,
      title: "壁炉 - 木材劈啪声",
      src: "/audio/fire-crackle.mp3"
    },
    {
      id: 6,
      title: "营火 - 安静燃烧",
      src: "/audio/fire-quiet.mp3"
    },
    {
      id: 8,
      title: "火堆 - 噼里啪啦",
      src: "/audio/fire-pop.mp3"
    }
  ]

  return (
    <div className="container max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4 mt-8 text-gray-800">
        欢迎来到小酒馆
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        客官, 喝点什么?
      </p>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">雨声</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rainSounds.map((audio) => (
          <Card 
            key={audio.id} 
            className={`w-full hover:shadow-lg transition-shadow cursor-pointer ${selectedIds.includes(audio.id) ? 'bg-primary/10 border-primary' : ''}`}
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
            <CardContent>
              <audio
                className="audio-player"
                controls
                src={audio.src}
                preload="metadata"
              />
            </CardContent>
          </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">烧木材的声音</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {fireSounds.map((audio) => (
              <Card 
                key={audio.id} 
                className={`w-full hover:shadow-lg transition-shadow cursor-pointer ${selectedIds.includes(audio.id) ? 'bg-primary/10 border-primary' : ''}`}
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
                <CardContent>
                  <audio
                    className="audio-player"
                    controls
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
  )
}