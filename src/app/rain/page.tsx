"use client"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, Volume2 } from "lucide-react"
import "./audio-player.css"

// 模拟音频数据
const rainSounds = [
  {
    id: 1,
    title: "雨声 - 轻柔细雨",
    src: "/audios/rains/rain-drops-on-window-green-noise-mix-231100.mp3"
  },
];

const fireSounds = [
  {
    id: 4,
    title: "篝火 - 木柴燃烧",
    src: "/audios/fires/crackling-fireplace-nature-sounds-8012.mp3"
  },
]

export default function RainPage() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});

  useEffect(() => {
    // 遍历所有音频引用，设置默认音量为 0.5
    Object.values(audioRefs.current).forEach(audioEl => {
      if (audioEl) {
        audioEl.volume = 0.5;
      }
    });
  }, [])

  return (
    <div className="container max-w-6xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-4 mt-8 text-gray-800">
        欢迎来到小酒馆
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        暂时没有小二
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">屋外</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rainSounds.map((audio) => (
              <Card
                key={audio.id} 
                className={`max-w-[350px] justify-self-center w-full hover:shadow-lg transition-shadow cursor-pointer ${selectedIds.includes(audio.id) ? 'bg-primary/10 border-primary' : ''}`}
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

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">壁炉</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fireSounds.map((audio) => (
                <Card 
                  key={audio.id} 
                  className={`max-w-[350px] justify-self-center w-full hover:shadow-lg transition-shadow cursor-pointer ${selectedIds.includes(audio.id) ? 'bg-primary/10 border-primary' : ''}`}
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
                      onLoadedMetadata={() => {
                        if (audioRefs.current[audio.id]) {
                          audioRefs.current[audio.id]!.volume = 0.5;
                        }
                      }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
        <div className="w-full lg:w-80 bg-card rounded-xl border p-6 h-fit lg:sticky lg:top-4 mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">公告</h3>
          <p className="text-gray-600">酒馆新开张~</p>
        </div>
      </div>
    </div>
  )
}