/** @jsx h */
import { h } from 'preact'

interface Product {
  title: string
  description: string
  price: number
}

type Props = {
  product: Product
}

export default function Button({ product }: Props) {
  const handleClick = async () => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ product }),
    })

    const data = await response.json()

    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <button
      onClick={handleClick}
      class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent primary-button px-8 py-3 text-base font-medium text-white hover:bg-white focus:outline-none focus:ring-2 focus:secondary focus:ring-offset-2"
      type="submit">
      Buy
    </button>
  )
}
