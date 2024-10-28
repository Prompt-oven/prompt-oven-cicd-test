import React from 'react'
import PromptThumbnail from '../atom/promptlist/PromptThumbnail'
import PromptLLMLabel from '../atom/promptlist/PromptLLMLabel'
import PromptTitle from '../atom/promptlist/PromptTitle'
import PromptPrice from '../atom/promptlist/PromptPrice'

function PromptCard() {
  return (
    <div>
      <PromptThumbnail />
      <PromptLLMLabel />
      <PromptTitle />
      <PromptPrice />
    </div>
  )
}

export default PromptCard