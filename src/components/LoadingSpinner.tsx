import Rings from '../assets/rings.svg'

interface LoadingSpinnerProps {
  message?: string
}

export default function LoadingSpinner({ message }: LoadingSpinnerProps) {
  return (
    <div class="grid h-[274px] place-items-center">
      <div class="flex flex-col items-center gap-y-10">
        <div class="h-40 w-40">
          <img src={Rings} class="w-40 h-40" />
        </div>
        <p class="text-center font-mono text-3xl">{message}</p>
      </div>
    </div>
  )
}
