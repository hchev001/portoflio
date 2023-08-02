export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-plomo-100 p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full flex justify-between">
          <div className="w-16 h-16 bg-white rounded-full">H</div>
          <div>Work</div>
          <div className="w-16 h-16 bg-white rounded-full">Menu</div>
        </div>
        <div className="w-full">
          <div className="w-full flex flex-col gap-3">
            <h1>Hello, I'm Hamilton</h1>
            <p>
              I'm a Full-Stack Software Engineer with a passion for building web
              apps, actively seeking work opportunities.
            </p>
            <button>Let's Connect!</button>
          </div>
        </div>
      </div>
    </main>
  );
}
