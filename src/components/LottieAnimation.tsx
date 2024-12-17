'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LottieAnimation() {
  return (
    <div className="lottie-wrapper">
      <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/9189b60a-3880-4e6f-9a64-517b4734d9c5/68ykZPMhRo.lottie"
          loop
          autoplay
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
} 