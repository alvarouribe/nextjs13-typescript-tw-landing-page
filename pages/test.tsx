export default function Test() {
  return (
    <>
      <div className="absolute bottom-0 text-center w-full animate-bounce">⬇️</div>
      <div className="h-screen">
        <h1 className="text-2xl font-semibold">Pancake layout</h1>
        <div className="grid grid-rows-[200px_1fr_100px]">
          <div className="border">Header</div>
          <div className="border">Main Content</div>
          <div className="border">Footer</div>
        </div>
      </div>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="w-40 border text-center">1</div>
        <div className="w-40 border text-center">2</div>
        <div className="w-40 border text-center">3</div>
        <div className="w-40 border text-center">4</div>
        <div className="w-40 border text-center">5</div>
        <div className="w-40 border text-center">6</div>
        <div className="w-40 border text-center">7</div>
        <div className="w-40 border text-center">8</div>
        <div className="w-40 border text-center">9</div>
        <div className="w-40 border text-center">10</div>
      </div>
  </>
  )
}