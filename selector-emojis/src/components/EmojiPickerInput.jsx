import { useRef } from "react"
import EmojiPicker from "./EmojiPicker"

function EmojiPickerInput() {
  const inputRef = useRef(null)
  return (
    <div>
      <input ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  )
}

export default EmojiPickerInput
