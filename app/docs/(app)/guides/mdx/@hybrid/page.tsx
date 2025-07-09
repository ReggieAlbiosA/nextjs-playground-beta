import FeatureSection from './FeatureSection.mdx';


export default function Page() {
  return (
    <>
         <div className="@container" id="home">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCxAaAQNHYc8E45oDgtHaNGl1dDHg4WGMNup0uDye9I5RmgBi5fjqDukiG9hppKtaq9q0m9TDGVaVZIV8bXPe0SSmGzAWkOPK1fgVV_wenI9LQtvQvsVFZQQ9M6nmP5iFNTWS40wak0dOqo0H9vz2M6wgP5Ht6-kPZKqjbqY7S5zYe7M27iPU0Q6HpIPbr_vMqsh9OqsKMGPF4bzwfUJB_h8TBML99hEuuadTTUprD5npZAi_Ihq9v6OnXNMQ481mwkPhAmXkF7cmI")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Stay Ahead in Tech
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Your go-to source for the latest insights and trends in software development, cloud computing, and cybersecurity.
                    </h2>
                  </div>
                  <button
                    className="flex w-full @[480px]:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1978e5] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Explore Articles</span>
                  </button>
                </div>
              </div>
            </div>
          
            <FeatureSection />
    </>
  )
}
