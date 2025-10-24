import Image from "next/image";

export default function HeaderLandscape({ className }: { className?: string }) {
  return (
    <header
      className={[
        "hidden sm:block fixed top-0 z-50 w-full",
        "bg-[var(--background)]/75 backdrop-blur shadow",
        className ?? "",
      ].join(" ")}
    >
      <div className="mx-auto px-6 py-2 flex items-center justify-between">
        <div
          aria-label="OpenBook ID"
          className="inline-flex items-center select-none"
          role="img"
          title="OpenBook ID"
        >
          <Image
            src="/mark/obid/logo-lite.png"
            alt="OpenBook ID"
            width={200}
            height={50}
            priority
            className="h-[40px] w-auto object-contain shrink-0"
          />
        </div>

        <div className="flex-1" />

        <div className="flex items-center select-none gap-x-[12.5px]">
          <a
            href="https://x.com/openbookid"
            target="_blank"
            rel="noopener noreferrer"
            className="button text-sm font-medium rounded-full hover:opacity-50 transition-opacity inline-flex items-center gap-2"
            aria-label="Follow us on X"
            title="Connect on X"
          >
            <span>Connect on</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
              fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>

          </a>

          {/* Telegram (icon-only) */}
          <a
            href="https://t.me/+eiSyHQHJofs1YTAx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:opacity-50 transition-opacity"
            aria-label="Connect on Telegram"
            title="Telegram"
          >
            {/* bi-telegram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
              fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
