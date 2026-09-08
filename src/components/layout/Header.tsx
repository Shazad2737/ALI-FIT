import { Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5 text-gray-700" />
      </button>

      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          className="rounded-full p-2 hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-gray-600" />
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          A
        </div>
      </div>
    </header>
  );
}